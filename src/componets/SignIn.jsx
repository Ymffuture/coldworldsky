import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTimesCircle } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { URL_BACKEND_HTTPS } from "../../Urls";
import IconCloud from "../custom/IconCloud/IconCloud";
import Spinner from "./Spinner";

const SignIn = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isdisabled, setIsdisabled] = useState(false);
  const [type, setType] = useState("password");
  const [eye, setEye] = useState("");
  const [icon, setIcon] = useState("");
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);
  const [noneInput, setNoneInput] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!password || !emailRegex.test(email)) {
      toast.error("Both input fields are required.", {
        position: "top-center",
        duration: 3000,
        icon: <FaTimesCircle className="text-danger" />,
        style: {
          background: "#1E2227",
          borderRadius: "8px",
          color: "whitesmoke",
        },
      });
      return;
    }

    setIsdisabled(true);
    setNoneInput(true);
    setTimeout(() => {
      setIsdisabled(false);
      setNoneInput(false);
    }, 30000);

    try {
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
        throw new Error(data.error || "Login failed");
      }
    } catch (error) {
      toast.error(error.message || "No internet connection", {
        position: "top-center",
        duration: 8000,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FF4C4C"
            viewBox="0 0 24 24"
            width="48"
            height="48"
          >
            <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1 17h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
        ),
        style: {
          background: "#1E2227",
          borderRadius: "8px",
          color: "whitesmoke",
        },
      });
    }
  };

  const handleToggle = () => {
    if (type === "password") {
      setIcon("");
      setEye("eye");
      setType("text");
    } else {
      setIcon("");
      setEye("eye-slash");
      setType("password");
    }
  };

  const handleKeyPress = (event) => {
    setIsCapsLockOn(event.getModifierState("CapsLock"));
  };

  const handleChar = (event) => {
    const charCode = event.which || event.keyCode;
    const charater = String.fromCharCode(charCode);
    setIsCapsLockOn(
      charater.toUpperCase() === charater &&
        charater.toLowerCase() !== charater &&
        event.shiftKey
    );
  };

  const handleGoogleSuccess = async (response) => {
    try {
      const token = response.credential;
      const decoded = jwtDecode(token);
      const { name, email, picture } = decoded;

      // Optionally verify token with backend
      const backendResponse = await fetch(`${URL_BACKEND_HTTPS}/api/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const data = await backendResponse.json();

      if (backendResponse.ok) {
        // Store backend-issued token or Google token
        localStorage.setItem("token", data.token || token);
        localStorage.setItem("googleUser", JSON.stringify({ name, email, picture }));
        setIsAuthenticated(true);
        toast.success("Successfully signed in with Google!", {
          position: "top-center",
          duration: 5000,
          style: {
            background: "#1E2227",
            borderRadius: "8px",
            color: "whitesmoke",
          },
        });
        navigate("/");
      } else {
        throw new Error(data.error || "Google authentication failed");
      }
    } catch (error) {
      toast.error(error.message || "Google login failed. Please try again.", {
        position: "top-center",
        duration: 5000,
        style: {
          background: "#1E2227",
          borderRadius: "8px",
          color: "whitesmoke",
        },
      });
    }
  };

  const handleGoogleFailure = () => {
    toast.error("Google login failed. Please try again.", {
      position: "top-center",
      duration: 5000,
      style: {
        background: "#1E2227",
        borderRadius: "8px",
        color: "whitesmoke",
      },
    });
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "auto",
        height: "130vh",
        padding: "1rem",
        textAlign: "center",
      }}
      className="signin container containerAB"
    >
      <form onSubmit={handleLogin}>
        <h3 className="text-bg-dark p-2 rounded-1">
          <i
            className={
              !password
                ? "bi bi-lock-fill text-danger"
                : "bi bi-unlock-fill text-success slide"
            }
          ></i>{" "}
          Sign In with your Email to get more features.
        </h3>
        <br />
        <div style={{ marginBottom: ".8rem" }} className="form-group">
          <input
            type="email"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: ".5rem", width: "100%" }}
            className="form-control"
            autoComplete="on"
            readOnly={noneInput}
          />
          <label htmlFor="email">
            <i className={!email ? "bi bi-envelope-open" : "bi bi-envelope"}></i>{" "}
            Email
          </label>
        </div>

        <div style={{ marginBottom: "1rem" }} className="form-group">
          <input
            onClick={() => setIcon("fa-eye-slash")}
            type={type}
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: ".5rem", width: "100%" }}
            className="form-control"
            onKeyUp={handleKeyPress}
            maxLength="16"
            autoComplete="on"
            readOnly={noneInput}
          />
          <label htmlFor="password">
            <i className={!password ? "bi bi-lock" : "bi bi-unlock"}></i> Password
          </label>

          <span
            className="flex justify-content-around align-items-center eye"
            onClick={handleToggle}
            data-tooltip-id="passtooltip"
            data-tooltip-content={eye === "eye-slash" ? "show" : "Hide"}
          >
            <i className={`fa ${icon} fa-${eye} position-absolute eye`}></i>
          </span>
        </div>

        {isCapsLockOn && (
          <p className="p-2 text-bg-danger rounded mt-2">
            <i className="bi bi-exclamation-circle fs-8"></i> Caps Lock is ON
          </p>
        )}
        <button
          className="btn btn-primary mb-3 px-4 position-relative"
          style={{ padding: ".5rem 1rem", width: "100%" }}
          type="submit"
          disabled={isdisabled}
        >
          {!isdisabled ? "Sign In" : <Spinner />}
        </button>
        <Tooltip id="passtooltip" />
      </form>

      <div className="text">
        <div className="text1">
          Do not have an account?{" "}
          <span className="text-info">
            {" "}
            <Link to="/user-home-page/sign-up">Register</Link>
          </span>
        </div>
        <div className="text">
          Forgot?{" "}
          <span className="text-info">
            {" "}
            <Link to="/forgot-password">Password</Link>
          </span>
        </div>
      </div>

      <ToastContainer />
      <br />
      <hr className="hr" />

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
