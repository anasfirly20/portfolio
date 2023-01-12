import React, { useState, useEffect, useReducer } from "react";
import toast, { Toaster } from "react-hot-toast";
import InputLabel from "../../../../components/InputLabel";
import Input from "../../../../components/Input";
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

    setName("");
    setEmail("");
    setPass("");
    setConfirmPass("");
  };

  return (
    <div className="rounded-3xl bg-[#0D0D0D] p-[2em] font-exo">
      <Toaster />
      <form className="w-full max-w-sm" onSubmit={onSubmit}>
        {/* Full Name */}
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <InputLabel
              htmlFor="fullname"
              className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
              text="Full Name"
            />
          </div>
          <div className="md:w-2/3">
            <Input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Uvuvwevweve Ossas"
              className="w-full appearance-none rounded border-2 border-gray-200 bg-slate-100 py-2 px-4 leading-tight text-gray-700 focus:border-[#00C78E] focus:bg-white focus:outline-none"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
        {/* email */}
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <InputLabel
              htmlFor="email"
              className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
              text="Email"
            />
          </div>
          <div className="md:w-2/3">
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="example2@yandex.ru"
              className="w-full appearance-none rounded border-2 border-gray-200 bg-slate-100 py-2 px-4 leading-tight text-gray-700 focus:border-[#00C78E] focus:bg-white focus:outline-none"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>
        {/* Password */}
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <InputLabel
              htmlFor="password"
              className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
              text="Password"
            />
          </div>
          <div className="md:w-2/3">
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              className="w-full appearance-none rounded border-2 border-gray-200 bg-slate-100 py-2 px-4 leading-tight text-gray-700 focus:border-[#00C78E] focus:bg-white focus:outline-none"
              value={pass}
              onChange={(event) => setPass(event.target.value)}
            />
          </div>
        </div>
        {/* Confirm Password */}
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <InputLabel
              htmlFor="confirmpassword"
              className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
              text="Confirm Password"
            />
          </div>
          <div className="md:w-2/3">
            <Input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              placeholder="********"
              className="w-full appearance-none rounded border-2 border-gray-200 bg-slate-100 py-2 px-4 leading-tight text-gray-700 focus:border-[#00C78E] focus:bg-white focus:outline-none"
              value={confirmPass}
              onChange={(event) => setConfirmPass(event.target.value)}
            />
          </div>
        </div>
        <div className="mb-6 flex justify-center text-center">
          <label className="block font-bold text-gray-500 md:w-2/3">
            <Input type="checkbox" id="checkbox" className="mr-2" />
            <span className="text-sm">
              I agree to the terms and conditions.
            </span>
            <p className="p-1 text-center text-slate-50">{word}</p>
          </label>
        </div>
        {/* Sign Up Button */}
        <div className="text-center">
          <Input
            type="submit"
            value="Sign Up"
            className="w-1/2 cursor-pointer rounded bg-[#009176] py-2 px-4 text-xl font-bold text-white transition ease-in-out hover:bg-[#00A888] active:scale-95 active:bg-[#009176]"
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
