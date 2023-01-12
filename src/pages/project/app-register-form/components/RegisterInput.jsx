import React from "react";
import { motion } from "framer-motion";

const RegisterInput = ({
  type,
  name,
  id,
  placeholder,
  className,
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
