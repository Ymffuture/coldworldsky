import React from "react";
import {Link ,Outlet} from 'react-router-dom';
import { useSpring, animated } from "@react-spring/web";
// import Team from "../componets/Team";


const FindTutor = () => {
  const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });

  const upcomingItems = [
    {
      type: "Future",
      title: "Kgomotso Nkosi",
      description: "Sciences and Math",
      img: "img/logosk.jpg",
    },
    {
      type: "Future",
      title: "Kgomotso Nkosi",
      description: "Sciences and Math",
      img: "img/logosk.jpg",
    },
    {
      type: "Future",
      title: "Kgomotso Nkosi",
      description: "Sciences and Math",
      img: "img/logosk.jpg",
    },
  ];

  return (
    <div className="home container mb-5">
      <div className="hero-section">
        <h1>Find our Tutors for limited subjects.</h1>
        <p>Stay updated with the latest entertainment and immerse yourself in a world of creativity.</p>
      </div>
      
      <animated.div style={fadeIn} className="upcoming-section">
        <h2>List of our BEST tutors</h2>
        <div className="card-container">
          {upcomingItems.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.img} alt={`${item.type} thumbnail`} className="card-image resp rounded" />
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p className="item-type">{item.type}</p>
              </div>
            </div>
          ))}
        </div>
        <Outlet/>
      </animated.div>
   
    </div>
  );
};

export default FindTutor;







