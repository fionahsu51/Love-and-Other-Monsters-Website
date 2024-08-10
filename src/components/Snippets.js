import React from "react";

export default function Snippets() {
  return (
    <section id="snippets">
      <center><img src="./Divider.png" alt="divider"></img></center>
      <div className="container px-5 py-5 mx-auto">
        <img class="mx-auto mb-10" alt="screenshot of dolores." src="./dolores_screenshot.png" style={{"max-width":"80%", "max-height":"540px"}}></img>
        <img class="mx-auto mb-10" alt="screenshot of freya." src="./freya_screenshot.png" style={{"max-width":"80%", "max-height":"540px"}}></img>
        <img class="mx-auto" alt="screenshot of aveline." src="./aveline_screenshot.png" style={{"max-width":"80%", "max-height":"540px"}}></img>
        {/* <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}