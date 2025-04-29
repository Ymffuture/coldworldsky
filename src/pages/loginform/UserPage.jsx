import React, { useMemo } from "react";
import { Outlet } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Fuse from "fuse.js";

const UserPage = () => {
  const create = () => {
    window.open("https://gmail.com", "_blank", "noopener,noreferrer");
  };

  // Example Fuse.js setup for future email providers or security tips search
  const tips = useMemo(() => [
    { tip: "Use two-factor authentication (2FA)" },
    { tip: "Never share your password" },
    { tip: "Check your spam folder" },
  ], []);
  const fuse = new Fuse(tips, { keys: ["tip"] });

  return (
    <div className="container px-4 py-5">
      {/* Intro Message */}
      <motion.section
        className="box has-background-light mb-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        role="alert"
        aria-live="polite"
      >
        <p className="is-size-6 has-text-grey-dark">
          <FaInfoCircle className="mr-2 has-text-info" />
          <strong className="has-text-primary">Your account is secure!</strong> Please ensure your password is strong and your email address is up-to-date.
          <br />
          <span className="tag is-success is-light mt-2">Last updated: 13 March 2025</span>
        </p>
      </motion.section>

      {/* Account Info */}
      <motion.section
        className="content"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h1 className="title is-4 has-text-grey-dark">Your Account Information</h1>
        <p>
          <i className="bi bi-exclamation-triangle-fill has-text-warning"></i> Keep your email updated for notifications and password resets.
        </p>
        <p>
          <strong>Tip:</strong> Double-check your email before logging in.
        </p>
      

        <div className="buttons">
  <motion.button
    className="button is-rounded"
    onClick={create}
    whileHover={{
      scale: 1.05,
      boxShadow: "0 0 10px #1E90FF, 0 0 20px #1E90FF",
    }}
    whileTap={{ scale: 0.95 }}
    style={{
      background: "transparent",
      border: "none",
      outline: "2px solid #1E90FF",
      color: "#1E90FF",
      padding: "0.75rem 1.5rem",
      fontSize: "1.1rem",
      fontWeight: "600",
      transition: "all 0.3s ease-in-out",
      cursor: "pointer",
    }}
  >
    Create Email Address
  </motion.button>
</div>

      </motion.section>

      {/* Security Tips */}
      <motion.section
        className="box mt-5"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="subtitle is-5 has-text-weight-bold">Important Notes:</h2>
        <ul className="has-text-grey-darker">
          <li>• Log out after using shared or public devices.</li>
          <li>• Enable <strong>2FA</strong> for maximum security.</li>
          <li>• Check spam/junk folders for password reset emails.</li>
        </ul>
      </motion.section>

      {/* Route Injection */}
      <Outlet />
    </div>
  );
};

export default UserPage;

