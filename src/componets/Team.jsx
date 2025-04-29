import React from "react";
import Loader from "./Loader";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaStar } from "react-icons/fa";

const Team = (props) => {
  return (
    <div id="team" className="text-center py-5" style={{ backgroundColor: "#F0F8FF" }}>
      <div className="container">
        {/* Title Section */}
        <div className="col-md-12 section-title mb-5">
          <h2 className="display-5 fw-bold" style={{ color: "#1E90FF" }}>
            Our Company's Goal
          </h2>
          <p className="text-muted fs-5">
            At <span className="fw-bold" style={{ color: "#32CD32" }}>Quorvex</span>, we strive to make coding accessible to everyone.
          </p>
          <div className="mt-4">
            <p className="fs-6 text-secondary mx-auto" style={{ maxWidth: "600px" }}>
              Our mission is to empower individuals with cutting-edge coding skills, enabling them to transform their futures.
              Through mentorship, accessible resources, and innovative learning approaches, we foster a world where technology creates equal opportunities for all.
            </p>
          </div>
        </div>

        {/* Team Cards */}
        <div id="row" className="row g-4 justify-content-center">
          {props.data ? (
            props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-lg-5 col-md-6 col-sm-10">
                <div 
                  className="team-card position-relative overflow-hidden shadow-lg rounded-4 p-4 h-100"
                  style={{ background: "#ffffff", transition: "transform 0.3s", border: "2px solid #FFD700" }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-8px)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                >
                  {/* Star Rating */}
                  <div className="position-absolute top-0 start-0 p-2">
                    <span className="text-warning d-flex align-items-center gap-1">
                      <FaStar className="me-1" /> 4/5
                    </span>
                  </div>

                  {/* Team Member */}
                  <div className="thumbnail">
                    <img
                      src={d.img}
                      alt={d.name}
                      className="team-img img-fluid rounded-circle mb-3 border border-3 border-primary"
                      style={{ width: "120px", height: "120px", objectFit: "cover" }}
                    />

                    <div className="caption text-center">
                      <h5 className="fw-bold">
                        {d.name} <i className={d.icon} style={{ color: "royalblue" }}></i>
                      </h5>
                      <p className="text-muted">{d.job}</p>
                      <p className="text-secondary small">
                        Passionate about coding and education, {d.name} brings expertise in {d.job.toLowerCase()} to drive Quorvex's mission forward.
                      </p>

                      {/* Social Icons */}
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
    </div>
  );
};

export default Team;

