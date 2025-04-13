import React from 'react'
import { Outlet } from 'react-router-dom';
import Badge from "react-bootstrap/Badge";
import { FaInfoCircle } from "react-icons/fa";

const UserPage = () => {
  return (
    <div className="container">
      <section className="intro mt-4">
        <p className="text-secondary p-4 mt-2 rounded">
          <FaInfoCircle className="me-2" />
          Your account is secure! However, please remember to use a strong and unique password for online safety. 
          For your own security, make sure your account's email address is up-to-date, as you will need it to recover your password if forgotten. 
          <strong>Never share your password with anyone.</strong>
          <Badge bg="success">Last updated: 13 October 2025</Badge>
        </p>
      </section>

      {/* User Details or Settings Section */}
      <section className="account-info">
        <h2>Your Account Information</h2>
        <p>
          Ensure your email address is current to receive important notifications, password reset links, and account updates.
        </p>
        <p>
          <strong>Tip:</strong> Always check your email address before logging in to ensure that you are receiving all critical communications.
        </p>

        {/* Action to Update Email */}
        <div className="update-email">
          <button
            className="btn btn-primary"
            onClick={() => alert('Redirect to email update page')}
          >
            Update Email Address
          </button>
        </div>
      </section>

      {/* Additional User Information */}
      <section className="additional-info mt-4">
        <h3>Important Notes:</h3>
        <ul>
          <li>Be sure to log out after using shared or public devices.</li>
          <li>Use two-factor authentication (2FA) to enhance account security.</li>
          <li>Check your spam or junk folder if you don't see password reset emails.</li>
        </ul>
      </section>

      {/* Link to password recovery and email update page */}
      <p className="text-center mt-3">
        <a
          href="/account/reset-password"
          className="text-decoration-none"
          aria-label="Reset your password"
        >
          Forgot your password? Reset here.
        </a>
      </p>

      {/* Placeholder for child routes */}
      <Outlet />
    </div>
  );
};

export default UserPage;
