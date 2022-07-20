import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Projects />
      <About />
      <Contact />
      <section>
        <div className="flex align-center justify-center m-auto w-auto">
          {/* <img
            src="./img/header-whitney.jpg"
            alt="Whitney"
            width="150px"
            height="150px"
            className="border-2 rounded-full"
          /> */}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
