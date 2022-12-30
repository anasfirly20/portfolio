import React, { Fragment } from "react";
import { motion } from "framer-motion";

const Button = ({ className, onClick, text }) => {
  return (
    <>
      <motion.button
        className={className}
        onClick={onClick}
        whileTap={{ scale: 0.95 }}
      >
        {text}
      </motion.button>
    </>
  );
};

export default Button;
