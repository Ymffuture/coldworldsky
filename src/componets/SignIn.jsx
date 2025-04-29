
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTimesCircle } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import SocialLogin from "./SocialLogin";
import { URL_BACKEND_HTTP, URL_BACKEND_HTTPS } from "../../Urls";
import IconCloud from "../custom/IconCloud/IconCloud";
import Spinner from './Spinner'
import { GoogleLogin } from "@react-oauth/google"; // Google login import
import { jwtDecode } from "jwt-decode";

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
      toast.dark('Both input fields are required.', {
        position: "top-center",
        duration: 3000,
        icon: <FaTimesCircle className="text-danger" />,
      })
    }

    if (password && emailRegex.test(email)) {
      setIsdisabled(true);
      setNoneInput(true);
      setTimeout(() => {
        setIsdisabled(false);
      }, 30000);
    }

    // Call the backend login API
    const response = await fetch(`${URL_BACKEND_HTTPS}/api/auth/user-home-page/sign-in`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Save token to localStorage
      localStorage.setItem("token", data.token);
      setIsAuthenticated(true); 
      navigate("/");
    } else {
      toast.error(data.error || "No internet Connection", {
        position: "top-center",
        duration: 8000,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-slash" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.112 5.112a3 3 0 0 0-.17.613C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13H11l-1-1H3.781C2.231 12 1 10.785 1 9.318c0-1.365 1.064-2.513 2.46-2.666l.446-.05v-.447q0-.113.018-.231zm2.55-1.45-.725-.725A5.5 5.5 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773a3.2 3.2 0 0 1-1.516 2.711l-.733-.733C14.498 11.378 15 10.626 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3c-.875 0-1.678.26-2.339.661z"/>
  <path d="m13.646 14.354-12-12 .708-.708 12 12z"/>
</svg>, 
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
    if (event.getModifierState('CapsLock')) {
      setIsCapsLockOn(true);
    } else {
      setIsCapsLockOn(false);
    }
  };

  const handleChar = (event) => {
    const charCode = event.which || event.keyCode;
    const charater = String.fromCharCode(charCode);
    if (charater.toUpperCase() === charater && charater.toLowerCase() !== charater && event.shiftKey) {
      if (!isCapsLockOn) {
        setIsCapsLockOn(true);
      }
    } else {
      setIsCapsLockOn(false);
    }
  };

  const handleGoogleSuccess = (response) => {
    const decoded = jwtDecode(response.credential);
    const { name, email, picture } = decoded;
    
    // You can call your backend API here to check if the user already exists.
    localStorage.setItem("googleUser", JSON.stringify({ name, email, picture }));
    setIsAuthenticated(true);
    navigate("/");
  };

  const handleGoogleFailure = () => {
    toast.error("Google Login failed. Please try again.");
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', height: '130vh', padding: '1rem', textAlign: 'center' }} className='signin container containerAB'>
      <form onSubmit={handleLogin}>
        <h3 className=' text-bg-dark p-2 rounded-1'>
          <i className={!password ? "bi bi-lock-fill text-danger" : "bi bi-unlock-fill text-success slide"}></i> {""}
          Sign In with your Email to get more features.
        </h3>

        <div style={{ marginBottom: '.8rem' }} className="form-group">
          <input
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

        <div style={{ marginBottom: '1rem' }} className="form-group">
          <input
            onClick={() => setIcon('fa-eye-slash')}
            type={type}
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '.5rem', width: '100%' }}
            className=" form-control"
            onKeyUp={handleKeyPress}
            maxLength='16'
            autoComplete='on'
            readOnly={noneInput}
          />
          <label htmlFor="email"><i className={!password ? "bi bi-lock" : "bi bi-unlock"}></i>Password</label>

          <span className="flex justify-content-around align-items-center eye" onClick={handleToggle} data-tooltip-id="passtooltip" data-tooltip-content={eye === 'eye-slash' ? 'show' : 'Hide'}>
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
          Do not have an account? <span className=" text-info"> <Link to="/user-home-page/sign-up">Register</Link></span>
        </div>
        <div className="text2">
          Forgot? <span className=" text-info"> <Link to="/forgot-password">Password</Link></span>
        </div>
      </div>

      <ToastContainer />
      <br />
      <hr className='hr' />

      {/* Google Login Integration */}
      <div className="social-login">
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleFailure}
          theme="filled_black"
          size="large"
        />
      </div>
    </div>
  );
};

export default SignIn;
