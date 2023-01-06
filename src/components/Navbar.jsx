import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsTelegram } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import logo from "../assets/af-logo.png";

import { motion } from "framer-motion";

const Navbar = () => {
  // useState for closing hamburger menu
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  let navigate = useNavigate();

  // Navbar Menu
  const navItems = [
    {
      path: "/",
      label: "Home",
      exact: true,
    },
    {
      path: "/project",
      label: "Project",
      exact: false,
    },
    {
      path: "/about",
      label: "About",
      exact: false,
    },
    // {
    //   path: "/credits",
    //   label: "Credits",
    //   exact: false,
    // },
  ];

  return (
    <nav className="">
      <div className=" w-full flex justify-between h-[80px] px-5 sm:px-10 md:px-15 lg:px-20 bg-[#e1dfde] border-b-[3px] border-b-[#565759] border-opacity-10 font-exo font-bold">
        {/* logo */}
        <div className="flex items-center">
          <p
            className="text-[#54433A] cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="logo" className="h-12 rounded-full" />
          </p>
        </div>

        {/* Nav menu */}
        <ul className="hidden md:flex space-x-5 uppercase items-center">
          {navItems.map(({ path, label }) => (
            <li key={label}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-[#2D2B2B]" : "text-[#2D2B2B] opacity-50"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* HIRE ME */}
        <div className="hidden md:flex items-center">
          <a href="https://t.me/anasfirly20" target="break">
            <div className="transition ease-in-out delay-50 text-[#2D2B2B] uppercase flex items-center gap-1 cursor-pointer border-2 rounded-md border-[#2D2B2B] p-[0.45rem] lg:px-12 hover:text-[#e1dfde] hover:bg-[#2D2B2B]">
              Hire Me
              <BsTelegram />
            </div>
          </a>
        </div>

        {/* Hamburger Menu */}
        <motion.div
          className="md:hidden text-[#2D2B2B] my-auto text-3xl z-20 cursor-pointer"
          onClick={handleClick}
          animate={{ scale: nav ? 1 : 1, rotate: nav ? 90 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {!nav ? <FiMenu /> : <GrClose />}
        </motion.div>

        {/* Mobile Menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full min-h-screen bg-[#e1dfde] flex flex-col items-center justify-center text-[#2D2B2B] uppercase z-10"
          }
        >
          {navItems.map(({ path, label }) => (
            <li key={label} className="py-6 text-4xl" onClick={handleClick}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-[#2D2B2B]" : "text-[#2D2B2B] opacity-50"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
