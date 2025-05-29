import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTimesCircle } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import SocialLogin from "./SocialLogin";
import { URL_BACKEND_HTTP, URL_BACKEND_HTTPS } from "../../Urls";
import IconCloud from "../custom/IconCloud/IconCloud";
import Spinner from './Spinner';


const SignIn = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isdisabled, setIsdisabled] = useState(false);
  const [type, setType] = useState('password');
  const [eye, setEye] = useState('');
  const [icon, setIcon] = useState('');
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);
  const [noneInput, setNoneInput] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!password || !emailRegex.test(email)) {
      toast.dark('Both input field are required.', {
        position: "top-center",
        icon: <FaTimesCircle className="text-danger" />,
      });
    }
    if (!emailRegex.test(email)) {
      toast.dark('Email input field is required.', {
        position: "top-center",
        icon: <FaTimesCircle className="text-danger" />,
      });
    }
    if (!password && !emailRegex.test(email)) {
      toast.dark('Password input field is required.', {
        position: "top-center",
        icon: <FaTimesCircle className="text-danger" />,
      });
    }
    if (password && emailRegex.test(email)) {
      setIsdisabled(true);
      setNoneInput(true);
      setTimeout(() => {
        setIsdisabled(false);
      }, 3000);
    } else {
      pass;
    }

    const response = await fetch(`${URL_BACKEND_HTTPS}/api/auth/user-home-page/sign-in`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token);
      setIsAuthenticated(true);
      navigate("/");
    } else {
      toast.error(data.error || "No internet Connection", {
        position: "top-center",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="red" strokeWidth="2" width="48" height="48" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <circle cx="12" cy="16" r="1" fill="red" />
          </svg>
        ),
        style: {
          background: '#1E2227',
          borderRadius: '8px',
          color: 'whitesmoke',
        }
      });
    }
  };

  const handleToggle = () => {
    if (type === 'password') {
      setIcon('');
      setEye('eye');
      setType('text');
    } else {
      setIcon('');
      setEye('eye-slash');
      setType('password');
    }
  };

  const handleKeyPress = (event) => {
    setIsCapsLockOn(event.getModifierState('CapsLock'));
  };

  const handleChar = (event) => {
    const charCode = event.which || event.keyCode;
    const character = String.fromCharCode(charCode);
    if (character.toUpperCase() === character && character.toLowerCase() !== character && event.shiftKey) {
      if (!isCapsLockOn) setIsCapsLockOn(true);
    } else {
      setIsCapsLockOn(false);
    }
  };

 

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', height: '130vh', padding: '1rem', textAlign: 'center' }} className='signin container containerAB'>
      <form onSubmit={handleLogin}>
        <h3 className='text-bg-dark p-2 rounded-1'>
          <i className={!password ? "bi bi-lock-fill text-danger" : "bi bi-unlock-fill text-success slide"}></i> Sign In with your Email to get more features.
        </h3>

        <div className="form-group" style={{ marginBottom: '.8rem' }}>
          <input
            onKeyDown={handleChar}
            type="email"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '.5rem', width: '100%' }}
            className="form-control"
            autoComplete='on'
            readOnly={noneInput}
          />
          <label htmlFor="email"><i className={!email ? 'bi bi-envelope-open' : "bi bi-envelope"}></i> Email</label>
        </div>

        <div className="form-group" style={{ marginBottom: '1rem' }}>
          <input
            onClick={() => setIcon('fa-eye-slash')}
            type={type}
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '.5rem', width: '100%' }}
            className="form-control"
            onKeyUp={handleKeyPress}
            maxLength='16'
            autoComplete='on'
            readOnly={noneInput}
          />
          <label htmlFor="password"><i className={!password ? "bi bi-lock" : "bi bi-unlock"}></i> Password</label>
          <span className="flex justify-content-around align-items-center eye" onClick={handleToggle}
            data-tooltip-id="passtooltip"
            data-tooltip-content={eye === 'eye-slash' ? 'show' : 'Hide'}>
            <i className={`fa ${icon} fa-${eye} position-absolute eye`}></i>
          </span>
        </div>

        {isCapsLockOn && (<p className="p-2 text-bg-danger rounded mt-2"><i className="bi bi-exclamation-circle fs-8"></i> Caps Lock is ON</p>)}

        <button className="btn btn-primary mb-3 px-4 position-relative" style={{ padding: '.5rem 1rem', width: '100%' }} type="submit" disabled={isdisabled}>
          {!isdisabled ? 'Sign In' : <Spinner />}
        </button>

        <Tooltip id="passtooltip" />
      </form>

      <div className="text">
        <div className="text1">
          Do not have an account? <span className="text-info"><Link to="/user-home-page/sign-up">Register</Link></span>
        </div>
        <div className="text2">
          Forgot? <span className="text-info"><Link to="/forgot-password">Password</Link></span>
        </div>
      </div>

      <ToastContainer />
      <br />
      <hr className='hr' />

      <SocialLogin />

      {/* Google Login Added */}
     

    </div>
  );
};

export default SignIn;

