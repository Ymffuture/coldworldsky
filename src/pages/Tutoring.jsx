import React, { useState, useEffect } from "react";
import { Link, Outlet } from 'react-router-dom';
import { FaBackward, FaBookReader, FaCheckDouble, FaCopy, FaTable } from 'react-icons/fa';
import Loader from "../componets/Loader";
import { Breadcrumb } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedDark, solarizedLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import ChatBot from '../componets/ChatBot';
import { useSpring, animated } from '@react-spring/web';

const Tutoring = () => {
  const [onLoading, setOnLoading] = useState(true);
  const [copyNow, setCopyNow] = useState(<FaCopy data-tooltip-id="tooltip" data-tooltip-content="Copy" />);
  const [copyNow2, setCopyNow2] = useState(<FaCopy data-tooltip-id="tooltip" data-tooltip-content="Copy" />);
  const [copyNow3, setCopyNow3] = useState(<FaCopy data-tooltip-id="tooltip" data-tooltip-content="Copy" />);

  useEffect(() => {
    setTimeout(() => { setOnLoading(false) }, 5000)
  }, [onLoading])

  const introFade = useSpring({
    from: { opacity: 0, transform: 'translateY(-30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 200,
  });

  const pricePulse = useSpring({
    loop: true,
    to: [{ transform: 'scale(1.05)' }, { transform: 'scale(1)' }],
    from: { transform: 'scale(1)' },
    config: { duration: 1000 },
  });

  const codeFade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
  });

  const showToast = () => {
    toast.loading('R3800.00', { position: "top-center" });
  };

  const onStyle = { borderRadius: '7px', padding: '4px', margin: '5px', fontSize: '8px', backgroundColor: 'whitesmoke', color: 'red', overflowX: 'auto', WebkitScrollSnapType: 'none' };

  const codeprint2 = `const handleSubmit = (event)=> {
    event.prevantDefault()
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    
    if(!password || !email){
    alert("Both input empty")
    }
    } `;
  const codeprint3 = `
    body {
  margin: 0;
  padding: auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`;
  const codeprint = ` 
<div class='container'>
<form action='' onSubmit={handleSubmit}>
<div class='form-group'>
<input type='email' id='email'>
<label>Email:</label>
</div>
<div class='form-group'>
<input type='password' id='password'>
<label>Password:</label>
</div>
</form>
</div>`;

  const codeprint4 = `
React.jxs

import React from 'react'

const Navbar = () => {
  return (
     <div className="p-4">
     <h1 className="text-2xl font-semibold mb-6">Other posts you may like</h1>
              <h2 className="text-xl font-bold mb-2">Test React code</h2>
              <button className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
                Read More
              </button>
            </div>
  );
};

export default Navbar;
`;

  const copyText = (text, setter) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success("Copied!", { duration: 5000, position: 'center' });
        setter(<FaCheckDouble className="text-success" data-tooltip-id="tooltip" data-tooltip-content="Copied" />);
      })
      .catch(() => {
        toast.error("Fail to copy a text.", {
          duration: 5000,
          position: 'center',
          style: { background: 'black', color: 'red' }
        });
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setCopyNow(<FaCopy data-tooltip-id="tooltip" data-tooltip-content="Copy" />)
    }, 600)
  }, [])

  return (
    <>
      <header id="header">
        <div className="intro container-fluid ">
          <div className="overlay d-flex justify-content-center align-items-center vh-20">
            <div className="container">
              <div className="row ">
                <div className="col-md-8 col-md-offset-2 intro-text ">
                  <animated.h1 style={introFade}>
                    Tutoring
                    <span> @QI</span>
                  </animated.h1>

                  <Link to='/find-a-tutor' className="btn btn-custom btn-lg page-scroll">Find a Tutor</Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={`content services-page`} id="features">
        <h2>Tutoring Coding Level 0</h2>
        <ul className="container">
          <li className=' text-danger'>Starting late is not an option.</li>
        </ul>

        <p className="container">
          SkyfordCCI also offer HTML & CSS basic concepts and projets that you can impliment your skills
          <ul>
            <li className=" fw-bold p-2">Last: JavaScripts ES6</li>
            <li>Full stack Deloper: <b>6 months</b></li>
            <li>Price: <animated.mark style={pricePulse} onClick={showToast}>R3799.00</animated.mark> <b>OR</b> Price:<mark>R650.00pm</mark></li>
          </ul>
        </p>

        <div className="big-code-container container">
          <div className="main-copy container">
            <animated.div style={codeFade}>
              <SyntaxHighlighter language="html" style={solarizedLight} customStyle={onStyle}>{codeprint}</SyntaxHighlighter>
            </animated.div>
            <button className="btn btn-outline-primary btn-sm shadow-sm rounded-pill" onClick={() => copyText(codeprint, setCopyNow)}>{copyNow}</button>
          </div>

          <div className="main-copy container">
            <animated.div style={codeFade}>
              <SyntaxHighlighter language="css" style={solarizedDark} customStyle={onStyle}>{codeprint3}</SyntaxHighlighter>
            </animated.div>
            <button className="btn btn-outline-primary btn-sm shadow-sm rounded-pill" onClick={() => copyText(codeprint3, setCopyNow2)}>{copyNow2}</button>
          </div>

          <div className="main-copy container">
            <animated.div style={codeFade}>
              <SyntaxHighlighter language="javascript" style={solarizedDark} customStyle={onStyle}>{codeprint2}</SyntaxHighlighter>
            </animated.div>
            <button className="btn btn-outline-primary btn-sm shadow-sm rounded-pill" onClick={() => copyText(codeprint2, setCopyNow3)}>{copyNow3}</button>
          </div>

          <Tooltip id="tooltip" />
        </div>

        <p className="container">
          <h3>Advanced FSD</h3>
          <i className=" text-secondary">Include the following:
            <ol className="p-2 rounded js">
              <li>React Js</li>
            </ol>
          </i>
        </p>

        <div className="main-copy container">
          <animated.div style={codeFade}>
            <SyntaxHighlighter language="javascript" style={solarizedDark} customStyle={onStyle}>{codeprint4}</SyntaxHighlighter>
          </animated.div>
          <button className="btn btn-outline-primary btn-sm shadow-sm rounded-pill" onClick={() => copyText(codeprint4, setCopyNow3)}>{copyNow3}</button>
        </div>

        <Breadcrumb className="text-decoration-none position-relative p-2 Breadcrumb">
          <Breadcrumb.Item><Link to="/tutoring/subjects"><FaBookReader /> Subjects</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/cbp-current-students/table-prices"><FaTable /> Table price</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/tutoring/"><FaBackward /> Back</Link></Breadcrumb.Item>
        </Breadcrumb>

        <br />
        <hr />
        {onLoading ? <Loader /> : <Outlet className='position-sticky' />}
      </div>

      <ChatBot />
      <ToastContainer />
    </>
  );
};

export default Tutoring;

