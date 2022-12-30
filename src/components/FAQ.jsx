import React from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center font-exo text-[#2D2B2B]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>FAQS</h1>
      </motion.div>
    </section>
  );
};

export default FAQ;
