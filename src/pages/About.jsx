import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="hero-section text-center text-white d-flex align-items-center justify-content-center">
        <Container>
          <h1 className="display-3">About SkyfordCCI</h1>
          <p className="lead">Empowering education through innovation and excellence.</p>
        </Container>
      </div>

      <Container className="py-5 container">
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h2>Our Mission</h2>
            <p>
              At SkyfordCCI, our mission is to transform education by making learning accessible and engaging. We strive to bridge the gap between traditional teaching and modern technology, empowering students to achieve academic and professional success.
            </p>
          </Col>
          <Col md={6}>
            {/* Replace the image source with your actual image */}
            <img width='50%' src="img/about-03.jpg" alt="Our Mission" className="img-fluid rounded" />
          </Col>
        </Row>
        <Row className="align-items-center mb-5 flex-md-row-reverse">
          <Col md={6}>
            <h2>Our Vision</h2>
            <p>
              We envision a future where education is personalized, interactive, and universally accessible. By continually innovating, SkyfordCCI aims to lead in creating learning environments that foster growth, creativity, and lifelong curiosity.
            </p>
          </Col>
          <Col md={6}>
            {/* Replace the image source with your actual image */}
            <img width='50%' src="img/about-01.jpg" alt="Our Vision" className="img-fluid rounded" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Our Values</h2>
            <ul className="values-list">
              <li>Innovation – Embracing cutting-edge teaching methods and technology</li>
              <li>Excellence – Committing to high-quality education and continuous improvement</li>
              <li>Integrity – Operating with transparency, honesty, and fairness</li>
              <li>Inclusivity – Ensuring learning opportunities are accessible to everyone</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
