import React from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { FaBan, FaTimesCircle} from "react-icons/fa";
const ProtectedRoute = ({ isAuthenticated, children }) => {

  const toastId = crypto.randomUUID().slice(0,7);
     
  if (!isAuthenticated) {
    toast.error('Unauthorized, Sign In please.',{
        position: "top-right",
        duration: 3000,
        toastId:toastId,
        icon:<FaBan className="text-danger"/>,
       
        style:{
          background:'#1E2227',
          borderRadius:'8px',
          color:'whitesmoke',
        }
      })
    return <Navigate to="/user-home-page/sign-in" />;
  }else{
    toast.success('Welcome Back!', {
      position: "top-center",
      duration: 3000,
      icon:<FaCheckDouble className="text-success"/>,
      style:{
        background:'#1E2227',
            borderRadius:'8px',
            color:'whitesmoke',
      }
    });
  }
  return children;
};

export default ProtectedRoute;

