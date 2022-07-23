import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import hamburgerIcon from "../img/hamburger-icon.svg";

function Navbar() {
  const [mobileNav, setMobileNav] = useState("hidden");

  function handleMobileCollapse() {
    if (mobileNav === "hidden") {
      setMobileNav("flex");
    } else {
      setMobileNav("hidden");
    }
  }

  return (
    <nav>
      <div className="absolute top-0 flex bg-[#2F4858] w-full h-12">
        <span className="flex flex-start basis-5/6 text-white uppercase tracking-widest text-xl px-4 py-2 items-center">
          Mike Starr
        </span>
        <div className="flex flex-col basis-1/6 align-right justify-center place-items-end">
          <div className="flex px-4 max-w-lg cursor-pointer">
            {mobileNav === "hidden" ? (
              <>
                <div
                  onClick={handleMobileCollapse}
                  className="flex flex-col my-0.5"
                >
                  <div className="flex flex-col bg-white w-9 h-1.5 rounded"></div>
                  <div className="flex flex-col bg-white w-9 h-1.5 mt-1.5 rounded"></div>
                  <div className="flex flex-col bg-white w-9 h-1.5 mt-1.5 rounded"></div>
                </div>
              </>
            ) : (
              <span
                onClick={handleMobileCollapse}
                className="text-white my-0 text-2xl"
              >
                🆇
              </span>
            )}
          </div>
        </div>
      </div>
      <div
        className={`${mobileNav} absolute fixed right-0 h-full w-1/2 xsm:w-2/5 tablet:w-2/6 lg:1/6 py-2 px-6 mt-12 text-right justify-end text-white text-lg bg-[#315771] border-[#2F4858] border-l-2 rounded-b leading-10 overflow-hidden`}
      >
        <ul>
          <li onClick={handleMobileCollapse}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={handleMobileCollapse}>
            <a href="#about">About</a>
          </li>
          <li onClick={handleMobileCollapse}>
            <a href="#skills">Skills</a>
          </li>
          <li onClick={handleMobileCollapse}>
            <a href="#hobbies">Hobbies</a>
          </li>
          <li onClick={handleMobileCollapse}>
            <a href="#social">Follow Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
