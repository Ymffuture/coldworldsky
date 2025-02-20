import React, { useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "./Loader";
import { FaSignal } from "react-icons/fa";

const SignIn = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isdisabled , setIsdisabled] = useState(false);
  const [inText , setInText] = useState('Sign in');
  const [finalText ,setFinalText] =useState('Check your connection.')
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if(!email || !password){
      toast.error('Both input field are required.')
    }else{
      setIsdisabled(true)
      setInText(<Loader/>)
      setTimeout(()=>{
        setIsdisabled(false)
        setInText('Sign in')
        setFinalText('Failed to connect to server :code:500')
      },5000)
    }
    // Call the backend login API
    const response = await fetch("http://localhost:7411/api/auth/user-home-page/sign-in", {
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
      
      toast.error(data.error || "Login failed!");
    }
  };

  return (
    <div style={{maxWidth:'600px',margin:'auto',height:'120vh',padding:'1rem',textAlign:'center'}} className='signin container '>
    
    <form onSubmit={handleLogin}>
    <img src='/img/logosk.jpg' width='30%' alt='LOGO' className=" rounded-4 opacity-50"  />
    <h3 className=' text-bg-info p-2 rounded-1'>Sign In with your Email to get more features.</h3>
      <h6 className=' text-bg-danger p-3 rounded-1'>
        <FaSignal/> {finalText}</h6>
      <div style={{marginBottom:'.8rem'}}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{padding:'.5rem',width:'100%'}}
          className=" form-control"
        />
      </div>
      <div style={{marginBottom:'1rem'}}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{padding:'.5rem',width:'100%'}}
          className=" form-control"
        />
      </div>
      <button className="btn btn-primary mb-3 px-4" style={{padding:'.5rem 1rem', width:'100%'}} type="submit" disabled={isdisabled}>{inText}</button>
    </form>
    <div className="text">
        Do not have an account? <span className=" text-info"> <Link to="/user-home-page/sign-up">Register</Link></span>
        </div>
        <div className="text">
       Forgot <span className=" text-info"> <Link to="/user-home-page/recover-password-getcode-page">Password</Link></span>?
        </div>
    </div>

  );
};

export default SignIn;

