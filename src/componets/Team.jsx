import React, { useState } from "react";
import Loader from "./Loader";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaStar, FaCheckCircle } from "react-icons/fa";

const Team = (props) => {
  const [activeTab, setActiveTab] = useState("mission");
  const [showMission, setShowMission] = useState(false);

  const handleOpen = () => setShowMission(true);
  const handleClose = () => setShowMission(false);

  return (
    <div id="team" className="text-center py-5 bg-light">
      <div className="container">
        <div className="col-md-12 section-title mb-5">
          <h2 className="display-5 fw-bold text-primary">Our Company's Goal</h2>
          <p className="text-muted fs-5">
            At <span className="fw-bold text-success">Quorvex</span>, we strive to make coding accessible to everyone.
          </p>
          <button className="btn btn-outline-primary mt-3" onClick={handleOpen}>
            Read Our Mission
          </button>
        </div>

        <div id="row" className="row g-2 mb-5 mt-5">
          {props.data ? (
            props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-lg-10 col-md-6 mx-auto">
                <div className="team-card border rounded-3 shadow-sm p-3 position-relative">

                  {/* Star Rating - Top Left */}
                  <div className="position-absolute top-0 start-0 m-2">
                    <span className="text-warning d-flex align-items-center gap-1">
                      <FaStar className="me-1" /> 4/5
                    </span>
                  </div>

                  <div className="thumbnail">
                    <img
                      src={d.img}
                      alt={d.name}
                      className="team-img img-fluid rounded-circle mb-3"
                    />

                    <div className="caption text-center">
                      <h5 className="fw-bold">{d.name} <i className={d.icon} style={{color:"royalblue"}}></i></h5>
                      <p className="text-muted">{d.job}</p>
                      <p className="text-secondary small">
                        Passionate about coding and education (High school subjects), {d.name} brings a wealth of experience in {d.job.toLowerCase()} to drive Quorvex's mission forward.
                      </p>

                      {/* Social Media Icons */}
                      <div className="d-flex justify-content-center gap-3 mt-3">
                        <a
                          href="https://facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary fs-4"
                        >
                          <FaFacebookF />
                        </a>
                        <a
                          href="https://linkedin.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-info fs-4"
                        >
                          <FaLinkedinIn />
                        </a>
                        <a
                          href="https://wa.me/yourNumberHere"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-success fs-4"
                        >
                          <FaWhatsapp />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <Loader />
          )}
       
        </div>
        
      </div>

      {/* Mission Modal */}
      {showMission && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content shadow-lg">
              <div className="modal-header">
                <h5 className="modal-title">Our Mission</h5>
                <button type="button" className="btn-close" onClick={handleClose}></button>
              </div>
              <div className="modal-body text-start">
                <p>
                  Our mission is to empower individuals with cutting-edge coding skills, enabling them to transform their futures.
                  Through mentorship, accessible resources, and innovative learning approaches, we aim to foster a world where
                  technology creates equal opportunities for all.
                </p>
              </div>
              <div className="modal-footer">
                <button onClick={handleClose} className="btn btn-secondary">Close</button>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show" onClick={handleClose}></div>
        </div>
      )}
    </div>
  );
};

export default Team;

