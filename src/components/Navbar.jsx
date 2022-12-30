import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimateSharedLayout } from "framer-motion";

const Navbar = () => {
  let navigate = useNavigate();

  // Navbar Menu
  const navItems = ["Home", "Project", "About"];

  return (
    <div className="w-full flex justify-between px-5 sm:px-10 md:px-15 lg:px-20 bg-[#e1dfde] border-b-[3px] border-[#565759] border-opacity-10 font-exo font-bold bg-transparent">
      <div className="my-auto">
        <p
          className="text-[#54433A] cursor-pointer"
          onClick={() => navigate("/")}
        >
          AF20
        </p>
      </div>

      {/* Nav menu */}
      <div className="">
        <ul className="flex gap-x-5 my-10 text-[#2D2B2B] text-sm uppercase">
          {navItems.map((item, id) => (
            <li key={id}>
              {item === "Home" ? (
                <Link to="/">{item}</Link>
              ) : (
                <Link to={`/${item.toLowerCase()}`}>{item}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger */}
    </div>
  );
};

export default Navbar;
