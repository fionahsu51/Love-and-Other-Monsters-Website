import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home";

export default function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </div>
  );
}
