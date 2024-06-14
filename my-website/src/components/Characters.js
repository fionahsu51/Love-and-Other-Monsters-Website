import { UserIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";


export default function Characters() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <UserIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Characters
          </h1>
        </div>
    
        <div>
          {projects.map((project) => (
            <a href={project.link} key={project.image} className="sm:w-1/2 w-100 p-4">
              
            </a>
          ))}
        </div>

        {/* This is the old code to display projects. Consisted of hoverable images that reveal a title and description */}
        {/* We're gonna use and modify this section to display characters now instead of projects */}
        {/* It gets the data from data.js */}

        {/* <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0"
                  src={project.image}
                />
                <div className="px-42 py-40 z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="z-10 text-sm title-font font-medium text-purple-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div> */}
      </div>
    </section>
  );
}