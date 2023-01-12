import React from "react";

const RegisterInputLabel = ({ className, htmlFor, text }) => {
  return (
    <>
      <label htmlFor={htmlFor} className={className}>
        {text}
      </label>
    </>
  );
};

export default RegisterInputLabel;
