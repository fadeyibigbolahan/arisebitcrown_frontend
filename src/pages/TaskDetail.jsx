import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { brainwave } from "../assets";
import bep20 from "../assets/bep20.webp";
import trc20 from "../assets/trc20.jpg";
import { FaAngleRight } from "react-icons/fa";

const TaskDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {}; // Get the passed object
  const [modalVisible, setModalVisible] = useState(false);
  const [activePayment, setActivePayment] = useState("BEP20-USDT");
  const [copied, setCopied] = useState(false);

  if (!item) {
    return <p>No data available. Please go back and select an item.</p>;
  }

  const handleCopy = (textToCopy) => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
      })
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col justify-center items-center overflow-hidden">
        <div className="flex justify-center items-center w-full my-4">
          <a className="block" href="/">
            <img src={brainwave} width={190} height={40} alt="Brainwave" />
          </a>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 bg-[#AC6AFF] rounded-lg w-[90%] lg:w-[60%] p-4 m-[5px]">
          <div className="flex justify-center items-center flex-col">
            <h3 className="font-bold text-[18px] mb-8">{item.title}</h3>
            <p className="mt-2 bg-black py-1 px-2 rounded-md mb-1">
              Activation fee:
            </p>
            <h3 className="font-bold text-[15px]">{item.fee} USDT</h3>
            <p className="mt-4 bg-black py-1 px-2 rounded-md mb-1">
              Daily earning:
            </p>
            <h3 className="font-bold text-[15px]">{item.reward} USDT</h3>
          </div>
          <p>{item.body}</p>
          <div className="flex md:flex-row flex-col justify-center items-center gap-3">
            <button
              className="mt-4 bg-black py-1 px-2 rounded-md mb-1 hover:bg-white hover:text-black"
              onClick={() => setModalVisible(true)}
            >
              Start
            </button>
            <button
              className="text-sm"
              onClick={() => navigate(-1)}
              style={{ marginTop: "10px", fontSize: 12 }}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
      {modalVisible && (
        <div className="flex justify-center items-start top-0 absolute w-[100%] h-[100%] bg-black/70 p-4 py-[100px]">
          <div className="flex justify-center items-center gap-4 flex-col md:w-[70%] w-full bg-white rounded-md p-4">
            <div className="flex justify-between flex-row items-center w-full">
              <div />
              <div>
                <p className="text-sm text-black">Select payment method</p>
              </div>
              <div>
                <button
                  className="text-xs text-black"
                  onClick={() => setModalVisible(false)}
                >
                  close
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center gap-4">
              <div className="flex flex-col justify-evenly items-start gap-2 rounded-t-lg bg-[#AC6AFF] w-full">
                <div
                  onClick={() => setActivePayment("BEP20-USDT")}
                  className="flex flex-row w-full justify-between items-center hover:bg-white/50 p-2 rounded-md"
                >
                  <p className="text-black text-xs text-center">BEP20-USDT</p>
                  <FaAngleRight className="text-black text-xs text-center" />
                </div>
                <div
                  onClick={() => setActivePayment("TRC20-USDT")}
                  className="flex flex-row w-full justify-between items-center hover:bg-white/50 p-2 rounded-md"
                >
                  <p className="text-black text-xs text-center">TRC20-USDT</p>
                  <FaAngleRight className="text-black text-xs text-center" />
                </div>
              </div>
              {activePayment === "BEP20-USDT" && (
                <div className="flex flex-col justify-center items-center w-full">
                  <div className="flex flex-row justify-center items-center gap-2">
                    <img src={bep20} width={20} height={20} />
                    <h3 className="text-black font-semibold my-2">
                      BEP20-USDT
                    </h3>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-6 rounded-lg bg-white md:w-[90%] w-full lg:w-[60%] p-4 m-[5px]">
                    <div className="flex w-full flex-col justify-center items-center gap-2">
                      <div className="flex flex-col gap-4 justify-center items-center w-full mt-2">
                        <p className="text-black text-xs text-center">
                          Activation Fee:
                        </p>
                        <h2 className="text-black bg-gray-200 w-full p-2 rounded-full font-bold text-xs text-center text-wrap">
                          {item.fee} USDT
                        </h2>
                      </div>
                      <div className="flex flex-col gap-4 justify-center items-center w-full">
                        <p className="text-black text-xs text-center">
                          Address:
                        </p>
                        <h2 className="text-black bg-gray-200 w-full p-2 rounded-full font-bold text-xs text-center text-wrap">
                          {"0x4516c29302e68cE3013Af61Db093489f486983e0"}
                        </h2>
                      </div>
                      <div className="flex justify-center items-center w-1/3">
                        <button
                          onClick={() =>
                            handleCopy(
                              "0x4516c29302e68cE3013Af61Db093489f486983e0"
                            )
                          }
                          className="bg-black text-white rounded-full px-2"
                        >
                          copy
                        </button>
                      </div>
                    </div>
                    {copied && (
                      <span style={{ color: "green", marginLeft: "10px" }}>
                        Copied!
                      </span>
                    )}
                  </div>
                  <Link to="/confirm-payment">
                    <button className="bg-black text-white rounded-md p-1 px-2 my-4 shadow-md">
                      Click here after payment is successful to submit proof
                    </button>
                  </Link>
                  <div className="flex flex-col text-sm justify-center items-start gap-4 rounded-md bg-[#AC6AFF] p-4">
                    <p>
                      1. Copy the address above or scan the QR code and select
                      the BNB Smart Chain (BEP20) network to deposit USDT
                    </p>
                    <p>
                      2. Please do not recharge other non-BNB Smart
                      Chain(BEP20)-USDT assets, the funds will arrive in your
                      account in about 1 to 3 minutes after recharging
                    </p>
                    <p>
                      3. If it does not arrive for a long time, please refresh
                      the page or contact customer service
                    </p>
                  </div>
                </div>
              )}

              {activePayment === "TRC20-USDT" && (
                <div className="flex flex-col justify-center items-center w-full">
                  <div className="flex flex-row justify-center items-center gap-2">
                    <img src={trc20} width={20} height={20} />
                    <h3 className="text-black font-semibold my-2">
                      TRC20-USDT
                    </h3>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-6 rounded-lg bg-white md:w-[90%] w-full lg:w-[60%] p-4 m-[5px]">
                    <div className="flex w-full flex-col justify-center items-center gap-2">
                      <div className="flex flex-col gap-4 justify-center items-center w-full mt-2">
                        <p className="text-black text-xs text-center">
                          Activation Fee:
                        </p>
                        <h2 className="text-black bg-gray-200 w-full p-2 rounded-full font-bold text-xs text-center text-wrap">
                          {item.fee} USDT
                        </h2>
                      </div>
                      <div className="flex flex-col gap-4 justify-center items-center w-full">
                        <p className="text-black text-xs text-center">
                          Address:
                        </p>
                        <h2 className="text-black bg-gray-200 w-full p-2 rounded-full font-bold text-xs text-center text-wrap">
                          {"TPu9WBNufC5NBEpdNBMrqxyZomnfYhL8oL"}
                        </h2>
                      </div>
                      <div className="flex justify-center items-center w-1/3">
                        <button
                          onClick={() =>
                            handleCopy("TPu9WBNufC5NBEpdNBMrqxyZomnfYhL8oL")
                          }
                          className="bg-black text-white rounded-full px-2"
                        >
                          copy
                        </button>
                      </div>
                    </div>
                    {copied && (
                      <span style={{ color: "green", marginLeft: "10px" }}>
                        Copied!
                      </span>
                    )}
                  </div>
                  <Link to="/confirm-payment">
                    <button className="bg-black text-white rounded-md p-1 px-2 my-4 shadow-md">
                      Click here after payment is successful to submit proof
                    </button>
                  </Link>
                  <div className="flex flex-col text-sm justify-center items-start gap-4 rounded-md bg-[#AC6AFF] p-4">
                    <p>
                      1. Copy the address above or scan the QR code and choose
                      Tron (TRC20) network to deposit USDT
                    </p>
                    <p>
                      2. Please do not recharge other non-Tron(TRC20)-USDT
                      assets. The funds will arrive in your account in about 1
                      to 3 minutes after recharging. Account
                    </p>
                    <p>
                      3. If it does not arrive for a long time, please refresh
                      the page or contact customer service
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskDetail;
