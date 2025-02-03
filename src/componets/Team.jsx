import React from "react";
import Loader from "./Loader";
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

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
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div>

        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#Mission" className='container'>
      <Row>
        <Col sm={12}>
          <ListGroup>
            <ListGroup.Item action href="#Mission">
              <strong>Mission</strong>
            </ListGroup.Item>
            <ListGroup.Item action href="#2026-Goal">
              <strong>2026 Goal</strong>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={12}>
          <Tab.Content>
            <Tab.Pane eventKey="#Mission">Our mission is to empower individuals with cutting-edge coding skills, enabling them to transform their futures. Through mentorship, accessible resources, and innovative learning approaches, we aim to foster a world where technology creates equal opportunities for all.</Tab.Pane>
            <Tab.Pane eventKey="#2026-Goal">By 2026, our goal is to have trained over <span className="fw-bold text-success">10,000 students</span> worldwide, equipping them with job-ready coding expertise. We plan to establish <span className="fw-bold text-primary">5 global hubs</span> for coding mentorship, offering affordable courses and career guidance to underserved communities.
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
      </div>
    </div>
  );
};

export default Team;
