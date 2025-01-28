
import React from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import { FaUsers, FaRegHandshake, FaChartLine } from "react-icons/fa";
import { Link } from 'react-router-dom';
import MainAbout from '../componets/about'
const About = () => {
  return (
    <div classNane='container-fluid position-relative'>
   <header id="header" className="text-center">
      <div className="intro container-fluid ">
       
        <div className="overlay d-flex justify-content-center align-items-center vh-100">
       
          <div className="container">
            <div className="row ">
              <div className="col-md-8 col-md-offset-2 intro-text ">
                
                <h1 >
                About Us
                  <span>.</span>
                </h1>
                <p >
                  SFCCI
                </p>
                <Link
                  to="/"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Home
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <MainAbout/>
    <Container className="py-5">
      <Row>
        <Col md={6} className="mb-4">
          <Card className="shadow h-100">
            <Card.Body>
              <Card.Title className="text-center text-uppercase text-success">Our Mission</Card.Title>
              <Card.Text>
                At Skyford Academy, our mission is to provide world-class education that equips students with knowledge and skills to excel in academics and beyond.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="shadow h-100">
            <Card.Body>
              <Card.Title className="text-center text-uppercase text-warning">Our Vision</Card.Title>
              <Card.Text>
                To be a leading institution that fosters innovation, creativity, and lifelong learning, preparing our students to become future leaders.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={4} className="mb-4">
          <Card className="shadow h-100">
            <Card.Body className="text-center">
              <FaUsers size={50} className="text-info mb-3" />
              <Card.Title>Experienced Team</Card.Title>
              <Card.Text>
                Our staff consists of highly qualified and experienced educators dedicated to student success.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="shadow h-100">
            <Card.Body className="text-center">
              <FaRegHandshake size={50} className="text-success mb-3" />
              <Card.Title>Strong Community</Card.Title>
              <Card.Text>
                We value partnerships with parents and the community to create a supportive environment for learners.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="shadow h-100">
            <Card.Body className="text-center">
              <FaChartLine size={50} className="text-warning mb-3" />
              <Card.Title>Proven Results</Card.Title>
              <Card.Text>
                Consistent academic achievements and excellence in extracurricular activities define our success.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  

    </div>
  );
};

export default About;