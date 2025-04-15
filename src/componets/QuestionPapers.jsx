import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { FaDownload, FaSearch, FaBook, FaFilter, FaCalendarAlt, FaBookOpen } from "react-icons/fa";
import axios from "axios";
import Loader from './Loader';
import { useSpring, animated } from "@react-spring/web";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const QuestionPapers = () => {
  const [width, setWidth] = useState(1200);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [topicFilter, setTopicFilter] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/papers.json");
        setData(res.data.papers || []);
      } catch (err) {
        setError(err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    };
    getData();
  }, []);

  const filteredData = data.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.topic.toLowerCase().includes(search.toLowerCase());
    const matchesSubject = subjectFilter ? doc.name === subjectFilter : true;
    const matchesYear = yearFilter ? doc.yr === yearFilter : true;
    const matchesTopic = topicFilter ? doc.topic === topicFilter : true;

    return matchesSearch && matchesSubject && matchesYear && matchesTopic;
  });

  const handleLoadMore = () => setVisibleCount((prev) => prev + 8);

  const introFade = useSpring({
    from: { opacity: 0, transform: 'translateY(-30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 200,
  });

 

  return (
    <div>
       <header id="header">
            <div className="intro container-fluid">
              <div className="overlay d-flex justify-content-center align-items-center vh-100">
                <div className="container text-center">
                  <animated.h1 style={introFade} className="display-4 fw-bold">
                    question <span className="text-primary">papers</span>
                  </animated.h1>
                  <Link to='/find-a-tutor' className="btn btn-primary rounded-pill shadow">Find a Tutor</Link>
                </div>
              </div>
            </div>
          </header>
<h2 className="justify-content-center align-items-center p-4">Question Papers - For Only grade 10 , 11 and 12.</h2>
<Container className="mt-5">
        <div className="alert alert-warning text-center shadow-sm rounded p-4">
          <strong>Note:</strong> We do <strong>Time to upload new question papers</strong>. Our focus is on <strong>preparation for success</strong> at top coding schools, universities, and job-readiness programs, by trying to get unique files for you.
        </div>
      </Container>
      {loading? <Loader/>: <Container fluid className="QuestionPapers-section">
        <hr className='hr' />

        <Row className="mb-4">
          <Col md={3}>
            <InputGroup>
              <InputGroup.Text><FaSearch /></InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Search papers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </InputGroup>
          </Col>

          <Col md={3}>
            <InputGroup>
              <InputGroup.Text><FaBook /></InputGroup.Text>
              <Form.Select value={subjectFilter} onChange={(e) => setSubjectFilter(e.target.value)}>
                <option value="">All Subjects</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physical Sciences">Physical Sciences</option>
                <option value="Life Sciences">Life Sciences</option>
              </Form.Select>
            </InputGroup>
          </Col>

          <Col md={3}>
            <InputGroup>
              <InputGroup.Text><FaCalendarAlt /></InputGroup.Text>
              <Form.Select value={yearFilter} onChange={(e) => setYearFilter(e.target.value)}>
                <option value="">All Years</option>
                {[...new Set(data.map(doc => doc.yr))].map((yr, idx) => (
                  <option key={idx} value={yr}>{yr}</option>
                ))}
              </Form.Select>
            </InputGroup>
          </Col>

          <Col md={3}>
            <InputGroup>
              <InputGroup.Text><FaFilter /></InputGroup.Text>
              <Form.Select value={topicFilter} onChange={(e) => setTopicFilter(e.target.value)}>
                <option value="">All Topics</option>
                {[...new Set(data.map(doc => doc.topic))].map((topic, idx) => (
                  <option key={idx} value={topic}>{topic}</option>
                ))}
              </Form.Select>
            </InputGroup>
          </Col>
        </Row>

        <Row>
          {filteredData.slice(0, visibleCount).map((doc, index) => (
            <Col key={index} xs={12} sm={6} md={3} className="mb-4 d-flex flex-column align-items-center">
              <p className='text-bg-dark p-2 rounded w-100 text-center'>{doc.name} - Grade: 10 -12</p>
              <Document file={doc.file} className="d-flex justify-content-center">
                <Page pageNumber={1} scale={width > 786 ? 1 : 0.6} />
              </Document>
              <div className="mt-2 text-center">
                <small><strong>📘 Topic:</strong> {doc.topic}</small><br />
                <small><strong>🎓 Grade:</strong> {doc.grade}</small><br />
                <small><strong>📅 Year:</strong> {doc.yr}</small>
              </div>
              <Button
                href={doc.file}
                target="_blank"
                className="mt-2 btn btn-outline-success"
              >
                <FaDownload /> &nbsp;Download Paper
              </Button>
            </Col>
          ))}
        </Row>

        {visibleCount < filteredData.length && (
          <div className="text-center mt-4">
            <Button variant="primary" onClick={handleLoadMore}>
              <FaBookOpen /> &nbsp;Load More
            </Button>
          </div>
        )}

        <hr className='hr' />
      </Container>}    
     
    </div>
  );
};

export default QuestionPapers;
