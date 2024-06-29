import { UserIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";


export default function Characters() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <center className="px-5 py-10">
        <UserIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
            Characters
          </h1>
      </center>
        {projects.map((project) => (
            <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap mr-10">
              <div className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-10 w-full md:py-8 mt-8 md:mt-0" style={{ fontSize: "25px" }}>
                  <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">{project.name}</h1>
                  <p>{project.info}</p>
                  <br></br>
                  <p>Pronouns: {project.pronouns}</p>
                  <p>Likes: {project.likes}</p>
                  <p>Dislikes: {project.dislikes}</p>
              </div>
                <div className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-10 w-full md:py-8 mt-8 md:mt-0">
                  <img src={project.sprite} alt="character sprite" style={{ width: "500px", height: "500px" }} />
                </div>  
            </div>
          ))} 
    </section>
  );
}