import React from "react";
import Loader from './Loader'
import { useSpring, animated} from "@react-spring/web";
const Testimonials = (props) => {

  const styleAB = useSpring({
    from:{transform:'rotate(20deg)'},
    to:[{transform:'rotateZ(45deg)'},{transform:'rotateY(30deg)'}],
    config:{duration:10000},
    loop:true
  })
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2 className=" z-3">Our Programming Language</h2>
        </div>
        <div className='tap'>
        <div className='smartphone wrapper' style={styleAB} >
          <div className='content side-one'>
            <img  className='side-one' src="img/about-bg.jpg" />
          </div>
          <div className='content side-two'>
            <img src="img/about-01.jpg" />
          </div>
        </div>
        </div>
      
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt=""  className='w-100'/>{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : <Loader/>}
        </div>
      </div>
    </div>
  );
};
export  default Testimonials;