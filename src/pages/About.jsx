import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <header id="header" className="bg-primary text-white py-5">
        <Container className="text-center">
          <h1 className="display-3 fw-bold">About Quorvex</h1>
          <p className="lead">
            Empowering education through innovation and excellence.
          </p>
          <Link
            to="/find-a-tutor"
            className="btn btn-light btn-lg mt-3"
            aria-label="Find a tutor"
          >
            Find a Tutor
          </Link>
        </Container>
      </header>

      {/* About Content */}
      <Container as="section" className="py-5">
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h2 className="fw-bold">Our Mission</h2>
            <p>
              At <strong>Quorvex</strong>, our mission is to transform education
              by making learning accessible and engaging. We strive to bridge
              the gap between traditional teaching and modern technology,
              empowering students to achieve academic and professional success.
            </p>
          </Col>
          <Col md={6}>
            <img
              src="/img/about-03.jpg"
              alt="Illustration of Quorvex's mission in action"
              className="img-fluid rounded shadow"
              loading="lazy"
            />
          </Col>
        </Row>

        <Row className="align-items-center mb-5 flex-md-row-reverse">
          <Col md={6}>
            <h2 className="fw-bold">Our Vision</h2>
            <p>
              We envision a future where education is personalized,
              interactive, and universally accessible. By continually
              innovating, <strong>Quorvex</strong> aims to lead in creating
              learning environments that foster growth, creativity, and
              lifelong curiosity.
            </p>
          </Col>
          <Col md={6}>
            <img
              src="/img/about-01.jpg"
              alt="Visualization of Quorvex's educational vision"
              className="img-fluid rounded shadow"
              loading="lazy"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="fw-bold">Our Values</h2>
            <ul className="list-group list-group-flush fs-5">
              <li className="list-group-item">
                <strong>Innovation</strong> – Embracing cutting-edge teaching
                methods and technology
              </li>
              <li className="list-group-item">
                <strong>Excellence</strong> – Committing to high-quality
                education and continuous improvement
              </li>
              <li className="list-group-item">
                <strong>Integrity</strong> – Operating with transparency,
                honesty, and fairness
              </li>
              <li className="list-group-item">
                <strong>Inclusivity</strong> – Ensuring learning opportunities
                are accessible to everyone
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default About;
