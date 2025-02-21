import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
import toast  from "react-hot-toast";
import Loader from "./Loader";
import { FaTimesCircle, FaUserClock } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";

// Validation schema using Yup
const schema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(5, "Name must be at least 5 characters"),
  subject: yup
    .string()
    .required("Please select the subject.")
    .min(3, "Subject must be at least 5 characters"),
  email: yup
    .string()
    .email("Invalid email format, missing '@/.com'")
    .required("Email is required for feedback."),
    number: yup
    .string()
    .required("Moblie number is required")
    .min(10, "Moblie number must be at least 13 digits (including +27)"),
  message: yup
    .string()
    .required("Message input is empty, start typing your message.")
    .min(20, "Message must be at least 20 characters"),
  // costomizedSubject: yup
  //   .string()
  //   .required("Subject field is empty")
  //   .min(3, "subject must be at least 10 characters"),
});

 const Contact = (props) => {
  const [userId, setUserId] = useState("");
  // State to track the selected option
  const [selectedOption, setSelectedOption] = useState("");
  const [customSubject, setCustomSubject] = useState("");


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, e) => {
    console.info(data);
    emailjs
      .sendForm(
        'service_kw38oux',
        'template_etyg50k',
        e.target,
        'IolitXztFVvhZg6PX'
      )
      .then(
        (result) => {
          console.info(result.text());
          toast.success("Message sent successfully!",{
            duration: 10000,
            position: "bottom-left",
            icon:null,
            style:{
              color:'whitesmoke',
              background:'green',
             padding:'8px',
             borderRadius:'20px',
             border:'1px white solid'
            }
          });
          reset();
        },
        (error) => {
          console.log(error);
          toast.error(`Opps! Send message ERROR. Please check your internet connection and try again.`, {
            duration: 10000,
            position: "bottom-left",
            icon:<FaTimesCircle className="text-danger"/>,
            style:{
              background:'#333',
              borderRadius:'8px',
              color:'whitesmoke',
            
            }
            
          });
        }
      );
  };

  const oppStyle = {
    resize: "none",
  };
 

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    if (e.target.value === "other") {
      setCustomSubject("");
    }
  };
  const handleCustomSubjectChange = (e) => {
    setCustomSubject(e.target.value);
  };

  useEffect(() => {
    const savedUserId = localStorage.getItem("userId");
    if (!savedUserId) {
      const newUserId = Math.random().toString(36).substring(2, 10);
      setUserId(newUserId);
      localStorage.setItem("userId", newUserId);
    } else {
      setUserId(savedUserId);
    }
  }, []);

  const notWorkingBtn = ()=>{
  toast.loading('This feature is under constraction.',{
  duration:5000,
  style:{
    borderRadius:'50px',
    background:'#fff34b',
    opacity:.6,
    boxShadow:'1px 4px 6px gray',
  },
  position:'bottom-center'
})
  }

  return (
    <div id="contactAB" className="bg-light py-5">
      <div className="container">
        <div className="row">
          {/* Form Section */}
          <div className="col-md-8">
            <div className="row">
              <div className="section-title mb-4">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className={`form-control ${
                          errors.name ? "is-invalid" : ""
                        }`}
                        placeholder=""
                        {...register("name")}
                      />
                        <label for="email">Name</label>
                      {errors.name && (
                        <div className="invalid-feedback">
                          {errors.name.message}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                   
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        placeholder=""
                        {...register("email")}
                      />
                       <label for="email">Email</label>
                      {errors.email && (
                        <div className="invalid-feedback">
                          {errors.email.message}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* cell number */}
                <div className="form-group mb-3">
              
                      <input
                        type="number"
                        id="number"
                        name="number"
                        className={`form-control ${
                          errors.number ? "is-invalid" : ""
                        }`}
                        placeholder=""
                        {...register("number")}
                      />
                      <label for="email">Mobile number (+27)</label>
                      {errors.number && (
                        <div className="invalid-feedback">
                          {errors.number.message}
                        </div>
                      )}
                    </div>

                {/* cell number end  */}
                <div className="col-md-6">
                  <div class="form-group mb-3">
                    <select
                      id="subject"
                      onClick={handleSelectChange}
                      name="subject"
                      className={`form-control rounded text-uppercase  ${
                        errors.subject ? "is-invalid" : ""
                      }`}
                      {...register("subject")}
                    >
                      
                      <option
                        className="selectedOption text-bg-primary"
                        value={selectedOption}
                      >
                        <span>Select a subject</span>
                      </option>
                      <option value="Science and Math full year 2025 classes(10mon)">
                        Science and Math full year 2025 classes (10mons)
                      </option>
                      <option value="DoE (Department of Education">
                        DoE (Department of Education)
                      </option>
                      <option value="Booking for House call Tutoring">
                        Booking for House call Tutoring
                      </option>

                      <option value="Online classes">Online classes</option>
                      <option value="feedback">Feedback</option>
                      <option value="support">Support</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && (
                      <div className="invalid-feedback">
                        {errors.subject.message}
                      </div>
                    )}
                  </div>
                </div>

                {selectedOption !== "other" ? null : (
                  <div className={`col-md-6`}>
                    <div class="form-group other">
                    
                      <textarea
                        type="text"
                        id="message"
                        onChange={handleCustomSubjectChange}
                        style={oppStyle}
                        placeholder="Enter your subject"
                        className={`form-control mb-2 rounded ${
                          errors.message ? "is-invalid" : ""
                        }`}
                        {...register("costomizedSubject")}
                      >
                       
                      </textarea>
                      <label for="name" className="mb-1 m-2 text-danger ">
                        Please specify*
                      </label>
                      {/* {errors.costomizedSubject && (
                        <div className="invalid-feedback mb-2">
                          {errors.costomizedSubject.message}
                        </div>
                      )} */}
                    </div>
                  </div>
                )}

                <div className="form-group mb-3">
                  <textarea
                    name="message"
                    id="message"
                    className={`form-control rounded ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    rows="4"
                    placeholder="Message"
                    {...register("message")}
                  ></textarea>
                  {errors.message && (
                    <div className="invalid-feedback">
                      {errors.message.message}
                    </div>
                  )}
                </div>
                <button type="submit" className="btn btn-custom btn-lg w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="col-md-3 offset-md-1 contact-info flex-column">
            <div className="contact-item mb-4">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker text-primary me-2"></i>
                </span>
                {props.data ? props.data.address : <Loader/>}
              </p>
            </div>
            <div className="contact-item mb-3">
              <p>
                <span>
                  <i className="fa fa-phone text-primary me-2"></i>
                </span>{" "}
                {props.data ? <Loader/>  : '+27 63 441 4863'}
              </p>
            </div>
            <div className="contact-item mb-3">
              <p>
                <span>
                  <i className="fa fa-envelope-o text-primary me-2"></i>
                </span>{" "}
                {props.data ? <Loader/> : "skyfordcciacademy@gmail.com"}
              </p>
            </div>
          </div>
        </div>
        </div>

      <FaUserClock/>: {userId}
    </div>
  );
};
export  default Contact;