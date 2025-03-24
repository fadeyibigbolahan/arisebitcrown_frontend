import { useState } from "react";
import { url } from "../../api";
import { useAuth } from "../context/AuthContext";

export default function UploadForm() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const { user } = useAuth();

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!text || !image) {
      alert("Please select a task and upload a receipt.");
      return;
    }

    setLoading(true); // Start loading

    const formData = new FormData();
    formData.append("email", user.email);
    formData.append("text", text);
    formData.append("image", image);

    try {
      const response = await fetch(
        "https://arisebitcrown-api.onrender.com/send-email",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        alert("Email sent successfully! Check back in the next 5 minutes.");
        setText("");
        setImage(null);
      } else {
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
      <p className="mb-4">Please upload the payment receipt.</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center p-4 border rounded-lg shadow-md md:w-1/2 w-full"
      >
        <div className="flex flex-col justify-center items-center mb-4 gap-2">
          <span className="bg-white p-1 rounded-sm text-black ml">
            Account:
          </span>
          <p>{user?.email}</p>
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
          className="mb-4 flex justify-center items-center"
        />
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
