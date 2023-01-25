import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "./constants/ProjectList";

const Project = () => {
  return (
    <section className="relative min-h-screen w-full font-exo">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="mt-10 flex flex-col">
          <h1 className="p-5 text-center font-semibold text-[#0D0D0D] ">
            React Projects
          </h1>
          <div className="flex flex-wrap justify-center gap-5 p-5 font-exo text-xl font-semibold">
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
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Project;
