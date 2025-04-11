import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";

const Team = () => {
  const { user, logout } = useAuth();

  const [invitationCode, setInvitationCode] = useState("");
  const [invitationLink, setInvitationLink] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    console.log("t user", user);
    if (user) {
      setInvitationCode(user.verificationCode),
        setInvitationLink(
          `https://arisebitcrown.com/#/signup?ic=${user.verificationCode}`
        );
    }
  }, [user]);

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
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <div className="flex flex-col justify-center items-center pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <div className="flex flex-col justify-center items-center gap-6 rounded-lg bg-white w-[90%] lg:w-[60%] p-4 m-[5px]">
          <div className="flex w-full md:flex-row flex-col justify-center items-center">
            <div className="flex flex-col gap-4 justify-center items-center w-2/3">
              <p className="text-black text-xs">Invitation code:</p>
              <h2 className="text-black font-bold text-2xl">
                {invitationCode}
              </h2>
            </div>
            <div className="flex justify-center items-center w-1/3">
              <button
                onClick={() => handleCopy(invitationCode)}
                className="bg-black text-white rounded-full px-2"
              >
                copy
              </button>
            </div>
          </div>
          <div className="flex w-full md:flex-row flex-col justify-center items-center">
            <div className="flex flex-col gap-4 justify-center items-center w-2/3">
              <p className="text-black text-xs text-center">
                Share your referral link and start earning:
              </p>
              <h2 className="text-black font-bold md:text-xl text-center">
                {invitationLink}
              </h2>
            </div>
            <div className="flex justify-center items-center w-1/3">
              <button
                onClick={() => handleCopy(invitationLink)}
                className="bg-black text-white rounded-full px-2"
              >
                copy
              </button>
            </div>
          </div>
          {copied && (
            <span style={{ color: "green", marginLeft: "10px" }}>Copied!</span>
          )}
        </div>
        <div className="flex flex-col justify-center items-center gap-6 rounded-lg bg-[#AC6AFF] w-[90%] lg:w-[60%] p-4 m-[5px]">
          <div className="flex flex-row justify-evenly items-center w-full">
            <div className="flex flex-col gap-4 justify-center items-center">
              <p className="text-black text-xs">Team size:</p>
              <h2 className="text-black font-bold text-xl">
                {user?.email === "abolajiadedeji2003@gmail.com"
                  ? "15"
                  : user?.email === "abolajiadedeji2030@gmail.com"
                  ? "3"
                  : "0"}
              </h2>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <p className="text-black text-xs">Team recharge:</p>
              <h2 className="text-black font-bold text-xl">
                {" "}
                {user?.email === "abolajiadedeji2003@gmail.com"
                  ? "$5500"
                  : user?.email === "abolajiadedeji2030@gmail.com"
                  ? "$1090"
                  : "$0.00"}
              </h2>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <p className="text-black text-xs">Team withdrawal:</p>
              <h2 className="text-black font-bold text-xl">
                {" "}
                {user?.email === "abolajiadedeji2003@gmail.com"
                  ? "$11760"
                  : user?.email === "abolajiadedeji2030@gmail.com"
                  ? "$5090"
                  : "$0.00"}
              </h2>
            </div>
          </div>
          <div className="flex flex-row justify-evenly items-center w-full">
            <div className="flex flex-col gap-4 justify-center items-center">
              <p className="text-black text-xs">New team:</p>
              <h2 className="text-black font-bold text-xl">0</h2>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <p className="text-black text-xs">First time recharge:</p>
              <h2 className="text-black font-bold text-xl">$0: 00</h2>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <p className="text-black text-xs">First withdrawal:</p>
              <h2 className="text-black font-bold text-xl">
                {" "}
                {user?.email === "abolajiadedeji2003@gmail.com"
                  ? "$980"
                  : user?.email === "abolajiadedeji2030@gmail.com"
                  ? "$500"
                  : "$0"}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
