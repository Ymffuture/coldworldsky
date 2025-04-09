import React, { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FaCheckDouble, FaExclamationCircle } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import CssLoader from "../pages/Cloader";
import {URL_BACKEND_HTTP ,URL_BACKEND_HTTPS} from '../../Urls'
import IconCloud from "../custom/IconCloud/IconCloud";
import Spinner from "./Spinner";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState('password');
  const [eye, setEye]= useState('');
  const [icon , setIcon] = useState('')
  const [iconConfirm , setIconConfirm] = useState('')
  const [typeConfirm, setTypeConfirm] = useState('password');
  const [eyeConfirm, setEyeConfirm]= useState('');
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading ,setLoading] = useState(false)
  const [isdisabled , setIsdisabled] = useState(false);
  const [isCapsLockOn ,setIsCapsLockOn] = useState(false);
  const [handleError, setHandleError] =useState('')
  const [color ,setColor] =useState('text-danger')
  const [checked ,setChecked] =useState(false)
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Password confirmation check
    if (password !== confirmPassword) {
      toast.custom(<div className='text-bg-warning p-2 rounded'><i class="text-red fa fa-warning text-bg-warning"></i> Passwords do not match!</div>);
   
    }
    if(confirmPassword===password && confirmPassword!=='' && password!==''){
      setLoading(true)
      setIsdisabled(true)
      setColor('text-success')
    }
   
    setTimeout(()=>{
      setLoading(false)
      setIsdisabled(false)
    },15000)
   try {
      // Send the registration data to the backend

      const response = await axios.post(`${ URL_BACKEND_HTTPS}/api/auth/user-home-page/sign-up`, {

        email,
        password,
      });

      toast.success(response.data.message, {
        position: "top-center",
        duration: 3000,
        icon:<FaCheckDouble className="text-success"/>,
        style:{
          background:'#1E2227',
              borderRadius:'8px',
              color:'whitesmoke',
        }
      }); // Success message from the backend
      navigate("/user-home-page/sign-in"); // Redirect to login page
    } catch (error) {
      toast.error(error.response?.data?.error || "Registration failed. ⚠️ Server Error.", {
        position: "top-center",
        duration: 5000,
        icon:<FaExclamationCircle/>,
        style:{
          background:'#1E2227',
          borderRadius:'8px',
          color:'whitesmoke',
        }
      });
      setHandleError(error.response?.data?.error)
      setLoading(false)
      setIsdisabled(false)
      setColor('text-danger')
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
const handleToggleConfirm=()=>{
  
  if(typeConfirm==='password'){
    setEyeConfirm('eye')
    setTypeConfirm('text')
    setIconConfirm('')
  }else{
    setIconConfirm('')
    setEyeConfirm('eye-slash')
    setTypeConfirm('password')
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

  return (
    <div style={{maxWidth:'600px',margin:'auto',height:'130vh',padding:'1rem',textAlign:'center', overflowY:'hidden'} } className='container containerAB'>
        {/* <img src='/img/logosk.jpg' width='20%' alt='LOGO' className=" rounded-4 opacity-50 p-2"  /> */}
      <h3 className=' text-bg-dark p-2 rounded-1'>
      <i className={password? "bi bi-lock-fill text-danger slide":"bi bi-unlock-fill text-success"}></i> {""}
        Create an acount and get more features.</h3>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: ".8rem" }}  className="form-group">
          <input
            className=" form-control"
            type="email"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          
            style={{ padding: "0.5rem", width: "100%" }}
          />
             <label for="email"><i className={!email? 'bi bi-envelope-open' :"bi bi-envelope"}></i> Email</label>
        </div>
        <div style={{ marginBottom: "1rem" }} className="form-group">
          <input
            onKeyUp={handleKeyPress}
          onClick={()=>setIcon('fa-eye-slash')}
            type={type}
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
              className=" form-control"
            style={{ padding: "0.5rem", width: "100%" }}
            autoComplete="current-password"
            maxLength='16'
          />
            <label for="email"><i className={password? "bi bi-lock":"bi bi-unlock"}></i>Password</label>
           <span className="flex justify-content-around align-items-center eye" onClick={handleToggle}
            data-tooltip-id="passtooltip"
            data-tooltip-content={eye==='eye-slash'? 'show':'Hide'}>
           <i className={`fa ${icon} fa-${eye} position-absolute eye`}></i>
           </span>
       
        </div>
        <p className={`${color}`}>
            {handleError? <p className="text-start"><i className="bi bi-info-circle-fill text-info"></i> <b className="text-info">Password requirements:</b>
              <ul className="text-start">
                <li><i className="bi bi-x"></i>Uppercase</li>
                <li><i className="bi bi-x"></i>Lowercase</li>
                <li><i className="bi bi-x"></i>Number</li>
                <li><i className="bi bi-x"></i>Special character</li>
                <li><i className="bi bi-x"></i>Minimum of 8 characters long.</li>
              </ul>
            </p>:null}
          </p>
        <div style={{ marginBottom: "1rem" }} className='formreg form-group' >
          <input
          onClick={()=>setIconConfirm('fa-eye-slash')}
            className="form-control"
            type={typeConfirm}
            placeholder=""
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ padding: "0.5rem", width: "100%" }}
            onKeyUp={handleKeyPress}
          />
           <label for="email"><i className={password? "bi bi-lock":"bi bi-unlock"}></i>Password</label>
           <span className="flex justify-content-around align-items-center eye" onClick={handleToggleConfirm}
           data-tooltip-id="passtooltip"
           data-tooltip-content={eyeConfirm==='eye-slash'? 'show':'Hide'}>
           <i className={`fa ${iconConfirm} fa-${eyeConfirm} position-absolute eye`}></i>
           </span>
        </div>
        {isCapsLockOn && (<p className="p-2 text-bg-danger rounded mt-2"><i className="bi bi-exclamation-circle fs-8"></i> Caps Lock is ON</p>)}

        <label className={`form-check ${color}`} for='checkbox'>
          <input type="checkbox" 
          required 
          id="check1"
          className='form-check-input' 
          value={checked}
          disabled={isdisabled}
          /> I agree to<span className="text-info"> <Link to="https://webpy-7tcd.onrender.com/views/" for='checkbox'> terms and conditions</Link></span>
        </label>

        <button type="submit" 
        disabled={isdisabled}
        className="btn btn-primary px-4" style={{padding:'.5rem 1rem', width:'100%'}}>
          {!isdisabled ? 'Sign Up': <Spinner/>}
        </button>
       { loading ?  <div className='reg-load'>
        <CssLoader/>
{/* <Loader/> */}
</div>:null}
       
<Tooltip id="passtooltip" />
      </form>
      <div className="text mt-2"> {""}
      <div className="text3">
          Already have an account? <span className=" text-info"> <Link to="/user-home-page/sign-in">Login</Link></span>
        </div>
      </div>
    
    </div>
  );
}

export default Register;

