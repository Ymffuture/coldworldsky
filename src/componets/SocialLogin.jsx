import { useState } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";

const GoogleAuth = () => {
    const [user, setUser] = useState(null);

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
    };

    return (
        <div className="relative flex flex-col items-center p-3">
            {/* Google Sign-In Button */}
            {!user ? (
                <GoogleLogin  className="absolute top-4 left-4 flex items-center space-x-3 bg-white p-2 rounded-lg shadow-md" onSuccess={handleSuccess} onError={() => console.log("Login Failed")} />
            ) : (
                <div className="absolute top-4 left-4 flex items-center space-x-3 bg-white p-3 rounded-lg shadow-md">
                    <img src={user.picture} alt="User" className="w-10 h-10 rounded-full" />
                    <span className="text-gray-800">{user.email}</span>
                    <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded">
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default GoogleAuth;
