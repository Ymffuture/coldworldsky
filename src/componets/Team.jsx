import React, {useState} from "react";
import Loader from "./Loader";

const Team = (props) => {

  const [activeTab, setActiveTab] = useState("mission");
  return (
    <div id="team" className="text-center py-5 bg-light">
      <div className="container">
        {/* Section Title */}
        <div className="col-md-12 section-title mb-5">
          <h2 className="display-5 fw-bold text-primary">Our Company's Goal</h2>
          <p className="text-muted fs-5">
            At <span className="fw-bold text-success">Skyford</span>, we strive to make coding accessible to everyone, bridging the gap for those who can't reach it themselves.
          </p>
        </div>

        {/* Accordion Section */}
     

        {/* Team Section */}
        <div id="row" className="row g-2 mb-5 mt-5">
          {props.data ? (
            props.data.map((d, i) => (
              <div
                key={`${d.name}-${i}`}
                className="col-lg-10 col-md-6"
              >
                <div className="team-card border rounded-3 shadow-sm p-3">
                  <div className="thumbnail">
                    <img
                      src={d.img}
                      alt={`${d.name}`}
                      className="team-img img-fluid rounded-circle mb-3"
                    />
                    <div className="caption text-center">
                      <h5 className="fw-bold">{d.name}</h5>
                      <p className="text-muted">{d.job}</p>
                      <p className="text-secondary small">
                        Passionate about coding and education, {d.name} brings a wealth of experience in {d.job.toLowerCase()} to drive Skyford's mission forward.
                      </p>
                    </div>
                  </div>
                </div>


        <div className="tab-container">
      {/* Tab Navigation */}
      <div className="tab-nav">
        <button
          className={`tab-button ${activeTab === "mission" ? "active" : ""}`}
          onClick={() => setActiveTab("mission")}
        >
          <strong>Mission</strong>
        </button>
        <button
          className={`tab-button ${activeTab === "goal" ? "active" : ""}`}
          onClick={() => setActiveTab("goal")}
        >
          <strong>2026 Goal</strong>
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "mission" && (
          <div className="tab-pane">
            <p>
              Our mission is to empower individuals with cutting-edge coding skills, enabling them to transform their futures.
              Through mentorship, accessible resources, and innovative learning approaches, we aim to foster a world where technology creates equal opportunities for all.
            </p>
          </div>
        )}

        {activeTab === "goal" && (
          <div className="tab-pane">
            <p>
              By 2026, our goal is to have trained over <span className="highlight">10,000 students</span> worldwide,
              equipping them with job-ready coding expertise. We plan to establish <span className="highlight-primary">5 global hubs</span> for coding mentorship,
              offering affordable courses and career guidance to underserved communities.
            </p>
          </div>
        )}
      </div>
    </div>
      </div>
    </div>
  );
};

export default Team;
