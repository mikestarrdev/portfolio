import React from "react";
import linkedin from "../img/tech-logos/linkedin.jpeg";
import githubLogo from "../img/tech-logos/github-icon.svg";
import twitter from "../img/tech-logos/twitter.png";

function GetInTouch() {
  return (
    <div className="text-center p-4 bg-[#33658A]" id="social">
      <div className="flex flex-col bg-white p-4 w-full m-auto border border-[#2F4858] rounded-lg">
        <h4 className="text-xl font-bold text-center m-auto mt-2">
          Follow me...
        </h4>
        {/* socials */}
        <div className="flex flex-col tablet:flex-row my-4 justify-center">
          <div className="flex flex-row m-2 justify-center border-2 p-3 rounded-full bg-slate-50 border-slate-200 drop-shadow hover:scale-110 transition duration-300 ease-in-out">
            <img src={githubLogo} width="25px" alt="LinkedIn Logo" />
            <span className="ml-2 flex items-center">
              <a href="https://github.com/personnamedmike" target="_">
                GitHub
              </a>
            </span>
          </div>
          <div className="flex flex-row m-2 justify-center border-2 p-3 rounded-full bg-slate-50 border-slate-200 drop-shadow hover:scale-110 transition duration-300 ease-in-out">
            <img src={linkedin} width="25px" alt="LinkedIn Logo" />
            <span className="ml-2 flex items-center">
              <a href="https://linkedin/in/mike-starr" target="_">
                LinkedIn
              </a>
            </span>
          </div>
          <div className="flex flex-row m-2 justify-center border-2 p-3 rounded-full bg-slate-50 border-slate-200 drop-shadow hover:scale-110 transition duration-300 ease-in-out">
            <img src={twitter} width="25px" alt="LinkedIn Logo" />
            <span className="ml-2 flex items-center">
              <a href="https://twitter.com/starr_dev" target="_">
                Twitter
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
