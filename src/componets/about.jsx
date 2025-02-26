import React, {useRef,useEffect, useState } from "react";
import { useSpring, animated} from "@react-spring/web";
import Loader from './Loader'

const About = (props) => {
  const [isVisible ,setIsvisible] = useState()
  const myRef = useRef()

  useEffect(()=>{
const observer = new IntersectionObserver((entries)=>{
  const entry = entries[0]
  setIsvisible(entry.isIntersecting)
})
observer.observe(myRef.current)
  },[])

  const slideIn ={
    opacity: 0,
    transform: 'translateX(-200%)',
  }
  const slideOut ={
    opacity: 1,
    transform: 'translateX(0)',
  }
   const fadeIn = useSpring({ from: slideIn, to: slideOut ,config:{duration:1000}});

 
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div  className="col-xs-12 col-md-6">
            {" "}
            {isVisible? <animated.img style={fadeIn}  src="img/about-01.jpg" className="img-responsive rounded shadow-lg abimg" alt="" />:<animated.img style={fadeIn} src="img/intro.jpg" className="img-responsive rounded shadow-lg abimg" alt="" />}
            {" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2 >About Us</h2>
              
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>

             
              <h3 ref={myRef}>☰ Why Choose Us? </h3>
                <animated.div 
              style={fadeIn}
              className="list-style" >
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      :'loading...'}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : 'loading....'}
                  </ul>
                </div>
              </animated.div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export  default About;