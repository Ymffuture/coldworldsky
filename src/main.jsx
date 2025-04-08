import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE_CLIENT_Id } from '../../Urls.js'
// import { ChakraProvider} from '@chakra-ui/react'
import "../src/styles/main.scss";


createRoot(document.getElementById('root')).render(
  

 <GoogleOAuthProvider clientId={} >

   <StrictMode>
    <App />
    </StrictMode>

 </GoogleOAuthProvider>





);
