import React, {useState} from "react";
import Loader from "./Loader";

const Team = (props) => {

  const [activeTab, setActiveTab] = useState("mission");
  return (
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
