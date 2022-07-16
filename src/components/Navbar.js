import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#7ca5b8]">
      <ul className="flex flex-row m-auto p-0 align-center justify-center">
        <NavLink to="/">
          <li className="my-4 mx-3">Home</li>
        </NavLink>
        <li className="my-4 mx-3">Links</li>
        <li className="my-4 mx-3">Github</li>
        <li className="my-4 mx-3">LinkedIn</li>
        <li className="my-4 mx-3">Twitter</li>
        <NavLink to="/contact">
          <li className="my-4 mx-3">Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
