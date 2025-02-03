import React from "react";
import { Container } from "react-bootstrap";

const UxUi = () => {
  return (
    <Container className="py-5 subject-page ux-ui">
      <h1 className="text-center mb-4 text-primary">UI/UX Design</h1>
      <section className="overview mb-5">
        <h2>Overview</h2>
        <p>
          UI/UX Design is all about creating engaging, intuitive, and visually appealing interfaces that offer a seamless user experience. It combines user research, wireframing, and prototyping to deliver designs that are both attractive and functional.
        </p>
        <a
          href="https://www.nngroup.com/articles/definition-user-experience/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Learn About UX Design
        </a>
      </section>
      <section className="topics">
        <div className="topic mb-4">
          <h3>User Interface Design</h3>
          <p>
            Focus on visual elements like layout, typography, and color schemes that make an interface appealing.
          </p>
          <a
            href="https://www.adobe.com/creativecloud/design/discover/ui-ux-design.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            Adobe UI/UX Resources
          </a>
        </div>
        <div className="topic mb-4">
          <h3>User Experience Research</h3>
          <p>
            Discover user needs through research, usability testing, and feedback to inform effective design decisions.
          </p>
          <a
            href="https://uxdesign.cc/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            Read UX Articles
          </a>
        </div>
      </section>
    </Container>
  );
};

export default UxUi;
