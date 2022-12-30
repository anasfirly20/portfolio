import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AppVoterCounter from "./AppVoterCounter";
import logo from "../../assets/wc-logo.jpg";
import axios from "axios";

const AppVoter = () => {
  const count = useSelector((state) => state.counterVoter.count);

  const voters = ["France 🇫🇷", "Croatia 🇭🇷", "Morocco 🇲🇦", "Argentina 🇦🇷"];

  useEffect(() => {
    axios.get(`https://worldcupjson.net/teams`).then((res) => {
      const responseTeams = res.data;
      setTeams(responseTeams);
    });
  }, []);

  return (
    <section className="min-h-screen relative text-[#0D0D0D] p-5 font-exo mx-2">
      <div className="text-center pt-10">
        <h1 className="text-md mb-5 font-exo">Vote Your Team!</h1>
        <img src={logo} className="mx-auto w-[12rem] rounded-2xl mb-5" />
        <h3 className="text-2xl font-bold mb-5">Total Votes: {count}</h3>
        <div className="w-full flex flex-wrap justify-center gap-2">
          {voters.map((voter, id) => (
            <AppVoterCounter key={id} name={voter} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppVoter;
