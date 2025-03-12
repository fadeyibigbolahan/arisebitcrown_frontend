import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { url } from "../../api";
import { useNavigate } from "react-router-dom";
import incomplete from "../assets/incomplete.jpg";

const Tasks = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}tasks`);
        console.log("res reas", response);
        setData(response.data.data); // Assuming the API returns an array of objects
        console.log("res data", data[0]);
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
          {data.map((item) => (
            <div
              onClick={() =>
                navigate(`/details/${item._id}`, { state: { item } })
              }
              className="flex flex-row gap-4 bg-white/50 hover:bg-white/80 rounded-md w-full p-2 cursor-pointer"
            >
              <div className="flex justify-center items-center h-[70px] w-[70px] bg-black rounded-sm">
                <img src={incomplete} width={70} height={70} alt="Brainwave" />
              </div>
              <div key={item._id}>
                <strong>{item.title}</strong>
                <p className="text-sm text-black mt-1">Activation Fee</p>
                <p className="text-black">${item.fee}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tasks;
