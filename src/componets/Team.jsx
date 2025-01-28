import React from "react";
import Loader from "./Loader";
import Accordion from "react-bootstrap/Accordion";

const Team = (props) => {
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
        <div className="mb- mb-5">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <strong>Mission</strong>
              </Accordion.Header>
              <Accordion.Body className="text-bg-info rounded shadow-sm z-3">
                Our mission is to empower individuals with cutting-edge coding skills, enabling them to transform their futures. Through mentorship, accessible resources, and innovative learning approaches, we aim to foster a world where technology creates equal opportunities for all.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <strong>2026 Goal</strong>
              </Accordion.Header>
              <Accordion.Body className="bg-light p-4 mt-2 rounded shadow-sm">
                By 2026, our goal is to have trained over <span className="fw-bold text-success">10,000 students</span> worldwide, equipping them with job-ready coding expertise. We plan to establish <span className="fw-bold text-primary">5 global hubs</span> for coding mentorship, offering affordable courses and career guidance to underserved communities.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        {/* Team Section */}
        {/* <div id="row" className="row g-2 mb-5 mt-5">
          {props.data ? (
            props.data.map((d, i) => (
              <div
                key={`${d.name}-${i}`}
                className="col-lg-4 col-md-6"
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
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Team;
