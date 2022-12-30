import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import ProjectList from "./ProjectList";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <section className="min-h-screen relative w-full font-exo">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-center p-5 font-semibold underline text-[#0D0D0D]">
          My Projects
        </h1>
        <ProjectList />
      </motion.div>
    </section>
  );
};

export default Project;
