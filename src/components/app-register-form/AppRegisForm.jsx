import React from "react";
import { motion } from "framer-motion";
import RegisterForm from "./RegisterForm";
import logo from "../../assets/join-us-3.svg";

const AppRegisForm = () => {
  return (
    <section className="mb-[5vh] px-[6vw] w-full font-exo">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="my-[3vh]">
          <h5 className="mb-[2vh] text-center text-4xl font-semibold text-[#0D0D0D]">
            Join Us!
          </h5>
          <img src={logo} alt="join-us-svg" className="h-40 mx-auto" />
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <RegisterForm />
        </div>
      </motion.div>
    </section>
  );
};

export default AppRegisForm;
