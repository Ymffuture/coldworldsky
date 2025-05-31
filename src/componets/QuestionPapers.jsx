import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import axios from "axios";
import { FaDownload, FaSearch,FaBookOpen, FaExclamationCircle, FaExclamationTriangle } from "react-icons/fa";
import Loader from './Loader';
import Spinner from './Spinner';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';



const QuestionPapers = () => {
  const [width, setWidth] = useState(1200);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [topicFilter, setTopicFilter] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);
  const [exchange, setExchage] = useState(null);

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

  const handleDownload = (doc) => {
    const link = document.createElement('a');
    link.href = doc.file;
    setTimeout(() => {
      setExchage(null);
    }, 3000);
    setExchage(<Spinner className='position-absolute' />);
    const safeName = doc.name.replace(/\s+/g, '_').toLowerCase();
    const safeTopic = doc.topic.replace(/\s+/g, '_').toLowerCase();
    const safeYear = doc.yr;
    link.download = `Quorvex_Institute-download_QuestionPaper__${safeName}_${safeTopic}_${safeYear}.pdf`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <header className="hero is-info is-fullheight">
        <div className="hero-body has-text-centered">
          <div className="container">
            <animated.h1 style={introFade} className="title is-1">
              Question <span className="has-text-primary">Papers</span>
            </animated.h1>
            <Link to='/find-a-tutor' className="button is-primary is-rounded is-medium">Find a Tutor</Link>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <h2 className="title has-text-centered">Question Papers - For Grades 10, 11 and 12</h2>
          <div className="notification is-warning has-text-centered">
            <strong><FaExclamationTriangle /> Note:</strong> We take time to upload new question papers. Our focus is on preparation for success.
          </div>

          {loading ? <Loader /> : (
            <div>
              <div className="notification is-danger has-text-centered">
                <FaExclamationCircle /> <strong>Status:</strong> <small>7/42 files uploaded</small>
              </div>
              <div className="columns is-multiline is-mobile mb-4">
                <div className="column is-3">
                  <div className="field has-addons">
                    <p className="control">
                      {/* <span className="button is-static"><FaSearch /></span> */}
                    </p>
                    <p className="control is-expanded">
                      <input className="input" type="text" placeholder="Search papers..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    </p>
                  </div>
                </div>
                <div className="column is-3">
                  <div className="select is-fullwidth">
                    <select value={subjectFilter} onChange={(e) => setSubjectFilter(e.target.value)}>
                      <option value="">All Subjects</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Physical Sciences">Physical Sciences</option>
                      <option value="Life Sciences">Life Sciences</option>
                    </select>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="select is-fullwidth">
                    <select value={yearFilter} onChange={(e) => setYearFilter(e.target.value)}>
                      <option value="">All Years</option>
                      {[...new Set(data.map(doc => doc.yr))].map((yr, idx) => (
                        <option key={idx} value={yr}>{yr}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="column is-4">
                  <div className="select is-fullwidth">
                    <select value={topicFilter} onChange={(e) => setTopicFilter(e.target.value)}>
                      <option value="">All Topics</option>
                      {[...new Set(data.map(doc => doc.topic))].map((topic, idx) => (
                        <option key={idx} value={topic}>{topic}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="columns is-multiline">
                {filteredData.slice(1, visibleCount).map((doc, index) => (
                  <div className="column is-4" key={index}>
                    <div className="box has-text-centered">
                      <p className='has-background-dark has-text-white p-3 mb-2'>{doc.name}</p>
                      {doc.file ? (
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                      <div style={{ height: '300px' }}>
                        <Viewer fileUrl={doc.file} />
                      </div>
                    </Worker>
                  ) : (
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="PDF not available" />
                  )}
                      <div className="mt-2">
                        <p><strong>Topic:</strong> {doc.topic}</p>
                        <p><strong>Grade:</strong> {doc.grade}</p>
                        <p><strong>Year:</strong> {doc.yr}</p>
                      </div>
                      <button className="button is-primary is-small mt-2" onClick={() => handleDownload(doc)}>
                        <FaDownload /> &nbsp;Download Paper
                      </button>
                      <small className="has-text-danger">{error ? error.message : null}</small>
                    </div>
                  </div>
                ))}
                {exchange}
              </div>

              {visibleCount < filteredData.length && (
                <div className="has-text-centered mt-4">
                  <button className="button is-dark" onClick={handleLoadMore}>
                    <FaBookOpen /> &nbsp;Load More
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default QuestionPapers;

