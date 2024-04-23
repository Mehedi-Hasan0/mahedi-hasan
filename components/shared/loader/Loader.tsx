"use client";

import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <HashLoader color="#a374ff" speedMultiplier={0.9} />
    </div>
  );
};

export default Loader;
