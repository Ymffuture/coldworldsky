import React from 'react'
import './_button.scss'
import {FaDownload} from 'react-icons/fa';
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
const Button = () => {
    const app_load = () =>{
        const _style =`
        body{
        margin: 10px;
  padding: 0;
font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  color: #23272E !important;
  font-weight: 400;
  background: whitesmoke!important;
   -webkit-user-select: none; 
   -ms-user-select: none; 
  user-select: none;
        }

        .lds-default,
        .lds-default div {
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
         
        }
          #loader{
          display:"none"
          }
        .lds-default {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
          left: 35%;
          top: 0px;
          
        }
        .lds-default div {
          position: absolute;
          width: 6.4px;
          height: 6.4px;
          background: #999999;
          border-radius: 50%;
          animation: lds-default 2s linear infinite;
        }
        .lds-default div:nth-child(1) {
          animation-delay: 0s;
          top: 36.8px;
          left: 66.24px;
         
        }
        .lds-default div:nth-child(2) {
          animation-delay: -0.1s;
          top: 22.08px;
          left: 62.29579px;
        }
        .lds-default div:nth-child(3) {
          animation-delay: -0.2s;
          top: 11.30421px;
          left: 51.52px;
        }
        .lds-default div:nth-child(4) {
          animation-delay: -0.3s;
          top: 7.36px;
          left: 36.8px;
        }
        .lds-default div:nth-child(5) {
          animation-delay: -0.4s;
          top: 11.30421px;
          left: 22.08px;
        }
        .lds-default div:nth-child(6) {
          animation-delay: -0.5s;
          top: 22.08px;
          left: 11.30421px;
        }
        .lds-default div:nth-child(7) {
          animation-delay: -0.6s;
          top: 36.8px;
          left: 7.36px;
        }
        .lds-default div:nth-child(8) {
          animation-delay: -0.7s;
          top: 51.52px;
          left: 11.30421px;
        }
        .lds-default div:nth-child(9) {
          animation-delay: -0.8s;
          top: 62.29579px;
          left: 22.08px;
        }
        .lds-default div:nth-child(10) {
          animation-delay: -0.9s;
          top: 66.24px;
          left: 36.8px;
        }
        .lds-default div:nth-child(11) {
          animation-delay: -1s;
          top: 62.29579px;
          left: 51.52px;
        }
        .lds-default div:nth-child(12) {
          animation-delay: -1.1s;
          top: 51.52px;
          left: 62.29579px;
        }
        @keyframes lds-default {
          0%, 20%, 80%, 100% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(1.8);
          }
        }
        
        


  a {
  color: #608dfd;
  font-weight: 400;
  padding:8px;
  border:2px solid #608dfd;
  margin:1px;
 
}

a:hover,
a:focus {
  text-decoration: none;
  color: whitesmoke;
  background:#608dfd;
}
  h1{
  color:#333;

  }
  h6{
  background:#fdf900;
  color:#460e0e;
  padding:14px;
  border-radius:1px;
  }
  b{
  color:blue;
  }
        `;
       const txt=`
       <h1 id='title'>Download the app</h1> 
       <p id="mytxt">Please note that this app is apk format it is safe and maintained, by Quorvex Institute.
       
       </p>
       <br/>
       <h6 id="warn">
        By Downloading the app you agree to <b>Terms & condition</b>.
        
       </h6>
      
        <p><a id='mybutton' href='https://apk.e-droid.net/apk/app3508057-rvgu4n.apk?v=6'>Download now</a></p>
        <div class="lds-default" id="loader">
        <div></div>
 <div></div>
 <div></div>
  <div></div>
   <div></div>
    <div></div>
     <div></div>
      <div></div>
       <div></div>
        <div></div>
 <div></div>
         <div></div>
        </div>
        `
        const minii = window.open(``,"_blank","width=600,height=400")
    const doc =minii.document;
    const styleEle =doc.createElement('style');
    styleEle.textContent =_style;
    doc.head.appendChild(styleEle);
    doc.body.innerHTML = txt;

    //js
    const script =doc.createElement("script");
    script.textContent=`
    const mybutton = document.getElementById('mybutton');
    const mytxt = document.getElementById('mytxt');
    const warn = document.getElementById('warn');
    const loader = document.getElementById('loader');
    loader.style.display="none";
    mybutton.addEventListener('click',function(){
     document.getElementById('title').innerHTML = 'Redirecting to downloading page, please wait...'
     mybutton.style.display="none";
     mytxt.style.display="none";
     warn.style.display="none";
     loader.style.display="block";
    })

    `;
    doc.body.appendChild(script)
      }
  return (
    <div className='container'
    data-tooltip-id="app"
     data-tooltip-content="Download our App for updates"
    >
        <button
        className='app_download'
        onClick={app_load}
        >
          {""}
Download App {""} <FaDownload className="blink"/>
        </button>
<Tooltip id="app"/>
        
        </div>
  )
}

export default Button