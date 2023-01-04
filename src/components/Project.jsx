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
        <div className="flex flex-col mt-10">
          <h1 className="text-center p-5 font-semibold text-[#0D0D0D]">
            Created with react
          </h1>
          <ProjectList />
        </div>
      </motion.div>
    </section>
  );
};

export default Project;
