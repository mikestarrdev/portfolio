import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <section className="flex-auto flex-col align-center justify-center m-auto w-auto bg-whitney bg-cover tablet:bg-center">
        <h1 className="text-3xl font-bold text-center m-auto my-5">
          Front-end Developer, Web3 Enthusiast, Mountain Climber
        </h1>
        <h3 className="text-l text-center m-auto my-3">
          I like building stuff that improves lives
        </h3>
        <div className="flex align-center justify-center m-auto w-auto">
          <img
            src=""
            alt="avatar"
            width="250px"
            height="250px"
            className="border-2 rounded-full"
          />
        </div>
      </section>

      <section>
        <Contact />
      </section>
      {/* <Routes> */}
      {/* <Route path="*" element={<App />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
      {/* </Routes> */}
    </React.Fragment>
  );
}

export default App;
