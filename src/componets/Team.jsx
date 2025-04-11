
import React, { useState } from "react";
import Loader from "./Loader";

const Team = (props) => {
  const [activeTab, setActiveTab] = useState("mission");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const tabContainerStyle = {
    marginTop: "20px",
    textAlign: "center",
  };

  const dropdownStyle = {
    position: "relative",
    display: "inline-block",
    marginBottom: "1rem",
  };

  const dropdownContentStyle = {
    display: dropdownOpen ? "block" : "none",
    position: "absolute",
    backgroundColor: "#f9f9f9",
    minWidth: "160px",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    zIndex: 1,
  };

  const buttonStyle = (isActive) => ({
    padding: "10px 20px",
    margin: "5px",
    border: "none",
    backgroundColor: isActive ? "#00d1b2" : "#f0f0f0",
    color: isActive ? "white" : "#333",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer",
  });

  const sectionTitleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#3273dc",
  };

  return (
    <div id="team" className="has-background-light py-6">
      <div className="container has-text-centered">
        <div style={sectionTitleStyle}>Our Company's Goal</div>
        <p className="subtitle is-5">
          At <strong className="has-text-success">Skyford</strong>, we strive to make coding accessible to everyone, bridging the gap for those who can't reach it themselves.
        </p>

        {/* Dropdown Tabs */}
        <div style={tabContainerStyle}>
          <div style={dropdownStyle}>
            <button className="button is-info is-light" onClick={() => setDropdownOpen(!dropdownOpen)}>
              {activeTab === "mission" ? "Mission" : "2026 Goal"}
              <span className="icon is-small" style={{ marginLeft: 8 }}>
                <i className={`fas ${dropdownOpen ? "fa-angle-up" : "fa-angle-down"}`}></i>
              </span>
            </button>
            <div style={dropdownContentStyle}>
              <button style={buttonStyle(activeTab === "mission")} onClick={() => { setActiveTab("mission"); setDropdownOpen(false); }}>Mission</button>
              <button style={buttonStyle(activeTab === "goal")} onClick={() => { setActiveTab("goal"); setDropdownOpen(false); }}>2026 Goal</button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="box has-background-white mt-4" style={{ maxWidth: 700, margin: "0 auto" }}>
            {activeTab === "mission" && (
              <p>
                Our mission is to empower individuals with cutting-edge coding skills, enabling them to transform their futures.
                Through mentorship, accessible resources, and innovative learning approaches, we aim to foster a world where technology creates equal opportunities for all.
              </p>
            )}
            {activeTab === "goal" && (
              <p>
                By 2026, our goal is to have trained over <strong className="has-text-danger">10,000 students</strong> worldwide,
                equipping them with job-ready coding expertise. We plan to establish <strong className="has-text-primary">5 global hubs</strong> for coding mentorship,
                offering affordable courses and career guidance to underserved communities.
              </p>
            )}
          </div>
        </div>

        {/* Team Cards */}
        <div className="columns is-multiline is-centered mt-6">
          {props.data ? (
            props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="column is-6-tablet is-4-desktop">
                <div className="box has-text-centered">
                  <figure className="image is-128x128 is-inline-block mb-3">
                    <img className="is-rounded" src={d.img} alt={d.name} />
                  </figure>
                  <h4 className="title is-5">{d.name}</h4>
                  <p className="subtitle is-6 has-text-grey">{d.job}</p>
                  <p className="content is-small">
                    Passionate about coding and education, <strong>{d.name}</strong> brings a wealth of experience in <strong>{d.job.toLowerCase()}</strong> to drive Skyford's mission forward.
                  </p>
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
