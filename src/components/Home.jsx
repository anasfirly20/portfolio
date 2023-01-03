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
      class="text-gray-600 body-font min-h-screen font-exo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="text-4xl mb-4 font-semibold text-[#2D2B2B]">
            Hi there! 👋
            <br class="hidden md:inline-block" /> I am{" "}
            <span className="font-bold">Firly</span>
          </h1>
          <p class="mb-8 leading-relaxed font-semibold text-[#484645]">
            As a new web developer with a strong foundation in HTML, CSS, and
            JavaScript, and proficiency in React and Tailwind CSS. I am
            dedicated to delivering high-quality work and continuously learning
            and growing in my skills. I am confident in my ability to adapt to
            new technologies and excited to bring my passion for technology and
            problem-solving to every project.
          </p>
          <div>
            <Button
              text={`My Projects`}
              className="flex items-center gap-2 text-[#e1dfde] bg-[#2D2B2B] border-0 py-2 px-6 focus:outline-none rounded-lg text-lg"
              onClick={() => navigate("/project")}
              icon={<HiArrowNarrowRight />}
            />
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={img}
            // src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Home;

/*
<motion.section
      className="min-h-screen w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="min-h-screen flex items-center justify-center font-exo text-[#2D2B2B]">
        <h3 className="text-5xl font-semibold">Salut! 👋</h3>
      </div>
    </motion.section>
*/
