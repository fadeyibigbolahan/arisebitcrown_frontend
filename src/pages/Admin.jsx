import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Admin() {
  const [taskId, setTaskId] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    console.log("useer admin", user);
    if (!user || user.role !== "admin") {
      setIsAdmin(false);
    } else {
      setIsAdmin(true);
    }
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !taskId) {
      alert("Please enter your email and select a task.");
      return;
    }

    setLoading(true);

    const payload = { email, taskId };

    console.log("payload", payload);

    try {
      const response = await fetch(
        "https://arisebitcrown-api-rpj3.onrender.com/api/tasks/complete-task",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      console.log("resss", response);

      if (response.ok) {
        alert("Payment confirmed!!!");
        setEmail("");
        setTaskId("");
      } else {
        alert("Error confirming payment");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Add user completed task
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-6 border rounded-lg shadow-md w-full md:w-96 bg-white m-4"
      >
        <label className="mb-2 font-medium">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="p-2 border rounded mb-4 w-full"
          required
        />

        <label className="mb-2 font-medium">Select a Task:</label>
        <select
          value={taskId}
          onChange={(e) => setTaskId(e.target.value)}
          className="p-2 border rounded mb-4 w-full"
          required
        >
          <option value="">Select a task</option>
          <option value="67cefab938202ff96bb3f00b">Diamond Quest - $77</option>
          <option value="67cefaeb38202ff96bb3f00e">Golden Touch - $150</option>
          <option value="67cefb2538202ff96bb3f011">
            Platinum Explorer - $300
          </option>
          <option value="67cefb4d38202ff96bb3f014">
            Silver Watcher - $500
          </option>
          <option value="67cefb8138202ff96bb3f017">
            Bronze Reviewer - $700
          </option>
          <option value="67cefba438202ff96bb3f01a">
            Ruby Challenge - $1000
          </option>
          <option value="67cefbcb38202ff96bb3f01d">
            Sapphire Referrers - $3000
          </option>
          <option value="67cefbf738202ff96bb3f020">
            Emerald Clicker - $5000
          </option>
          <option value="67cefc1a38202ff96bb3f023">Opal Creator - $7000</option>
          <option value="67cefc3d38202ff96bb3f026">
            Titanium Analyst - $10000
          </option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className={`p-2 rounded w-full text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? "Processing..." : "Task Completed"}
        </button>
      </form>
    </div>
  );
}
