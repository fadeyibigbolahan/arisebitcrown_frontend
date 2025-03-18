import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";

import { FaAngleRight } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <div className="flex flex-col justify-center items-center pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <div className="flex flex-col justify-center items-center gap-6 rounded-lg bg-white w-[90%] lg:w-[60%] p-4 m-[5px]">
          <div className="flex w-full flex-col gap-6 justify-center items-center">
            <div className="flex flex-col gap-2 justify-center items-center md:w-2/3 w-full">
              <p className="text-black text-xs text-center">Email Address:</p>
              <h2 className="text-black font-bold text-xl md:text-2xl text-center w-[90%]">
                {user?.email}
              </h2>
            </div>

            <div className="flex flex-col gap-2 justify-center items-center md:w-2/3 w-full">
              <p className="text-black text-xs text-center">Account Balance:</p>
              <h2 className="text-black font-bold text-xl md:text-2xl text-center w-[90%]">
                {user.walletBalance} USDT
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-evenly items-center gap-6 rounded-lg bg-white w-[90%] lg:w-[60%] p-4 m-[5px]">
          <div>
            <button
              onClick={() =>
                alert(
                  "You can only withdraw from your wallet after 2 weeks of task activation."
                )
              }
              className="text-white hover:bg-black text-xs text-center bg-[#AC6AFF] rounded-md p-2"
            >
              Withdraw
            </button>
          </div>
          <div>
            <button
              onClick={() =>
                alert("This feature is unavailable, check back soon.")
              }
              className="text-white hover:bg-black text-xs text-center bg-[#AC6AFF] rounded-md p-2"
            >
              History
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-start gap-6 rounded-t-lg bg-[#AC6AFF] w-[90%] lg:w-[60%] p-4 m-[5px]">
          {/* <div
            onClick={() => navigate("/me")}
            className="flex flex-row w-full justify-between items-center hover:bg-white/50 p-2 rounded-md"
          >
            <p className="text-black text-xs text-center">Change Password</p>
            <p className="text-black text-xs text-center">icon</p>
          </div> */}
          <div
            onClick={logout}
            className="flex flex-row w-full justify-between items-center hover:bg-white/50 p-2 rounded-md"
          >
            <p className="text-black text-xs text-center">Sign Out</p>
            <FaAngleRight className="text-black text-xs text-center" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
