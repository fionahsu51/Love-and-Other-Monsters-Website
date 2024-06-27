import React from "react";
import Intro from "./Intro";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Characters from "./Characters";
import Skills from "./Skills";

function Home() {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <Intro />
        <Characters />
        <Skills />
        <Contact />
    </main>
    );
}

export default Home;