import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaDatabase, FaPaintBrush } from "react-icons/fa";

const Courses = () => {
  return (

    <div id="header" >
  <header id="header">
        <div className="intro container-fluid ">
          <div className="overlay d-flex justify-content-center align-items-center vh-20">
            <div className="container">
              <div className="row ">
                <div className="col-md-8 col-md-offset-2 intro-text ">
                <h1 className="display-3">Courses<span>.</span></h1>
                <p className="lead">Empowering education through innovation and excellence.</p>

                  <Link

                    to='/find-a-tutor'
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Find a Tutor
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>



      <Container className="py-5 courses-home">

<h1 className="text-center mb-4 text-primary">Courses</h1>
<p className="text-center mb-5">
  Explore our diverse range of courses designed to help you excel in today’s digital landscape. Choose a course category to learn more.
</p>
<Row>
  <Col md={4} className="text-center mb-4">
    <Link to="/courses/web-dev" className="course-link text-decoration-none">
      <FaLaptopCode size={60} className="mb-3 course-icon" />
      <h3>Web Development</h3>
      <p>Learn modern web development using the latest technologies.</p>
    </Link>
  </Col>
  <Col md={4} className="text-center mb-4">
    <Link to="/courses/data-science" className="course-link text-decoration-none">
      <FaDatabase size={60} className="mb-3 course-icon" />
      <h3>Data Science</h3>
      <p>Unlock the power of data with hands-on analytics and machine learning.</p>
    </Link>
  </Col>
  <Col md={4} className="text-center mb-4">
    <Link to="/courses/ui-ux" className="course-link text-decoration-none">
      <FaPaintBrush size={60} className="mb-3 course-icon" />
      <h3>UI/UX Design</h3>
      <p>Create intuitive, engaging, and user-friendly designs.</p>
    </Link>
  </Col>
</Row>
<Outlet />
</Container>
    </div>

    
  );
};

export default Courses;
