import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import pict from "./assets/man-dua.png";
import { increment, resetZikr } from "../../../redux/ducks/counterZikr";
import Button from "../../../components/Button";
import toast, { Toaster } from "react-hot-toast";

const notifySuccess = () =>
  toast("Well Done! You have done a Zikr", {
    icon: "👏",
  });

const AppZikr = () => {
  const countTotal = useSelector((state) => state.counterZikr.countZikr);
  const [word, setWord] = useState("سُبْحَانَ ٱللَّٰهِ");
  const [countSyahada, setCountSyahada] = useState(0);
  const [textButton, setTextButton] = useState("Start Zikr");

  // dispatch the functions for counterZikr
  const dispatch = useDispatch();

  // function for onClick
  const handleIncrement = () => {
    dispatch(increment());
    setCountSyahada(countSyahada + 1);

    // condition to call toastify
    if (countTotal === 99 - 1) {
      notifySuccess();
    }

    // condition for counter and setWord
    if (countSyahada === 33) {
      setCountSyahada(0 + 1);
      setWord("ٱلْحَمْدُ لِلَّٰهِ");
      if (word === "ٱلْحَمْدُ لِلَّٰهِ") {
        setWord("ٱللَّٰهُ أَكْبَرُ");
      }
      if (word === "ٱللَّٰهُ أَكْبَرُ") {
        setWord("سُبْحَانَ ٱللَّٰهِ");
      }
    }
    // condition for button to display "Lanjut Zikie"
    if (countSyahada > 0 - 1) {
      setTextButton("Continue Zikr");
    }
    // reset countTotal
    if (countTotal > 99 - 1) {
      dispatch(resetZikr());
    }
  };

  return (
    <section className="relative py-[5vh] font-exo text-[#0D0D0D]">
      <Toaster />
      <div className="my-[10vh] flex flex-col items-center justify-center">
        <img src={pict} className="h-[18rem]" />
        <div className="flex flex-col items-center gap-y-3">
          <h3 className="mt-3 font-exo text-xl">Total Zikr: {countTotal} </h3>
          <p className="text-4xl font-bold">{word}</p>
          <p className="font-exo text-xl">{countSyahada}x</p>
        </div>
        <div className="w-full text-center">
          <Button
            text={textButton}
            className="mt-5 bg-[#009176] font-exo font-bold text-white"
            onClick={handleIncrement}
          />
        </div>
      </div>
    </section>
  );
};

export default AppZikr;
