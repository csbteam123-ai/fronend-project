import React from "react";

const Contact = () => {
  return (
    <div className="h-full w-full  p-5 flex flex-col items-center text-center gap-5">
        <h1 className="text-4xl uppercase font-bold ">Contact frome</h1>
      <form action="/" className="h-full w-full flex flex-col gap-6 px-10">
        <div className="w-full h-auto  p-5 ">
          <input type="email" placeholder="inter your email........" className="h-full w-full border-2 border-gray-400 rounded focus:outline-none focus:border-2 focus:border-gray-900 p-1 " />
        </div>
        <div className="w-full h-auto  p-5 ">
          <input type="text" placeholder="inter your subject........" className="h-full w-full border-2 border-gray-400 rounded focus:outline-none focus:border-2 focus:border-gray-900 p-1 " />
        </div>
        <div className="w-full h-auto  p-5 ">
          <textarea
            name="text"
            id="text"
            placeholder="inter your massage.........."
            className="h-full w-full border-2 border-gray-400 rounded focus:outline-none focus:border-2 focus:border-gray-900 p-1"
          />
        </div>
        <div className="h-full w-full px-5">
            <button className="w-full h-10 bg-transparent border-2 border-black rounded">submite from</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
