import AppExpenseTrackerCard from "./AppExpenseTrackerCard";
import { useState } from "react";
import AppExpenseTrackerHistory from "./AppExpenseTrackerHistory";
import AppExpenseTrackerForm from "./AppExpenseTrackerForm";

const ExpenseTracker = () => {
  // data for history
  const [history, setHistory] = useState([]);

  // Add History
  const addHistory = (item) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newHistory = { id, ...item };

    setHistory([...history, newHistory]);
  };

  // Delete History
  const deleteHistory = (id) => {
    setHistory(history.filter((item) => item.id !== id));
  };

  return (
    <section className="mb-[12vh] w-full px-[4vw] font-exo text-[#2D2B2B]">
      <h1 className="mt-5 text-center text-2xl font-semibold">
        Expense Tracker
      </h1>
      <div className="card mx-auto mt-5 flex h-full w-96 flex-col space-y-5">
        {/* Balance */}
        <div className="flex flex-col text-2xl">
          <h2 className="text-sm font-semibold uppercase">Your Balance</h2>
          <p className="font-bold">
            $
            {history.reduce(
              (accumulator, currentValue) =>
                Number(accumulator) + Number(currentValue.amount),
              0
            )}
            .00
          </p>
        </div>

        {/* Income / Expense Card */}
        <div className="mt-2 grid h-20 grid-cols-2 divide-x rounded-md bg-white shadow-lg">
          <AppExpenseTrackerCard
            type="Income"
            className="text-green-600"
            amount={history
              .filter((item) => item.amount > 0)
              .reduce(
                (accumulator, currentValue) =>
                  Number(accumulator) + Number(currentValue.amount),
                0
              )}
          />
          <AppExpenseTrackerCard
            type="Expense"
            className="text-red-600"
            amount={history
              .filter((item) => item.amount < 0)
              .reduce(
                (accumulator, currentValue) =>
                  Math.abs(accumulator - currentValue.amount),
                0
              )}
          />
        </div>

        {/* History */}
        <div className="flex flex-col space-y-3">
          <h3 className="border-b-2 border-[#565759] border-opacity-10 text-xl font-bold">
            History
          </h3>
          <div className="space-y-2">
            {history.map(({ text, amount, id }) =>
              amount > 0 ? (
                <AppExpenseTrackerHistory
                  key={id}
                  text={`${text}`}
                  amount={amount}
                  className="w-full border-r-green-500"
                  onDelete={deleteHistory}
                  id={id}
                />
              ) : (
                <AppExpenseTrackerHistory
                  key={id}
                  text={`${text}`}
                  amount={amount}
                  className="w-full border-r-red-500"
                  onDelete={deleteHistory}
                  id={id}
                />
              )
            )}
          </div>
        </div>

        {/* Add new transaction */}
        <div className="flex flex-col">
          <h3 className="border-b-2 border-[#565759] border-opacity-10 text-xl font-bold">
            Add new transaction
          </h3>
          {/* FORM for adding */}
          <AppExpenseTrackerForm onAdd={addHistory} />
        </div>
      </div>
    </section>
  );
};

export default ExpenseTracker;
