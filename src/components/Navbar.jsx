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
    <nav className="sticky top-0 z-10 flex h-[80px] w-full justify-between border-b-[3px] border-b-[#565759] border-opacity-10 bg-[#e1dfde] px-[6vw] font-exo font-bold lg:px-[10vw]">
      {/* logo */}
      <div className="my-auto block">
        <p
          className="cursor-pointer text-[#54433A]"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="logo" className="h-12 rounded-full" />
        </p>
      </div>

      {/* Nav menu */}
      <ul className="ml-[8vw] hidden items-center gap-x-8 uppercase md:flex">
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
      <div className="my-auto hidden md:block">
        <a href="https://t.me/anasfirly20" target="break">
          <div className="delay-50 flex cursor-pointer items-center gap-1 rounded-md border-2 border-[#2D2B2B] p-[0.45rem] uppercase text-[#2D2B2B] transition ease-in-out hover:bg-[#2D2B2B] hover:text-[#e1dfde] lg:px-12">
            Hire Me
            <BsTelegram />
          </div>
        </a>
      </div>

      {/* Hamburger Menu */}
      <motion.div
        className="z-20 my-auto cursor-pointer text-3xl text-[#2D2B2B] md:hidden"
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
            : "absolute top-0 left-0 z-10 flex min-h-screen w-full flex-col items-center justify-center bg-[#e1dfde] uppercase text-[#2D2B2B]"
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
    </nav>
  );
};

export default Navbar;
