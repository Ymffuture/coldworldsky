import React, { useState, useEffect } from "react";
import { Link, Outlet } from 'react-router-dom';
import { FaBacterium, FaBrain, FaCalculator, FaStar } from 'react-icons/fa';
import Loader from "../componets/Loader";
import { useSpring, animated } from '@react-spring/web';

const Subjects = () => {
  const [onLoading, setOnLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setOnLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  const previousWork = [
    { id: '1', name: 'Mathematics / lit', link: '/tutoring/subjects/Mathematics', icon: <FaCalculator />, price: 340 },
    { id: '2', name: 'Physical science', link: '/tutoring/subjects/Physical-science', icon: <FaBrain />, price: 300 },
    { id: '3', name: 'Life sciences', link: '/tutoring/subjects/Life-sciences', icon: <FaBacterium />, price: 250 },
  ];

  const fadeSlide = useSpring({
    from: { transform: 'translateX(100px)', opacity: 0 },
    to: { transform: 'translateX(0px)', opacity: 1 },
    config: { tension: 140, friction: 24 },
  });

  return (
    <div className="content card-bg">
      <animated.div style={fadeSlide} className="horizontal-scroll-container">
        {previousWork.map((page) => (
          <div key={page.id} className="subject-card shadow-lg p-3">
            <h4 className="text-bg-light rounded p-1">{page.name}</h4>
            <Link to={page.link} className="card-list d-flex justify-content-between align-items-center text-decoration-none">
              <span className="fs-4">{page.icon}</span>
              <span className="price fw-bold">R{page.price}</span>
            </Link>
            <span id="ribbon" className="text-warning">
              <FaStar className="me-1" /> 25% Off
            </span>
          </div>
        ))}
      </animated.div>

      <div className="mt-3">
        {onLoading ? (
          <em><Loader /> Please wait while we are loading subjects ...</em>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default Subjects;

