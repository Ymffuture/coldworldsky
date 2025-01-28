import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaLaptopCode, FaBookReader, FaChalkboardTeacher, FaGlobe } from "react-icons/fa";
import Service from '../componets/services'
const Services = (props) => {
  return (
<>
<Service {...props}/>
<Container className="py-5">
     
      <Row>
        <Col md={6} lg={4} className="mb-4">
          <Card className="shadow h-100">
            <Card.Body className="text-center">
              <FaLaptopCode size={50} className="text-info mb-3" />
              <Card.Title>Coding Classes</Card.Title>
              <Card.Text>
                Comprehensive coding courses designed to teach programming languages and web development.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-4">
          <Card className="shadow h-100">
            <Card.Body className="text-center">
              <FaBookReader size={50} className="text-success mb-3" />
              <Card.Title>Academic Tutoring</Card.Title>
              <Card.Text>
                Personalized tutoring sessions to help students excel in mathematics, science, and languages.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-4">
          <Card className="shadow h-100">
            <Card.Body className="text-center">
              <FaChalkboardTeacher size={50} className="text-warning mb-3" />
              <Card.Title>Workshops</Card.Title>
              <Card.Text>
                Interactive workshops on leadership, entrepreneurship, and personal development.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-4">
          <Card className="shadow h-100">
            <Card.Body className="text-center">
              <FaGlobe size={50} className="text-primary mb-3" />
              <Card.Title>Online Resources</Card.Title>
              <Card.Text>
                Access to a wide range of online materials, tutorials, and e-learning tools for self-paced learning.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
</>

   
  );
};

export default Services;
