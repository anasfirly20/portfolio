import React from "react";
import { motion } from "framer-motion";
import RegisterForm from "./components/RegisterForm";
import logo from "./assets/join-us.svg";

const AppRegisForm = () => {
  return (
    <section className="mb-[5vh] w-full px-[6vw] font-exo">
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
          <img src={logo} alt="join-us-svg" className="mx-auto h-40" />
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <RegisterForm />
        </div>
      </motion.div>
    </section>
  );
};

export default AppRegisForm;
