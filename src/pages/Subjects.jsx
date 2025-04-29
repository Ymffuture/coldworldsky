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
    { id: "1", name: "Mathematics", link: "/tutoring/subjects/Mathematics", icon: <FaCalculator />, price: 340 },
    { id: "2", name: "Physical science", link: "/tutoring/subjects/Physical-science", icon: <FaBrain />, price: 300 },
    { id: "3", name: "Life sciences", link: "/tutoring/subjects/Life-sciences", icon: <FaBacterium />, price: 250 },
    { id: "4", name: "Geography", link: "/tutoring/subjects/Geography", icon: <FaBacterium />, price: 200 },
    { id: "5", name: "Mathematics lit", link: "/tutoring/subjects/Mathematics-lit", icon: <FaBacterium />, price: 280 },
    { id: "6", name: "History", link: "/tutoring/subjects/History", icon: <FaBacterium />, price: 280 },
  ];

  const fadeSlide = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 180, friction: 20 },
  });

  const scrollContainerStyle = {
    display: "flex",
    overflowX: "auto",
    scrollSnapType: "x mandatory",
    gap: "2rem",
    padding: "2rem 1rem",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  };

  const cardStyle = {
    flex: "0 0 auto",
    scrollSnapAlign: "center",
    minWidth: "280px",
    maxWidth: "320px",
    background: "linear-gradient(135deg, #f0f8ff, #e6f9ec)",
    borderRadius: "20px",
    padding: "1.5rem",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backdropFilter: "blur(10px)",
    border: "1px solid #d0e7ff",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#1E90FF",
    fontSize: "1.2rem",
    fontWeight: "600",
    marginTop: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const ribbonStyle = {
    position: "absolute",
    top: "15px",
    right: "15px",
    backgroundColor: "#FFD700",
    color: "#000",
    padding: "6px 12px",
    borderRadius: "15px",
    fontSize: "0.8rem",
    fontWeight: "bold",
    boxShadow: "0 0 8px rgba(0,0,0,0.2)",
  };

  const headerStyle = {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#333",
    marginBottom: "1rem",
    textAlign: "center",
  };

  const arrowStyle = {
    cursor: "pointer",
    fontSize: "2rem",
    backgroundColor: "#32CD32",
    color: "#fff",
    padding: "0.7rem",
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
  };

  const handleScrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div style={{ position: "relative", backgroundColor: "#fff", padding: "3rem 0" }}>
      {/* Arrows */}
      <FaChevronLeft onClick={handleScrollLeft} style={{ ...arrowStyle, left: "1rem" }} />
      <FaChevronRight onClick={handleScrollRight} style={{ ...arrowStyle, right: "1rem" }} />

      {/* Scrollable Cards */}
      <animated.div ref={scrollRef} style={{ ...fadeSlide, ...scrollContainerStyle }} className="hide-scrollbar">
        {previousWork.map((page) => (
          <div
            key={page.id}
            style={cardStyle}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.07)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h4 style={headerStyle}>{page.name}</h4>
            <Link to={page.link} style={linkStyle}>
              <span>{page.icon}</span>
              <span>R{page.price}</span>
            </Link>
            <div style={ribbonStyle}>
              <FaStar style={{ marginRight: "5px", color: "#fff" }} /> 25% Off
            </div>
          </div>
        ))}
      </animated.div>

      {/* Loader or Outlet */}
      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        {onLoading ? (
          <em>
            <Loader /> Loading subjects ...
          </em>
        ) : (
          <Outlet />
        )}
      </div>

      {/* Hide scrollbar on webkit */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Subjects;

