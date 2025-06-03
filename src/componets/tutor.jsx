import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Subjects from "../pages/Subjects";
import { useSpring, animated } from '@react-spring/web';
import { Collapse } from 'antd';
import { FaExclamationTriangle, FaUniversity } from "react-icons/fa";
import 'bulma/css/bulma.min.css'; // Import Bulma
import 'antd/dist/reset.css'; // Import Ant Design reset

const { Panel } = Collapse;

const Tutor = () => {
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  const fade = useSpring({
    opacity: isTransitioning ? 0 : 1,
    transform: isTransitioning ? "translateY(20px)" : "translateY(0)",
  });

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
    },
    {
      "@type": "Question",
      "name": "Which subjects are covered?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We cover Mathematics, Physical Sciences, Life Sciences, Accounting, English, and Computer Applications Technology."
      }
    },
    {
      "@type": "Question",
      "name": "Is tutoring available online or in-person?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer both online and in-person tutoring depending on your location and preferences."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer extra lessons for Grade 12?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide focused revision and exam preparation for Grade 12 learners."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get feedback on my academic progress?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide monthly progress reports and feedback for each learner."
      }
    },
    {
      "@type": "Question",
      "name": "Are your tutors qualified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All tutors are vetted, trained, and qualified in their respective subjects with strong academic records."
      }
    },
    {
      "@type": "Question",
      "name": "How do I contact Quorvex Institute?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can reach us via email at info@quorvexinstitute.vercel.app or use the contact form on our website."
      }
    }
  ]
};


  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div id="tutor" className="section has-background-light" role="region" aria-labelledby="tutor-section">
      <div className="container is-max-desktop">
        <div className="content has-text-centered" id="tutor-section">
          <h2 className="title is-2 has-text-weight-bold">Tutor FUTURE_</h2>
          <p className="notification is-light is-rounded">
            Unlock your potential with our tailored classes! <br />
            <strong>High school learners</strong>: Enroll in <strong>TWO subjects</strong> for only <strong>R400.00</strong> per month. <br />
            Let's shape your future together.
          </p>
          <Subjects />
        </div>

        {isTransitioning && (
          <div aria-live="polite" className="has-text-centered">
            <div className="loader-wrapper py-6">
              <Loader />
              <p className="has-text-grey">Please wait while we load the content...</p>
              <p className="notification is-danger is-light mt-4">
                <FaExclamationTriangle className="mr-2" />
                We’re having trouble showing some Department of Education content.
              </p>
            </div>
          </div>
        )}

        <animated.div style={fade}>
          <div className="section">
            <p className="notification is-primary is-light is-rounded">
              <FaUniversity className="mr-2" />
              We assist with bursaries and university applications for current learners. <br />
              <strong>FREE</strong> assistance for up to <strong>TWO school applications</strong>.
            </p>

            <div className="mt-5">
              <h3 className="title is-4 has-text-primary">
                Applications Open: June - August (Grade 11), September (Grade 12)
              </h3>
              <figure className="image is-3by1">
                <img
                  src="../img/8074800.png"
                  alt="UNISA"
                  style={{
                    objectFit: "cover",
                    borderRadius: "20px",
                    boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
                  }}
                />
              </figure>
            </div>

            {/* FAQ Section */}
            <div className="section pt-6">
              <h4 className="title is-5 has-text-primary mb-4">Frequently Asked Questions</h4>

              <Collapse
                accordion
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
                }}
              >
                <Panel
                  header="How much does tutoring cost per subject?"
                  key="1"
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    backgroundColor: "#f0f8ff",
                    color: "#1e90ff",
                  }}
                >
                  <p style={{ padding: "15px", background: "#ffffff" }}>
                    Tutoring is R200.00 per month for two high school subjects.
                  </p>
                </Panel>

                <Panel
                  header="Do you help with university applications?"
                  key="2"
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    backgroundColor: "#f0f8ff",
                    color: "#1e90ff",
                  }}
                >
                  <p style={{ padding: "15px", background: "#ffffff" }}>
                    Yes, we offer free help with up to two university applications.
                  </p>
                </Panel>

                <Panel
                  header="When can I apply?"
                  key="3"
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    backgroundColor: "#f0f8ff",
                    color: "#1e90ff",
                  }}
                >
                  <p style={{ padding: "15px", background: "#ffffff" }}>
                    Applications open from June to August (Grade 11) and in September (Grade 12).
                  </p>
                </Panel>
              </Collapse>
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default Tutor;

