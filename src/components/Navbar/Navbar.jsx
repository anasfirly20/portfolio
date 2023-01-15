import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { NavItems } from "./NavItems";
import { BsTelegram } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import logo from "../../assets/af-logo.png";

import { Squash, Divide, Turn } from "hamburger-react";

import { motion } from "framer-motion";

const Navbar = () => {
  // useState for closing hamburger menu
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  let navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-10 flex h-[80px] w-full justify-between border-b-[3px] border-b-[#565759] border-opacity-10 bg-[#e1dfde] px-[6vw] font-exo font-bold lg:px-[10vw]">
      {/* logo */}
      <div className={nav ? "z-50 my-auto block" : "my-auto block"}>
        <p
          className="cursor-pointer text-[#54433A]"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="logo" className="h-12 rounded-full" />
        </p>
      </div>

      {/* Nav menu */}
      <ul className="ml-[8vw] hidden items-center gap-x-8 uppercase md:flex">
        {NavItems.map(({ path, label }) => (
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
      <div
        className="z-50 my-auto cursor-pointer text-3xl text-[#2D2B2B] md:hidden"
        onClick={handleClick}
      >
        {nav ? (
          <Squash
            size={30}
            duration={0.3}
            color="#2D2B2B"
            easing="ease-in"
            rounded
          />
        ) : (
          <Squash
            toggled={nav}
            size={30}
            duration={0.3}
            color="#2D2B2B"
            easing="ease-in"
            rounded
          />
        )}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          nav
            ? "absolute top-0 left-0 z-40 flex min-h-screen w-full flex-col items-center justify-center bg-[#e1dfde] uppercase text-[#2D2B2B] duration-300 ease-in"
            : "absolute top-0 left-[-100%] h-screen transition duration-500 ease-in"
        }
      >
        {NavItems.map(({ path, label }) => (
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
