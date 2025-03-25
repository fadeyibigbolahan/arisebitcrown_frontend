import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function UploadForm() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const { user } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!text) {
      alert("Please select a task.");
      return;
    }

    setLoading(true); // Start loading

    const payload = {
      email: user?.email,
      text,
    };

    console.log("Sending Payload:", payload); // Debugging

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Email sent successfully! Check back in the next 5 minutes.");
        setText("");
      } else {
        const errorText = await response.text();
        console.error("Response Error:", errorText);
        alert("Error sending email.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send email.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Confirm Payment</h1>
      <p className="mb-4">Please select a task.</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center p-4 border rounded-lg shadow-md md:w-1/2 w-full"
      >
        <div className="flex flex-col justify-center items-center mb-4 gap-2">
          <span className="bg-white p-1 rounded-sm text-black">Account:</span>
          <p>{user?.email}</p>
        </div>
        <select
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className="mb-4 p-2 border rounded w-full"
        >
          <option value="">Select a task</option>
          <option value="$77">Diamond Quest - $77</option>
          <option value="$150">Golden Touch - $150</option>
          <option value="$300">Platinum Explorer - $300</option>
          <option value="$500">Silver Watcher - $500</option>
          <option value="$700">Bronze Reviewer - $700</option>
          <option value="$1000">Ruby Challenge - $1000</option>
          <option value="$3000">Sapphire Referrers - $3000</option>
          <option value="$5000">Emerald Clicker - $5000</option>
          <option value="$7000">Opal Creator - $7000</option>
          <option value="$10000">Titanium Analyst - $10000</option>
        </select>

        <button
          type="submit"
          disabled={loading} // Disable button while loading
          className={`mt-4 p-2 rounded w-full text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? "Processing..." : "Confirm Payment"}
        </button>
      </form>
    </div>
  );
}
