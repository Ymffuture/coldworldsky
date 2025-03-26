import React from "react";
import { useSpring, animated, useTransition } from "@react-spring/web";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
// Define programming languages with icons and colors
const languages = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#E44D26", info: "Markup language for structuring web content." },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6", info: "Stylesheet language for web design." },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E", info: "Programming language for interactive web elements." },
  { name: "React", icon: <FaReact />, color: "#61DAFB", info: "JavaScript library for building UI components." },
  { name: "Python", icon: <FaPython />, color: "#3776AB", info: "High-level programming language for various applications." },
  { name: "Java", icon: <FaJava />, color: "#007396", info: "Object-oriented language widely used for backend systems." }
];

const ProgrammingLanguages = () => {
  // Sliding animation for icons
  const transitions = useTransition(languages, {
    from: { transform: "translateX(100px)", opacity: 0 },
    enter: { transform: "translateX(0px)", opacity: 1 },
    leave: { transform: "translateX(-100px)", opacity: 0 },
    trail: 200
  });

  const styleAB = useSpring({
    from:{transform:'rotate(20deg)'},
    to:[{transform:'rotateZ(45deg)'},{transform:'rotateY(30deg)'}],
    config:{duration:10000},
    loop:true
  })
  return (
    <div id="programming-languages" className="container text-center py-5">
      <h2 className="mb-4">Our Programming Languages</h2>

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

      {/* Horizontal Sliding Icons */}
      <div className="d-flex justify-content-center align-items-center overflow-hidden">
        {transitions((style, lang) => (
          <animated.div
            key={lang.name}
            style={{ ...style, color: lang.color, fontSize: "3rem", margin: "0 15px", cursor: "pointer" }}
            data-tooltip-id={lang.name}
          >
            {lang.icon}
            {/* Tooltip for each language */}
            <Tooltip id={lang.name} place="bottom" effect="solid">
              {lang.info}
            </Tooltip>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default ProgrammingLanguages;
