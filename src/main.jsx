import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import dotenv from 'dotenv';

dotenv.config();
// import { ChakraProvider} from '@chakra-ui/react'
import "../src/styles/main.scss";
const _clientId = process.env.GOOGLE_CLIENT_Id

createRoot(document.getElementById('root')).render(
  

 <GoogleOAuthProvider clientId={_clientId} >

   <StrictMode>
    <App />
    </StrictMode>
 </GoogleOAuthProvider>





);
