import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/ducks/counterVoter";
import Button from "../Button";

// Toaster
const notifySuccess = () => toast.success("Voted");
const notifyFail = () => toast.error("Vote Removed");

function AppVoterCounter({ name }) {
  const dispatch = useDispatch();
  const [voteCount, setVoteCount] = useState(0);

  const handleIncrement = () => {
    dispatch(increment());
    setVoteCount(voteCount + 1);
    notifySuccess();
  };

  const handleDecrement = () => {
    dispatch(decrement());
    setVoteCount(voteCount - 1);
    notifyFail();
  };

  return (
    <div className="text-slate-100 bg-gradient-to-r from-[#56042C] via-[#56042C] to-[#56042C] py-16 px-16 rounded-xl space-y-2">
      <Toaster />
      <p className="text-3xl">{name}</p>
      <p>Votes: {voteCount}</p>
      <div className="flex flex-col space-y-2 h-full inset-x-0 bottom-0">
        <Button
          onClick={handleIncrement}
          text="Vote"
          className="font-acumin font-bold bg-green-400 text-[#0D0D0D] px-16"
        />
        <Button
          onClick={handleDecrement}
          text="Remove Vote"
          className="font-acumin font-bold bg-red-500 text-[#0D0D0D]"
        />
      </div>
    </div>
  );
}

export default AppVoterCounter;
