import { delay, motion } from "framer-motion";
import Link from "next/link";
import pickOddNumber from "@/lib/pickOddNumber";
import { RefObject, useEffect, useRef, useState } from "react";
import { headingVariant, navOptionVariant, slide } from "../anim";
import GetInTouch from "./GetInTouch";
import "../../preloader/style.module.css";

//   options tag
const options = ["work", "about", "contact"];

const NavOptons = () => {
  // state for line animation
  const [isHovered, setIsHovered] = useState(Array(options.length).fill(false));
  const [textWordHeight, setTextWordHeight] = useState(0);
  const textWordRef = useRef<HTMLAnchorElement | null>(null);

  const handleMouseEnter = (index: number) => {
    setIsHovered((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };
  const handleMouseLeave = (index: number) => {
    setIsHovered((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };

  useEffect(() => {
    if (textWordRef.current) {
      setTextWordHeight(textWordRef.current?.clientHeight);
    }

    function handleResize() {
      if (textWordRef.current) {
        setTextWordHeight(textWordRef.current?.clientHeight);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <motion.div
        variants={slide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="absolute top-0 right-0 w-screen h-screen bg-white text-black z-10 navParent"
      >
        <div className="relative w-full px-6 md:px-10 flex flex-col-reverse md:grid md:grid-cols-12 top-32 md:top-52 2xl:top-72 gap-10">
          {/* get in touch */}
          <GetInTouch />
          {/* NavOptons */}
          <div
            //
            className=" h-fit w-full"
          >
            {options.map((option, i) => (
              <motion.div
                key={i}
                variants={navOptionVariant}
                custom={i}
                initial="initial"
                animate="enter"
                exit="exit"
                onMouseEnter={() => handleMouseEnter(i)} // line animation state update
                onMouseLeave={() => handleMouseLeave(i)}
                className="w-fit relative"
              >
                <Link
                  href={"/"}
                  ref={textWordRef}
                  className="flex items-center"
                >
                  {option.split("").map((string, j) => (
                    <>
                      <motion.h1
                        key={j}
                        custom={j}
                        variants={headingVariant}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        className={`text-[4rem] md:text-[6.25rem] 2xl:text-[8.4rem] font-black leading-[65px] md:leading-[100px] 2xl:leading-[130px] tracking-[-4px] text-primaryBlack relative ${
                          pickOddNumber(j) ? "z-[1]" : "z-[5]"
                        }`}
                      >
                        {string}
                      </motion.h1>
                    </>
                  ))}
                </Link>
                {/* line through animation */}
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: isHovered[i] ? "103%" : "0%" }}
                  transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
                  className="w-full h-1 lg:h-2 2xl:h-3 bg-purple absolute z-[2]"
                  style={{
                    top: `${textWordHeight / 2}px`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default NavOptons;
