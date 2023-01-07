import React from "react";
import Input from "../Input";
import { AiOutlineDelete } from "react-icons/ai";
import InputLabel from "../InputLabel";
import { useState } from "react";
import { UserData } from "./Data";
import { ExpenseData } from "./ExpenseData";
import DoughnutChart from "./DoughnutChart";
//
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

// data
const data = {
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

const config = {
  data: {
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
        borderRadius: 30,
        spacing: 5,
      },
    ],
  },
  options: {
    cutout: 160,
  },
};

const ExpenseV2 = () => {
  return (
    <section className="mx-[6vw] my-[6vh] font-exo">
      <h1 className="rounded-md border-2 bg-[#2D2B2B] py-3 text-center text-4xl text-[#E1DFDE] sm:mx-16 md:mx-20 lg:mx-32">
        Expense Tracker v2.0
      </h1>
      <div className="w-full lg:grid lg:grid-cols-2">
        {/* Doughnut Chart */}
        <div className="">
          <div className=" mt-10 text-center text-2xl text-[#2D2B2B]">
            <div className="relative top-[40%] mx-auto h-[24rem] w-[23rem] sm:h-[25rem] sm:w-[25rem] lg:mx-auto">
              <Doughnut {...config} />
              <h3 className="absolute right-0 left-0 top-[45%] font-bold lg:right-40 lg:left-40">
                Total
                <span className="block text-3xl text-green-500">${0}</span>
              </h3>
            </div>
          </div>

          {/* Masuk dari History */}
          <div className="mt-10 flex w-[100%] flex-col space-y-3 px-[6vw] font-semibold text-[#2D3B3B] sm:mx-auto sm:w-[73%] lg:w-[]">
            {/* Investment */}
            <div className="relative flex gap-2 lg:mx-auto lg:w-[100%]">
              <span className="border-l-8 rounded-full shadow-lg border-l-yellow-500"></span>
              Investment
              <span className="absolute right-0 font-bold lg:left-[100%]">
                0%
              </span>
            </div>
            {/* Expense */}
            <div className="relative flex gap-2 lg:mx-auto lg:w-[100%]">
              <span className="rounded-full border-l-8 border-[#ff6384] shadow-2xl"></span>
              Expense
              <span className="absolute right-0 font-bold lg:left-[100%]">
                0%
              </span>
            </div>
            {/* Savings */}
            <div className="relative flex gap-2 lg:mx-auto lg:w-[100%]">
              <span className="rounded-full border-l-8 border-[#2D2B2B] shadow-lg"></span>
              Savings
              <span className="absolute right-0 font-bold lg:left-[100%]">
                0%
              </span>
            </div>
          </div>
        </div>

        <div>
          {/* Transaction */}
          <form className="mt-8 space-y-3 text-center lg:mt-24">
            <h3 className="text-xl font-semibold text-[#2D3B3B]">
              Transaction
            </h3>
            <div className="mx-auto flex w-full flex-col items-center gap-y-3 sm:w-[73%] md:w-[47%] lg:w-[70%]">
              <Input
                type="text"
                name="expenseType"
                id="expenseType"
                placeholder="Salary, House Rent, Buy Bitcoin,..."
                className="w-[80%] rounded-lg bg-white py-2 px-2 text-black md:mx-auto"
              />
              <select
                id="options"
                name="options"
                className="w-[80%] rounded-lg bg-white py-2 px-2 text-[#2D3B3B]"
              >
                <option value="investment">Investment</option>
                <option value="expense">Expense</option>
                <option value="savings">Savings</option>
              </select>
              <Input
                type="number"
                name="amount"
                id="amount"
                placeholder="Enter Amount"
                className="w-[80%] rounded-lg bg-white py-2 px-2 text-black md:mx-auto"
              />
            </div>
            <Input
              type="submit"
              value="Make Transaction"
              className="w-[50%] cursor-pointer rounded-lg bg-[#009176] py-2 font-semibold text-white sm:w-[40%] md:w-[25%] lg:w-[40%]"
            />
          </form>
          {/* History */}
          <div className="mx-auto mt-8 w-[80%] space-y-3 sm:w-[73%] md:w-[47%] lg:mt-20 lg:w-[60%]">
            <h3 className="text-center text-xl font-semibold text-[#2D3B3B]">
              History
            </h3>
            <div className="flex flex-col text-[#2D3B3B]">
              <div className="relative mx-auto w-full rounded-lg border-r-[7px] border-yellow-500 bg-white py-1 font-semibold shadow-lg">
                <AiOutlineDelete className="absolute top-2 left-1" />
                <p className="text-center">Salary</p>
              </div>
            </div>
            <div className="flex flex-col text-[#2D3B3B]">
              <div className="relative mx-auto w-full rounded-lg border-r-[7px] border-[#ff6384] bg-white py-1 font-semibold shadow-lg">
                <AiOutlineDelete className="absolute top-2 left-1" />
                <p className="text-center">Expense</p>
              </div>
            </div>
            <div className="flex flex-col text-[#2D3B3B]">
              <div className="relative mx-auto w-full rounded-lg border-r-[7px] border-[#2D3B3B] bg-white py-1 font-semibold shadow-lg">
                <AiOutlineDelete className="absolute top-2 left-1" />
                <p className="text-center">Buy Crypto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpenseV2;
