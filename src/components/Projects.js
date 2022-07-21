import React from "react";
import githubLogo from "../img/github-icon.svg";

function Projects() {
  return (
    <div className="bg-gradient-to-r from-[#5D90B1] to-[#86BBD8] p-2 lg:pb-10">
      <h2 className="text-2xl text-center m-2 pb-2">Projects</h2>
      {/* Projects div container */}
      <div className="flex flex-col md:flex-row lg:px-14 xl:px-32 justify-evenly text-center content-center">
        {/* project 1 */}
        <div className="md:w-1/3 p-5 m-0.5 border-4 border-[#2F4858] rounded-3xl md:rounded-l-3xl md:rounded-r-none bg-white text-sm">
          <h3 className="text-lg font-bold">Crypto Portal</h3>
          <h4 className="">Description:</h4>
          <ul className="list-disc list-inside">
            <li>
              Fullstack app utilizes CoinGecko API to display cryptocurrency
              prices, and a collection of forums
            </li>
            <li>
              Designed frontend using React, JavaScript, HTML5 and custom CSS
            </li>
            <li>
              Built API with Ruby on Rails, which serves up data stored on
              Postgresql database{" "}
            </li>
            <li>
              Utilized BCrypt to store password credentials and authenticate
              users when they login
            </li>
            <li>Manage database associations with Active Record</li>
            <li>
              Live cryptocurrency market cap and price data is pulled from
              CoinGecko API
            </li>
            <li>
              Users can create posts, leave comments and create forum Video
            </li>
          </ul>
          <div className="flex-row flex align-center m-2">
            <img src={githubLogo} alt="GitHub" target="_" width="24px" />
            <a
              href="https://drive.google.com/file/d/1GFPKk4q6Fz2F1oRBtkMYcWsBTtJSyCFX/view"
              target="_"
              className="mx-1 align-center"
            >
              Demo
            </a>
          </div>
        </div>
        {/* project 2 */}
        <div className="md:w-1/3 p-5 m-0.5 border-4 border-[#2F4858] rounded-3xl md:rounded-none bg-white min-h-max">
          <h3 className="text-lg font-bold">NFT Buidl</h3>
          <h4 className="">Description:</h4>
          <img src={githubLogo} alt="GitHub" target="_" width="23px" />
        </div>
        {/* project 3 */}
        <div className="md:w-1/3 p-5 m-0.5 border-4 border-[#2F4858] rounded-3xl md:rounded-l-none md:rounded-r-3xl  bg-white min-h-max">
          <h3 className="text-lg font-bold">Personal Budget Tracker</h3>
          <h4 className="">Description:</h4>
          <img src={githubLogo} alt="GitHub" target="_" width="23px" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
