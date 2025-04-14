import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSpring, animated } from '@react-spring/web';
const About = () => {
   const introFade = useSpring({
      from: { opacity: 0, transform: 'translateY(-30px)' },
      to: { opacity: 1, transform: 'translateY(0px)' },
      delay: 200,
    });
  return (
    <main className="about-page">
      {/* Hero Section */}
     <header id="header">
            <div className="intro container-fluid">
              <div className="overlay d-flex justify-content-center align-items-center vh-100">
                <div className="container text-center">
                  <animated.h1 style={introFade} className="display-4 fw-bold">
                    About <span className="text-primary">Us</span>
                  </animated.h1>
                  <Link to='/find-a-tutor' className="btn btn-primary rounded-pill shadow">Find a Tutor</Link>
                </div>
              </div>
            </div>
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
