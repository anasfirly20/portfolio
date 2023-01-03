import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import InputLabel from "../InputLabel";
import Input from "../Input";
import emailjs from "emailjs-com";

// Toaster functions
const notifySuccess = () => toast.success("Registered");
const notifyFail = () => toast.error("Please Fill In All The Fields");
const notifyPassNotMatch = () => toast.error("Password Do Not match");
const notifyCheckBox = () =>
  toast.error("Please Agree to terms and conditions");

const RegisterForm = () => {
  const [word, setWord] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const validRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  useEffect(() => {
    const allFieldsFilled =
      name.length && email.length && pass.length && confirmPass.length;
    const allFieldsEmpty =
      !name.length && !email.length && !pass.length && !confirmPass.length;

    if (allFieldsFilled) {
      setWord("Ready to Sign Up ✅");
    } else if (allFieldsEmpty) {
      setWord("*All Fields Required");
    } else {
      setWord("*All Fields Required");
    }
  }, [name, email, pass, confirmPass]);

  // Function for submit button
  const onSubmit = (e) => {
    e.preventDefault();

    if (name.length && email.length && pass.length && confirmPass.length) {
      if (document.getElementById("checkbox").checked) {
        if (pass !== confirmPass) {
          notifyPassNotMatch();
        } else {
          notifySuccess();
        }
      } else {
        notifyCheckBox();
      }
    } else {
      notifyFail();
    }

    emailjs
      .sendForm("gmail", "template_v97pp3e", e.target, "DRhkfav3kde6rcZ-n")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.reset();
  };

  return (
    <div className="card bg-[#0D0D0D] rounded-3xl font-exo">
      <Toaster />
      <form className="w-full max-w-sm" onSubmit={onSubmit}>
        {/* Full Name */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <InputLabel
              htmlFor="fullname"
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              text="Full Name"
            />
          </div>
          <div className="md:w-2/3">
            <Input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Uvuvwevweve Ossas"
              className="bg-slate-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#00C78E]"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
        {/* email */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <InputLabel
              htmlFor="email"
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              text="Email"
            />
          </div>
          <div className="md:w-2/3">
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="example2@yandex.ru"
              className="bg-slate-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#00C78E]"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>
        {/* Password */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <InputLabel
              htmlFor="password"
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              text="Password"
            />
          </div>
          <div className="md:w-2/3">
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              className="bg-slate-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#00C78E]"
              value={pass}
              onChange={(event) => setPass(event.target.value)}
            />
          </div>
        </div>
        {/* Confirm Password */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <InputLabel
              htmlFor="confirmpassword"
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              text="Confirm Password"
            />
          </div>
          <div className="md:w-2/3">
            <Input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              placeholder="********"
              className="bg-slate-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#00C78E]"
              value={confirmPass}
              onChange={(event) => setConfirmPass(event.target.value)}
            />
          </div>
        </div>
        <div className="flex mb-6 text-center justify-center">
          <label className="md:w-2/3 block text-gray-500 font-bold">
            <Input type="checkbox" id="checkbox" className="mr-2" />
            <span className="text-sm">
              I agree to the terms and conditions.
            </span>
            <p className="text-center p-1 text-slate-50">{word}</p>
          </label>
        </div>
        {/* Sign Up Button */}
        <div className="text-center">
          <Input
            type="submit"
            value="Sign Up"
            className="w-1/2 bg-[#009176] hover:bg-[#00A888] active:bg-[#009176] text-white font-bold py-2 px-4 rounded text-xl transition ease-in-out active:scale-95 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
