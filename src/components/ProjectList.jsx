import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectList = () => {
  let projects = [
    "Zikr App",
    "Registration Form",
    "Expense Tracker",
    "To-do App",
    "Calculator App",
    // "Voter App",
    // "Expense Tracker-v2",
    // "Redux-Test",
  ];

  return (
    <>
      <ul className="flex flex-wrap justify-center gap-5 p-5 font-exo font-semibold text-xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#2D2B2B] h-[10rem] w-[10rem] rounded-2xl text-center hover:shadow-md hover:shadow-[#363534] p-5"
            whileHover={{ scale: 1.05 }}
          >
            <Link
              className="w-full h-full flex justify-center items-center"
              to={`/project/${project.toLowerCase().replace(" ", "-")}`}
            >
              {project}
            </Link>
          </motion.div>
        ))}
      </ul>
    </>
  );
};

export default ProjectList;
