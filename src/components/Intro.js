import React from "react";

export default function Intro() {
  return (
    <section id="intro">
      <center className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div>
          <h1 className="text-white" style={{ fontSize: "40px" }}>
            Love & Other Monsters Tagline
          </h1>
          <br></br>
          <div style={{ fontSize: "25px" }}>
            <p>
            Upon the death of her father, Victoria Morgan is summoned back to her family’s illustrious mansion in Castelonia,
            in order to claim her inheritance. The bonds she forges with her companions, new and old, will unlock the secrets
            hiding within her childhood town.
            </p>
            <br></br>
            <p>
              Encounter three enigmatic women who each have their eye on you.  <br></br>If you captivate their hearts and minds, together
              you can discover the truth of the mysteries hidden within Castelonia.
            </p>
          </div>
          

          <div className="flex justify-center">
            {/* <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a> */}
            {/* <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a> */}
          </div>
        </div>
        {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div> */}
      </center>
    </section>
  );
}