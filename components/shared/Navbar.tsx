import Link from "next/link";
import CustomButton from "../ui/CustomButton";
import PerspectiveText from "./PerspectiveText";

export default function Navbar() {
  return (
    <header className="w-full p-5 2xl:p-8 absolute top-0 z-50">
      <nav className="flex justify-between items-center">
        {/* logo */}
        <Link href={"/"} className="flex cursor-pointer group 2xl:text-2xl">
          <p className="group-hover:animate-fullSpin">©</p>
          {/* name */}
          <div className="flex relative overflow-hidden whitespace-nowrap ml-1 2xl:ml-2 transition-all duration-500 ease-in-out hover:pr-[30px] 2xl:hover:pr-1">
            <p className="relative transition-transform duration-500 ease-in-out group-hover:translate-x-[-100%]">
              Code by
            </p>
            <p className="pl-[0.3em] group-hover:translate-x-[-65px] 2xl:group-hover:translate-x-[-90px] transition-transform duration-500 ease-in-out">
              Mahedi
            </p>
            <p className="absolute left-[120px] 2xl:left-[180px] pl-[0.3em] group-hover:translate-x-[-65px] 2xl:group-hover:translate-x-[-90px] transition-transform duration-500 ease-in-out">
              Hasan
            </p>
          </div>
        </Link>

        {/* get in touch btn & nav elements */}
        <CustomButton textLabel="Get in touch" />
      </nav>
    </header>
  );
}
