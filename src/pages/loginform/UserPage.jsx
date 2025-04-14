import React from 'react';
import { Outlet } from 'react-router-dom';
import Badge from "react-bootstrap/Badge";
import { FaInfoCircle } from "react-icons/fa";

const UserPage = () => {
  const create =()=>{
    window.open("https://gmail.com")
  }
  return (
    <div className="container">
      {/* Intro Section */}
      <section className="mt-2">
        <p className="text-secondary p-4 mt-2 rounded">
          <FaInfoCircle className="me-2" />
          Your account is secure! However, please remember to use a strong and unique password for online safety. 
          For your own security, make sure your account's email address is up-to-date, as you will need it to recover your password if forgotten. 
          <strong>Never share your password with anyone.</strong> {""}
          <Badge bg="success">Last updated: 13 March 2025</Badge>
        </p>
      </section>

      {/* User Account Information Section */}
      <section className="account-info">
        <h1 className='fw-bold fs-2 text-secondary'>Your Account Information</h1>
        <p>
         <i className='bi bi-exclamation fs-4'></i> Ensure your email address is current to receive important notifications, password reset links, and account updates.
        </p>
        <p>
          <strong>Tip:</strong> Always check your email address before logging in to ensure that you are receiving all critical communications.
        </p>
<mark className='p-2'>Don`t have an email address?</mark>
        {/* Action to Update Email */}
        <div className="update-email">
          <button
            className="btn btn-primary"
            onClick={create}
          >
            Create Email Address
          </button>
        </div>
      </section>

      {/* Additional User Information Section */}
      <section className="additional-info mt-4">
        <h3>Important Notes:</h3>
        <ul>
          <li>Be sure to log out after using shared or public devices.</li>
          <li>Use two-factor <b>authentication (2FA)</b> to enhance account security.</li>
          <li>Check your spam or junk folder if you don't see password reset emails.</li>
        </ul>
      </section>

      {/* Password Recovery Link */}
      

      {/* Placeholder for child routes */}
      <Outlet />
    </div>
  );
};

export default UserPage;
