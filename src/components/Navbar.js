import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-400 top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="mb-4 md:mb-0">
          <a href="#Intro">
            <img src="./hcstudio_logo.png " alt="hclogo" style={{ width: "50px", height: "50px" }} />
          </a>
        </a>

        <a className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 font-medium text-black">
          <h1 style={{ fontSize: "40px" }}>Love & Other Monsters</h1>
        </a>
        
        <a
          href="https://twitter.com/heartXstudios"
          className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-white rounded text-base mt-4 md:mt-0">
          <img src="./twitter.png" alt="twt" style={{ width: "50px", height: "50px" }}/>
        </a>

        <a
          href="https://www.instagram.com/heartxstudios?igsh=MzRlODBiNWFlZA=="
          className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-white rounded text-base mt-4 md:mt-0">
          <img src="./instagram.png" alt="ig" style={{ width: "50px", height: "50px" }}/>
        </a>
      </div>
    </header>
  );
}