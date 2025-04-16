import React, { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const About = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.3 });

    if (myRef.current) observer.observe(myRef.current);
    return () => observer.disconnect();
  }, []);

  const slideAnim = useSpring({
    from: { opacity: 0, transform: 'translateX(-30%)' },
    to: isVisible
      ? { opacity: 1, transform: 'translateX(0)' }
      : { opacity: 0, transform: 'translateX(-30%)' },
    config: { tension: 120, friction: 20 }
  });

  return (
    <section id="about" role="region" aria-label="About Quorvex Institute" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Side Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <animated.img
              style={slideAnim}
              src={isVisible ? "img/about-01.jpg" : "img/intro.jpg"}
              alt="Students at Quorvex Institute"
              className="img-fluid rounded shadow abimg"
              loading="lazy"
            />
          </div>

          {/* Right Side Content */}
          <div className="col-md-6">
            <div className="about-text" ref={myRef}>
              <h2 className="fw-bold text-primary">About Us</h2>
              <p className="lead">{data?.paragraph || "Loading..."}</p>

              <h3 className="mt-4 text-success">☰ Why Choose Us?</h3>
              <animated.div style={slideAnim} className="row list-style mt-3">
                <div className="col-6">
                  <ul>
                    {data?.Why?.map((item, idx) => (
                      <li key={`why1-${idx}`} className="mb-2">{item}</li>
                    )) || <li>Loading...</li>}
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    {data?.Why2?.map((item, idx) => (
                      <li key={`why2-${idx}`} className="mb-2">{item}</li>
                    )) || <li>Loading...</li>}
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
