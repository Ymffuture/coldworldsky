import React, { useState } from "react";
import Loader from "./Loader";

const Team = (props) => {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <section id="team" className="py-5 bg-light text-center">
      <div className="container">
        {/* Section Heading */}
        <h2 className="display-5 fw-bold text-primary">Our Company's Goal</h2>
        <p className="text-muted fs-5">
          At <span className="fw-bold text-success">Skyford</span>, we strive to make coding accessible to everyone, bridging the gap for those who can't reach it themselves.
        </p>

        {/* Tab Navigation */}
        <ul className="nav nav-tabs justify-content-center my-4" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "mission" ? "active" : ""}`}
              onClick={() => setActiveTab("mission")}
              role="tab"
            >
              Mission
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "goal" ? "active" : ""}`}
              onClick={() => setActiveTab("goal")}
              role="tab"
            >
              2026 Goal
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "mission" && (
            <div className="tab-pane fade show active" role="tabpanel">
              <div className="card shadow-sm bg-white p-4">
                <p>
                  Our mission is to empower individuals with cutting-edge coding skills, enabling them to transform their futures.
                  Through mentorship, accessible resources, and innovative learning approaches, we aim to foster a world where technology creates equal opportunities for all.
                </p>
              </div>
            </div>
          )}

          {activeTab === "goal" && (
            <div className="tab-pane fade show active" role="tabpanel">
              <div className="card shadow-sm bg-white p-4">
                <p>
                  By 2026, our goal is to have trained over <strong className="text-primary">10,000 students</strong> worldwide,
                  equipping them with job-ready coding expertise. We plan to establish <strong className="text-success">5 global hubs</strong> for coding mentorship,
                  offering affordable courses and career guidance to underserved communities.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Team Cards */}
        <div className="row justify-content-center mt-5">
          {props.data ? (
            props.data.map((member, i) => (
              <div className="col-md-4 mb-4" key={`${member.name}-${i}`}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="card-img-top rounded-circle mx-auto mt-4"
                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{member.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{member.job}</h6>
                    <p className="card-text small text-secondary">
                      Passionate about coding and education, {member.name} brings a wealth of experience in {member.job.toLowerCase()} to drive Skyford's mission forward.
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;
