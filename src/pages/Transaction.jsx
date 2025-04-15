import React, { useState } from "react";

// import { transactionHeading } from "../constants";
import brainwaveSymbol from "../assets/brainwave-symbol.svg";
import { useAuth } from "../context/AuthContext";

const Transaction = () => {
  const { user } = useAuth();

  const transactionHeading = [
    { name: "Amount", key: "amount" },
    { name: "Description", key: "description" },
    { name: "Transaction ID", key: "transactionId" },
    { name: "Status", key: "status" },
    { name: "Date", key: "date" },
  ];

  const adminTransaction = [
    {
      amount: "980 USDT",
      description: "Withdrawal",
      transactionId: "67f8326e289c611fc7575682",
      status: "successful",
      date: "10/04/2025",
    },
    {
      amount: "980 USDT",
      description: "Withdrawal",
      transactionId: "67f7b6891878f2cf3e4c971c",
      status: "successful",
      date: "27/03/2025",
    },
    {
      amount: "980 USDT",
      description: "Withdrawal",
      transactionId: "58uh56891878f2cf3e4c971c",
      status: "successful",
      date: "13/03/2025",
    },
    {
      amount: "980 USDT",
      description: "Withdrawal",
      transactionId: "ou89v6891878f2cf3e4c9f5",
      status: "successful",
      date: "27/02/2025",
    },
    {
      amount: "980 USDT",
      description: "Withdrawal",
      transactionId: "jh56wq891878f2cf3e4c9f5",
      status: "successful",
      date: "13/02/2025",
    },
    {
      amount: "980 USDT",
      description: "Withdrawal",
      transactionId: "qw34cv891878f2cf3e4c9f5",
      status: "successful",
      date: "30/01/2025",
    },
    {
      amount: "980 USDT",
      description: "Withdrawal",
      transactionId: "lp98ub891878f2cf3e5r43d",
      status: "successful",
      date: "16/01/2025",
    },
  ];

  const adminTwoTransaction = [
    {
      amount: "10000 USDT",
      description: "Withdrawal",
      transactionId: "ksjdk90d4n611fc7575682",
      status: "successful",
      date: "15/04/2025",
    },
    {
      amount: "500 USDT",
      description: "Withdrawal",
      transactionId: "67f8326e289c611fc7575682",
      status: "successful",
      date: "10/04/2025",
    },
    {
      amount: "1000 USDT",
      description: "Withdrawal",
      transactionId: "67f8326e289c611fc7575682",
      status: "successful",
      date: "09/04/2025",
    },
  ];
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex justify-center items-center w-full my-4 bg-black absolute top-[-15px] py-4">
        <a className="block" href="/">
          <img src={brainwaveSymbol} width={40} height={40} alt="Brainwave" />
        </a>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="title mt-[100px]">My Transactions</h1>
      </div>

      {user?.email === "abolajiadedeji2003@gmail.com" && (
        <div className="m-2 md:m-10 overflow-x-auto mt-10">
          <div className="flex min-w-max justify-between gap-x-4 border-b-2 border-gray-200 bg-white p-4">
            {transactionHeading.map((heading, index) => (
              <div
                key={index}
                className="flex flex-col gap-y-4 whitespace-nowrap px-4 py-2 text-center"
              >
                <p className="text-xs font-semibold text-black">
                  {heading.name}
                </p>
              </div>
            ))}
          </div>
          {adminTransaction.length > 0 ? (
            adminTransaction.map((transaction, idx) => (
              <div
                key={idx}
                className="flex min-w-max justify-between gap-x-4 border-b-2 border-gray-200 bg-white p-4"
              >
                {transactionHeading.map((heading, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-y-2 whitespace-nowrap px-4 py-2 text-center"
                  >
                    <p className="text-sm text-gray-800">
                      {transaction[heading.key] ?? "-"}
                    </p>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <div className="w-full min-w-max bg-white p-4">
              <p className="text-black text-center">No transactions yet.</p>
            </div>
          )}
        </div>
      )}

      {user?.email === "abolajiadedeji2030@gmail.com" && (
        <div className="m-2 md:m-10 overflow-x-auto mt-10">
          <div className="flex min-w-max justify-between gap-x-4 border-b-2 border-gray-200 bg-white p-4">
            {transactionHeading.map((heading, index) => (
              <div
                key={index}
                className="flex flex-col gap-y-4 whitespace-nowrap px-4 py-2 text-center"
              >
                <p className="text-xs font-semibold text-black">
                  {heading.name}
                </p>
              </div>
            ))}
          </div>
          {adminTwoTransaction.length > 0 ? (
            adminTwoTransaction.map((transaction, idx) => (
              <div
                key={idx}
                className="flex min-w-max justify-between gap-x-4 border-b-2 border-gray-200 bg-white p-4"
              >
                {transactionHeading.map((heading, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-y-2 whitespace-nowrap px-4 py-2 text-center"
                  >
                    <p className="text-sm text-gray-800">
                      {transaction[heading.key] ?? "-"}
                    </p>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <div className="w-full min-w-max bg-white p-4">
              <p className="text-black text-center">No transactions yet.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Transaction;
