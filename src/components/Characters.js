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
      <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap mr-10">
        <div className="flex flex-col">
        {projects.map((project) => (
            <div>
              <div className="flex p-4 h-full items-center" style={{ fontSize: "25px" }}>
                <div style={{ width: "600px" }}>
                  <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">{project.name}</h1>
                  <p>{project.info}</p>
                  <br></br>
                  <p>Pronouns: {project.pronouns}</p>
                  <p>Likes: {project.likes}</p>
                  <p>Dislikes: {project.dislikes}</p>
                </div>
                  <img src={project.sprite} alt="character sprite" style={{ width: "500px", height: "500px" }} />
                </div>  
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}