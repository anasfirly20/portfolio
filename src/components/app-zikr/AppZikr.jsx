import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import pict from "../../assets/man-dua.png";
import { incrementZikr, resetZikr } from "../../redux/ducks/counterZikr";
import Button from "../Button";
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
  const handleIncrement = () => {
    dispatch(incrementZikr());
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
    <section className="min-h-screen relative text-[#0D0D0D] font-acumin">
      <Toaster />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div>
          <img src={pict} className="h-[18rem]" />
          <div className="flex flex-col items-center gap-y-3">
            <h3 className="text-xl mt-3 font-exo">Total Zikr: {countTotal} </h3>
            <p className="text-4xl font-bold">{word}</p>
            <p className="text-xl font-exo">{countSyahada}x</p>
          </div>
          <div className="w-full text-center">
            <Button
              text={textButton}
              className="bg-[#009176] text-white font-bold font-exo"
              onClick={handleIncrement}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppZikr;
