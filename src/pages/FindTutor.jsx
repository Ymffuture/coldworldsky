import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link} from 'react-router-dom';
const FindTutor = () => {
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [showRules, setShowRules] = useState(false);

  const fadeIn = useSpring({
    opacity: selectedTutor ? 1 : 0,
    transform: selectedTutor ? "translateY(0px)" : "translateY(-20px)",
    config: { tension: 200, friction: 20 },
  });

  const rulesFade = useSpring({
    opacity: showRules ? 1 : 0,
    maxHeight: showRules ? "500px" : "0px",
    overflow: "hidden",
    config: { tension: 200, friction: 20 },
  });

  const tutors = [
    {
      name: "Future",
      subjects: "Sciences, Math and Frontend",
      description: "Experienced in Physics, Chemistry, and Advanced Math.",
      img: "", 
      contact: "futurekgomotso@zohomail.com",
      social: {
        facebook: "https://facebook.com/kgomotso",
        twitter: "https://twitter.com/kgomotso",
        linkedin: "https://linkedin.com/in/kgomotso",
      },
    },
    {
      name: "Jane Doe",
      subjects: "English and Literature",
      description: "Expert in grammar, writing, and classical literature.",
      img: "",
      contact: "N/A",
      social: {
        facebook: "https://facebook.com/jane",
        twitter: "https://twitter.com/jane",
        linkedin: "https://linkedin.com/in/jane",
      },
    },
    {
      name: "John Smith",
      subjects: "Computer Science",
      description: "Specialist in programming and algorithms.",
      img: "",
      contact: "N/A",
      social: {
        facebook: "https://facebook.com/john",
        twitter: "https://twitter.com/john",
        linkedin: "https://linkedin.com/in/john",
      },
    },
  ];

  return (

    <div>
 <header id="header">
        <div className="intro container-fluid ">
          <div className="d-flex justify-content-center align-items-center vh-20">
            <div className="container">
              <div className="row ">
                <div className="col-md-8 col-md-offset-2 intro-text ">
                <h1 className="display-3">tutors </h1>
                <p className="lead">Empowering education through innovation and excellence.</p>

                  <Link

                    to='/tutoring/subjects/'
                    className="btn btn-custom btn-lg page-scroll"
                  >
                   Subjects <i className='bi bi-box-arrow-right'></i>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container py-5">
      
      <h2 className="text-center text-primary mb-4">
        <i className="bi bi-person-bounding-box"></i> Find Our Best Tutors
      </h2>
      <p className="text-center text-muted">
        Click on a tutor to view details and contact information.
      </p>

      {/* Tutors List */}

      <div className="row g-4">
        {tutors.map((tutor, index) => (
          <div className="col-md-4" key={index}>
            <div
              className="card shadow-sm border-0"
              onClick={() => setSelectedTutor(tutor)}
              style={{ cursor: "pointer" }}
            >
              {/* Tutor Image or Placeholder */}
              {tutor.img ? (
                <img src={tutor.img} className="card-img-top" alt={tutor.name} />
              ) : (
                <div className="text-center p-4 bg-light rounded">
                  <i className="bi bi-person-circle" style={{ fontSize: "6.5rem", color: "#6c757d" }}></i>
                </div>
              )}
              <div className="card-body text-center">
                <h5 className="card-title">{tutor.name}</h5>
                <p className="card-text text-muted">
                  <i className="bi bi-book"></i> Subjects: {tutor.subjects}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tutor Details */}
      {selectedTutor && (
        <animated.div style={fadeIn} className="mt-5 p-4 border rounded shadow-sm bg-light">
          <h4 className="text-primary">
            <i className="bi bi-person-fill"></i> {selectedTutor.name}
          </h4>
          <p className="fw-bold">
            <i className="bi bi-book"></i> Subjects: {selectedTutor.subjects}
          </p>
          <p>{selectedTutor.description}</p>
          <p>
            <strong><i className="bi bi-envelope-fill"></i> Contact:</strong> {selectedTutor.contact}
          </p>
          <div className="d-flex gap-3">
            <a href={selectedTutor.social.facebook} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
              <i className="bi bi-facebook"></i> Facebook
            </a>
            <a href={selectedTutor.social.twitter} target="_blank" rel="noopener noreferrer" className="btn btn-info btn-sm">
              <i className="bi bi-twitter"></i> Twitter
            </a>
            <a href={selectedTutor.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm">
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
          </div>
          <button className="btn btn-outline-danger mt-3" onClick={() => setSelectedTutor(null)}>
            <i className="bi bi-x-circle"></i> Close
          </button>
        </animated.div>
      )}

      {/* Instructions & Rules Section */}
      <div className="mt-5">
        <button className="btn btn-warning" onClick={() => setShowRules(!showRules)}>
          {showRules ? (
            <>
              <i className="bi bi-chevron-up"></i> Hide Rules & Instructions
            </>
          ) : (
            <>
              <i className="bi bi-chevron-down"></i> View Rules & Instructions
            </>
          )}
        </button>

        <animated.div style={rulesFade} className="mt-3 p-4 border rounded bg-light">
          <h5 className="text-primary">
            <i className="bi bi-lightbulb"></i> How It Works
          </h5>
          <ul>
            <li><i className="bi bi-arrow-right-circle"></i> Select a tutor to view their details.</li>
            <li><i className="bi bi-arrow-right-circle"></i> Contact the tutor through the provided links.</li>
            <li><i className="bi bi-arrow-right-circle"></i> Ensure you communicate professionally.</li>
          </ul>
          <h5 className="text-danger">
            <i className="bi bi-exclamation-triangle-fill"></i> Rules
          </h5>
          <ul>
            <li><i className="bi bi-check-circle"></i> Respect the tutors and their time.</li>
            <li><i className="bi bi-check-circle"></i> No spamming or inappropriate messages.</li>
            <li><i className="bi bi-check-circle"></i> Follow the guidelines provided for each tutor.</li>
          </ul>
        </animated.div>
      </div>
    </div>



    </div>
   
  );
};

export default FindTutor;
