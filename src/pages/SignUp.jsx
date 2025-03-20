import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { url } from "../../api";

import cryptomusss from "../assets/cryptomusss.webp";
import Header from "../components/Header";
import { brainwave } from "../assets";
import brainwaveSymbol from "../assets/brainwave-symbol.svg";

const SignUp = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    referral: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const ic = searchParams.get("ic");
    if (ic) {
      setFormData((prevData) => ({ ...prevData, referral: ic }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      console.log("formdata", formData);
      const response = await axios.post(`${url}users/register-user`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      setMessage("Registration successful!");
      console.log("Response:", response.data);

      // Redirect to login or dashboard after successful registration
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed!");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col md:flex-row items-center justify-center">
      <div className="bg-[#065AD8] hidden md:flex justify-center items-center p-8 shadow-md w-full md:w-1/2 h-screen">
        <img src={cryptomusss} alt="crypt" />
      </div>
      <div
        style={{ backgroundImage: `url(${cryptomusss})` }}
        className="flex justify-center items-center w-full md:w-1/2"
      >
        <div className="flex flex-col justify-center items-center bg-black/80 md:p-8 p-4 shadow-md w-full">
          <div className="md:hidden flex justify-center items-center w-full my-4 bg-black fixed top-[-15px] py-4">
            <a className="block" href="/">
              <img
                src={brainwaveSymbol}
                width={40}
                height={40}
                alt="Brainwave"
              />
            </a>
          </div>
          <div className="h-[100px]"></div>
          <form onSubmit={onSignUp} className="space-y-4 w-[90%]">
            <div>
              <label className="block text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md bg-[#FAFCFE] text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md bg-[#FAFCFE] text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md bg-[#FAFCFE] text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md bg-[#FAFCFE] text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600">Referral Code</label>
              <input
                type="text"
                name="referral"
                value={formData.referral}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md bg-[#FAFCFE] text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter referral code (optional)"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
          {message && (
            <p className="text-center text-gray-600 text-sm mt-4">{message}</p>
          )}
          <p className="text-center text-gray-600 text-sm mt-4">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-500 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
