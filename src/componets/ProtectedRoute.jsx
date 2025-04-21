import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { FaBan } from "react-icons/fa";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  const toastId = React.useRef(`unauth-${crypto.randomUUID().slice(0, 6)}`).current;

  useEffect(() => {
    if (!isAuthenticated) {
      const alreadyShown = toast.isActive(toastId);
      if (!alreadyShown) {
        toast.error('Unauthorized access. Please sign in to continue.', {
          position: "top-right",
          duration: 4000,
          icon: <FaBan className="text-danger" aria-hidden="true" />,
          id: toastId,
          ariaLive: 'assertive',
          style: {
            background: '#1E2227',
            borderRadius: '10px',
            color: '#F0F8FF', // light blue for visibility
            border: '1px solid #FFD700', // gold border
            padding: '14px',
            fontSize: '1rem',
          },
        });

        // Optional analytics or logging
        console.info("ProtectedRoute: Unauthorized access attempt logged.");
      }
    }
  }, [isAuthenticated, toastId]);

  if (!isAuthenticated) {
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
