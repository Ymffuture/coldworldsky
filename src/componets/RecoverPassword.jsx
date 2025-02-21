import React, { useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "./Loader";
import LoadCycle from '../assets/css/nivo-lightbox/loading.gif'
import { FaRedo } from "react-icons/fa";
const RecoverPassword = () => {
    const [email, setEmail] = useState("");
    const [isdisabled , setIsdisabled] = useState(false);
    const [inText , setInText] = useState('Get the Code');
  
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      setIsdisabled(true)
      setInText(<img src={LoadCycle} />)
      setTimeout(()=>{
        setIsdisabled(false)
        setInText('Get the Code')
      },30000)
      if(!email){
        
            setIsdisabled(false)
            setInText(<FaRedo/>)
         
         
      }
      // Call the backend login API
      const response = await fetch("http://localhost:7411/api/auth/user-home-page/recover-password-getcode-page", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email}),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Save token to localStorage
        localStorage.setItem("token", data.token);
        setIsAuthenticated(true);
        // Redirect to Dashboard
        navigate("/");
      } else {
     
        toast.error(data.error || "Login failed!");
      }
    };
  return (
    <div>
       <div style={{maxWidth:'600px',margin:'auto',height:'120vh',padding:'1rem',textAlign:'center'}} className='signin container'>
    
    <form onSubmit={handleLogin}>
    {/* <img src='/img/logosk.jpg' width='30%' alt='LOGO' className=" rounded-4 opacity-50"  /> */}
    <h3 className=' text-bg-primary p-2 rounded-1'> Recovey your password.</h3>
      
      <div style={{marginBottom:'.8rem'}} className="form-group">
        <input
          type="email"
          placeholder=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{padding:'.5rem',width:'100%'}}
          className=" form-control"
        />
         <label for="email">Email</label>
      </div>
      
      <button className="btn btn-primary px-4 mb-3" style={{padding:'.5rem 1rem', width:'100%'}} type="submit" disabled={isdisabled}>{inText}</button>
    </form>
    <div className="text">
        Remember Your password? <span className=" text-info"> <Link to="/user-home-page/sign-in">Sign In</Link></span>
        </div>
    </div>
    </div>
  )
}

export default RecoverPassword
