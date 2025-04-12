import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

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
      <div className="box">
        <h1 className="title is-3 has-text-centered has-text-primary">Tutor Application</h1>
        <Link to="/track-application" className="button is-link is-light mb-4">Track Application</Link>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <div className="control">
              <input className="input" placeholder="First Name" {...register("firstName")} />
            </div>
            {errors.firstName && <p className="help is-danger">{errors.firstName.message}</p>}
          </div>

          <div className="field">
            <div className="control">
              <input className="input" placeholder="Last Name" {...register("lastName")} />
            </div>
            {errors.lastName && <p className="help is-danger">{errors.lastName.message}</p>}
          </div>

          <div className="field">
            <div className="control">
              <input className="input" placeholder="Email" {...register("email")} />
            </div>
            {errors.email && <p className="help is-danger">{errors.email.message}</p>}
          </div>

          <div className="field">
            <div className="control">
              <div className="select is-fullwidth">
                <select {...register("jobRole")}>
                  <option value="">Select Job Role</option>
                  <option value="frontend">Frontend Developer</option>
                  <option value="backend">Backend Developer</option>
                  <option value="physical_science">Physical Science</option>
                  <option value="mathematics">Mathematics</option>
                </select>
              </div>
            </div>
            {errors.jobRole && <p className="help is-danger">{errors.jobRole.message}</p>}
          </div>

          <hr />
          <div className="control">
            <button type="submit" className="button is-primary is-fullwidth">Apply Now</button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default TutorApplyForm;

