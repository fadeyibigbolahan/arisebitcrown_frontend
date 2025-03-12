import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";

import { useNavigate } from "react-router-dom";
import { brainwave } from "../assets";

const Recharge = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col justify-center items-center overflow-hidden">
        <div className="flex justify-center items-center w-full my-4">
          <a className="block" href="/">
            <img src={brainwave} width={190} height={40} alt="Brainwave" />
          </a>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 rounded-lg bg-white w-[90%] lg:w-[60%] p-4 m-[5px]">
          <div className="flex w-full flex-col gap-6 justify-center items-center">
            <div className="flex flex-col gap-2 justify-center items-center w-2/3">
              <p className="text-black text-xs text-center">Email Address:</p>
              <h2 className="text-black font-bold text-xl md:text-2xl text-center w-[90%]">
                {user?.email}
              </h2>
            </div>

            <div className="flex flex-col gap-2 justify-center items-center w-2/3">
              <p className="text-black text-xs text-center">Account Balance:</p>
              <h2 className="text-black font-bold text-xl md:text-2xl text-center w-[90%]">
                {"0"} USDT
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-start gap-2 rounded-t-lg bg-[#AC6AFF] w-[90%] lg:w-[60%] p-4 m-[5px]">
          <div
            onClick={() => navigate("/me")}
            className="flex flex-row w-full justify-between items-center hover:bg-white/50 p-2 rounded-md"
          >
            <p className="text-black text-xs text-center">BEP20-USDT</p>
            <p className="text-black text-xs text-center">icon</p>
          </div>
          <div
            onClick={() => null}
            className="flex flex-row w-full justify-between items-center hover:bg-white/50 p-2 rounded-md"
          >
            <p className="text-black text-xs text-center">BNB</p>
            <p className="text-black text-xs text-center">icon</p>
          </div>
          <div
            onClick={logout}
            className="flex flex-row w-full justify-between items-center hover:bg-white/50 p-2 rounded-md"
          >
            <p className="text-black text-xs text-center">TRX</p>
            <p className="text-black text-xs text-center">icon</p>
          </div>
          <div
            onClick={logout}
            className="flex flex-row w-full justify-between items-center hover:bg-white/50 p-2 rounded-md"
          >
            <p className="text-black text-xs text-center">TRC20-USDT</p>
            <p className="text-black text-xs text-center">icon</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Recharge;
