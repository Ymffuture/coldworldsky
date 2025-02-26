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

    const onSubmit = (data) => {
        const genId = crypto.randomUUID().replace(/-/g, "").slice(0, 12);
        const newApplication = { id: genId, ...data, status: "Pending" };
        const updatedApps = [...applications, newApplication];

        localStorage.setItem("applications", JSON.stringify(updatedApps));
        setApplications(updatedApps);
        
        toast.success("Application submitted successfully! Your ID: " + genId);
        navigate("/track-application");
    };

    return (
        <div className="container">
            <Link to="/track-application">Track Application</Link>
            <h1>Tutor Application Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>First Name</label>
                <input {...register("firstName", { required: "First name is required" })} />
                {errors.firstName && <p>{errors.firstName.message}</p>}

                <label>Last Name</label>
                <input {...register("lastName", { required: "Last name is required" })} />
                {errors.lastName && <p>{errors.lastName.message}</p>}

                <label>Email</label>
                <input {...register("email", { required: "Email is required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email address" } })} />
                {errors.email && <p>{errors.email.message}</p>}

                <label>Job Role</label>
                <select {...register("jobRole", { required: "Please select a job role" })}>
                    <option value="">Select Job Role</option>
                    <option value="frontend">Frontend Developer</option>
                    <option value="backend">Backend Developer</option>
                    <option value="physical_science">Physical Science</option>
                    <option value="mathematics">Mathematics</option>
                </select>
                {errors.jobRole && <p>{errors.jobRole.message}</p>}

                <button type="submit">Apply Now</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default TutorApplyForm;
