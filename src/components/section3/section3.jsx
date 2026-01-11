import React from "react";
import { Wallpaper, Server, Search, Store, Tv } from "lucide-react";

const section3 = () => {
  return (
    <div className="h-screen w-full py-10 px-20 max-[639px]:px-10  flex flex-wrap gap-5 justify-between border-t-6 border-black  max-[639px]:h-auto">
      <div className=" h-2/4 w-1/4  rounded-2xl flex flex-col items-center justify-center gap-3 shadow-xl px-5 max-[639px]:w-auto">
        <Wallpaper className="h-25 w-25 " />
        <div>
          <h3 className=" text-2xl font-medium uppercase text-center text-shadow-lg/30">
            frontend website make with react js
          </h3>
        </div>
      </div>
      <div className=" h-2/4 w-1/4 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-xl px-5 max-[639px]:w-auto">
        <Server className="h-25 w-25" />
        <div>
          <h3 className=" text-2xl font-medium uppercase text-center text-shadow-lg/30">
            backend website make with noad js
          </h3>
        </div>
      </div>
      <div className=" h-2/4 w-1/4 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-xl px-5 max-[639px]:w-auto">
        <Search className="h-25 w-25" />
        <div>
          <h3 className=" text-2xl font-medium uppercase text-center text-shadow-lg/30">
            seo work with paid tools{" "}
          </h3>
        </div>
      </div>
      <div className=" h-2/4 w-1/4 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-xl px-5 max-[639px]:w-auto">
        <Store className="h-25 w-25" />
        <div>
          <h3 className=" text-2xl font-medium uppercase text-center text-shadow-lg/30">
            digital marketing in page, video, website, product, e.t.c{" "}
          </h3>
        </div>
      </div>
      <div className=" h-2/4 w-1/4 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-xl px-5 max-[639px]:w-auto">
        <Tv className="h-25 w-25" />
        <div>
          <h3 className=" text-2xl font-medium uppercase text-center text-shadow-lg/30">
            graphic designer make logo, banner, poster for you
          </h3>
        </div>
      </div>
      <div className=" h-2/4 w-1/4 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-xl px-5 max-[639px]:w-auto">
        <Server className="h-25 w-25" />
        <div>
          <h3 className=" text-2xl font-medium uppercase text-center text-shadow-lg/30">
            backend website make with django
          </h3>
        </div>
      </div>
    </div>
  );
};

export default section3;
