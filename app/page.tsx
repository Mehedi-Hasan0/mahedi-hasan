"use client";

import Hero from "@/components/hero/Hero";
import CursorEffect from "@/components/shared/CursorEffect";
import Navbar from "@/components/shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // for smooth scrolling
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <PulseLoader color="#36d7b7" />
      </div>
    );
  }

  return (
    <main className="overflow-hidden">
      {/* on layout navbar can't be overflowed that's why it's here */}
      <Navbar />
      <div className="hidden md:block">
        <CursorEffect />
      </div>
      <Hero />
    </main>
  );
}
