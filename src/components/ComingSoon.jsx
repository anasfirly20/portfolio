import React from "react";
import logo from "../assets/coming-soon.svg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen relative font-exo p-5">
      <div className="flex flex-col min-h-screen space-y-20 items-center justify-center">
        <h1 className="text-center text-[#0D0D0D] ">Page Under Constuction</h1>
        <img src={logo} alt="404 error image" className="h-[20rem]" />
        <Button text="Back to home" onClick={() => navigate("/")} />
      </div>
    </section>
  );
};

export default ComingSoon;
