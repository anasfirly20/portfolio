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
    <main className="min-h-screen relative w-full text-[#2D2B2B] font-exo">
      <h1 className="text-center text-2xl font-semibold mt-5">
        Expense Tracker
      </h1>
      <div className="card flex flex-col mx-auto h-full w-96 mt-5 space-y-5">
        {/* Balance */}
        <div className="flex flex-col text-2xl">
          <h2 className="uppercase text-sm font-semibold">Your Balance</h2>
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
        <div className="grid grid-cols-2 h-20 mt-2 bg-white shadow-lg rounded-md divide-x">
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
          <h3 className="font-bold text-xl border-b-2 border-[#565759] border-opacity-10">
            History
          </h3>
          <div className="space-y-2">
            {history.map(({ text, amount, id }) =>
              amount > 0 ? (
                <AppExpenseTrackerHistory
                  key={id}
                  text={`${text}`}
                  amount={amount}
                  className="border-r-green-500 w-full"
                  onDelete={deleteHistory}
                  id={id}
                />
              ) : (
                <AppExpenseTrackerHistory
                  key={id}
                  text={`${text}`}
                  amount={amount}
                  className="border-r-red-500 w-full"
                  onDelete={deleteHistory}
                  id={id}
                />
              )
            )}
          </div>
        </div>

        {/* Add new transaction */}
        <div className="flex flex-col">
          <h3 className="font-bold text-xl border-b-2 border-[#565759] border-opacity-10">
            Add new transaction
          </h3>
          {/* FORM for adding */}
          <AppExpenseTrackerForm onAdd={addHistory} />
        </div>
      </div>
    </main>
  );
};

export default ExpenseTracker;
