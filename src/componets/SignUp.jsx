import React, { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from './Loader'
import { FaSignal } from "react-icons/fa";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading ,setLoading] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Password confirmation check
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
  
    }
    if(confirmPassword===password && confirmPassword!=='' && password!==''){
      setLoading(true)
    }
   
    setTimeout(()=>{
      setLoading(false)
    },15000)
   try {
      // Send the registration data to the backend
      const response = await axios.post("http://localhost:7411/api/auth/user-home-page/sign-up", {
        email,
        password,
      });

      toast.success(response.data.message); // Success message from the backend
      navigate("/user-home-page/sign-in"); // Redirect to login page
    } catch (error) {
      toast.error(error.response?.data?.error || "Registration failed. Please try again.");
    }
  
  };

  return (
    <div style={{maxWidth:'600px',margin:'auto',height:'120vh',padding:'1rem',textAlign:'center', overflowY:'hidden'} } className='container'>
        <img src='/img/logosk.jpg' width='30%' alt='LOGO' className=" rounded-4 opacity-50"  />
      <h3 className=' text-bg-info p-2 rounded-1'>Create an acount to get more features.</h3>

      <h6 className=' text-bg-danger p-3 rounded-1'>
      <FaSignal/>'Check your connection</h6>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: ".8rem" }}>
          <input
            className=" form-control"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          
            style={{ padding: "0.5rem", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
              className=" form-control"
            style={{ padding: "0.5rem", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }} className='formreg'>
          <input
            className="form-control"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
           
            style={{ padding: "0.5rem", width: "100%" }}
          />
        </div>
        <button type="submit"  className="btn btn-primary px-4" style={{padding:'.5rem 1rem', width:'100%'}}>
          Sign Up
        </button>
       { loading ?  <div className='reg-load'>

<Loader/>
</div>:null}
       
    
      </form>
      
      <div className="text">
          Already have an account? <span className=" text-info"> <Link to="/user-home-page/sign-in">Login</Link></span>
        </div>
      
    </div>
  );
}

export default Register;

