import React, { useState } from "react";
import { House, X, EllipsisVertical } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dotvis, setdotvis] = useState(false);

  return (
    <div className="h-1/12 w-full py-1 px-4 flex items-center justify-between d22335">
      <div className="w-full flex justify-between items-center">
        <button className="bg-black hover:bg-gray-700 py-3 px-6 rounded-full b22335">
          i'm MD Maruf
        </button>

        <EllipsisVertical
          className={`text-black mr-5 hidden dot-22335 max-[639px]:block ${
            dotvis ? "max-[639px]:hidden" : "max-[639px]:block"
          }`}
          onClick={() => setdotvis(true)}
        />
      </div>

      <ul
        className={`flex gap-5 mr-15 uppercase max-[639px]:bg-gray-800 text-black u22335 ${
          dotvis ? "max-[639px]:flex" : "max-[639px]:hidden"
        }`}
      >
        <li className="hidden max-[639px]:block x22335 relative w-full">
          <X
            className="absolute right-2 -top-2.5"
            onClick={() => setdotvis(false)}
          />
        </li>

        <li>
          <Link to="/about" className="text-[16px] hover:text-[18px]">
            about
          </Link>
        </li>

        <li>
          <Link to="/services_all" className="text-[16px] hover:text-[18px]">
            services_all
          </Link>
        </li>

        <li>
          <Link to="/project" className="text-[16px] hover:text-[18px]">
            project
          </Link>
        </li>

        <li>
          <Link to="/">
            <House />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
