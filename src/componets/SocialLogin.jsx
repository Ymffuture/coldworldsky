import React, { useState , useEffect } from 'react'
import {  FaGoogle } from 'react-icons/fa';
import {GoogleLogin , googleLogout} from '@react-oauth/google';
import axios from 'axios'
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
const SocialLogin = () => {

  const logOut = () => { googleLogout()}
const handleSuccess = async (response) =>{
  const {credential} = response;
  const res = await axios.post('http://localhost:7411/auth/google', {token:credential});
  console.log(res.data)
}
 return (
  <>
  <button onClick={logOut} className='btn btn-primary'>Logout</button>
  <GoogleLogin onSuccess={handleSuccess} onError={()=>console.log('failed..')}/>
  </>

 );
}

export default SocialLogin


// import React, { useState, useEffect } from 'react'; 
// import { googleLogout, useGoogleLogin } from '@react-oauth/google'; 
// import axios from 'axios';
// import { FaGoogle } from 'react-icons/fa';

// function App() { 
  
//   const [user, setUser] = useState([]); 
//   const [profile, setProfile] = useState([]);
//    const login = useGoogleLogin({
//      onSuccess: (codeResponse) => setUser(codeResponse), onError: (error) => console.log('Login Failed:', error) });
     
//      useEffect(() => { 
//       if (user) { axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
        
//       { headers: { Authorization: `Bearer ${user.access_token}`, 
//         Accept: 'application/json' }
      
//       }).then((res) => { 
//         setProfile(res.data);
//        }).catch((err) => console.log(err)); 
//       } 
      
//       }, [user]); 
      
//       // log out function to log the user out of google and set the profile array to null 
//       const logOut = () => { googleLogout();

// setProfile(null); 
//};

//        return ( 
//        <div className='container p-3 m-4' > 
   
//          {profile ? ( 
//           <div lassName='container m-2' > 
//           <img width='20%' src={profile.picture} alt="user image" /> <h3>User Logged in</h3>
//            <p>Name: {profile.name}</p> 
//            <p>Email Address: {profile.email}</p>
//             <br /> <br /> 
//             <button onClick={logOut} className='btn btn-primary'>Log out</button> </div> ) : ( <button onClick={login} className='btn btn-primary'>Sign in with Google <FaGoogle/> </button>
          
//           )}
        
//          </div> 
        
//       ); }
        
//         export default App;
