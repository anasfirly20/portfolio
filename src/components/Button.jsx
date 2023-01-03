import React, { Fragment } from "react";
import { motion } from "framer-motion";

const Button = ({ className, onClick, text, icon }) => {
  return (
    <>
      <motion.button
        className={className}
        onClick={onClick}
        whileTap={{ scale: 0.95 }}
      >
        {text}
        {icon}
      </motion.button>
    </>
  );
};

export default Button;
