import React from "react";
import { motion } from "framer-motion";
import "../index.css";

const Home = () => {
  return (
    <motion.section
      className="min-h-screen relative w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="min-h-screen flex items-center justify-center font-exo text-[#2D2B2B]">
        <div>
          <h3 className="text-5xl font-semibold">Salut! 👋</h3>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
