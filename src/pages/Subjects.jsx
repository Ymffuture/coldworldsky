import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBacterium, FaBrain, FaCalculator, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Card, Button } from "antd";
import Loader from "../componets/Loader";
import { useSpring, animated } from "@react-spring/web";
import "bulma/css/bulma.min.css";

const Subjects = () => {
  const [onLoading, setOnLoading] = useState(true);
  const scrollRef = useRef();

  useEffect(() => {
    const timeout = setTimeout(() => setOnLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  const previousWork = [
    { id: "1", name: "Mathematics", link: "/tutoring/subjects/Mathematics", icon: <FaCalculator />, price: 340 },
    { id: "2", name: "Physical science", link: "/tutoring/subjects/Physical-science", icon: <FaBrain />, price: 300 },
    { id: "3", name: "Life sciences", link: "/tutoring/subjects/Life-sciences", icon: <FaBacterium />, price: 250 },
    { id: "4", name: "Geography", link: "/tutoring/subjects/Geography", icon: <FaBacterium />, price: 200 },
    { id: "5", name: "Mathematics lit", link: "/tutoring/subjects/Mathematics-lit", icon: <FaBacterium />, price: 280 },
    { id: "6", name: "History", link: "/tutoring/subjects/History", icon: <FaBacterium />, price: 280 },
  ];

  const fadeSlide = useSpring({
    from: { transform: "translateX(100px)", opacity: 0 },
    to: { transform: "translateX(0px)", opacity: 1 },
    config: { tension: 140, friction: 24 },
  });

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="section has-background-light">
      <div className="container">
        <div className="has-text-centered mb-5">
          <h1 className="title is-3 has-text-primary">Our Subjects</h1>
          <p className="subtitle is-5 has-text-grey">
            Unlock your potential with our range of exciting and affordable subjects.
          </p>
        </div>

        {/* Scroll Arrows */}
        <Button
          shape="circle"
          type="primary"
          size="large"
          icon={<FaChevronLeft />}
          onClick={() => scroll("left")}
          style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", zIndex: 10, backgroundColor: "#32CD32" }}
        />
        <Button
          shape="circle"
          type="primary"
          size="large"
          icon={<FaChevronRight />}
          onClick={() => scroll("right")}
          style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", zIndex: 10, backgroundColor: "#32CD32" }}
        />

        {/* Horizontal Scroll Cards */}
        <div style={{ overflowX: "auto", overflowY: "hidden", maxWidth: "100%", paddingBottom: "1rem" }}>
  
        <animated.div
          style={{ ...fadeSlide }}
          ref={scrollRef}
          className="columns is-flex is-flex-direction-row is-flex-wrap-nowrap"
        >
          {previousWork.map((subject) => (
            <div key={subject.id} className="column is-narrow">
              <Card
                hoverable
                style={{
                  width: 280,
                  minHeight: 250,
                  borderRadius: "20px",
                  background: "linear-gradient(135deg, #F0F8FF, #E6F9EC)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  margin: "0 10px",
                  position: "relative",
                  overflow: "hidden",
                }}
                bodyStyle={{ padding: "1.5rem" }}
              >
                <div className="has-text-centered">
                  <h3 className="title is-5 has-text-primary">{subject.name}</h3>
                  <p className="is-size-4" style={{ color: "#1E90FF" }}>
                    {subject.icon}
                  </p>
                  <Link to={subject.link} className="button is-link is-light is-small mt-3">
                    Learn More - R{subject.price}
                  </Link>
                </div>

                {/* Ribbon */}
                <span
                  style={{
                    position: "absolute",
                    top: "0.5rem",
                    right: "-0.5rem",
                    backgroundColor: "#FFD700",
                    color: "#000",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "1rem",
                    fontWeight: "bold",
                    fontSize: "0.75rem",
                    boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
                    transform: "rotate(10deg)",
                  }}
                >
                  <FaStar style={{ marginRight: "4px", color: "#fff" }} />
                  25% Off
                </span>
              </Card>
            </div>
          ))}
        </animated.div>
</div>
        {/* Loader or Outlet */}
        <div className="has-text-centered mt-6">
          {onLoading ? (
            <Loader />
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </section>
  );
};

export default Subjects;

