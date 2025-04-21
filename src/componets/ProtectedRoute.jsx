import React, { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { FaBan } from "react-icons/fa";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  const toastId = useRef(`unauth-${Math.random().toString(36).substr(2, 6)}`).current;

  useEffect(() => {
    if (!isAuthenticated && !toast.isActive(toastId)) {
      toast.error('Unauthorized access. Please sign in to continue.', {
        id: toastId,
        position: "top-right",
        duration: 4000,
        icon: <FaBan className="has-text-danger" />,
        style: {
          background: '#1E2227',
          color: '#F0F8FF',
          border: '1px solid #FFD700',
          borderRadius: '10px',
          padding: '14px',
          fontSize: '1rem',
        },
      });
    }
  }, [isAuthenticated, toastId]);

  if (!isAuthenticated) {
    return <Navigate to="/user-home-page/sign-in" replace />;
  }

  return children;
};

export default ProtectedRoute;

