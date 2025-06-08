import React, { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const About = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const myRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.3 });
    if (myRef.current) observer.observe(myRef.current);
    return () => observer.disconnect();
  }, []);

  const fadeIn = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
    config: { tension: 170, friction: 26 },
  });

  return (
    <section id="about" className="py-5" aria-labelledby="about-heading">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <animated.img
              style={fadeIn}
              src={isVisible ? "img/laptop.png" : "img/male.png"}
              className="img-fluid rounded-4"
              alt="Students learning coding at Quorvex"
              loading="lazy"
            />
          </div>
          <div className="col-md-6">
            <div className="about-text" ref={myRef}>
              <h2 id="about-heading" className="fw-bold mb-3">
                About Us
              </h2>
              <p className="lead">{props.data?.paragraph || "Loading..."}</p>

              <h3 className="mt-4 mb-2 text-dark fw-semibold">☰ Why Choose Us?</h3>
              <animated.div style={fadeIn} className="row">
                <div className="col-sm-6">
                  <ul className="list-unstyled">
                    {props.data?.Why.map((item, i) => (
                      <li key={i} className="mb-2">
                        <i className=" text-success me-2" aria-hidden="true"></i>{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul className="list-unstyled">
                    {props.data?.Why2.map((item, i) => (
                      <li key={i} className="mb-2">
                        <i className=" text-dark me-2" aria-hidden="true"></i>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </animated.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

