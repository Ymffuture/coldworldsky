import React, { useState} from "react";
// import {Link} from 'react-router-dom';
import { useSpring, animated } from "@react-spring/web";
import Loader from "./Loader";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {
  FaArrowAltCircleRight 
} from "react-icons/fa";
import toast from "react-hot-toast";
 const Header = (props) => {
  const [show, setShow] = useState(false);

  const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } ,config:{duration:5000}});


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const mydata = ['1','2','3']
  return (
    <header id="header "className="text-center position-relative">
      <div className="intro">
        <div className="overlay d-flex justify-content-center align-items-center vh-100">
          <div className="container">
            <div className="row ">
              <div className="col-md-8 col-md-offset-2 intro-text ">
                <h1 >
                  {props.data ? props.data.title : <span id='p'>
      SkyfordCCI
     </span>}
                  <sup className="reg-icon">&reg;</sup>
                </h1>
                <p >{props.data ? props.data.paragraph : <Loader/>}</p>
                <animated.a style={fadeIn} 
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                  onClick={handleShow}
                >
                Register
                <span id="ribbon">25% Off</span>
                </animated.a>{" "}
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
