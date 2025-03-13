import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { url } from "../../api";
import { useNavigate } from "react-router-dom";
import incomplete from "../assets/incomplete.jpg";

import { useAuth } from "../context/AuthContext";

const Tasks = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // Example completed task IDs
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    console.log("task user", user);
    setCompletedTasks([...user.compeltedTasks]);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}tasks`);
        console.log("API Response:", response.data.data);
        setData(response.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <div className="flex justify-center items-center w-full mt-[70px] p-5 self-center">
        <div className="flex flex-col p-3 gap-4 justify-center items-start md:w-[60%] w-full bg-[#AC6AFF] rounded-md">
          {data.map((item) => {
            const isCompleted = completedTasks.includes(item._id?.toString());

            console.log("Task ID:", item._id, "Completed:", isCompleted); // Debugging

            return (
              <div
                key={item._id}
                onClick={(e) => {
                  if (isCompleted) {
                    console.log("Task is completed, click prevented.");
                    e.stopPropagation(); // Prevents bubbling
                    e.preventDefault(); // Stops navigation
                    return;
                  }
                  navigate(`/details/${item._id}`, { state: { item } });
                }}
                className={`flex flex-row gap-4 rounded-md w-full p-2 
                  ${
                    isCompleted
                      ? "bg-gray-400 cursor-not-allowed pointer-events-none"
                      : "bg-white/50 hover:bg-white/80 cursor-pointer"
                  }`}
              >
                <div className="flex justify-center items-center h-[70px] w-[70px] bg-black rounded-sm">
                  <img
                    src={incomplete}
                    width={70}
                    height={70}
                    alt="Brainwave"
                  />
                </div>
                <div>
                  <strong>{item.title}</strong>
                  <p className="text-sm text-black mt-1">Activation Fee</p>
                  <p className="text-black">${item.fee}</p>
                  {isCompleted && (
                    <p className="text-red-500 text-sm mt-1">Completed</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tasks;
