import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

// Toaster
const notifyError = () => toast.error("Please add something");

const AppExpenseTrackerForm = ({ onAdd }) => {
  // initial state for value of text & amount
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  //   Function onSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      notifyError();
      return;
    }

    onAdd({ text, amount });

    setText("");
    setAmount(Number(0));
  };

  return (
    <>
      <Toaster />
      <div className="flex flex-col mt-2 space-y-2">
        <form className="space-y-3" onSubmit={onSubmit}>
          {/* Text */}
          <div className="mt-3">
            <label htmlFor="text" className="font-semibold">
              Description
            </label>
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Example: KFC"
              className="bg-white w-full rounded-sm h-8 p-2"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          {/* Amount */}
          <div>
            <label
              htmlFor="amount"
              className="flex flex-col font-semibold -space-y-1"
            >
              <span>Amount</span>
              <span>(positive - income, negative - expense)</span>
            </label>
            <input
              type="number"
              id="amount"
              placeholder="Enter Amount..."
              className="bg-white w-full rounded-sm h-8 p-2"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <motion.input
            type="submit"
            value="Add Transaction"
            className="w-full py-3 rounded-lg cursor-pointer bg-[#009176] hover:bg-[#00A888] active:bg-[#009176] font-bold text-white"
            whileTap={{ scale: 0.95 }}
          />
        </form>
      </div>
    </>
  );
};

export default AppExpenseTrackerForm;
