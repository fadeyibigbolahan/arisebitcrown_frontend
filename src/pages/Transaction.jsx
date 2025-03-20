import React, { useState } from "react";

import { transactionHeading } from "../constants";
import brainwaveSymbol from "../assets/brainwave-symbol.svg";

const Transaction = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="md:hidden flex justify-center items-center w-full my-4 bg-black absolute top-[-15px] py-4">
        <a className="block" href="/">
          <img src={brainwaveSymbol} width={40} height={40} alt="Brainwave" />
        </a>
      </div>
      <h1 className="title">My Transactions</h1>

      <div className="m-2 md:m-10 overflow-x-auto mt-10">
        <div className="flex min-w-max justify-between gap-x-4 border-b-2 border-gray-200 bg-white p-4">
          {transactionHeading.map((heading, index) => (
            <div
              key={index}
              className="flex flex-col gap-y-2 whitespace-nowrap px-4 py-2 text-center"
            >
              <p className="text-xs font-semibold text-black">{heading.name}</p>
            </div>
          ))}
        </div>
        <div className="w-full min-w-max bg-white p-4">
          <p className="text-black text-center">No transactions yet.</p>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
