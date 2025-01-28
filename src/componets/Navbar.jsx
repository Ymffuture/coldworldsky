import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-8 md:h-10" />
          </Link>
        </div>
        <button
          className="text-gray-500 md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto`}
        >
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
            <Link className="link" to="/?cat=art">
              <h6 className="text-gray-700 hover:text-gray-900">ART</h6>
            </Link>
            <Link className="link" to="/?cat=science">
              <h6 className="text-gray-700 hover:text-gray-900">SCIENCE</h6>
            </Link>
            <Link className="link" to="/?cat=technology">
              <h6 className="text-gray-700 hover:text-gray-900">TECHNOLOGY</h6>
            </Link>
            <Link className="link" to="/?cat=cinema">
              <h6 className="text-gray-700 hover:text-gray-900">CINEMA</h6>
            </Link>
            <Link className="link" to="/?cat=design">
              <h6 className="text-gray-700 hover:text-gray-900">DESIGN</h6>
            </Link>
            <Link className="link" to="/?cat=food">
              <h6 className="text-gray-700 hover:text-gray-900">FOOD</h6>
            </Link>
            <span className="text-gray-700">{currentUser?.username}</span>
            {currentUser ? (
              <span
                onClick={logout}
                className="cursor-pointer text-gray-700 hover:text-gray-900"
              >
                Logout
              </span>
            ) : (
              <Link className="link" to="/login">
                <span className="text-gray-700 hover:text-gray-900">Login</span>
              </Link>
            )}
            <span className="write">
              <Link className="link" to="/write">
                <span className="text-gray-700 hover:text-gray-900">Write</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
