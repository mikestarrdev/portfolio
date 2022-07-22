import React from "react";
import cssLogo from "../img/tech-logos/css.jpg";
import htmlLogo from "../img/tech-logos/html5.png";
import jsLogo from "../img/tech-logos/JavaScript_logo.png";
import reactLogo from "../img/tech-logos/react.png";
import rorLogo from "../img/tech-logos/RoR.png";
import rubyLogo from "../img/tech-logos/ruby.png";
import sinatraLogo from "../img/tech-logos/sinatra.png";
import tailwindLogo from "../img/tech-logos/tailwindcss.png";
import githubLogo from "../img/tech-logos/github-icon.svg";

function About() {
  return (
    <section className="flex-auto flex-col m-auto w-auto">
      <h1 className="text-3xl font-bold text-center m-auto my-5">About me:</h1>
      <h3 className="text-xl font-bold text-center m-auto my-5">
        Front-end Developer, Web3 Enthusiast, Mountain Climber
      </h3>
      <div className="text-left m-2">
        <p className="m-3">Marketer turned software engineer.</p>
        <p className="m-3">
          Experienced in React, JavaScript, and Ruby on Rails. Passionate about
          building products that empower people to live better lives. Excited to
          work in a fast paced, cutting-edge environment with a team of other
          passionate builders.
        </p>
        <p className="m-3">
          My excitement for software engineering and tech started May 12, 2021.
          I was spending my time reading about web3 and blockchain, and wanted
          to understand how it worked underneath the hood.
        </p>
        <p className="m-3">
          I started Solidity tutorials on CryptoZombies.io. I realized that I
          needed to build up a better foundation, so I took a step back and
          started to teach myself JavaScript.
        </p>
        <p className="m-3">
          In January 2022, I started a 15 week software engineering program at
          Flatiron School. The program totalled roughly 576 hours of study!
        </p>
      </div>
      {/* Start technologies */}
      <div className="bg-[#86BBD8] px-2 py-4 tablet:py-8 px-2">
        <h3 className="text-xl text-center font-bold mx-auto my-2 bg-white p-2 w-full tablet:w-4/5 lg:w-2/3 m-auto border-2 border-[#315771] rounded-3xl">
          Technologies:
        </h3>
        <h4 className="text-center bg-white px-2 py-1 my-4 w-fit m-auto border-2 border-[#5D90B1] rounded-lg font-bold">
          Proficient:
        </h4>
        <div className="flex flex-row overflow-x-auto justify-start md:justify-center tablet:p-2 text-center">
          <div className="border-2 border-gray-300 rounded p-2 mx-2 shrink-0 bg-white font-medium">
            <img
              src={jsLogo}
              alt="JavaScript logo"
              width="75px"
              className="m-auto mb-1"
            />
            <p>JavaScript</p>
          </div>
          <div className="border-2 border-gray-300 rounded p-2 mx-1 shrink-0 bg-white font-medium">
            <img
              src={reactLogo}
              alt="React logo"
              width="75px"
              className="m-auto mb-1"
            />
            <p>React</p>
          </div>
          <div className="border-2 border-gray-300 rounded p-2 mx-1 shrink-0 bg-white font-medium">
            <img
              src={cssLogo}
              alt="CSS logo"
              width="75px"
              className="m-auto mb-1"
            />
            <p>CSS</p>
          </div>
          <div className="border-2 border-gray-300 rounded p-2 mx-1 shrink-0 bg-white font-medium">
            <img
              src={htmlLogo}
              alt="HTML5 logo"
              width="75px"
              className="m-auto mb-1"
            />
            <p>HTML5</p>
          </div>
          <div className="border-2 border-gray-300 rounded p-2 mx-1 shrink-0 bg-white font-medium">
            <img
              src={tailwindLogo}
              alt="Tailwind CSS logo"
              width="75px"
              className="m-auto mb-1"
            />
            <p>Tailwind CSS</p>
          </div>
        </div>
        <h4 className="text-center bg-white px-2 py-1 my-4 w-fit m-auto border-2 border-[#5D90B1] rounded-lg font-bold">
          Experienced
        </h4>
        <div className="flex flex-row overflow-x-auto justify-start md:justify-center tablet:p-2 text-center">
          <div className="border-2 border-gray-300 rounded p-2 mx-1 shrink-0 bg-white font-medium">
            <img
              src={rubyLogo}
              alt="Ruby logo"
              width="75px"
              className="m-auto mb-1"
            />
            <p>Ruby</p>
          </div>
          <div className="border-2 border-gray-300 rounded p-2 mx-1 shrink-0 bg-white font-medium">
            <img
              src={rorLogo}
              alt="Ruby on Rails logo"
              width="75px"
              className="m-auto mb-1"
            />
            <p>Ruby on Rails</p>
          </div>
          <div className="border-2 border-gray-300 rounded p-2 mx-1 shrink-0 bg-white font-medium">
            <img
              src={sinatraLogo}
              alt="Sinatra logo"
              width="75px"
              className="m-auto mb-1"
            />
            <p>Sinatra</p>
          </div>
          <div className="border-2 border-gray-300 rounded p-2 mx-1 shrink-0 bg-white font-medium">
            <img
              src={githubLogo}
              alt="GitHub logo"
              width="75px"
              className="m-auto mb-1"
            />
            <p>GitHub</p>
          </div>
          <div className="border-2 border-gray-300 rounded p-2 mx-1 shrink-0 bg-white font-medium">
            <ul className="list-none list-inside text-center font-medium">
              <li>Active Record</li>
              <li>SQLite3</li>
              <li>Postgresql</li>
              <li>Ethers.js</li>
            </ul>
          </div>
        </div>
      </div>
      {/* end technologies */}
      <div className="text-center my-4 mx-2">
        <h4 className="text-base font-bold text-center m-auto">
          Hobbies and Interests:
        </h4>
        <p className="m-3">
          Besides coding, things I love are: climbing mountains, rock climbing
          (all styles), traveling, trying new foods, cooking, camping, hiking
          and anything outdoors. Mountains get me the most excited.
        </p>
      </div>
    </section>
  );
}

export default About;
