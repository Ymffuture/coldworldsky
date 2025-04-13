import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Subjects from "../pages/Subjects";
import Image from "./image";
import { useSpring, animated } from "react-spring";
import { FaExclamationTriangle, FaUniversity } from "react-icons/fa";
import Accordion from "react-bootstrap/Accordion";

const Tutor = (props) => {
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  const fade = useSpring({ opacity: isTransitioning ? 0 : 1, transform: isTransitioning ? "translateY(20px)" : "translateY(0)" });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does tutoring cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tutoring is R400.00 per month for two high school subjects."
        }
      },
      {
        "@type": "Question",
        "name": "Do you help with university applications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer free help with up to two university applications."
        }
      },
      {
        "@type": "Question",
        "name": "When can I apply?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Applications open from June to August (Grade 11) and in September (Grade 12)."
        }
      }
    ]
  };

  return (
    <div id="tutor" className="text-center" role="region" aria-labelledby="tutor-section">
      <div className="container">
        <div className="section-title" id="tutor-section">
          <h2>Tutor FUTURE_</h2>
          <p className="text-note p-4 rounded bg-light shadow-sm">
            Unlock your potential with our tailored classes! <br />
            <strong>High school learners</strong>: Enroll in <strong>TWO subjects</strong> for only <strong>R400.00</strong> per month. <br />
            Let's shape your future together.
          </p>
          <Subjects />
        </div>

        {isTransitioning && (
          <div aria-live="polite">
            <div className="transition-animation"></div>
            <div className="transition-animation2">
              <p className="text-secondary">Please wait while we load the content...</p>
              <p className="rounded text-bg-danger g-3 p-3">
                <FaExclamationTriangle className="text-warning me-2" />
                We’re having trouble showing some Department of Education content.
              </p>
            </div>
          </div>
        )}

        <animated.div style={fade}>
          <div className="mt-5">
            <p className="text-bg-primary p-4 shadow-sm rounded">
              <FaUniversity className="me-2" />
              We assist with bursaries and university applications for current learners.
              <br />
              <strong>FREE</strong> assistance for up to <strong>TWO school applications</strong>.
            </p>

            <div className="portfolio-items">
              <h3 className="text-primary mb-4">
                Applications Open: June - August (Grade 11), September (Grade 12)
              </h3>
              {props.data ? (
                <div className="row g-4">
                  {props.data.map((d, i) => (
                    <div key={`${d.title}-${i}`} className="col-md-4">
                      <Image
                        title={d.title}
                        largeImage={d.largeImage}
                        smallImage={d.smallImage}
                        id={d.id}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <Loader />
              )}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-5 text-start">
            <h4 className="text-primary mb-3">Frequently Asked Questions</h4>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>How much does tutoring cost?</Accordion.Header>
                <Accordion.Body>
                  Tutoring is R400.00 per month for two high school subjects.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Do you help with university applications?</Accordion.Header>
                <Accordion.Body>
                  Yes, we offer free help with up to two university applications.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>When can I apply?</Accordion.Header>
                <Accordion.Body>
                  Applications open from June to August (Grade 11) and in September (Grade 12).
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </animated.div>
      </div>

      {/* Inline JSON-LD schema for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </div>
  );
};

export default Tutor;

