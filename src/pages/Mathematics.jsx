import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { FaList, FaPlayCircle } from "react-icons/fa";

const Mathematics = () => {
  return (
    <Container as="main" className="py-5 subject-page mathematics">
      <h1 className="text-center mb-4 text-primary">Mathematics</h1>

      {/* Overview */}
      <section className="overview mb-5">
        <h2>Overview</h2>
        <p>
          Mathematics is the universal language of logic, structure, and patterns. It powers every field from science to finance, and helps develop critical thinking, analytical reasoning, and problem-solving abilities. Our lessons cover arithmetic, algebra, calculus, and statistics with real-world applications.
        </p>
        <a
          href="https://www.khanacademy.org/math"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          aria-label="Explore Khan Academy Math resources"
        >
          Explore Khan Academy Math
        </a>
      </section>

      {/* Topics */}
      <section className="topics">
        <div className="topic mb-4">
          <h3>Algebra & Calculus</h3>
          <p>
            Master equations, functions, limits, and derivatives with interactive tools and guided problem-solving.
          </p>
          <a
            href="https://www.wolframalpha.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
            aria-label="Visit WolframAlpha for math help"
          >
            Visit WolframAlpha
          </a>
        </div>

        <div className="topic mb-4">
          <h3>Statistics & Probability</h3>
          <p>
            Learn to analyze data, make predictions, and understand chance with practical use cases in science, finance, and AI.
          </p>
          <a
            href="https://www.statisticshowto.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
            aria-label="Learn statistics from StatisticsHowTo"
          >
            Learn More
          </a>
        </div>

        {/* Clips */}
        <div className="clips my-4">
          <Link
            to="/tutoring/subjects/Mathematics/clip-overview"
            className="text-decoration"
            aria-label="Watch mathematics clip overview"
          >
            <FaPlayCircle /> Watch Overview Clip
          </Link>
          <hr />
          <details className="mt-3">
            <summary><FaList /> Clip List</summary>
            <ul className="mt-2">
              <li>The Complex Exponential and Logarithmic Functions</li>
              <li>Integration Techniques</li>
              <li>Probability Distributions</li>
            </ul>
          </details>
        </div>
      </section>

      {/* Warm-Up Questions */}
      <section className="qa-section mt-5">
        <h2>Warm-Up Questions & Answers</h2>

        <details className="mb-3">
          <summary><strong>Q: What is the difference between a function and an equation?</strong></summary>
          <p>
            An equation shows a relationship where two expressions are equal. A function assigns exactly one output for each input.
          </p>
        </details>

        <details className="mb-3">
          <summary><strong>Q: What is a derivative used for in real life?</strong></summary>
          <p>
            Derivatives help calculate rates of change—used in physics for motion, in finance for profit optimization, and more.
          </p>
        </details>

        <details className="mb-3">
          <summary><strong>Q: What are the chances of flipping heads twice in a row?</strong></summary>
          <p>
            Each flip is independent. The probability of two heads is 0.5 × 0.5 = 0.25 or 25%.
          </p>
        </details>
      </section>

      <Outlet />

      {/* Breadcrumbs */}
      <Breadcrumb className="my-4">
        <Breadcrumb.Item active>Mathematics</Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/tutoring/subjects/Life-sciences">Life Sciences</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/tutoring/subjects/Physical-science">Physical Sciences</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
};

export default Mathematics;
