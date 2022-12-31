import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsTelegram } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  let navigate = useNavigate();

  // Navbar Menu
  const navItems = ["Home", "Project", "About"];

  return (
    <nav className="">
      <div className="w-full flex justify-between h-[80px] px-5 sm:px-10 md:px-15 lg:px-20 bg-[#e1dfde] border-b-[3px] border-b-[#565759] border-opacity-10 font-exo font-bold">
        {/* logo */}
        <div className="flex items-center">
          <p
            className="text-[#54433A] cursor-pointer"
            onClick={() => navigate("/")}
          >
            AF20
          </p>
        </div>

        {/* nav menu */}
        <ul className="hidden md:flex space-x-5 text-[#2D2B2B] uppercase items-center">
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

        {/* HIRE ME */}
        <div className="hidden md:flex items-center">
          <a href="https://t.me/anasfirly20" target="break">
            <div className="text-[#2D2B2B] uppercase flex items-center gap-1 cursor-pointer border-2 rounded-md border-[#2D2B2B] p-1">
              HIRE ME
              <BsTelegram className="text-[#2D2B2B]" />
            </div>
          </a>
        </div>

        {/* Hamburger Menu */}
        <div
          className="md:hidden text-[#2D2B2B] my-auto text-3xl z-20 cursor-pointer"
          onClick={handleClick}
        >
          {!nav ? <FiMenu /> : <GrClose />}
        </div>

        {/* Mobile Menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full min-h-screen bg-[#e1dfde] flex flex-col items-center justify-center text-[#2D2B2B] uppercase z-10"
          }
        >
          {navItems.map((item, id) => (
            <li key={id} className="py-6 text-4xl" onClick={handleClick}>
              {item === "Home" ? (
                <Link to="/">{item}</Link>
              ) : (
                <Link to={`/${item.toLowerCase()}`}>{item}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;