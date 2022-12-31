import React from "react";
import { motion } from "framer-motion";
import RegisterForm from "./RegisterForm";
import logo from "../../assets/join-us-3.svg";

const AppRegisForm = () => {
  return (
    <section className="min-h-screen relative w-full font-exo pb-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="py-10 space-y-5">
          <h5 className="text-center text-4xl text-[#0D0D0D] font-semibold">
            Join Us!
          </h5>
          <img src={logo} alt="join-us-svg" className="h-40 mx-auto" />
        </div>
        <div className="h-full w-full flex items-center justify-center">
          <RegisterForm />
        </div>
      </motion.div>
    </section>
  );
};

export default AppRegisForm;
