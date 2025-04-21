import React from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { FaBan, FaTimesCircle } from "react-icons/fa";

const ProtectedRoute = ({ isAuthenticated, children }) => {

  const toastId = `unauth-${Math.random().toString(36).substring(2, 8)}`;

  if (!isAuthenticated) {
    toast.error('Unauthorized access. Please sign in to continue.', {
      position: "top-right",
      duration: 4000,
      id: toastId,
      icon: <FaBan className="text-danger" aria-hidden="true" />,
      ariaLive: 'assertive',
      style: {
        background: '#1E2227',
        borderRadius: '10px',
        color: '#F0F8FF',
        border: '1px solid #FFD700',
        padding: '1rem',
        fontSize: '1rem',
        boxShadow: '0 0 10px rgba(255, 215, 0, 0.3)', // subtle gold glow
      },
    });

    return (
      <>
        {/* Accessibility live region for screen readers */}
        <div role="alert" aria-live="assertive" className="sr-only">
          Unauthorized access. Redirecting to sign-in page.
        </div>
        <Navigate to="/user-home-page/sign-in" replace />
      </>
    );
  }

  return children;
};

export default ProtectedRoute;
