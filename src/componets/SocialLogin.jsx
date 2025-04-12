import { useState, useRef, useEffect } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const GoogleAuth = () => {
    const [user, setUser] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef();

    const handleSuccess = (response) => {
        const decoded = jwtDecode(response.credential);
        setUser({
            name: decoded.name,
            email: decoded.email,
            picture: decoded.picture,
        });
    };

    const handleLogout = () => {
        googleLogout();
        setUser(null);
        setDropdownOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="position-relative">
            {/* Google Sign-In Button */}
            {!user ? (
                <div className="position-absolute top-0 end-0 p-3">
                    <GoogleLogin
                        onSuccess={handleSuccess}
                        onError={() => console.log("Login Failed")}
                        theme="outline"
                        size="medium"
                    />
                </div>
            ) : (
                <div className="position-absolute top-0 end-0 p-3" ref={dropdownRef}>
                    <img
                        src={user.picture}
                        alt="Profile"
                        className="w-40px h-40px rounded-circle cursor-pointer border-2 border-primary hover:scale-105 transition-transform"
                        onClick={() => setDropdownOpen((prev) => !prev)}
                    />
                    {dropdownOpen && (
                        <div className="position-absolute mt-2 end-0 w-200px bg-white border border-secondary rounded-3 shadow-lg p-3">
                            <div className="d-flex align-items-center mb-3">
                                <img src={user.picture} alt="User" className="w-40px h-40px rounded-circle" />
                                <div className="ms-2">
                                    <p className="mb-0 fw-bold text-dark">{user.name}</p>
                                    <p className="mb-0 text-muted">{user.email}</p>
                                </div>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="w-100 btn btn-danger btn-sm"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default GoogleAuth;

