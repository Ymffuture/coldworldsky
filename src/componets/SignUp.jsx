import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FaCheckDouble, FaExclamationCircle } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import PasswordChecklist from "react-password-checklist";
import CssLoader from "../pages/Cloader";
import { URL_BACKEND_HTTPS } from '../../Urls';
import Spinner from "./Spinner";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [type, setType] = useState('password');
  const [typeConfirm, setTypeConfirm] = useState('password');
  const [eye, setEye] = useState('');
  const [eyeConfirm, setEyeConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [isdisabled, setIsdisabled] = useState(false);
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  const handleToggle = () => {
    setType(prev => prev === 'password' ? 'text' : 'password');
    setEye(prev => prev === 'eye-slash' ? 'eye' : 'eye-slash');
  };

  const handleToggleConfirm = () => {
    setTypeConfirm(prev => prev === 'password' ? 'text' : 'password');
    setEyeConfirm(prev => prev === 'eye-slash' ? 'eye' : 'eye-slash');
  };

  const handleKeyPress = (event) => {
    setIsCapsLockOn(event.getModifierState("CapsLock"));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!", {
        icon: "⚠️"
      });
      return;
    }

    setLoading(true);
    setIsdisabled(true);

    try {
      const response = await axios.post(`${URL_BACKEND_HTTPS}/api/auth/user-home-page/sign-up`, {
        email,
        password
      });

      toast.success(response.data.message, {
        icon: <FaCheckDouble className="text-success" />,
        style: {
          background: '#1E2227',
          borderRadius: '8px',
          color: 'whitesmoke',
        }
      });
      navigate("/user-home-page/sign-in");
    } catch (error) {
      toast.error(error.response?.data?.error || "Registration failed.", {
        icon: <FaExclamationCircle />,
        style: {
          background: '#1E2227',
          borderRadius: '8px',
          color: 'whitesmoke',
        }
      });
      setLoading(false);
      setIsdisabled(false);
    }
  };

  return (
    <div className='container containerAB' style={{ maxWidth: '600px', margin: 'auto', height: '140vh', padding: '1rem', textAlign: 'center' }}>
      <h3 className='text-bg-dark p-2 rounded-1'>
        <i className={password ? "bi bi-lock-fill text-danger" : "bi bi-unlock-fill text-success"}></i> Create an account and get more features.
      </h3>

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div className="form-group mb-3">
          <input
            className="form-control"
            type="email"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: "0.5rem", width: "100%" }}
          />
          <label htmlFor="email"><i className={!email ? 'bi bi-envelope-open' : "bi bi-envelope"}></i> Email</label>
        </div>

        {/* Password */}
        <div className="form-group mb-3 position-relative">
          <input
            onKeyUp={handleKeyPress}
            type={type}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            style={{ padding: "0.5rem", width: "100%" }}
            autoComplete="new-password"
            maxLength="16"
          />
          <label htmlFor="password"><i className={password ? "bi bi-lock" : "bi bi-unlock"}></i> Password</label>
          <span className="position-absolute eye" style={{ top: "35%", right: "10px", cursor: "pointer" }} onClick={handleToggle}
            data-tooltip-id="passtooltip"
            data-tooltip-content={eye === 'eye-slash' ? 'Show' : 'Hide'}>
            <i className={`fa fa-${eye || 'eye-slash'}`}></i>
          </span>
        </div>

        {/* Confirm Password */}
        <div className="form-group mb-3 position-relative">
          <input
            type={typeConfirm}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="form-control"
            style={{ padding: "0.5rem", width: "100%" }}
            onKeyUp={handleKeyPress}
          />
          <label htmlFor="confirm-password"><i className={confirmPassword ? "bi bi-lock" : "bi bi-unlock"}></i> Confirm Password</label>
          <span className="position-absolute eye" style={{ top: "35%", right: "10px", cursor: "pointer" }} onClick={handleToggleConfirm}
            data-tooltip-id="passtooltip"
            data-tooltip-content={eyeConfirm === 'eye-slash' ? 'Show' : 'Hide'}>
            <i className={`fa fa-${eyeConfirm || 'eye-slash'}`}></i>
          </span>
        </div>

        {/* Caps Lock Warning */}
        {isCapsLockOn && (
          <p className="p-2 text-bg-danger rounded mt-2"><i className="bi bi-exclamation-circle fs-8"></i> Caps Lock is ON</p>
        )}

        {/* Password Checklist */}
        <PasswordChecklist
          rules={["minLength", "specialChar", "number", "capital", "match"]}
          minLength={8}
          value={password}
          valueAgain={confirmPassword}
          onChange={(isValid) => setChecked(isValid)}
          className="text-start small mt-2 px-2 text-light bg-dark rounded shadow-sm"
          messages={{
            minLength: "Minimum 8 characters",
            specialChar: "At least one special character",
            number: "At least one number",
            capital: "At least one capital letter",
            match: "Passwords match",
          }}
          iconComponents={{
            valid: <i className="text-success bi bi-check-circle-fill" />,
            invalid: <i className="text-danger bi bi-x-circle-fill" />
          }}
          style={{ fontSize: ".85rem", lineHeight: "1.8" }}
        />

        {/* Terms Agreement */}
        <label className="form-check mt-3">
          <input
            type="checkbox"
            required
            className="form-check-input"
            disabled={isdisabled}
          /> I agree to
          <span className="text-info"> <Link to="/terms_of_services"> terms and conditions</Link></span>
        </label>

        {/* Submit */}
        <button
          type="submit"
          disabled={isdisabled || !checked}
          className="btn btn-primary px-4 mt-2"
          style={{ padding: ".5rem 1rem", width: "100%" }}
        >
          {!isdisabled ? "Sign Up" : <Spinner />}
        </button>

        {loading && (
          <div className='reg-load mt-2'>
            <CssLoader />
          </div>
        )}

        <Tooltip id="passtooltip" />
      </form>

      <div className="mt-3 text-center">
        Already have an account?{" "}
        <span className="text-info"><Link to="/user-home-page/sign-in">Login</Link></span>
      </div>
    </div>
  );
}

export default Register;

