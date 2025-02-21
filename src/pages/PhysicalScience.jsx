import React from "react";
import { Container,Breadcrumb } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { FaList, FaPlayCircle } from "react-icons/fa";

const PhysicalScience = () => {
  return (
    <Container className="py-5 subject-page physical-science">
      <h1 className="text-center mb-4 text-primary">Physical Sciences</h1>
      <section className="overview mb-5">
        <h2>Overview</h2>
        <p>
          Physical Sciences cover the study of physics, chemistry, and earth sciences. Learn about the fundamental laws of nature, chemical reactions, and cosmic phenomena through interactive content and hands-on experiments.
        </p>
        <a
          href="https://www.khanacademy.org/science/physics"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Explore Khan Academy Physics
        </a>
      </section>
      <section className="topics">
        <div className="topic mb-4">
          <h3>Chemistry</h3>
          <p>
            Understand the composition of matter, chemical bonds, and reaction dynamics with engaging tutorials.
          </p>
          <a
            href="https://www.chemcollective.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            Visit ChemCollective
          </a>
        </div>
        <div className="topic mb-4">
          <h3>Physics & Astronomy</h3>
          <p>
            Discover the wonders of the universe, from fundamental physics concepts to the exploration of distant galaxies.
          </p>
          <a
            href="https://www.nasa.gov/audience/forstudents/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            Visit NASA Education
          </a>
        </div>
        <Link to='/tutoring/subjects/Physical-science/clip-overview'
        className="text-decoration"
        ><FaPlayCircle/> Clip</Link> <hr/>

<details>
          <summary>
          <FaList/> Clip list
          </summary>
          <em>Theory_of_Relativity</em>
        </details>
      
      </section>
      <Outlet/>
      <Breadcrumb className="my-4">
        <Breadcrumb.Item ><Link to="/tutoring/subjects/Mathematics">Mathematics</Link> </Breadcrumb.Item>
        <Breadcrumb.Item to="/tutoring/subjects/Life-sciences"><Link to="/tutoring/subjects/Life-sciences">Life Sciences</Link></Breadcrumb.Item>
        <Breadcrumb.Item active>Physical Science</Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
};

export default PhysicalScience;
