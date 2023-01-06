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
    <section className="min-h-screen font-exo mx-10 mb-10">
      <h1 className="text-center text-[#E1DFDE] text-4xl mt-10 border-2 bg-[#2D2B2B] mx-4 sm:mx-16 md:mx-20 lg:mx-32 py-3 rounded-md">
        Expense Tracker v2.0
      </h1>

      <div className="lg:grid lg:grid-cols-2">
        {/* Doughnut Chart */}
        <div className="">
          <div className="text-center lg:text- text-[#2D2B2B] mt-10 text-2xl">
            <div className="w-[23rem] h-[24rem] sm:w-[25rem] sm:h-[25rem] top-[40%] relative mx-auto lg:mx-auto">
              <Doughnut {...config} />
              <h3 className="absolute font-bold right-0 left-0 top-[45%] lg:right-40 lg:left-40">
                Total
                <span className="block text-3xl text-green-500">${0}</span>
              </h3>
            </div>
          </div>

          {/* Masuk dari History */}
          <div className="flex flex-col mt-10 text-[#2D3B3B] space-y-3 sm:w-[73%] md:w-[47%] lg:w-[100%] mx-auto font-semibold">
            {/* Investment */}
            <div className="flex gap-2 relative lg:mx-auto lg:w-1/2">
              <span className="border-l-8 border-l-yellow-500 rounded-full shadow-lg"></span>
              Investment
              <span className="absolute right-0 font-bold lg:left-[23rem]">
                0%
              </span>
            </div>
            {/* Expense */}
            <div className="flex gap-2 relative lg:mx-auto lg:w-1/2">
              <span className="border-l-8 border-[#ff6384] rounded-full shadow-2xl"></span>
              Expense
              <span className="absolute right-0 font-bold lg:left-[23rem]">
                0%
              </span>
            </div>
            {/* Savings */}
            <div className="flex gap-2 relative lg:mx-auto lg:w-1/2">
              <span className="border-l-8 border-[#2D2B2B] rounded-full shadow-lg"></span>
              Savings
              <span className="absolute right-0 font-bold lg:left-[23rem]">
                0%
              </span>
            </div>
          </div>
        </div>

        <div>
          {/* Transaction */}
          <form className="text-center space-y-3 lg:mt-24">
            <h3 className="text-[#2D3B3B] text-xl font-semibold">
              Transaction
            </h3>
            <div className="flex flex-col gap-y-3 items-center w-full sm:w-[73%] md:w-[47%] lg:w-[70%] mx-auto">
              <Input
                type="text"
                name="expenseType"
                id="expenseType"
                placeholder="Salary, House Rent, Buy Bitcoin,..."
                className="bg-white py-2 px-2 rounded-lg text-black w-[80%] md:mx-auto"
              />
              <select
                id="options"
                name="options"
                className="w-[80%] py-2 bg-white text-[#2D3B3B] rounded-lg px-2"
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
                className="bg-white py-2 px-2 rounded-lg text-black w-[80%] md:mx-auto"
              />
            </div>
            <Input
              type="submit"
              value="Make Transaction"
              className="bg-[#009176] text-white font-semibold w-[50%] sm:w-[40%] md:w-[25%] lg:w-[40%] py-2 rounded-lg cursor-pointer"
            />
          </form>
          {/* History */}
          <div className="space-y-3 w-[80%] sm:w-[73%] md:w-[47%] lg:w-[60%] mx-auto mt-10 lg:mt-20">
            <h3 className="text-[#2D3B3B] text-xl font-semibold text-center">
              History
            </h3>
            <div className="flex flex-col text-[#2D3B3B]">
              <div className="font-semibold border-r-[7px] py-1 rounded-lg border-yellow-500 shadow-lg bg-white relative w-full mx-auto">
                <AiOutlineDelete className="absolute top-2 left-1" />
                <p className="text-center">Salary</p>
              </div>
            </div>
            <div className="flex flex-col text-[#2D3B3B]">
              <div className="font-semibold border-r-[7px] py-1 rounded-lg border-[#ff6384] shadow-lg bg-white relative w-full mx-auto">
                <AiOutlineDelete className="absolute top-2 left-1" />
                <p className="text-center">Expense</p>
              </div>
            </div>
            <div className="flex flex-col text-[#2D3B3B]">
              <div className="font-semibold border-r-[7px] py-1 rounded-lg border-[#2D3B3B] shadow-lg bg-white relative w-full mx-auto">
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
