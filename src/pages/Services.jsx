import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaLaptopCode,
  FaBookReader,
  FaChalkboardTeacher,
  FaGlobe,
} from "react-icons/fa";
import axios from "axios";

const Services = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await axios.get("http://localhost:7411/server/api/data");
        setData(results.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="services-page">
      {/* Hero Section */}
      <header id="header" className="bg-dark text-white py-5">
        <Container className="text-center">
          <h1 className="display-3 fw-bold text-capitalize">Our Services</h1>
          <p className="lead">
            Empowering education through innovation and excellence.
          </p>
          <Link
            to="/find-a-tutor"
            className="btn btn-warning btn-lg mt-3"
            aria-label="Find a tutor"
          >
            Find a Tutor
          </Link>
        </Container>
      </header>

      {/* Services Section */}
      <Container as="section" className="py-5">
        <h2 className="text-center text-primary fw-bold mb-4">
          What We Offer at Quorvex
        </h2>
        <p className="text-center lead mb-5">
          At <strong>Quorvex</strong>, we offer a range of services to empower
          both learners and educators. Our approach blends innovative
          technology with expert guidance.
        </p>

        <Row>
          {[
            {
              icon: <FaLaptopCode size={60} />,
              title: "Coding Classes",
              desc: "Comprehensive courses designed to build modern programming skills for the digital age.",
            },
            {
              icon: <FaBookReader size={60} />,
              title: "Academic Tutoring",
              desc: "Personalized tutoring sessions that help students excel in subjects ranging from math to science.",
            },
            {
              icon: <FaChalkboardTeacher size={60} />,
              title: "Workshops & Seminars",
              desc: "Interactive sessions focused on skill development, leadership, and innovation.",
            },
            {
              icon: <FaGlobe size={60} />,
              title: "Online Resources",
              desc: "A vast collection of digital resources, tutorials, and e-learning tools available anytime.",
            },
          ].map((service, idx) => (
            <Col
              md={6}
              key={idx}
              className="service-item d-flex align-items-start gap-3 mb-4"
            >
              <div className="icon text-primary">{service.icon}</div>
              <div>
                <h3 className="fw-semibold">{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Optional dynamic data view (admin only maybe) */}
        {/* {data && (
          <div className="mt-5">
            <h5>Server Data Preview:</h5>
            <pre className="bg-light p-3 rounded shadow-sm">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )} */}
      </Container>
    </main>
  );
};

export default Services;
