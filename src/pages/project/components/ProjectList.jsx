import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectList = () => {
  const projects = [
    "Zikr App",
    "Registration Form",
    "Expense Tracker",
    "To-do App",
    "Calculator App",
    // "Voter App",
    // "Expense Tracker-v2",
    // "Redux-Test",
    // "Sandbox"
  ];

  return (
    <>
      <ul className="flex flex-wrap justify-center gap-5 p-5 font-exo text-xl font-semibold">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="h-[10rem] w-[10rem] rounded-2xl bg-[#2D2B2B] p-5 text-center hover:shadow-md hover:shadow-[#363534]"
            whileHover={{ scale: 1.05 }}
          >
            <Link
              className="flex h-full w-full items-center justify-center"
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
