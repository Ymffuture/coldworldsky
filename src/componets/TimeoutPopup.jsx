import React, { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useSpring, animated } from "@react-spring/web";
import Loader from "./Loader";

const TimeoutPopup = () => {
  const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });
  const [showPopup, setShowPopup] = useState(false);
  const [timeLeft, setTimeLeft] = useState(65);
  const [ads, setAds] = useState();
  const [volume, setVolume] = useState(1);

  const phoneNumber = "+27634414863";
  const textMessage =
    "Hello there, I want to know more about the classes and the prices.";
  const appLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    textMessage
  )}`;
  const vidRef = useRef();

  useEffect(() => {
    const setTimeRandom = Math.floor(
      Math.random() * (180000 / 2 - 60000 + 1) + 60000
    );
    const popupTimeout = setTimeout(() => {
      setShowPopup(true);
    }, setTimeRandom);

    return () => clearTimeout(popupTimeout);
  }, []);

  useEffect(() => {
    if (showPopup && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setShowPopup(false);
      toast.success("Hey great news Flexible online classes now available. Contact us for more info", {
        position: "top-right",
        duration: 20000,
        icon:'👋',
        style:{
          background:'#61D345',
          color:'whitesmoke'
        }
      });
    }
  }, [showPopup, timeLeft]);

  const handleStay = () => {
    setShowPopup(false);
    setTimeLeft(20);
  };

  const handleLeave = () => {
    window.location.href = "https://google.com";
  };

  const controlVideo = () => {
    if (vidRef.current?.play()) {
      vidRef.current.pause();
      setAds("Paused");
    }
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    if (vidRef.current) {
      vidRef.current.volume = newVolume;
    }
  };

  return (
    <animated.div style={fadeIn}  className="container">
      {showPopup && (
        <div style={popupStyles}>
          <p className="text-bg-light p-4"> Ads {""}{timeLeft}
           
            {/* <button  onClick={controlVideo} className="btn btn-outline-danger m-2">set : {ads}</button> */}
          {timeLeft>59 ? <Loader/> :<video 
          ref={vidRef}
          className='vid' 
          autoPlay 
          loop 
         
          >
            <source src='img/introVid.mp4' type="video/mp4"/>
            Your browser does not support the video format.
            </video>}
          
          </p>
          
          <button onClick={handleStay} 
          style={buttonStylesNT}>No,Thanks</button>
          {''}{''}
          <button onClick={handleLeave} 
          title='https://google.com'
          style={buttonStyles}>Register</button>
          <p style={textP} className="rounded"><i className="fa fa-info-circle"></i> You need a physics , math and life sciencs tutor? <a 
          style={linkA}
          href={appLink} 
          title={appLink}
          target="_blank" rel="noopener noreferrer"><i className='fa fa-whatsapp p-3 flex-lg-wrap alert-dismissable glyphicon-text-size'></i></a></p>
          {timeLeft<49 ? <div>
            <span>Volume: {volume}</span>
          <input 
          className='range '
            min='0'
            title='Volume'
            max='1'
            step='0.01'
            value={volume}
            onChange={handleVolumeChange}
            type="range"/>
          </div>:<><Loader/>  </>}
         
         
        </div>
      )}
    </animated.div>
  );
};
const linkA = {
  color:'white',
  textDecoration:'none',
  backgroundColor:'green',
  padding: "4px",
  borderRadius:'10%',
  margin:'2px',
  fontSize:'20px'

}

const textP ={
  color:'black',
  padding:'4px',
  fontWeight:'500',
  background:'#e7f3fe',
  borderLeft:'6px solid #2196F3'
}
const popupStyles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#1E90FF",
  padding: "20px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
  borderRadius: "8px",
  textAlign: "center",
  zIndex: 1000,
  background: "transparent",
  WebkitBackdropFilter: "blur(5px)",
  backdropFilter: "blur(5px)",
 
};

const buttonStyles = {
  margin: "10px",
  cursor: "pointer",
  textTransform: "uppercase",
  color: "#fff",
  backgroundColor:" #5ca9fb",
  backgroundImage:" linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)",
  padding:" 14px 34px",
  letterSpacing: "2px",
  fontSize: "15px",
  fontWeight: 500,
  borderRadius: "14px",
  transition: "all 0.5s linear",
  border: 0,
  fontFamily: 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif'
};
const buttonStylesNT = {
  margin: "10px",
  fontSize: "14px",
  cursor: "pointer",
  textTransform: "uppercase",
  color: "#6372ff",
  background:"transparent",
  padding:" 12px 25px",
  letterSpacing: "2px",
  fontWeight: 800,
  borderRadius: "14px",
  transition: "all 0.5s linear",
  border: '2px solid',
  fontFamily: 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif',
};
export default TimeoutPopup;
