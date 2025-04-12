import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

// Validation schema
const schema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  jobRole: Yup.string().required("Please select a job role"),
});

const TutorApplyForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem("applications")) || [];
    setApplications(savedApps);
  }, []);

  const genId = crypto.randomUUID().replace(/-/g, "").slice(0, 12);

  const onSubmit = async (data) => {
    const newApplication = { id: genId, ...data, status: "Pending" };
    const updatedApps = [...applications, newApplication];
    localStorage.setItem("applications", JSON.stringify(updatedApps));
    setApplications(updatedApps);

    try {
      await axios.post("http://localhost:5000/api/applications", newApplication);
      toast.success("Application submitted! Your ID: " + genId);
      reset();
    } catch (err) {
      toast.error("Failed to send data to server.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h1 className="text-center text-primary mb-4">Tutor Application Form</h1>
        <div className="text-end mb-3">
          <Link to="/track-application" className="btn btn-outline-primary btn-sm">Track Application</Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <input
              className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
              placeholder="First Name"
              {...register("firstName")}
            />
            <div className="invalid-feedback">{errors.firstName?.message}</div>
          </div>

          <div className="mb-3">
            <input
              className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
              placeholder="Last Name"
              {...register("lastName")}
            />
            <div className="invalid-feedback">{errors.lastName?.message}</div>
          </div>

          <div className="mb-3">
            <input
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Email"
              {...register("email")}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>

          <div className="mb-4">
            <select
              className={`form-select ${errors.jobRole ? "is-invalid" : ""}`}
              {...register("jobRole")}
            >
              <option value="">Select Job Role</option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="physical_science">Physical Science</option>
              <option value="mathematics">Mathematics</option>
            </select>
            <div className="invalid-feedback">{errors.jobRole?.message}</div>
          </div>

          <button type="submit" className="btn btn-primary w-100">Apply Now</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TutorApplyForm;

