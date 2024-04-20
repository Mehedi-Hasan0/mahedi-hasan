export default function Navbar() {
  return (
    <header className="w-full p-8 absolute top-0 z-50">
      <nav className="flex justify-between items-center">
        {/* logo */}
        <div className="flex cursor-pointer group">
          <p className="group-hover:animate-fullSpin">©</p>
          {/* name */}
          <div className="flex relative overflow-hidden whitespace-nowrap ml-1  transition-all duration-500 ease-in-out hover:pr-[30px]">
            <p className="relative transition-transform duration-500 ease-in-out group-hover:translate-x-[-100%]">
              Code by
            </p>
            <p className="pl-[0.3em] group-hover:translate-x-[-65px] transition-transform duration-500 ease-in-out">
              Mahedi
            </p>
            <p className="absolute left-[120px] pl-[0.3em] group-hover:translate-x-[-65px] transition-transform duration-500 ease-in-out">
              Hasan
            </p>
          </div>
        </div>

        {/* get in touch btn & nav elements */}
      </nav>
    </header>
  );
}
