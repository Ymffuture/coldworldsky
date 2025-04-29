import React, { useState, useEffect} from "react";
// import {Link} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Button, Tooltip } from "antd";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "antd/dist/reset.css"; // Ant Design styles
import "react-tooltip/dist/react-tooltip.css"; // React Tooltip

const Header = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // true if token exists
  }, []);

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
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : <span id="p">QUORVEXIN</span>}
                </h1>
                <p>{props.data ? props.data.paragraph : <span>Loading...</span>}</p>

                {/* Link with Animation */}
                <div className="g-2 d-block">
                  <br />
                  <Link
                    style={style}
                    to={isAuthenticated ? "/about" : "/user-home-page/sign-up"}
                    className="btn btn-lg page-scroll"
                  >
                    <Button
                      type="primary"
                      size="large"
                      className="is-rounded"
                      style={{ padding: "10px 20px", fontSize: "16px" }}
                    >
                      {isAuthenticated ? "Learn more" : "Get Started"}
                    </Button>
                  </Link>
                </div>
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
 { useSpring, animated } from "@react-spring/web";
import Loader from "./Loader";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {
  FaArrowAltCircleRight, 
  FaArrowRight, 
  FaFile, 
  FaFileAlt
} from "react-icons/fa";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
 const Header = (props) => {
  const [show, setShow] = useState(false);
const [isAuthenticated, setIsAuthenticated] = useState(false);
   useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // true if token exists
  }, []);
  const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } ,config:{duration:5000}});
const style = {
  background:"transparent",
  border:"2px solid white"
}

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const mydata = ['1','2','3']
  return (
    <header id="header" className="text-center position-relative">
      <div className="intro">
        <div className="overlay d-flex justify-content-center align-items-center vh-100">
          <div className="container">
            <div className="row ">
              <div className="col-md-8 col-md-offset-2 intro-text ">
                <h1 >
                  {props.data ? props.data.title : <span id='p'>
      QUORVEXIN
    
     </span>}
            
                </h1>
                <p >{props.data ? props.data.paragraph : <Loader/>}</p>
    
            
<div className="g-2 d-block">
                {/* <animated.a style={fadeIn} 
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                  onClick={handleShow}
                >
                Register
                <span id="ribbon">20% Off</span>
                </animated.a> {" "} */}
               <br/>
                <Link style={style} 
                  to={isAuthenticated? "/about" :"/user-home-page/sign-up"} 
                  className="btn btn-lg page-scroll"
                  onClick={handleShow}
                >
                  {isAuthenticated? "Learn more" :"Get Started"} 
                
                </Link>{" "}
                </div>
              </div>
        <div className="container table-responsive">
        <div className="laptop">
  <div className="content-laptop">
    <img src="img/intro-bg.jpg"/>
  </div>
</div>
        </div>
 
            </div>
          </div>
        </div>
      </div>
       {/* Modal */}
       <Modal show={show} onHide={handleClose}>
       <Modal.Header closeButton>
         <Modal.Title>Register</Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <ul>
           <li>
             <FaArrowAltCircleRight /> Mathematics
           </li>
           <li>
             <FaArrowAltCircleRight /> Physical Sciences
           </li>
           <li>
             <FaArrowAltCircleRight /> Life Sciences
           </li>
         </ul>
       </Modal.Body>
       <Modal.Footer>
         <Button variant="secondary" onClick={handleClose}>
           Try later
         </Button>
         <Button variant="primary" onClick={() => toast.promise(mydata,{
          loading:'Proceeding...',
          success:'recording data...',
          error:'not',
         },{
          duration:5000
         })}>
           Proceed
         </Button>
       </Modal.Footer>
     </Modal>
    </header>
  );
};
export  default Header;
