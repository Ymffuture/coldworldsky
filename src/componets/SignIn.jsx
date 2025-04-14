import React, { useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTimesCircle} from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import SocialLogin from "./SocialLogin";
import { URL_BACKEND_HTTP , URL_BACKEND_HTTPS } from "../../Urls";
import IconCloud from "../custom/IconCloud/IconCloud";
import Spinner from './Spinner'
const SignIn = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isdisabled , setIsdisabled] = useState(false);
  const [noneInput ,setNoneInput] =useState(false);
  const [type, setType] = useState('password');
  const [eye, setEye]= useState('');
  const [icon , setIcon] = useState('');
  const [isCapsLockOn ,setIsCapsLockOn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

    if(!password || !emailRegex.test(email)){
      toast.dark('Both input field are required.', {
        position: "top-center",
        duration: 3000,
        icon:<FaTimesCircle className="text-danger"/>,
       
      })
    }
    if(!emailRegex.test(email)){
      toast.dark('Email input field are required.', {
        position: "top-center",
        duration: 3000,
        icon:<FaTimesCircle className="text-danger"/>,
       
      })
    }
    
    if(!password && !emailRegex.test(email)){
      toast.dark('Password input field are required.', {
        position: "top-center",
        duration: 3000,
        icon:<FaTimesCircle className="text-danger"/>,
       
      })
     
    }
    if(password && emailRegex.test(email)){
      setIsdisabled(true)
      setNoneInput(true)
      setTimeout(()=>{
        setIsdisabled(false)
        setNoneInput(false)
      },10000)
    }else{
    
    pass
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
      navigate("/courses");
    } else {
      
      toast.error(data.error || "No internet Connection", {
        position: "top-center",
        duration: 8000,
        icon:<IconCloud/>,
       
        style:{
          background:'#1E2227',
          borderRadius:'8px',
          color:'whitesmoke',
        }
      });
    }
   
  };
  const handleToggle=()=>{
  
    if(type==='password'){
      setIcon('')
      setEye('eye')
      setType('text')
    }else{
      setIcon('')
      setEye('eye-slash')
      setType('password')
    }
  }
  const handleKeyPress =(event)=>{
    if(event.getModifierState('CapsLock')){
setIsCapsLockOn(true)
    }
    else{
      setIsCapsLockOn(false)
    }
  } 
   const handleChar =(event)=>{
    const charCode = event.which || event.keyCode;
    const charater = String.fromCharCode(charCode)
    if(charater.toUpperCase()=== charater&& charater.toLowerCase() !== charater && event.shiftKey){
if(!isCapsLockOn){
  setIsCapsLockOn(true)
}
    }
    else{
      setIsCapsLockOn(false)
    }
  }
  return (
    <div style={{maxWidth:'600px',margin:'auto',height:'130vh',padding:'1rem',textAlign:'center'}} className='signin container containerAB  '>
    
    <form onSubmit={handleLogin}>
    {/* <img src='/img/logosk.jpg' width='20%' alt='LOGO' className=" rounded-4 p-2"  /> */}
    <h3 className=' text-bg-dark p-2 rounded-1'>
    <i className={!password? "bi bi-lock-fill text-danger":"bi bi-unlock-fill text-success slide"}></i> {""}
      Sign In with your Email to get more features.</h3>
    

      <div style={{marginBottom:'.8rem'}} 
       className="form-group"
      >
        <input
        //  onKeyUp={handleKeyPress}
        onKeyDown={handleChar}
          type="email"
          placeholder=" "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{padding:'.5rem',width:'100%'}}
          className="form-control"
          autocomplete='on'
        readOnly={noneInput}
        />
          <label for="email"><i className={!email? 'bi bi-envelope-open' :"bi bi-envelope"}></i> Email</label>
      </div>
      <div style={{marginBottom:'1rem'}}
       className="form-group"
      >
        <input
          onClick={()=>setIcon('fa-eye-slash')}
          type={type}
          placeholder=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{padding:'.5rem',width:'100%'}}
          className=" form-control"
          onKeyUp={handleKeyPress}
          // onKeyDown={handleChar}
          maxLength='16'
          autocomplete='on'
          readOnly={noneInput}
        />
        <label for="email"><i className={!password? "bi bi-lock":"bi bi-unlock"}></i>Password</label>
      
        <span className="flex justify-content-around align-items-center eye" onClick={handleToggle}
            data-tooltip-id="passtooltip"
            data-tooltip-content={eye==='eye-slash'? 'show':'Hide'}>
           <i className={`fa ${icon} fa-${eye} position-absolute eye`}></i>
           </span>
      </div>
      {isCapsLockOn && (<p className="p-2 text-bg-danger rounded mt-2"><i className="bi bi-exclamation-circle fs-8"></i> Caps Lock is ON</p>)}
      <button className="btn btn-primary mb-3 px-4 position-relative" style={{padding:'.5rem 1rem', width:'100%'}} type="submit" disabled={isdisabled}> {!isdisabled? 'Sign In': <Spinner/>}</button>
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
    <br/>
    <hr className='hr'/>
        <SocialLogin/>
    </div>

  );
};

export default SignIn;

