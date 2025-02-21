import React from "react";
import { Container,Breadcrumb } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { FaList, FaPlayCircle } from "react-icons/fa";
const Mathematics = () => {
  return (
    <Container className="py-5 subject-page mathematics">
      <h1 className="text-center mb-4 text-primary">Mathematics</h1>
      <section className="overview mb-5">
        <h2>Overview</h2>
        <p>
          Mathematics is the cornerstone of science and technology. It develops logical thinking, problem-solving, and analytical skills. Our curriculum covers a wide range of topics from basic arithmetic and algebra to advanced calculus and statistics.
        </p>
        <a
          href="https://www.khanacademy.org/math"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Explore Khan Academy Math
        </a>
      </section>
      <section className="topics">
        <div className="topic mb-4">
          <h3>Algebra & Calculus</h3>
          <p>
            Dive into the fundamentals of algebra and calculus with interactive lessons and practical problems.
          </p>
          <a
            href="https://www.wolframalpha.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            Visit WolframAlpha
          </a>
        </div>
        <div className="topic mb-4">
          <h3>Statistics & Probability</h3>
          <p>
            Understand key concepts in statistics and probability essential for data analysis and scientific research.
          </p>
          <a
            href="https://www.statisticshowto.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            Learn More
          </a>
        </div>
        <Link to='/tutoring/subjects/Mathematics/clip-overview'
        className="text-decoration"
        ><FaPlayCircle/> Clip</Link> <hr/>
        <details>
          <summary>
          <FaList/> Clip list
          </summary>
          <em>  The_complex_exponential_and_logarithm_functions</em>
        </details>
      
      </section>
      <Outlet/>
      <Breadcrumb className="my-4">
        <Breadcrumb.Item active >Mathematics</Breadcrumb.Item>
        <Breadcrumb.Item to="/tutoring/subjects/Life-sciences"><Link to="/tutoring/subjects/Life-sciences">Life Sciences</Link></Breadcrumb.Item>
        <Breadcrumb.Item > <Link to='/tutoring/subjects/Physical-science'>Physical Science</Link></Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
};

export default Mathematics;
