import React from "react";

function About() {
  return (
    <section className="flex-auto flex-col align-center justify-center m-auto w-auto">
      <h1 className="text-3xl font-bold text-center m-auto my-5">About me:</h1>
      <h2 className="text-2xl font-bold text-center m-auto my-5">
        Front-end Developer, Web3 Enthusiast, Mountain Climber
      </h2>
      <div className="text-center m-2">
        <p className="m-3">
          I like building stuff that can improve peoples' lives.{" "}
        </p>
        <p className="m-3">E-commerce business owner turned coder.</p>
        <p className="m-3">
          My excitement for software engineering and tech started May 12, 2021.
          I was spending my time reading about web3 and blockchain, and wanted
          to understand how it worked underneath the hood.
        </p>
        <p className="m-3">
          I started teaching myself JavaScript. In January 2022, I started a 15
          week software engineering program at Flatiron School. The program
          totalled roughly 576 hours of study!
        </p>
        <p className="m-3">
          At Flatiron I gained experience with the following technologies:
          <ul>
            <li>- JavaScript</li>
            <li>- React</li>
            <li>- Ruby</li>
            <li>- Ruby on Rails</li>
            <li>- Sinatra</li>
            <li>- Active Record</li>
            <li>- Github</li>
          </ul>
        </p>
        <div className="text-center m-2">
          <h4 className="text-base font-bold text-center m-auto">
            Hobbies and Interests:
          </h4>
          <p className="m-3">
            Other than coding, my main interests are climbing mountains,
            traveling, trying new foods, and anything outdoors.
          </p>
          <p className="m-3">
            <strong>Rock climbing:</strong>
            <br />I enjoy technical rock climbing, especially multi-pitch trad
            climbing in alpine settings. My 3 proudest climbs so far have been
            East Buttress of Mt. Whitney, Venusian Blind on Temple Crag, and
            Epinephrine, in Red Rock Canyon.
          </p>
          <p className="m-3">
            <strong>Travel:</strong> <br />
            Early success in my previous marketing career gave me the
            opportunity to travel to over 35 countries and spend years overseas.
            Countries I've spent the most time in are: Thailand, Taiwan and
            Colombia.
          </p>
        </div>
      </div>
      <div className="text-center m-2">
        <h4 className="text-base font-bold text-center m-auto">
          Stay up to date with me:
        </h4>
        <p className="m-1">
          <a href="https://github.com/personnamedmike" target="_">
            GitHub
          </a>
        </p>
        <p className="m-1">
          <a href="https://linkedin/in/mike-starr" target="_">
            LinkedIn
          </a>
        </p>
        <p className="m-1">
          <a href="https://twitter.com/starr_dev" target="_">
            Twitter
          </a>
        </p>
      </div>
    </section>
  );
}

export default About;
