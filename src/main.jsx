import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

import "../src/styles/main.scss";
const _clientId = '755156469559-fk5bfd44pborgg9ad4omcuj786d27h8b.apps.googleusercontent.com'

createRoot(document.getElementById('root')).render(
   
<GoogleOAuthProvider clientId={_clientId} >

   <StrictMode>
    <App />
    </StrictMode>

 </GoogleOAuthProvider>

);
