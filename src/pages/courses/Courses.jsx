import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaDatabase, FaPaintBrush } from "react-icons/fa";

const Courses = () => {
  return (
    <div id="header">
      {/* Header Section */}
      <header id="header">
        <div className="intro container-fluid">
          <div className="overlay d-flex justify-content-center align-items-center vh-20">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text text-center">
                  <h1 className="display-3">Courses<span className="text-primary">.</span></h1>
                  <p className="lead">Empowering education through innovation and excellence.</p>
                  <Link to="/find-a-tutor" className="btn btn-custom btn-lg page-scroll">
                    Find a Tutor
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Disclaimer Section */}
      <Container className="mt-5">
        <div className="alert alert-warning text-center shadow-sm rounded p-4">
          <strong>Note:</strong> We do <strong>not offer certificates</strong>. Our focus is on <strong>preparation for success</strong> at top coding schools, universities, and job-readiness programs.
        </div>
      </Container>

      {/* Courses Section */}
      <Container className="py-5 courses-home">
        <h2 className="text-center mb-4 text-primary">Explore Our Courses</h2>
        <p className="text-center mb-5 text-muted">
          Discover tech-focused programs designed to equip you with practical, in-demand skills. Select a path below to begin your journey.
        </p>

        <Row>
          {/* Web Dev Course */}
          <Col md={4} className="text-center mb-4">
            <Link to="/courses/web-dev" className="course-link text-decoration-none">
              <FaLaptopCode size={60} className="mb-3 course-icon text-info" />
              <h3>Web Development</h3>
              <p>Master front-end and back-end development using HTML, CSS, JavaScript, React, and more.</p>
            </Link>
          </Col>

          {/* Data Science Course */}
          <Col md={4} className="text-center mb-4">
            <Link to="/courses/data-science" className="course-link text-decoration-none">
              <FaDatabase size={60} className="mb-3 course-icon text-success" />
              <h3>Data Science</h3>
              <p>Gain practical skills in Python, data visualization, machine learning, and data analytics.</p>
            </Link>
          </Col>

          {/* UI/UX Design Course */}
          <Col md={4} className="text-center mb-4">
            <Link to="/courses/ui-ux" className="course-link text-decoration-none">
              <FaPaintBrush size={60} className="mb-3 course-icon text-warning" />
              <h3>UI/UX Design</h3>
              <p>Learn the principles of user experience and interface design with modern tools like Figma and Adobe XD.</p>
            </Link>
          </Col>
        </Row>

        {/* Nested Routes */}
        <Outlet />
      </Container>
    </div>
  );
};

export default Courses;

