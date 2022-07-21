import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [display, handleDisplay] = useState("none");
  function handleToggler() {}

  return (
    <nav
      className="
relative
w-full
flex flex-wrap
items-center
justify-between
py-4
bg-[#7ca5b8]
bg-gradient-to-r from-[#2F4858] to-[#315771]
text-gray-500
hover:text-gray-700
focus:text-gray-700
shadow-lg
navbar navbar-expand-lg navbar-light
"
    >
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <button
          className={`navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline display:${display}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            className="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </button>
        <div
          className="collapse navbar-collapse flex-grow items-center"
          id="navbarSupportedContent"
        >
          <a className="text-xl text-white" href="#">
            Navbar
          </a>
          {/* <!-- Left links --> */}
          <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto text-white">
            <li className="nav-item px-2">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item pr-2">
              <a
                className="nav-link text-white hover:text-gray-200 focus:text-gray-700 p-0"
                href="#"
              >
                Features
              </a>
            </li>
            <li className="nav-item pr-2">
              <a
                className="nav-link text-white hover:text-gray-200 focus:text-gray-700 p-0"
                href="#"
              >
                Pricing
              </a>
            </li>
            <li className="nav-item pr-2">
              <a className="nav-link disabled text-white p-0">Disabled</a>
            </li>
          </ul>
          {/* <!-- Left links --> */}
        </div>
        {/* <!-- Collapsible wrapper --> */}
      </div>
    </nav>
    // <nav className="bg-[#7ca5b8]">
    //   <ul className="flex flex-row m-auto p-0 align-center justify-center">
    //     <NavLink to="/">
    //       <li className="my-4 mx-3">Home</li>
    //     </NavLink>
    //     <li className="my-4 mx-3">Links</li>
    //     <li className="my-4 mx-3">Github</li>
    //     <li className="my-4 mx-3">LinkedIn</li>
    //     <li className="my-4 mx-3">Twitter</li>
    //     <NavLink to="/contact">
    //       <li className="my-4 mx-3">Contact</li>
    //     </NavLink>
    //   </ul>
    // </nav>
  );
}

export default Navbar;
