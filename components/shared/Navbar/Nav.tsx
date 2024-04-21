"use client";

import { Cross as Hamburger } from "hamburger-react";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import NavOptons from "./NavOptons";
import { useScrollLock } from "@/hooks/useScrollLock";
import { AnimatePresence } from "framer-motion";

type NavProps = {
  mobileNavOpen: boolean;
  setMobileNavOpen: Dispatch<SetStateAction<boolean>>;
};

const Nav: React.FC<NavProps> = ({ mobileNavOpen, setMobileNavOpen }) => {
  const [menuIconSize, setmenuIconSize] = useState(
    typeof window !== "undefined" && window.innerWidth < 768
      ? 18
      : typeof window !== "undefined" && window.innerWidth < 1536
      ? 18
      : 24
  );
  const { lockScroll, unlockScroll } = useScrollLock();

  // when mobile menu is open disabling scroll
  useEffect(() => {
    if (mobileNavOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [mobileNavOpen]);

  return (
    <div className="overflow-hidden">
      {/* nav btn */}
      <div
        className={`${
          mobileNavOpen ? "bg-transparent" : "bg-purple"
        } flex justify-center items-center h-12 2xl:h-16 rounded-full 2xl:px-2 transition-colors duration-300 ease-in-out relative z-20`}
      >
        <Hamburger
          toggled={mobileNavOpen}
          size={menuIconSize}
          color={mobileNavOpen ? "#000000" : "#ffffff"}
          toggle={setMobileNavOpen}
          duration={0.9}
        />
      </div>

      {/* nav options */}
      <AnimatePresence>{mobileNavOpen && <NavOptons />}</AnimatePresence>
    </div>
  );
};

export default Nav;
