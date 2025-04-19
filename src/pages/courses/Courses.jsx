import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaDatabase, FaPaintBrush } from "react-icons/fa";
import axios from "axios";

const Courses = () => {
  const [images, setImages] = useState({
    webDev: null,
    dataScience: null,
    uiUx: null,
  });

  // Fetch images from Unsplash API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Web Development Image
        const webDevImage = await axios.get(
          "https://api.unsplash.com/photos/random?query=web+development&client_id=vKvUZ1Wv3ez0cdcjK-d9KMB8_wPVRLNQaC2P8FVssaw"
        );

        // Data Science Image
        const dataScienceImage = await axios.get(
          "https://api.unsplash.com/photos/random?query=data+science&client_id=vKvUZ1Wv3ez0cdcjK-d9KMB8_wPVRLNQaC2P8FVssaw"
        );

        // UI/UX Design Image
        const uiUxImage = await axios.get(
          "https://api.unsplash.com/photos/random?query=ui+ux+design&client_id=vKvUZ1Wv3ez0cdcjK-d9KMB8_wPVRLNQaC2P8FVssaw"
        );

        setImages({
          webDev: webDevImage.data[0].urls.regular,
          dataScience: dataScienceImage.data[0].urls.regular,
          uiUx: uiUxImage.data[0].urls.regular,
        });
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

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
              {images.webDev && (
                <Image src={images.webDev} alt="Web Development" fluid className="mb-3" />
              )}
              <FaLaptopCode size={60} className="mb-3 course-icon text-info" />
              <h3>Web Development</h3>
              <p>Master front-end and back-end development using HTML, CSS, JavaScript, React, and more.</p>
            </Link>
          </Col>

          {/* Data Science Course */}
          <Col md={4} className="text-center mb-4">
            <Link to="/courses/data-science" className="course-link text-decoration-none">
              {images.dataScience && (
                <Image src={images.dataScience} alt="Data Science" fluid className="mb-3" />
              )}
              <FaDatabase size={60} className="mb-3 course-icon text-success" />
              <h3>Data Science</h3>
              <p>Gain practical skills in Python, data visualization, machine learning, and data analytics.</p>
            </Link>
          </Col>

          {/* UI/UX Design Course */}
          <Col md={4} className="text-center mb-4">
            <Link to="/courses/ui-ux" className="course-link text-decoration-none">
              {images.uiUx && (
                <Image src={images.uiUx} alt="UI/UX Design" fluid className="mb-3" />
              )}
              <FaPaintBrush size={60} className="mb-3 course-icon text-warning" />
              <h3>UI/UX Design </h3>
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
