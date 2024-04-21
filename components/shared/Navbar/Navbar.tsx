"use client";

import Link from "next/link";
import CustomButton from "../../ui/CustomButton";
import Nav from "./Nav";
import { useEffect, useRef, useState } from "react";
import useStartPageFromTop from "@/hooks/useStartPageFromTop";

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const [navHeight, setNavHeight] = useState<number>(0);
  const headerRef = useRef<HTMLDivElement>(null);

  // useStartPageFromTop(); // start from the top of the page

  // storing scroll Y value to conditionally show nav button & animate element
  useEffect(() => {
    function handleScroll() {
      if (headerRef.current) {
        setNavHeight(window.scrollY);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`main-container sticky top-0 z-50 bg-primaryBlack md:bg-transparent border-b border-[#373739] md:border-none`}
    >
      <nav className="flex justify-between items-center">
        {/* logo */}
        <Link
          href={"/"}
          className={`flex cursor-pointer group text-base font-medium 2xl:text-2xl relative z-20 ${
            mobileNavOpen ? "text-purple" : "text-sky"
          }`}
        >
          <p className="group-hover:animate-fullSpin">©</p>
          {/* name */}
          <div className="flex relative overflow-hidden whitespace-nowrap ml-1 2xl:ml-2 transition-all duration-500 ease-in-out hover:pr-[30px] 2xl:hover:pr-1">
            <p
              className={`relative transition-transform duration-500 ease-in-out 
               ${
                 navHeight > 100
                   ? "translate-x-[-100%]" // after scroll Y to 100 then stopping hover animation and auto animating text
                   : "group-hover:translate-x-[-100%]"
               }`}
            >
              Code by
            </p>
            <p
              className={`pl-[0.3em] transition-transform duration-500 ease-in-out 
            ${
              navHeight > 100
                ? "translate-x-[-65px] 2xl:translate-x-[-90px]" // after scroll Y to 100 then stopping hover animation and auto animating text
                : "group-hover:translate-x-[-65px] 2xl:group-hover:translate-x-[-90px]"
            }
            `}
            >
              Mahedi
            </p>
            <p
              className={`absolute left-[120px] 2xl:left-[180px] pl-[0.3em]  transition-transform duration-500 ease-in-out
            ${
              navHeight > 100
                ? "translate-x-[-65px] 2xl:translate-x-[-90px]" // after scroll Y to 100 then stopping hover animation and auto animating text
                : "group-hover:translate-x-[-65px] 2xl:group-hover:translate-x-[-90px]"
            }
            `}
            >
              Hasan
            </p>
          </div>
        </Link>

        {/* get in touch btn & nav elements */}
        <div className="flex items-center gap-3">
          <div
            className={`${
              navHeight > 100
                ? "hidden animate-fade-out"
                : "hidden md:block animate-fade-in" // for small device don't want to show the btn
            }`}
          >
            <CustomButton textLabel="Get in touch" />
          </div>
          <Nav
            mobileNavOpen={mobileNavOpen}
            setMobileNavOpen={setMobileNavOpen}
          />
        </div>
      </nav>
    </header>
  );
}
