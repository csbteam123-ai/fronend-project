import React, { useEffect, useState } from "react";
import {
  House,
  X,
  EllipsisVertical,
  UserPlus,
  LayoutDashboard,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { tokenvfy } from "../../api/token.ck";

const Navbar = ({ className = "", buttonbg = "", mobile_btn_col = "" }) => {
  const [dotvis, setdotvis] = useState(false);
  const [islodin, setislodin] = useState(false);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const fn = async () => {
      const res = await tokenvfy(token);

      if (!token) {
        return setislodin(false);
      }
      if (res.data?.bolien) {
        return setislodin(res.data.bolien);
      } else return setislodin(false);
    };
    fn();
  }, []);

  return (
    <div className="h-1/12 w-full py-1 px-4 flex items-center justify-between d22335">
      <div className="w-full flex justify-between items-center">
        <Link to="/">
          <button
            className={` hover:bg-gray-700 py-3 px-6 rounded-full b22335  ${buttonbg || "bg-black text-white"}`}
          >
            i'm MD Maruf
          </button>
        </Link>

        <EllipsisVertical
          className={`text-black mr-5 hidden dot-22335 max-[639px]:block ${
            dotvis ? "max-[639px]:hidden" : "max-[639px]:block"
          }`}
          onClick={() => setdotvis(true)}
          color={mobile_btn_col || "black"}
        />
      </div>

      <ul
        className={`flex gap-5 mr-15 ${className} uppercase max-[639px]:bg-gray-800 text-black u22335 ${
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
          <Link to={islodin ? "/dasbord" : "/login"}>
            {islodin ? <LayoutDashboard /> : <UserPlus />}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
