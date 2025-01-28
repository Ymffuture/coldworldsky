import Image from "./image";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Loader from "./Loader";
import Subjects from "../pages/Subjects";
import { FaChalkboardTeacher, FaMoneyBillWave, FaExclamationTriangle, FaUniversity, FaBook } from "react-icons/fa";

const Tutor = (props) => {
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id="tutor" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>
            Tutor FUTURE_
          </h2>
          <p className="text-note p-4 rounded bg-light shadow-sm">
            Unlock your potential with our tailored classes! <br />
       <b>High school learners</b>: Enroll in <b>TWO subjects</b> for only <b>R400.00</b> per month. <br />
            Let's shape your future together.
          </p>
          <Subjects />
        </div>

        {/* Transition Animation */}
        {isTransitioning && (
          <div>
            <div className="transition-animation"></div>
            <div className="transition-animation2">
              <p className="text-secondary">Please wait while we load the content...</p>
              <p className="rounded text-bg-danger g-3 p-3">
                <FaExclamationTriangle className="text-warning me-2" />
                It seems like we have trouble showing some Department of Education (DoE) content. It might not be available yet.
              </p>
            </div>
          </div>
        )}

        {/* Carousel Section */}
      

        {/* Bursary & Application Section */}
        <div className="mt-5">
          <p className="text-bg-info p-4 shadow-sm rounded">
            <FaUniversity className="me-2" />
            We assist with bursaries and university applications for current learners. 
            <br />
            **FREE** assistance for up to **TWO school applications**.
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
      </div>
    </div>
  );
};

export default Tutor;
