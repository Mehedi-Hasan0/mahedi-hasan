"use client";

import Image from "next/image";
import mahediHasan from "../../public/assets/images/mahedi-pic-2.webp";
import CustomButton from "../ui/CustomButton";
import { motion } from "framer-motion";
import {
  firstHeadingLetterVariant,
  firstHeadingVariants,
  imgVariants,
  opacityContainer,
  secondHeadingLetterVariant,
  secondHeadingVariants,
  thirdHeadingLetterVariant,
  thirdHeadingVariants,
} from "../shared/anim";

const creative = "Creative";
const frontend = "frontend";
const devloper = "developer";

export default function Hero() {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768 ? true : false;

  return (
    <div className="main-container section-margin relative z-20">
      <div className="flex flex-col lg:flex lg:flex-row-reverse justify-center items-center gap-7 sm:gap-14">
        <motion.div
          // variants={!isMobile ? imgVariants : {}}
          variants={imgVariants} // needs to check to disable animation for mobile
          initial="initial"
          animate="enter"
        >
          <Image
            src={mahediHasan}
            alt="Mahedi Hasan"
            width={450}
            height={500}
            sizes="(max-width: 1280px) 100vw, 50vw"
            placeholder="blur"
            className="rounded-3xl w-[300px] sm:w-[450px] md:w-[500px] lg:w-[400px] 2xl:w-[500px]"
          />
        </motion.div>
        {/* text */}
        <div className=" text-center flex flex-col gap-1 items-center justify-center">
          {/* 1st text */}
          <motion.h1
            variants={firstHeadingVariants} // needs to check to disable animation for mobile
            initial="initial"
            animate="enter"
            className="text-[2.7rem] sm:text-7xl md:text-8xl lg:text-7xl 2xl:text-[5.25rem] leading-[0.9] hidden lowercase md:flex items-center"
          >
            {creative.split("").map((word, i) => (
              <motion.span
                custom={i}
                variants={firstHeadingLetterVariant} // needs to check to disable animation for mobile
                initial="initial"
                animate="enter"
                key={i}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <div className="flex items-center gap-5 md:-ml-[2%]">
            {/* 2nd text */}
            <motion.h1
              variants={secondHeadingVariants}
              initial="initial"
              animate="enter"
              className="text-[2.7rem] sm:text-7xl md:text-8xl lg:text-6xl xl:text-7xl 2xl:text-[5.25rem] leading-[0.9] lowercase  md:flex items-center"
            >
              {frontend.split("").map((word, j) => (
                <motion.span
                  custom={j}
                  variants={secondHeadingLetterVariant}
                  initial="initial"
                  animate="enter"
                  key={j}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            {/* btn */}
            <motion.div
              variants={opacityContainer}
              initial="initial"
              animate="enter"
              className="max-w-[200px] 2xl:max-w-[260px] md:block hidden"
            >
              <CustomButton
                textLabel="Discover my project"
                btnBgColor="bg-yellow"
                textColor="text-black"
                hoverColor1="bg-purple"
                hoverColor2="bg-sky"
                hoverColor3="bg-yellow"
                borderColor="border-transparent"
              />
            </motion.div>
          </div>
          {/* 3rd text */}
          <motion.h1
            variants={thirdHeadingVariants}
            initial="initial"
            animate="enter"
            className="text-[2.7rem] sm:text-7xl md:text-8xl lg:text-7xl 2xl:text-[5.25rem] leading-[0.9] lowercase flex items-center md:ml-[12%]"
          >
            {devloper.split("").map((word, i) => (
              <motion.p
                key={i}
                variants={thirdHeadingLetterVariant}
                initial="initial"
                animate="enter"
                custom={i}
              >
                {word}
              </motion.p>
            ))}
          </motion.h1>
        </div>
        {/* btn */}
        <div className="max-w-[200px] mx-auto -mt-2 sm:-mt-8 block md:hidden">
          <CustomButton
            textLabel="Discover my project"
            btnBgColor="bg-yellow"
            textColor="text-black"
            hoverColor1="bg-purple"
            hoverColor2="bg-sky"
            hoverColor3="bg-yellow"
            borderColor="border-transparent"
          />
        </div>
      </div>
    </div>
  );
}
