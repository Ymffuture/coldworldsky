import React, { useState, useEffect } from "react";
import About from '../componets/about';
// import Contact from '../componets/contact';
import Features from '../componets/features';
import Tutor from '../componets/tutor';
import Header from '../componets/header';
import Services from '../componets/services';
import Team from '../componets/Team';
import Testimonials from '../componets/testimonials';
import JsonData from '../data/data.json';
import SmoothScroll from "smooth-scroll";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 2000,
  speedAsDuration: true,
});
const LandingPage = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {

    setTimeout(()=>{
      setLandingPageData(JsonData);
    },5000)
    
  }, []);
  return (
    <div className="container-not-set">
      
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Tutor data={landingPageData.Tutor} /> 
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
       {/* <Contact data={landingPageData.Contact} /> */}
    </div>
  )
}

export default LandingPage
