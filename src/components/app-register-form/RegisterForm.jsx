import React, { useState, useEffect } from "react";
import RegisterInput from "./RegisterInput";
import RegisterInputLabel from "./RegisterInputLabel";
import Button from "../Button";
import toast, { Toaster } from "react-hot-toast";

// Toaster functions
const notifySuccess = () => toast.success("Registered");
const notifyFail = () => toast.error("Please Fill In All The Forms");
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
    const emailValid = email.match(validRegex);

    if (allFieldsFilled) {
      setWord("Ready to Sign Up ✅");
    } else if (allFieldsEmpty) {
      setWord("*All Fields Required");
    } else {
      setWord("*All Fields Required");
    }
    // if (email.match(!validRegex)) {
    //   setWord("Right Email");
    // }
  }, [name, email, pass, confirmPass, validRegex]);

  // handleClick for Submit Button
  const handleClick = () => {
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
  };

  return (
    <div className="card bg-[#0D0D0D] rounded-3xl font-exo">
      <Toaster />
      <form className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <RegisterInputLabel
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
              text="Full Name"
            />
          </div>
          <div className="md:w-2/3">
            <RegisterInput
              className="bg-slate-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#00C78E]"
              id="inline-full-name"
              type="text"
              placeholder="Uvuvwevweve Ossas"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <RegisterInputLabel
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-username"
              text="Email"
            />
          </div>
          <div className="md:w-2/3">
            <RegisterInput
              className="bg-slate-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#00C78E]"
              id="inline-username"
              type="email"
              placeholder="example2@yandex.ru"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <RegisterInputLabel
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
              text="Password"
            />
          </div>
          <div className="md:w-2/3">
            <RegisterInput
              className="bg-slate-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#00C78E]"
              id="inline-password"
              type="password"
              placeholder="********"
              value={pass}
              onChange={(event) => setPass(event.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <RegisterInputLabel
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-confirm-password"
              text="Confirm Password"
            />
          </div>
          <div className="md:w-2/3">
            <RegisterInput
              className="bg-slate-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#00C78E]"
              id="inline-confirm-password"
              type="password"
              placeholder="********"
              value={confirmPass}
              onChange={(event) => setConfirmPass(event.target.value)}
            />
          </div>
        </div>
        <div className="flex mb-6 text-center justify-center">
          <label className="md:w-2/3 block text-gray-500 font-bold">
            <RegisterInput
              className="mr-2 leading-tight"
              type="checkbox"
              id="checkbox"
            />
            <span className="text-sm">
              I agree to the terms and conditions.
            </span>
            <p className="text-center p-1 text-slate-50">{word}</p>
          </label>
        </div>
        <div className="text-center">
          <Button
            className="shadow bg-[#009176] hover:bg-[#00A888] active:bg-[#009176] text-white font-bold py-2 px-4 rounded text-xl"
            text="Sign Up"
            onClick={() => handleClick()}
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
