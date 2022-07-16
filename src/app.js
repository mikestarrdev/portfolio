import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <section className="flex-auto flex-col align-center justify-center m-auto w-auto">
        <h1 className="text-3xl font-bold text-center m-auto my-5">
          Front-end Developer, Web3 Enthusiast, Mountain Climber
        </h1>
        <h3 className="text-l text-center m-auto my-3">
          I like building stuff that improves lives
        </h3>
        <div className="text-center m-2">
          <h3 className="text-2xl">About me:</h3>
          <p className="m-3">E-commerce business owner turned coder.</p>
          <p className="m-3">
            My excitement for software engineering and tech started May 12,
            2021. I was spending my time reading about web3 and blockchain, and
            wanted to understand how it worked underneath the hood.
          </p>
          <p className="m-3">
            I started teaching myself JavaScript. In January 2022, I started a
            15 week software engineering program at Flatiron School. The program
            totalled roughly 576 hours of study!
          </p>
          <p className="m-3">
            At Flatiron I gained experience with the following technologies:
            <ul>
              <li>* JavaScript</li>
              <li>* React</li>
              <li>* Ruby</li>
              <li>* Ruby on Rails</li>
              <li>* Sinatra</li>
              <li>* Active Record</li>
              <li>* Github</li>
            </ul>
          </p>
          <p className="m-3"></p>
        </div>
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <div className="flex align-center justify-center m-auto w-auto">
          <img
            src="./img/header-whitney.jpg"
            alt="Whitney"
            width="150px"
            height="150px"
            className="border-2 rounded-full"
          />
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default App;
