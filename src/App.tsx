import { useEffect, useState, useRef } from "react";
import "./App.css";
import CurvedTriangle from "./components/CurvedTriangle";
import profilePic from "./assets/images/myPics.png";
import profileVideo from "./assets/videos/PixVerse-V5-Image-Text-360P-Ke-unscreen.gif";

function App() {
  return (
    <>
      <div className="bg-black w-full h-12 flex fixed top-0 left-0 z-30">
        <div className="bg-notebookCover w-full h-12 mt-12 flex">
          <div className="grid grid-cols-4 ml-32 gap-0 pt-1 font-edu text-zinc-800 text-lg">
            <div className="relative bg-green-300 w-32 h-11 rounded-t-xl flex items-center justify-center">
              <h3 className="">Home</h3>
              <div
                className="absolute rounded-t-xl top-0 h-full w-32 z-50 pointer-events-none 
          shadow-[5px_0_10px_-2px_rgba(0,0,0,0.5)]"
              ></div>
            </div>

            <div className="relative bg-blue-300 w-32 h-11 rounded-t-xl flex items-center justify-center">
              <h3 className="">Academic</h3>
              <div
                className="absolute rounded-t-xl top-0 h-full w-32 z-50 pointer-events-none 
          shadow-[5px_0_10px_-2px_rgba(0,0,0,0.5)]"
              ></div>
            </div>

            <div className="relative bg-rose-400 w-32 h-11 rounded-t-xl flex items-center justify-center  ">
              <h3 className="">Professional</h3>
              <div
                className="absolute rounded-t-xl top-0 h-full w-32 z-50 pointer-events-none 
          shadow-[5px_0_10px_-2px_rgba(0,0,0,0.5)]"
              ></div>
            </div>

            <div className="relative bg-yellow-200 w-32 h-11 rounded-t-xl flex items-center justify-center">
              <h3 className="">Contact</h3>
              <div
                className="absolute rounded-t-xl top-0 h-full w-32 z-50 pointer-events-none 
          shadow-[5px_0_10px_-2px_rgba(0,0,0,0.5)]"
              ></div>
            </div>
          </div>

          <div className="absolute top-24 left-0">
            <div className="bg-notebookCover h-screen w-14 -z-10"></div>
          </div>

          <div className=" top-24 absolute left-14">
            {" "}
            <CurvedTriangle color="#705220" w={20} h={20} />
          </div>
          <div className=" top-24 absolute  right-14 rotate-90 origin-center z-30 ">
            {" "}
            <CurvedTriangle color="#705220" w={20} h={20} />
          </div>

          <div className="absolute top-24 right-0">
            <div className="bg-notebookCover h-screen w-14 -z-10 "></div>
          </div>
          <div className="absolute top-12 right-0 rotate-90 origin-center  ">
            {" "}
            <CurvedTriangle />
          </div>
          <div className="absolute top-12 ">
            {" "}
            <CurvedTriangle />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_8fr_2fr_1fr] mt-8">
        <div></div>
        <div className="w-full h-32 text-zinc-800 justify-self-center pr-14 pl-4  text-justify">
          <h1 className="font-fredericka text-extrabold text-6xl text-notebookCover mb-10">
            Hello! I'm Anita,
          </h1>
          <section className="font-edu text-[1.375rem]">
            <p>
              Frontend developer, passionate about creating innovative
              solutions, with a background in computer science and experience
              collaborating in professional tech teams. I enjoy tackling complex
              problems and turning ideas into reality.
            </p>
            <p className="py-4">
              When I'm not coding, you can find me painting, playing badminton
              or experimenting with new healthy recipes. I enjoy working with
              others to turn ideas into real projects.
            </p>
            <p className="text-notebookCover ">Let's connect and build something amazing together!</p>
          </section>
        </div>

        <img
          src={profileVideo}
          alt="Animated waving profile"
          className=""
          width="300"
        />

        {/* <img src={profilePic} alt="Profile" className=" w-36 h-auto max-w-full justify-self-center" /> */}
      </div>
      <div></div>
      {/* <div className="border-2 h-screen w-24 border-black"></div> */}
    </>
  );
}

export default App;
