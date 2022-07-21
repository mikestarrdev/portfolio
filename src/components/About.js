import React from "react";

function About() {
  return (
    <section className="flex-auto flex-col m-auto w-auto">
      <h1 className="text-3xl font-bold text-center m-auto my-5">About me:</h1>
      <h2 className="text-2xl font-bold text-center m-auto my-5">
        Front-end Developer, Web3 Enthusiast, Mountain Climber
      </h2>
      <div className="text-left m-2">
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
            Besides coding, my main interests are climbing mountains, technical
            rock climbing, traveling, trying new foods, cooking, camping, hiking
            and anything outdoors.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
