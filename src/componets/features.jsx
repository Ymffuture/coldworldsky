import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
 const Features = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } ,config:{duration:5000}});
  useEffect(() => {
    setTimeout(() => {
      setIsTransitioning(false);
    }, 10000);
  });
  useEffect(() => {
  
    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
  },[]);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? "light" : "dark";
  };
  return (
    <div id="features" className={`text-center ${darkMode ? "dark" : "light"}`}>
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
    
        </div>

        {isTransitioning && (
          <>
            <div className="transition-animation"></div>
            <div className="transition-animation2">
              <p>Please wait...</p>
            </div>
          </>
        )}

        {!isTransitioning &&(

<div className="row">
{props.data
  ? props.data.map((d, i) => (
      <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
        {" "}
        <animated.i style={fadeIn} className={`${d.icon}`}></animated.i>
        <h3>{d.title}</h3>
        <p>{d.text}</p>
      </div>
    ))
  : "Loading..."}

  
</div>
        )}
       
      </div>
    </div>
  );
};

export  default Features;