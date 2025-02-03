import React from "react";
import { Container } from "react-bootstrap";

const DataScience = () => {
  return (
    <Container className="py-5 subject-page data-science">
      <h1 className="text-center mb-4 text-primary">Data Science</h1>
      <section className="overview mb-5">
        <h2>Overview</h2>
        <p>
          Data Science is a multidisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from data. It combines statistics, programming, and domain expertise to solve complex problems.
        </p>
        <a
          href="https://www.coursera.org/browse/data-science"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Explore Data Science Courses on Coursera
        </a>
      </section>
      <section className="topics">
        <div className="topic mb-4">
          <h3>Machine Learning</h3>
          <p>
            Dive into machine learning algorithms and techniques that power predictive analytics and intelligent systems.
          </p>
          <a
            href="https://scikit-learn.org/stable/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            Learn with Scikit-Learn
          </a>
        </div>
        <div className="topic mb-4">
          <h3>Data Visualization</h3>
          <p>
            Discover ways to represent data visually to uncover trends and insights.
          </p>
          <a
            href="https://www.tableau.com/learn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            Explore Tableau Resources
          </a>
        </div>
      </section>
    </Container>
  );
};

export default DataScience;
