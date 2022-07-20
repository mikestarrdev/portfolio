import React from "react";
import githubLogo from "../img/github-icon.svg";

function Projects() {
  return (
    <div className="bg-gradient-to-r from-[#F6AE2D] to-[#F48923] p-3">
      <h2 className="text-2xl text-center m-auto p-1">Projects</h2>
      <div className="flex md:flex-col tablet:flex-row justify-evenly align-center">
        <div className="lg:basis-3/12 tablet:basis-full p-5 mx-1 border-2 rounded-md bg-white min-h-max">
          <h3 className="text-lg font-bold">Crypto Portal</h3>
          <h4 className="">Description:</h4>
          <img src={githubLogo} alt="GitHub" target="_" width="23px" />
        </div>
        <div className="lg:basis-3/12 tablet:basis-full p-5 mx-1 border-2 rounded-md bg-white min-h-max">
          <h3 className="text-lg font-bold">Budget Tracker</h3>
          <h4 className="">Description:</h4>
          <img src={githubLogo} alt="GitHub" target="_" width="23px" />
        </div>
        <div className="lg:basis-3/12 tablet:basis-full p-5 mx-1 border-2 rounded-md bg-white min-h-max">
          <h3 className="text-lg font-bold">Unrekt Crypto Tracker</h3>
          <h4 className="">Description:</h4>
          <img src={githubLogo} alt="GitHub" target="_" width="23px" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
