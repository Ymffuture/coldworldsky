import React, { useState } from "react";
import Loader from "./Loader";

const Team = (props) => {
  const [activeTab, setActiveTab] = useState("mission");

  const tabStyles = {
    container: {
      marginTop: "2rem",
      textAlign: "center"
    },
    dropdown: {
      margin: "0 auto",
      display: "inline-block",
      position: "relative"
    },
    dropdownTrigger: {
      display: "inline-block",
      padding: "0.5rem 1rem",
      fontWeight: "bold",
      backgroundColor: "#00d1b2",
      color: "#fff",
      borderRadius: "6px",
      cursor: "pointer"
    },
    dropdownMenu: {
      position: "absolute",
      backgroundColor: "#fff",
      border: "1px solid #dbdbdb",
      boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
      borderRadius: "6px",
      zIndex: 10,
      marginTop: "0.5rem",
      minWidth: "200px",
      left: 0
    },
    dropdownItem: {
      padding: "0.75rem 1rem",
      textAlign: "left",
      color: "#363636",
      cursor: "pointer",
      borderBottom: "1px solid #f5f5f5"
    },
    content: {
      marginTop: "1rem",
      padding: "1rem",
      backgroundColor: "#f5f5f5",
      borderRadius: "6px",
      maxWidth: "800px",
      margin: "1rem auto",
      textAlign: "left"
    }
  };

  return (
    <div id="team" className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="container has-text-centered">
        <h2 className="title is-3 has-text-primary">Our Company's Goal</h2>
        <p className="subtitle is-5">
          At <strong className="has-text-success">Skyford</strong>, we strive to make coding accessible to everyone,
          bridging the gap for those who can't reach it themselves.
        </p>

        {/* Team Grid */}
        <div className="columns is-multiline is-centered mt-6">
          {props.data ? (
            props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="column is-6-tablet is-4-desktop">
                <div className="box has-text-centered">
                  <figure className="image is-128x128 is-inline-block">
                    <img
                      className="is-rounded"
                      src={d.img}
                      alt={d.name}
                    />
                  </figure>
                  <h4 className="title is-5 mt-3">{d.name}</h4>
                  <p className="has-text-grey">{d.job}</p>
                  <p className="has-text-grey-dark is-size-7 mt-2">
                    Passionate about coding and education, {d.name} brings a wealth of experience in{" "}
                    {d.job.toLowerCase()} to drive Skyford's mission forward.
                  </p>
                </div>
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div>

        {/* Dropdown Tabs */}
        <div style={tabStyles.container}>
          <div style={tabStyles.dropdown}>
            <div style={tabStyles.dropdownTrigger}>
              {activeTab === "mission" ? "Mission" : "2026 Goal"}
              <span style={{ marginLeft: "0.5rem" }}>▼</span>
            </div>
            <div style={tabStyles.dropdownMenu}>
              <div
                style={tabStyles.dropdownItem}
                onClick={() => setActiveTab("mission")}
              >
                Mission
              </div>
              <div
                style={tabStyles.dropdownItem}
                onClick={() => setActiveTab("goal")}
              >
                2026 Goal
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div style={tabStyles.content}>
            {activeTab === "mission" && (
              <p>
                Our mission is to empower individuals with cutting-edge coding skills, enabling them to transform their futures.
                Through mentorship, accessible resources, and innovative learning approaches, we aim to foster a world where technology creates equal opportunities for all.
              </p>
            )}
            {activeTab === "goal" && (
              <p>
                By 2026, our goal is to have trained over <strong className="has-text-success">10,000 students</strong> worldwide,
                equipping them with job-ready coding expertise. We plan to establish <strong className="has-text-primary">5 global hubs</strong> for coding mentorship,
                offering affordable courses and career guidance to underserved communities.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
