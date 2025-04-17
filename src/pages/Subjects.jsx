import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBacterium, FaBrain, FaCalculator, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Loader from "../componets/Loader";
import { useSpring, animated } from "@react-spring/web";

const Subjects = () => {
  const [onLoading, setOnLoading] = useState(true);
  const scrollRef = useRef();

  useEffect(() => {
    const timeout = setTimeout(() => setOnLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  const previousWork = [
    {
      id: "1",
      name: "Mathematics / lit",
      link: "/tutoring/subjects/Mathematics",
      icon: <FaCalculator />,
      price: 340,
    },
    {
      id: "2",
      name: "Physical science",
      link: "/tutoring/subjects/Physical-science",
      icon: <FaBrain />,
      price: 300,
    },
    {
      id: "3",
      name: "Life sciences",
      link: "/tutoring/subjects/Life-sciences",
      icon: <FaBacterium />,
      price: 250,
    },
  ];

  const fadeSlide = useSpring({
    from: { transform: "translateX(100px)", opacity: 0 },
    to: { transform: "translateX(0px)", opacity: 1 },
    config: { tension: 140, friction: 24 },
  });

  const scrollContainerStyle = {
    display: "flex",
    overflowX: "auto",
    gap: "1rem",
    padding: "1rem 2rem",
    scrollSnapType: "x mandatory",
  };

  const cardStyle = {
    minWidth: "250px",
    maxWidth: "300px",
    background: "linear-gradient(135deg, #f0f8ff, #e6f9ec)",
    borderRadius: "20px",
    padding: "1rem",
    scrollSnapAlign: "center",
    flexShrink: 0,
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "transform 0.3s ease",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#1E90FF",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginTop: "0.5rem",
  };

  const ribbonStyle = {
    position: "absolute",
    top: "10px",
    right: "15px",
    backgroundColor: "#FFD700",
    color: "#000",
    padding: "4px 10px",
    borderRadius: "12px",
    fontSize: "0.75rem",
    fontWeight: "600",
    boxShadow: "0 0 5px rgba(0,0,0,0.2)",
  };

  const headerStyle = {
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    padding: "5px 10px",
    fontWeight: "600",
    fontSize: "1rem",
  };

  const arrowStyle = {
    cursor: "pointer",
    fontSize: "1.8rem",
    backgroundColor: "#32CD32",
    color: "#fff",
    padding: "0.5rem",
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
  };

  return (
    <div style={{ padding: "1rem", backgroundColor: "#fff", position: "relative" }}>
      {/* Arrows */}
      <FaChevronLeft
        onClick={() => scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })}
        style={{ ...arrowStyle, left: "0.5rem" }}
      />
      <FaChevronRight
        onClick={() => scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })}
        style={{ ...arrowStyle, right: "0.5rem" }}
      />

      {/* Scrollable Cards */}
      <animated.div style={{ ...fadeSlide, ...scrollContainerStyle }} ref={scrollRef} className="x_card" >
        {previousWork.map((page) => (
          <div
            key={page.id}
            style={cardStyle}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h4 style={headerStyle}>{page.name}</h4>
            <Link to={page.link} style={linkStyle}>
              <span>{page.icon}</span>
              <span>R{page.price}</span>
            </Link>
            <span style={ribbonStyle}>
              <FaStar style={{ marginRight: "5px", color: "#fff" }} /> 25% Off
            </span>
          </div>
        ))}
      </animated.div>

      {/* Loader or Outlet */}
      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        {onLoading ? (
          <em>
            <Loader /> Please wait while we are loading subjects ...
          </em>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default Subjects;

