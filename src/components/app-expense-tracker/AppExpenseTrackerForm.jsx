import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

// Toaster
const notifyError1 = () => toast.error("Please add something");
const notifyError2 = () => toast.error("Please add amount");
const notifySuccess1 = () => toast.success("Successfully added");

const AppExpenseTrackerForm = ({ onAdd }) => {
  // initial state for value of text & amount
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  //   Function onSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    // Error Toaster
    if (!text) {
      notifyError1();
      return;
    }
    if (amount === 0) {
      notifyError2();
      return;
    }

    // Items that will be added to text/amount (KFC / $100)
    onAdd({ text, amount });

    // Success Toaster
    notifySuccess1();

    // Reset the text/amount to initial
    setText("");
    setAmount(Number(0));
  };

  return (
    <>
      <Toaster />
      <div className="flex flex-col mt-2 space-y-2">
        <form className="space-y-3" onSubmit={onSubmit}>
          {/* Description */}
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
