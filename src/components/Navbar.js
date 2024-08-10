import React from "react";

export default function Navbar() {
  return (
    <div className="navbar top-0 z-10 w-screen" style={{'max-height':"60px",position:"fixed", 'background-color':"#9c2f44"}}>
      <div className="container navcols mx-auto flex flex-wrap md:flex-row items-center">
        <div className="mb-4 md:mb-0">
          <a href="#Intro" 
            className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:scale-110 rounded text-base md:mt-0 sm:mt-1">
            <img src="./hcstudio_logo.png " alt="hclogo" style={{ 'max-width': "50px", 'max-height': "50px" }} />
          </a>
        </div>

        <div className="navbartitle md:mr-auto md:ml-4 md:py-1 md:pl-4 font-medium text-white">
          <h1 style={{ fontSize: "40px" }}>Heart Crossed Studios</h1>
        </div>
        
        <div className="navsocialicon">
          <a
          href="https://twitter.com/heartXstudios"
          className="inline-flex items-center border-0 lg:py-1 md:py-0 sm:py-0 px-3 focus:outline-none hover:scale-110 rounded text-base mt-0 sm:mt-0 md:mt-0">
          <img src="./twitter.png" alt="twt" style={{ 'max-width': "40px", 'max-height': "40px" }}/>
        </a>

        <a
          href="https://www.instagram.com/heartxstudios?igsh=MzRlODBiNWFlZA=="
          className="inline-flex items-center border-0 lg:py-1 md:py-0 sm:py-0 px-3 focus:outline-none hover:scale-110 rounded text-base mt-0 md:mt-0 sm:mt-0">
          <img src="./instagram.png" alt="ig" style={{ 'max-width': "40px", 'max-height': "40px" }}/>
        </a>
        </div>
        
      </div>
    </div>
  );
}