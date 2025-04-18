import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FaCheckDouble, FaExclamationCircle } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import PasswordCheck from "react-password-check";
import CssLoader from "../pages/Cloader";
import { URL_BACKEND_HTTPS } from '../../Urls';
import Spinner from "./Spinner";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [type, setType] = useState('password');
  const [typeConfirm, setTypeConfirm] = useState('password');
  const [eye, setEye] = useState('eye-slash');
  const [eyeConfirm, setEyeConfirm] = useState('eye-slash');
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const toggleEye = () => {
    setType(type === 'password' ? 'text' : 'password');
    setEye(eye === 'eye-slash' ? 'eye' : 'eye-slash');
  };

  const toggleEyeConfirm = () => {
    setTypeConfirm(typeConfirm === 'password' ? 'text' : 'password');
    setEyeConfirm(eyeConfirm === 'eye-slash' ? 'eye' : 'eye-slash');
  };

  const handleKeyPress = (event) => {
    setIsCapsLockOn(event.getModifierState("CapsLock"));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!", { icon: "⚠️" });
      return;
    }

    setLoading(true);
    setIsDisabled(true);
    try {
      const response = await axios.post(`${URL_BACKEND_HTTPS}/api/auth/user-home-page/sign-up`, {
        email,
        password,
      });

      toast.success(response.data.message, {
        icon: <FaCheckDouble />,
        style: {
          background: "#1E2227",
          borderRadius: "8px",
          color: "whitesmoke",
        },
      });

      navigate("/user-home-page/sign-in");
    } catch (error) {
      toast.error(error.response?.data?.error || "Registration failed.", {
        icon: <FaExclamationCircle />,
        style: {
          background: "#1E2227",
          borderRadius: "8px",
          color: "whitesmoke",
        },
      });
    } finally {
      setLoading(false);
      setIsDisabled(false);
    }
  };

  return (
    <div className="container" style={{ maxWidth: 600, margin: "auto", padding: "1rem", textAlign: "center" }}>
      <h3 className="text-bg-dark p-2 rounded">
        <i className={password ? "bi bi-lock-fill text-danger" : "bi bi-unlock-fill text-success"}></i> Create an account and get more features.
      </h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3 text-start">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            value={email}
            placeholder="you@example.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group mb-3 text-start position-relative">
          <label>Password</label>
          <input
            className="form-control"
            type={type}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyUp={handleKeyPress}
            required
          />
          <span className="position-absolute end-0 top-50 translate-middle-y px-3" onClick={toggleEye}>
            <i className={`fa fa-${eye}`}></i>
          </span>
        </div>

        <div className="form-group mb-3 text-start position-relative">
          <label>Confirm Password</label>
          <input
            className="form-control"
            type={typeConfirm}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onKeyUp={handleKeyPress}
            required
          />
          <span className="position-absolute end-0 top-50 translate-middle-y px-3" onClick={toggleEyeConfirm}>
            <i className={`fa fa-${eyeConfirm}`}></i>
          </span>
        </div>

        {isCapsLockOn && (
          <p className="text-danger text-start">
            <i className="bi bi-exclamation-circle"></i> Caps Lock is ON
          </p>
        )}

        <div className="text-start mb-3">
          <PasswordCheck
            minLength={8}
            capital={1}
            specialChar={1}
            number={1}
            password={password}
          />
        </div>

        <div className="form-check mb-3 text-start">
          <input
            type="checkbox"
            className="form-check-input"
            required
            disabled={isDisabled}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label className="form-check-label">
            I agree to <Link to="/terms_of_services" className="text-info">terms and conditions</Link>
          </label>
        </div>

        <button className="btn btn-primary w-100" type="submit" disabled={isDisabled}>
          {loading ? <Spinner /> : "Sign Up"}
        </button>

        {loading && <CssLoader />}
      </form>

      <div className="mt-3">
        Already have an account? <Link to="/user-home-page/sign-in" className="text-info">Login</Link>
      </div>

      <Tooltip id="passtooltip" />
    </div>
  );
}

export default Register;

