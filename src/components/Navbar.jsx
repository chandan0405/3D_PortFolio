import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to={"/"}
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md "
      >
        <p className="blue-gradient_text">CK</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? "text-black font-bold border-b border-blue-500" 
              : "text-black hover:border-b hover:border-blue-500 transition-all duration-300 ease-in-out"
          }
        >
          About
        </NavLink>
        <NavLink
          to={"/projects"}
          className={({ isActive }) =>
            isActive
              ? "text-black font-bold border-b border-blue-500"
              : "text-black hover:border-b hover:border-blue-500 transition-all duration-300 ease-in-out "
          }
        >
          Projects
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive
              ? "text-black font-bold border-b border-blue-500"
              : "text-black hover:border-b hover:border-blue-500 transition-all duration-300 ease-in-out"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
