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
      class="text-gray-600 body-font font-exo min-h-[70vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div class="w-full flex px-[4vw] my-[10vh] justify-center flex-wrap md:flex-row items-center">
        {/* TITLE */}
        <div class="w-[100%] md:w-[40%] lg:w-[40%]">
          <h1 class="text-4xl mb-[2vh] font-semibold text-[#2D2B2B] text-start">
            Hi there! 👋
            <br class="md:inline-block" /> I am{" "}
            <span className="font-bold">Firly</span>
          </h1>
          <p class="mb-[2vh] leading-relaxed font-semibold text-[#484645] text-left relative">
            As a new web developer with a strong foundation in HTML, CSS, and
            JavaScript, and proficiency in React and Tailwind CSS. I am
            dedicated to delivering high-quality work and continuously learning
            and growing in my skills. I am confident in my ability to adapt to
            new technologies and excited to bring my passion for technology and
            problem-solving to every project.
          </p>
          <div className="flex w-full">
            <Button
              text={`My Projects`}
              className="flex items-center gap-2 text-[#e1dfde] bg-[#2D2B2B] border-0 px-[1rem] py-2 sm:px-6 focus:outline-none rounded-lg text-lg"
              onClick={() => navigate("/project")}
              icon={<HiArrowNarrowRight />}
            />
          </div>
        </div>
        {/* IMG */}
        <div class="w-[450px] md:w-[50%] lg:w-[40%] mx-auto max-md:mt-8">
          <img
            class="object-cover object-center rounded w-full"
            alt="hero"
            src={img}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
