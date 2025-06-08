import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Button, Tooltip } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/reset.css"; // Ant Design styles
import "react-tooltip/dist/react-tooltip.css"; // React Tooltip
import { FaArrowAltCircleRight, FaBook, FaChevronRight, FaWater, FaWaveSquare } from 'react-icons/fa';
const Header = (props) => {


  // Background fade animation
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 5000 },
  });

  const style = {
    background: "transparent",
    border: "2px solid white",
  };

  return (
    <header id="header" className="text-center position-relative">
      
    
      <div className="intro">
        <div className="overlay d-flex justify-content-center align-items-center vh-100">
          <div className="container">
            <div className="row">
              <div className="col-md-16 col-md-offset-2 intro-text">
                
              
<div>

     <div className='card headcard'>
        
        <FaArrowAltCircleRight className="icon icon-card"/>
      </div>
           <div className='card headcard2'>
        <p className="cardtext">Question papers now avaiable to download</p>
        <Link 
        to='/'
        className="text-white"
        >
        <FaArrowAltCircleRight className="icon icon-card"/>
        </Link>
        <FaBook className="book"/>
      </div>
</div>
            <img src='img/vecteezy.png' className='avatar'/>
                <h1>
                  {props.data ? props.data.title : <span id="p">Loading..</span>}
                </h1>

                <p className="headcard3 card">
                  {[...Array(3)].map((_,index)=>(
                    <div key={index} className=' position-absolute top-0 left-0'>
 <FaWater className='fs-3 icon'/>
                  {/* <FaWaveSquare className='fs-3 icon'/> */}
                    </div>


                  ))}
                  
                  {props.data ? props.data.paragraph : <span>Loading...</span>}
                    <div className="g-2 d-block lee">
                  <br />
                  <Link
                    style={style}
                    to="/about"
                    className="btn btn-lg page-scroll"
                  >
                   Learn more
                  </Link>
                </div>
                  </p>

                {/* Link with Animation */}
              
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background */}
      <animated.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "url('/img/intro-bg.jpg') center/cover no-repeat",
          zIndex: -1,
          opacity: fadeIn.opacity.to((o) => o),
        }}
      ></animated.div>
    </header>
  );
};

export default Header;
