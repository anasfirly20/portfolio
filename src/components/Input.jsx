import React from "react";
import { motion } from "framer-motion";

const Input = ({ type, name, id, placeholder, className, value, onChange }) => {
  return (
    <>
      <input
        className={className}
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        whileFocus={{ scale: 1.1 }}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
