import React from "react";
import { House, X, EllipsisVertical } from "lucide-react";
import { useState } from "react";
const navbar = () => {
 const [dotvis, setdotvis] = useState(false)





  return (
    <div className="h-1/12 w-full  py-1 px-4 flex  items-center justify-between d22335 ">
      <div className=" w-full flex justify-between items-center">
        <button className="bg-black hover:bg-gray-700 py-3 px-6 rounded-full b22335">
          i'm MD Maruf
        </button>
        <EllipsisVertical className={`text-black mr-5 hidden dot-22335 max-[639]:block ${dotvis ? "max-[639px]:hidden" : "max-[639px]:block"}`} onClick={()=>{
          setdotvis(true)
          
        }} />
      </div>
      <ul className={` flex gap-5 mr-15 uppercase max-[639px]:bg-gray-800 text-black u22335  ${dotvis ? "max-[639px]:flex" : "max-[639px]:hidden" }`}>
        <li className=" hidden max-[639px]:block x22335 relative w-full">
          <X className=" absolute right-2 -top-2.5" onClick={()=>{
            setdotvis(false)
          }}/>
        </li>
        <li>
          <a href="" className=" text-[16px] hover:text-[18px]">
            about
          </a>
        </li>
        <li>
          <a href="" className=" text-[16px] hover:text-[18px]">
            servises_all
          </a>
        </li>
        <li>
          <a href="" className=" text-[16px] hover:text-[18px]">
            project
          </a>
        </li>
        <li>
          <a href=""><House/></a>
        </li>
      </ul>
    </div>
  );
};

export default navbar;
