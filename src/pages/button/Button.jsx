import React from 'react';
import './_button.scss';
import { FaDownload } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const Button = () => {
  const handleAppDownload = () => {
    const win = window.open('', '_blank', 'width=600,height=450');
    const doc = win.document;

    const styles = `
      body {
        margin: 0;
        padding: 20px;
        font-family: 'Segoe UI', sans-serif;
        background: #f9f9f9;
        color: #333;
        text-align: center;
      }
      h1 {
        font-size: 22px;
        margin-bottom: 10px;
      }
      p {
        font-size: 14px;
        line-height: 1.5;
      }
      a {
        display: inline-block;
        margin-top: 20px;
        padding: 10px 20px;
        background: #1E90FF;
        color: #fff;
        text-decoration: none;
        border-radius: 6px;
        transition: background 0.3s ease;
      }
      a:hover {
        background: #0d70d0;
      }
      #loader {
        display: none;
        margin-top: 20px;
      }
      .lds-default {
        display: inline-block;
        width: 80px;
        height: 80px;
      }
      .lds-default div {
        position: absolute;
        width: 6px;
        height: 6px;
        background: #1E90FF;
        border-radius: 50%;
        animation: lds-default 1.2s linear infinite;
      }
      @keyframes lds-default {
        0%, 20%, 80%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.5);
        }
      }
    `;

    const html = `
      <h1 id="title">Download Our Mobile App</h1>
      <p id="description">This APK is secure and maintained by <strong>Quorvex Institute</strong>.</p>
      <p id="note">By downloading, you agree to our <a href="https://quorvexinstitute.vercel.app/terms_of_services" target="_blank" rel="noopener">Terms & Conditions</a>.</p>
      <a id="downloadBtn" href="https://apk.e-droid.net/apk/app3508057-rvgu4n.apk?v=6" download>Download APK</a>
      <div id="loader">
        <div class="lds-default"><div></div></div>
      </div>
    `;

    doc.head.innerHTML = `<style>${styles}</style>`;
    doc.body.innerHTML = html;

    const script = doc.createElement('script');
    script.textContent = `
      const btn = document.getElementById('downloadBtn');
      const loader = document.getElementById('loader');
      const title = document.getElementById('title');
      const desc = document.getElementById('description');
      const note = document.getElementById('note');

      btn.addEventListener('click', () => {
        title.textContent = 'Redirecting to download...';
        btn.style.display = 'none';
        desc.style.display = 'none';
        note.style.display = 'none';
        loader.style.display = 'block';
      });
    `;
    doc.body.appendChild(script);
  };

  return (
    <div
      className="container"
      data-tooltip-id="app"
      data-tooltip-content="Download our app for updates and resources"
    >
      <button className="app_download" onClick={handleAppDownload} aria-label="Download Quorvex App">
        Download App <FaDownload />
      </button>
      <Tooltip id="app" />
    </div>
  );
};

export default Button;

