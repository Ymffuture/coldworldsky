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
    setTimeout(() => { setOnLoading(false) }, 1500);
  }, []);

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
    toast.info('R3800.00 per full course OR R650.00/month', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
    });
  };

  const onStyle = {
    borderRadius: '8px',
    padding: '1rem',
    fontSize: '14px',
    backgroundColor: '#f8f9fa',
    color: '#111',
    overflowX: 'auto',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  };

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

  const codeprint2 = `const handleSubmit = (event)=> {
  event.preventDefault()
  const email = document.getElementById('email')
  const password = document.getElementById('password')

  if(!password || !email){
    alert("Both input empty")
  }
}`;

  const codeprint3 = `body {
  margin: 0;
  padding: auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`;

  const codeprint4 = `import React from 'react';

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

export default Navbar;`;

  const copyText = (text, setter) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success("Copied!", { autoClose: 2000, position: 'top-center' });
        setter(<FaCheckDouble className="text-success" data-tooltip-id="tooltip" data-tooltip-content="Copied" />);
      })
      .catch(() => {
        toast.error("Failed to copy text.", {
          autoClose: 3000,
          position: 'top-center'
        });
      });
  };

  return (
    <>
      <header id="header">
        <div className="intro container-fluid">
          <div className="overlay d-flex justify-content-center align-items-center vh-100">
            <div className="container text-center">
              <animated.h1 style={introFade} className="display-4 fw-bold">
                Tutoring <span className="text-primary">@QI</span>
              </animated.h1>
              <Link to='/find-a-tutor' className="btn btn-primary rounded-pill shadow">Find a Tutor</Link>
            </div>
          </div>
        </div>
      </header>

      <div className="content services-page p-4" id="features">
        <h2 className="fw-bold text-secondary">Tutoring Coding Level 0</h2>
        <ul className="list-unstyled text-danger">
          <li>Starting late is not an option.</li>
        </ul>

        <div className="container my-3">
          <p>
            Quorvex also offers HTML & CSS basic concepts and hands-on projects.
            <ul>
              <li className="fw-bold p-2">Last: JavaScript ES6</li>
              <li>Full Stack Developer Duration: <strong>6 months</strong></li>
              <li>Price: <animated.mark style={pricePulse} onClick={showToast}>R3799.00</animated.mark> or <mark>R650.00/month</mark></li>
            </ul>
          </p>
        </div>

        <div className="big-code-container container">
          {[{ text: codeprint, lang: 'html', setter: setCopyNow, icon: copyNow }, { text: codeprint3, lang: 'css', setter: setCopyNow2, icon: copyNow2 }, { text: codeprint2, lang: 'javascript', setter: setCopyNow3, icon: copyNow3 }].map((code, i) => (
            <div className="main-copy mb-4" key={i}>
              <animated.div style={codeFade}>
                <SyntaxHighlighter language={code.lang} style={code.lang === 'html' ? solarizedLight : solarizedDark} customStyle={onStyle}>{code.text}</SyntaxHighlighter>
              </animated.div>
              <button className="btn btn-outline-primary btn-sm shadow-sm rounded-pill" onClick={() => copyText(code.text, code.setter)}>{code.icon}</button>
            </div>
          ))}
          <Tooltip id="tooltip" />
        </div>

        <div className="container my-4">
          <h3>Advanced FSD</h3>
          <p className="text-muted">Includes:</p>
          <ol className="list-group list-group-numbered mb-4">
            <li className="list-group-item">React JS</li>
          </ol>

          <div className="main-copy">
            <animated.div style={codeFade}>
              <SyntaxHighlighter language="javascript" style={solarizedDark} customStyle={onStyle}>{codeprint4}</SyntaxHighlighter>
            </animated.div>
            <button className="btn btn-outline-primary btn-sm shadow-sm rounded-pill" onClick={() => copyText(codeprint4, setCopyNow3)}>{copyNow3}</button>
          </div>
        </div>

        <Breadcrumb className="p-2 bg-light rounded">
          <Breadcrumb.Item><Link to="/tutoring/subjects"><FaBookReader /> Subjects</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/cbp/pricing"><FaTable /> Table Price</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/tutoring/"><FaBackward /> Back</Link></Breadcrumb.Item>
        </Breadcrumb>

        {onLoading ? <Loader /> : <Outlet className="x_card"/>}
      </div>

      <ChatBot />
      <ToastContainer />
    </>
  );
};

export default Tutoring;

