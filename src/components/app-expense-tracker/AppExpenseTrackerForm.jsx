import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import Input from "../Input";
import InputLabel from "../InputLabel";

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
      <div className="mt-2 flex flex-col space-y-2">
        <form className="space-y-3" onSubmit={onSubmit}>
          {/* Description */}
          <div className="mt-3">
            <InputLabel
              htmlFor="text"
              className="font-semibold"
              text="Description"
            />
            <Input
              type="text"
              name="text"
              id="text"
              placeholder="Example: KFC"
              className="h-8 w-full rounded-sm bg-white p-2"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          {/* Amount */}
          <div>
            <label
              htmlFor="amount"
              className="flex flex-col -space-y-1 font-semibold"
            >
              <span>Amount</span>
              <span>(positive - income, negative - expense)</span>
            </label>
            <Input
              type="number"
              id="amount"
              placeholder="Enter Amount..."
              className="h-8 w-full rounded-sm bg-white p-2"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <Input
            type="submit"
            value="Add Transaction"
            className="w-full -translate-y-1 cursor-pointer rounded-lg bg-[#009176] py-3 font-bold text-white transition ease-in-out hover:bg-[#00A888] active:scale-95 active:bg-[#009176]"
          />
        </form>
      </div>
    </>
  );
};

export default AppExpenseTrackerForm;
