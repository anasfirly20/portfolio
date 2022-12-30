import React from "react";
import { motion } from "framer-motion";

const RegisterInput = ({
  className,
  id,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <>
      <motion.input
        className={className}
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

export default RegisterInput;
