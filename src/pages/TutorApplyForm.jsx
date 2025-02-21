import React, { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TutorApplyForm = () => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [selectOps, setSelectOps] = useState("");
    const [nowDate , setNowDate] = useState('');

    
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const formattedDate = currentDate.toDateString();
    
    //selectOps
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Password confirmation check
        if (!firstName || !email) {
          toast.error("Form is requied to be filled.");
        }

       try {
          // Send the registration data to the backend
          const response = await axios.post("http://localhost:7411/api/auth/tutoring/ApplicationForm-for-a-tutor/", {
            email,
            password,
          });
    
          toast.success(response.data.message, {
            position: "top-center",
            duration: 3000,
            icon:<FaCheckDouble className="text-success"/>,
            style:{
              background:'#333',
                  borderRadius:'8px',
                  color:'whitesmoke',
            }
          }); // Success message from the backend
          navigate("/tutoring/ApplicationForm-for-a-tutor/track-Application/"); 
        } catch (error) {
          toast.error(error.response?.data?.error || "Application failed. Please try again.", {
            position: "top-center",
            duration: 5000,
            icon:<FaTimesCircle className="text-danger"/>,
            style:{
              background:'#333',
              borderRadius:'8px',
              color:'whitesmoke',
            }
          });
        }
      
      };
      const genId = crypto.randomUUID().replace('-','').slice(0,12);

  return (
    <>
    
    <Link to='/track-Application/'>Track Status</Link>
    <div className="container containerForm">
      <div className="apply_box">
        <h1>
         Tutor Application From
          <span className="title_small">(Web)</span>
        </h1>
        <span className="title_small text-bg-warning p-2 rounded">Applicant ID: {genId}</span>
        <form action="" onSubmit={handleSubmit }>
          <div className="form_container">
            <div className="form_control">
              <label for="first_name"> First Name </label>
              <input
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
                id="first_name"
                name="first_name"
                placeholder="Enter First Name..."
              />
            </div>
            <div className="form_control">
              <label for="last_name"> Last Name </label>
              <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
               className="form-control"
                id="last_name"
                name="last_name"
                placeholder="Enter Last Name..."
              />
            </div>
            <div className="form_control">
              <label for="email"> Email </label>
              <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               className="form-control"
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email..."
              />
            </div>
            <div className="form_control">
              <label for="email"> Contact Number </label>
              <input
                
               className="form-control"
                type="tel"
                id="phone"
                name="email"
                placeholder="012-345-6789"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              />
            </div>
            <div className="form_control">
              <label for="date"> Date of birth </label>
              <input 
              type="date" id="date" name="date"  className="form-control"/>
            </div>
            <div className="form_control">
              <label for="job_role"> Job Role </label>
              <select id="job_role" name="job_role" className="form-control" >
                <option  value={selectOps}
              onChange={(e) => setSelectOps(e.target.value)}>Select Job Role</option>
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="full_stack" disabled>Full Stack Developer</option>
                <option value="ui_ux" disabled>UI UX Designer</option>
                <option value="Physical_science">Physical science</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Life_Sciences">Life Sciences</option>
              </select>
            </div>
            <div className="textarea_control">
              <label for="address"> Address </label>
              <textarea
               className="form-control"
                id="address"
                name="address"
                row="4"
                cols="50"
                placeholder="Enter Address"
              ></textarea>
            </div>
            <div className="form_control">
              <label for="city"> City </label>
              <input id="city" name="city" placeholder="Enter City Name..."  className="form-control" />
            </div>
            <div className="form_control">
              <label for="pincode">Postal Code </label>
              <input
               className="form-control"
                type="number"
                id="pincode"
                name="pincode"
                placeholder="Enter postal code"
             
              />
            </div>
            <div className="form_control">
              <label for="date"> Date </label>
              <input value={formattedDate} type="text" id="date" name="date"  className="form-control"/>
            </div>
            <div className="form_control">
              <label for="upload"> Upload Your CV </label>
              <input type="file" id="upload" name="upload"  className="form-control" />
            </div>
          </div>
          <br/>
          <div className="form-check form-switch">
            <label className="form-check-label"><input type="checkbox" className="form-check-input" required/> I confirm everything I have provided is CORRECT.</label>
          </div>
          <div className="button_container">
            <button className='btn btn-primary' type="submit">Apply Now</button>
          </div>
        </form>
      </div>
      <ToastContainer/>
  
    </div>
    <br/>
    <br/>
    <div className="p-4 m-4 container">
    <Outlet/>
    </div>
   
    </>
  )
}

export default TutorApplyForm
