import { useState, useRef, useEffect } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

const GoogleAuth = () => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  const handleSuccess = (response) => {
    const decoded = jwtDecode(response.credential);
    setUser({
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture,
    });
    setTimeout(() => navigate("/"), 1000); // Redirect after 1 sec
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="section has-text-centered">
      {!user ? (
        <div className="buttons is-centered is-flex is-justify-content-center is-flex-wrap-wrap">
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => console.log("Login Failed")}
            theme="filled_black"
            size="large"
          />

          <button className="button is-static is-light mx-1" disabled>
            <span className="icon">
              <FaFacebook />
            </span>
            <span>Facebook (Coming Soon)</span>
          </button>

          <button className="button is-static is-light mx-1" disabled>
            <span className="icon">
              <FaGithub />
            </span>
            <span>GitHub (Coming Soon)</span>
          </button>

          <div className="is-fullwidth mt-3">
            <a
              href="https://support.google.com/accounts/answer/112802?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="is-size-7 has-text-link"
            >
              Learn more about logging in with social media
            </a>
          </div>
        </div>
      ) : (
        <div ref={dropdownRef} className="dropdown is-right is-active">
          <div className="dropdown-trigger">
            <img
              src={user.picture}
              alt="Profile"
              className="is-rounded"
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
          </div>
          {dropdownOpen && (
            <div className="dropdown-menu" role="menu">
              <div className="dropdown-content has-background-light p-3">
                <div className="media mb-3">
                  <figure className="media-left">
                    <p className="image is-48x48">
                      <img className="is-rounded" src={user.picture} alt="User" />
                    </p>
                  </figure>
                  <div className="media-content">
                    <p className="title is-6">{user.name}</p>
                    <p className="subtitle is-7">{user.email}</p>
                  </div>
                </div>
                <hr />
                <button
                  className="button is-danger is-small is-fullwidth"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GoogleAuth;

