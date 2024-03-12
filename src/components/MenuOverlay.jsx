import React from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../data/navLinks";

const MenuOverlay = () => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {navLinks.map((link) => (
        <li>
            <NavLink 
              to={link.path} 
              className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
            >
                {link.title}
            </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;