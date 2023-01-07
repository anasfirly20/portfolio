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
      className="text-gray-600 body-font font-exo min-h-[70vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full flex flex-wrap px-[6vw] my-[10vh] lg:px-[10vw] justify-center items-center">
        {/* TITLE */}
        <div className="w-[100%] md:w-[40%] lg:w-[40%]">
          <h1 className="text-4xl mb-[2vh] font-semibold text-[#2D2B2B]">
            Hi there! 👋
            <br /> I am <span className="mt-10 font-extrabold">Firly</span>
          </h1>
          <p className="mb-[2vh] leading-relaxed font-semibold text-[#484645] text-left">
            As a new web developer with a strong foundation in HTML, CSS, and
            JavaScript, and proficiency in React and Tailwind CSS. I am
            dedicated to delivering high-quality work and continuously learning
            and growing in my skills. I am confident in my ability to adapt to
            new technologies and excited to bring my passion for technology and
            problem-solving to every project.
          </p>
          <button
            onClick={() => navigate("/project")}
            className="relative inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-[#e1dfde] bg-[#2D2B2B] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 group border-none"
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#009176] group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-[#e1dfde]"
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
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-5 h-5 text-[#e1dfde]"
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
        <div className="w-[450px] md:w-[50%] lg:w-[40%] mx-auto max-md:mt-8">
          <img
            className="object-cover object-center w-full rounded"
            alt="hero"
            src={img}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
