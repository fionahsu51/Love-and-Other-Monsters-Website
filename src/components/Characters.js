import { UserIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";


export default function Characters() {
  return (
    <section id="projects" className="text-gray-400 body-font">
      <center className="px-5 py-10">
        <UserIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
            Characters
          </h1>
      </center>
        {projects.map((project) => (
          <div className="container my-10 px-5 mx-auto flex sm:flex-nowrap flex-wrap mr-auto bg-parchment bg-cover">
            <div className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-10 w-full md:py-8 mt-8 md:mt-0" style={{ fontSize: "25px" }}>
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-amber-950">{project.name}</h1>
                <p className="text-amber-950">{project.info}</p>
                <br></br>
                <p className="text-amber-950">Pronouns: {project.pronouns}</p>
                <p className="text-amber-950">Likes: {project.likes}</p>
                <p className="text-amber-950">Dislikes: {project.dislikes}</p>
            </div>
              <div className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-10 w-full md:py-8 mt-8 md:mt-0">
                <img src={project.sprite} alt="character sprite" style={{ width: "500px", height: "500px" }} />
              </div>  
          </div>
        ))} 
    </section>
  );
}