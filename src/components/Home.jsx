import React from "react";
import { motion } from "framer-motion";
import "../index.css";
import img from "../assets/home-img.svg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      className="min-h-[70vh] font-exo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="my-[10vh] flex w-full flex-wrap items-center justify-center px-[6vw] lg:px-[10vw]">
        {/* TITLE */}
        <div className="w-[100%] md:w-[40%] lg:w-[40%]">
          <h1 className="mb-[2vh] text-4xl font-semibold text-[#2D2B2B]">
            Hi there! 👋
            <br /> I am <span className="mt-10 font-extrabold">Firly</span>
          </h1>
          <p className="relative mb-[2vh] text-left font-semibold leading-relaxed text-[#484645] ">
            As a new web developer with a strong foundation in HTML, CSS, and
            JavaScript, and proficiency in React and Tailwind CSS. I am
            dedicated to delivering high-quality work and continuously learning
            and growing in my skills. I am confident in my ability to adapt to
            new technologies and excited to bring my passion for technology and
            problem-solving to every project.
          </p>
          <button
            onClick={() => navigate("/project")}
            className="group relative inline-flex items-center justify-start overflow-hidden rounded border-none bg-[#2D2B2B] py-2 pl-4 pr-12 font-semibold text-[#e1dfde] transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6"
          >
            <span className="absolute bottom-0 left-0 h-1 w-full bg-[#009176] transition-all duration-150 ease-in-out group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="h-5 w-5 text-[#e1dfde]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute left-0 -translate-x-12 pl-2.5 duration-200 ease-out group-hover:translate-x-0">
              <svg
                className="h-5 w-5 text-[#e1dfde]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-[#e1dfde]">
              My Projects
            </span>
          </button>
        </div>

        {/* IMG */}
        <div className="mx-auto w-[450px] max-md:mt-8 md:w-[50%] lg:w-[40%]">
          <img
            className="w-full rounded object-cover object-center"
            alt="hero"
            src={img}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
