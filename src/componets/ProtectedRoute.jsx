// ProtectedRoute.jsx
import React, { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { FaBan } from "react-icons/fa";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  // Generate a stable toast ID
  const toastId = useRef(`unauth-${Math.random().toString(36).substring(2,8)}`).current;

  // Also allow Google login: store their credential when they sign in
  const googleCred = localStorage.getItem("google_credential");
  const authOK = isAuthenticated || Boolean(googleCred);

  useEffect(() => {
    if (!authOK && !toast.isActive(toastId)) {
      toast.error("Unauthorized access. Please sign in to continue.", {
        position: "top-right",
        duration: 4000,
        id: toastId,
        icon: <FaBan aria-hidden="true"/>,
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
      console.info("ProtectedRoute: unauthorized, redirecting");
    }
  }, [authOK, toastId]);

  if (!authOK) {
    return (
      <>
        {/* for screen‐readers */}
        <div role="alert" aria-live="assertive" className="sr-only">
          Unauthorized—redirecting to sign-in
        </div>
        <Navigate to="/user-home-page/sign-in" replace />
      </>
    );
  }

  return children;
};

export default ProtectedRoute;

