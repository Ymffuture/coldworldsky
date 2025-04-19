import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import dotenv from 'dotenv';
import {GOOGLE_CLIENT_Id} from '../Urls.js';
import "../src/styles/main.scss";
import 'bulma/css/bulma.min.css';


createRoot(document.getElementById('root')).render(
 <GoogleOAuthProvider clientId={GOOGLE_CLIENT_Id} >

   <StrictMode>
    <App />
    </StrictMode>
 </GoogleOAuthProvider>
);
