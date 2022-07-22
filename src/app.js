import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Projects />
      <About />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
