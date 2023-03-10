import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../../redux/ducks/counterVoter";
import Button from "../../../components/Button";

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
    <div className="space-y-2 rounded-xl bg-gradient-to-r from-[#560421] to-[#56042C] py-16 px-16 text-slate-100">
      <Toaster />
      <p className="text-3xl">{name}</p>
      <p>Votes: {voteCount}</p>
      <div className="inset-x-0 bottom-0 flex h-full flex-col space-y-2">
        <Button
          onClick={handleIncrement}
          text="Vote"
          className="bg-green-400 px-16 font-acumin font-bold text-[#0D0D0D]"
        />
        <Button
          onClick={handleDecrement}
          text="Remove Vote"
          className="bg-red-500 font-acumin font-bold text-[#0D0D0D]"
        />
      </div>
    </div>
  );
}

export default AppVoterCounter;
