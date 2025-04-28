import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaBan } from "react-icons/fa";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  const navigate = useNavigate();
  const toastId = useRef(`unauth-${Math.random().toString(36).substring(2, 8)}`).current;
  const googleCred = localStorage.getItem("google_credential");
  const authOK = isAuthenticated || Boolean(googleCred);

  useEffect(() => {
    if (!authOK && !toast.isActive(toastId)) {
      toast.error("Unauthorized access. Please sign in to continue.", {
        position: "top-right",
        duration: 4000,
        id: toastId,
        icon: <FaBan aria-hidden="true" />,
        ariaLive: "assertive",
        style: {
          background: "#1E2227",
          borderRadius: "10px",
          color: "#F0F8FF",
          border: "1px solid #FFD700",
          padding: "1rem",
          fontSize: "1rem",
          boxShadow: "0 0 10px rgba(255,215,0,0.3)",
        },
      });
      console.info("ProtectedRoute: unauthorized, scheduling redirect...");

      setTimeout(() => {
        navigate("/user-home-page/sign-in", { replace: true });
      }, 300); // Delay a bit longer so toast fully shows
    }
  }, [authOK, navigate, toastId]);

  if (!authOK) {
    return (
      <>
        <div role="alert" aria-live="assertive" className="sr-only">
          Unauthorized—redirecting to sign-in
        </div>
        {/* Optionally show a loading spinner here if you want */}
      </>
    );
  }

  return children;
};

export default ProtectedRoute;
