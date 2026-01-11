import React from "react";
import { Globe, Store, Tv } from "lucide-react";

const bottom = () => {
  return (
    <div className=" h-1/2 w-full  py-5 px-10 flex gap-10 max-[639px]:flex-col items-center ">
      <div className="h-full w-1/4 rounded-3xl flex flex-col items-center pt-15">
        <Globe className="h-20 w-20" />
        <div className=" flex flex-col justify-center items-center gap-3">
          <h3 className=" font-medium text-4xl pt-5 uppercase max-[639px]:text-center">
            web devoloper
          </h3>
          <p className=" text-center font-medium">
            Md. Maruf Mursalin is a creative, skilled, and professional web
            developer.
          </p>
        </div>
      </div>
      <div className="h-full w-1/4 rounded-3xl flex flex-col items-center pt-15">
        <Store className="h-20 w-20" />
        <div className=" flex flex-col justify-center items-center gap-3">
          <h3 className=" font-medium text-4xl pt-5 uppercase max-[639px]:text-center">
            digital marketing
          </h3>
          <p className=" text-center font-medium">
            MD Mustakin Soykot is a creative, skilled, and professional digital
            marketing expert.
          </p>
        </div>
      </div>
      <div className="h-full w-1/4 rounded-3xl flex flex-col items-center pt-15">
        <Store className="h-20 w-20" />
        <div className=" flex flex-col justify-center items-center gap-3">
          <h3 className=" font-medium text-4xl pt-5 uppercase max-[639px]:text-center">
            digital marketing
          </h3>
          <p className=" text-center font-medium">
            MD Mustakin Soykot is a creative, skilled, and professional digital
            marketing expert.
          </p>
        </div>
      </div>
      <div className="h-full w-1/4 rounded-3xl flex flex-col items-center pt-15">
        <Tv className="h-20 w-20" />
        <div className=" flex flex-col justify-center items-center gap-3">
          <h3 className=" font-medium text-4xl pt-5 uppercase max-[639px]:text-center">
            graphic designer
          </h3>
          <p className=" text-center font-medium">
            Ali Hosen is a talented, creative, and professional graphic
            designer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default bottom;
