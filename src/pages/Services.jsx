import React,{useState , useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLaptopCode, FaBookReader, FaChalkboardTeacher, FaGlobe } from "react-icons/fa";
import axios from 'axios'

const Services = () => {
const [data ,setData] = useState(null)
useEffect(()=>{
  const fetchData = async ()=>{
    const results = await axios.get('http://localhost:7411/server/api/data');
    setData(results.data)
  }
  fetchData();
},[])
  return (
    <div className="services-page">
      {/* <h6>Data from server: {data && <div>{JSON.stringify(data)}</div>}</h6> */}
      <Container className="py-5">
        <h1 className="text-center mb-4 text-primary">Our Services</h1>
        <p className="text-center lead mb-5">
          At SkyfordCCI, we offer a range of services to empower both learners and educators. Our approach blends innovative technology with expert guidance.
        </p>
        <Row className="service-list">
          <Col md={6} className="service-item d-flex align-items-center mb-4">
            <div className="icon-container me-3">
              <FaLaptopCode size={60} className="service-icon" />
            </div>
            <div className="service-content">
              <h3>Coding Classes</h3>
              <p>
                Comprehensive courses designed to build modern programming skills for the digital age.
              </p>
            </div>
          </Col>
          <Col md={6} className="service-item d-flex align-items-center mb-4">
            <div className="icon-container me-3">
              <FaBookReader size={60} className="service-icon" />
            </div>
            <div className="service-content">
              <h3>Academic Tutoring</h3>
              <p>
                Personalized tutoring sessions that help students excel in subjects ranging from math to science.
              </p>
            </div>
          </Col>
          <Col md={6} className="service-item d-flex align-items-center mb-4">
            <div className="icon-container me-3">
              <FaChalkboardTeacher size={60} className="service-icon" />
            </div>
            <div className="service-content">
              <h3>Workshops & Seminars</h3>
              <p>
                Interactive sessions focused on skill development, leadership, and innovation.
              </p>
            </div>
          </Col>
          <Col md={6} className="service-item d-flex align-items-center mb-4">
            <div className="icon-container me-3">
              <FaGlobe size={60} className="service-icon" />
            </div>
            <div className="service-content">
              <h3>Online Resources</h3>
              <p>
                A vast collection of digital resources, tutorials, and e-learning tools available anytime.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
