import React from "react";

const RegisterInputLabel = ({ className, htmlFor, text }) => {
  return (
    <>
      <label className={className} htmlFor={htmlFor}>
        {text}
      </label>
    </>
  );
};

export default RegisterInputLabel;
