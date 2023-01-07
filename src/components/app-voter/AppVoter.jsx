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
    <section className="relative mx-2 min-h-screen p-5 font-exo text-[#0D0D0D]">
      <div className="pt-10 text-center">
        <h1 className="text-md mb-5 font-exo">Vote Your Team!</h1>
        <img src={logo} className="mx-auto mb-5 w-[12rem] rounded-2xl" />
        <h3 className="mb-5 text-2xl font-bold">Total Votes: {count}</h3>
        <div className="flex w-full flex-wrap justify-center gap-2">
          {voters.map((voter, id) => (
            <AppVoterCounter key={id} name={voter} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppVoter;
