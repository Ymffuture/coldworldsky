import { useState } from "react";
import axios from "axios";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        { email }
      );
      setMessage(res.data.message);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {" "}
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Forgot Password
        </h2>{" "}
        {error && <p className="text-red-500">{error}</p>}{" "}
        {message && <p className="text-green-500">{message}</p>}{" "}
        <form onSubmit={handleSubmit}>
          {" "}
          <div className="mb-4">
            {" "}
            <label className="block text-gray-700">Enter Your Email</label>{" "}
            <input
              type="email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />{" "}
          </div>{" "}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            {" "}
            Send Reset Link{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
