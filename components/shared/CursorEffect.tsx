"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorEffect() {
  const blobRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(
    typeof window !== "undefined" ? window.scrollY : 0
  ); // initial state of scrollY positon => 0

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Adding scroll event listener for initial value and updates
    window.addEventListener("scroll", handleScroll);

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      // Combining mouse and scroll positions for precise tracking
      const adjustedY = clientY + scrollY;

      if (blobRef.current) {
        // animate is a web api for making the changes with the delay
        blobRef.current.animate(
          {
            left: `${clientX}px`,
            top: `${adjustedY}px`,
          },
          { duration: 2000, fill: "forwards" }
        );
      }
    };

    // Adding pointermove listner to listen mouse move and applying styles to the blob
    window.addEventListener("pointermove", handleMouseMove);

    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <div className=" blur-[90px]">
      <div
        id="blob"
        ref={blobRef}
        className="bg-gradient-to-br from-sky via-purple to-yellow"
      />
    </div>
  );
}
