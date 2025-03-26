import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TutorApplyForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [applications, setApplications] = useState([]);
    
    useEffect(() => {
        const savedApps = JSON.parse(localStorage.getItem("applications")) || [];
        setApplications(savedApps);
    }, []);
    const genId = crypto.randomUUID().replace(/-/g, "").slice(0, 12);
    const onSubmit = (data) => {
       

        
        const newApplication = { id: genId, ...data, status: "Pending" };
        const updatedApps = [...applications, newApplication];

        localStorage.setItem("applications", JSON.stringify(updatedApps));
        setApplications(updatedApps);
        
        toast.success("Application submitted successfully! Your ID: " + genId);

        // navigate("/track-application");

    };
  
    return (
        <div className="container ">
            <Link to="/track-application">Track Application</Link>
            <h1>Tutor Application Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label></label>
                <input {...register("firstName", { required: "First name is required" })} className="form-control" placeholder="First Name" />
                {errors.firstName && <p className="text-bg-danger p-2 mt-2">{errors.firstName.message}</p>}

                <label></label>
                <input {...register("lastName", { required: "Last name is required" })} className="form-control" placeholder="Last Name"/>
                {errors.lastName && <p className="text-bg-danger p-2 mt-2">{errors.lastName.message}</p>}

                <label></label>
                <input {...register("email", { required: "Email is required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email address" } })} className="form-control" placeholder="Email" />
                {errors.email && <p className="text-bg-danger p-2 mt-2">{errors.email.message}</p>}

                
                <select {...register("jobRole", { required: "Please select a job role" })} className="form-control" >
                    <option value="">Select Job Role</option>
                    <option value="frontend">Frontend Developer</option>
                    <option value="backend">Backend Developer</option>
                    <option value="physical_science">Physical Science</option>
                    <option value="mathematics">Mathematics</option>
                </select>
                {errors.jobRole && <p className="text-bg-danger p-2 mt-2">{errors.jobRole.message}</p>}
<hr className="hr"/>
                <button 
                className="form-control text-bg-primary" 
                type="submit">Apply Now</button>
            </form>

            <ToastContainer />
        </div>
    );
};

export default TutorApplyForm;
