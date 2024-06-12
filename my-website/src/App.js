import React from "react";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Skills from "./components/Skills";

export default function App() {
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
