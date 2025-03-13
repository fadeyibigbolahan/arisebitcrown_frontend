import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../../api";
import cryptomusss from "../assets/cryptomusss.webp";
import Header from "../components/Header";
import { brainwave } from "../assets";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const [message, setMessage] = useState("");

  const onSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(`${url}users/login-user`, {
        email,
        password,
      });

      // Assuming the response contains a token and user dataa
      const { token } = response.data;
      console.log("aut user", response.data);

      setMessage("Login successful!");
      // Save token to local storage (or context)
      localStorage.setItem("authToken", token);
      login({
        email: response.data.email,
        role: response.data.role,
        verificationCode: response.data.verificationCode,
        walletBalance: response.data.walletBalance,
        compeltedTasks: response.data.compeltedTasks,
        transactions: response.data.transactions,
      });

      // Redirect to the dashboard or homepage
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed!");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col md:flex-row items-center justify-center min-h-screen">
      <div className="bg-[#065AD8] hidden md:flex justify-center items-center p-8 shadow-md w-full md:w-1/2 h-screen">
        <img src={cryptomusss} alt="crypt" />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#FFFFFF] md:p-8 shadow-md w-full md:w-1/2 h-screen">
        <div className="md:hidden flex justify-center items-center w-full my-4 bg-black absolute top-[-15px] py-4">
          <a className="block" href="/">
            <img src={brainwave} width={190} height={40} alt="Brainwave" />
          </a>
        </div>
        <form className="space-y-4 w-[80%]">
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md bg-[#FAFCFE] text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md bg-[#FAFCFE] text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            onClick={onSignIn}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        {message && (
          <p className="text-center text-gray-600 text-sm mt-4">{message}</p>
        )}
        <p className="text-center text-gray-600 text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
