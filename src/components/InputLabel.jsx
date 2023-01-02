import React from "react";

const InputLabel = ({ className, htmlFor, text }) => {
  return (
    <>
      <label htmlFor={htmlFor} className={className}>
        {text}
      </label>
    </>
  );
};

export default InputLabel;
