import React from "react";
import { projects } from "../data";


export default function Characters() {
  return (
    <section id="projects" className="text-gray-400 body-font">
      <center className="px-5 py-10">
        <img src="./Divider.png" alt="divider"></img>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
            Characters
          </h1>
      </center>
        {projects.map((project) => (
          <div className="container my-10 px-5 mx-auto flex sm:flex-nowrap flex-wrap mr-auto bg-transparent bg-cover">
            <div className="lg:w-1/2 md:w-1/2 h-1/2 flex flex-col md:ml-10 w-full md:py-8 sm:mt-10 md:mt-40 lg:mt-40 bg-placard" style={{"background-size":"100% 100%", fontSize: "25px" }}>
                <p className="text-center pt-30 md:pt-10 text-amber-950">{project.name}</p>
                <p className="text-left pt-5 pb-20 px-20 text-amber-950">{project.info}</p>
                <br></br>
            </div>
              <div className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-10 w-full md:py-8 mt-8 md:mt-0">
                <img src={project.sprite} alt="character sprite" style={{ 'max-width': "455px", 'max-height': "550px" }} />
              </div>  
          </div>
        ))} 
    </section>
  );
}