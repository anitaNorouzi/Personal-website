import { useEffect, useState, useRef } from "react";
import "./App.css";
import CurvedTriangle from "./components/CurvedTriangle";
function App() {
  return (
    <>
      <div className="bg-black w-full h-12 flex fixed top-0 left-0 z-30">
        <div className="bg-[#A0522D] w-full h-12 mt-12 flex">
          <div className="grid grid-cols-4 ml-32 gap-0 pt-1">
            <div className="relative bg-yellow-200 w-32 h-11 rounded-t-xl flex items-center justify-center">
              <h3 className="text-black font-semibold">Home</h3>
              <div
                className="absolute rounded-t-xl top-0 h-full w-32 z-50 pointer-events-none 
          shadow-[5px_0_10px_-2px_rgba(0,0,0,0.5)]"
              ></div>
            </div>

            <div className="relative bg-blue-300 w-32 h-11 rounded-t-xl flex items-center justify-center">
              <h3 className="text-black font-semibold">Academic</h3>
              <div
                className="absolute rounded-t-xl top-0 h-full w-32 z-50 pointer-events-none 
          shadow-[5px_0_10px_-2px_rgba(0,0,0,0.5)]"
              ></div>
            </div>

            <div className="relative bg-red-400 w-32 h-11 rounded-t-xl flex items-center justify-center">
              <h3 className="text-black font-semibold">Professional</h3>
              <div
                className="absolute rounded-t-xl top-0 h-full w-32 z-50 pointer-events-none 
          shadow-[5px_0_10px_-2px_rgba(0,0,0,0.5)]"
              ></div>
            </div>

            <div className="relative bg-yellow-200 w-32 h-11 rounded-t-xl flex items-center justify-center">
              <h3 className="text-black font-semibold">Contact</h3>
              <div
                className="absolute rounded-t-xl top-0 h-full w-32 z-50 pointer-events-none 
          shadow-[5px_0_10px_-2px_rgba(0,0,0,0.5)]"
              ></div>
            </div>
          </div>

          <div className="absolute top-24 left-0">
            <div className="bg-[#A0522D] h-screen w-14 -z-10"></div>
          </div>

          <div className=" top-24 absolute left-14">
            {" "}
            <CurvedTriangle color="#A0522D" w={20} h={20} />
          </div>
          <div className=" top-24 absolute  right-14 rotate-90 origin-center z-30 ">
            {" "}
            <CurvedTriangle color="#A0522D" w={20} h={20} />
          </div>

          <div className="absolute top-24 right-0">
            <div className="bg-[#A0522D] h-screen w-14 -z-10 "></div>
          </div>
          <div className="absolute  top-12 right-0 rotate-90 origin-center  ">
            {" "}
            <CurvedTriangle />
          </div>
          <div className="absolute top-12 ">
            {" "}
            <CurvedTriangle />
          </div>
        </div>
      </div>
      {/*   
<div className="border-2 h-24 w-24 border-black"></div> */}
    </>
  );
}

export default App;
