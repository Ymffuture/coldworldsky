import React, { useState, useEffect } from "react";
import About from '../componets/about';
import Features from '../componets/features';
import Tutor from '../componets/tutor';
import Header from '../componets/header';
import Services from '../componets/services';
import Team from '../componets/Team';
import JsonData from '../data/data.json';
import SmoothScroll from "smooth-scroll";
import SideButton from "./SideButton";
import AnimatedSection from "../componets/AnimatedSection"; // Import the wrapper

export const scroll = new SmoothScroll('a[href*="/"]', {
  speed: 500,
  speedAsDuration: true,
});

const LandingPage = () => {
  const [landingPageData, setLandingPageData] = useState({});
  
  useEffect(() => {
    setTimeout(() => {
      setLandingPageData(JsonData);
    }, 5000);
  }, []);

  return (
    <div className="container-fluid w-100 all">
      <AnimatedSection><Header data={landingPageData.Header} /></AnimatedSection>
      <AnimatedSection><Features data={landingPageData.Features} /></AnimatedSection>
      <AnimatedSection><About data={landingPageData.About} /></AnimatedSection>
      <AnimatedSection><Services data={landingPageData.Services} /></AnimatedSection>
      <AnimatedSection><Tutor data={landingPageData.Tutor} /></AnimatedSection>
      <Team data={landingPageData.Team} />
      <SideButton />
    </div>
  );
};

export default LandingPage;

