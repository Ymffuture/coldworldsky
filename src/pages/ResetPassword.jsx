import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

const ResetPassword = () => {
  const { token } = useParams();

  // Get token from URL
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const res = await axios.post(
        `http://localhost:5000/api/auth/reset-password/${token}`,
        { newPassword: password }
      );
      setSuccess(res.data.message);
      setError("");
      setTimeout(() => navigate("/login"), 3000); // Redirect to login page
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
      setSuccess("");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {" "}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {" "}
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Reset Password
        </h2>{" "}
        {error && <p className="text-red-500">{error}</p>}{" "}
        {success && <p className="text-green-500">{success}</p>}{" "}
        <form onSubmit={handleSubmit}>
          {" "}
          <div className="mb-4">
            {" "}
            <label className="block text-gray-700">New Password</label>{" "}
            <input
              type="password"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />{" "}
          </div>{" "}
          <div className="mb-4">
            {" "}
            <label className="block text-gray-700">Confirm Password</label>{" "}
            <input
              type="password"
              className="w-full p-2 border rounded"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />{" "}
          </div>{" "}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            {" "}
            Reset Password{" "}
          </button>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};
export default ResetPassword;
