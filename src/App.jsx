import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import "./App.css";
import { Toaster, toast } from "react-hot-toast";
import { FaInfoCircle} from "react-icons/fa";
import Subjects from "./pages/Subjects";
import LifeSciences from "./pages/LifeSciences";
import Mathematics from "./pages/Mathematics";
import PhysicalScience from "./pages/PhysicalScience";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Footer from "./pages/Footer";
import TimeoutPopup from './componets/TimeoutPopup';
import Greet from './componets/Greet';
import Navigation from "./componets/navigation";
import ErrorPage from "./pages/ErrorPage";
import Services from "./pages/Services";
import Tutoring from "./pages/Tutoring";
import Courses from "./pages/courses/Courses";
import Quotes from "./pages/Quotes";
import Calendar from "./pages/Calendar";
import DataScience from "./pages/courses/DataScience";
import UxUi from "./pages/courses/UxUi";
import WebDev from "./pages/courses/WebDev";
// import Contact from "./componets/contact";
import FindTutor from './pages/FindTutor';
import Login from "./pages/loginform/Login";
import Logout from "./pages/loginform/Logout";
import User from './pages/loginform/UserPage';


function App() {
   
    
  useEffect(()=>{
    const App_KEY_UNI02 = crypto.randomUUID()
    const setClock = new Date().getSeconds()
    const APPKEY = setClock <30 ? "App_KEY_UNI03": App_KEY_UNI02
    const APP_KEY = APPKEY ;
    console.log(APP_KEY)
    if(localStorage.getItem(APP_KEY)){
    toast((t)=>(
      <span className="p-2 bg-warning-subtle">
    <Greet/>
        This application is already opened on the other tab. <br/> <b>Note:</b>This Tab will close automatically. <br/><br/>
        <button style={buttonStyle} onClick={()=>toast.dismiss(t.id)}>OK</button>
      </span>
    ),{
      duration:10000,
    });
      setTimeout(()=>{
        window.close()
      },8000)
     
    }else{localStorage.setItem(APP_KEY,'open')
      window.addEventListener('beforeunload', ()=>{
        localStorage.removeItem(APP_KEY);
       
      });
    };
    
    return()=>localStorage.removeItem(APP_KEY)
      },[])

      const buttonStyle = {
        backgroundColor: "#4CAF50", // Green color
        color: "white",
        padding: "5px 10px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      };
    return (
        <Router>
            <div className="mobile-message d-flex g-2 position-absolute m-4">
           
            {/* <FaInfoCircle className="cl-MB"/> */}
            {/* <p>Only for Desktop view </p> */}
                
                 </div>
                 <div className="error">
                 <ErrorPage/>
                 </div>
            <div className="container-fluid error-con">
            <TimeoutPopup/>
            <Navigation/>
            
            <Routes>
  <Route path="/" element={<LandingPage />} /> 
  <Route path="/about" element={<About />} />
  <Route path="/quotes" element={<Quotes />} />
  <Route path="/services" element={<Services />} />


  <Route path="/tutoring" element={<Tutoring />} >
  <Route path="/tutoring/subjects" element={<Subjects />}>
  <Route path="/tutoring/subjects/Life-sciences" element={<LifeSciences />} >
  <Route path="/tutoring/subjects/Life-sciences/find-a-tutor" element={ <FindTutor/>} />
  </Route>

  <Route path="/tutoring/subjects/Physical-science" element={<PhysicalScience />} >
  <Route path="/tutoring/subjects/Physical-science/find-a-tutor" element={<FindTutor/>} />
  </Route>
  <Route path="/tutoring/subjects/Mathematics" element={<Mathematics/>} >
  <Route path="/tutoring/subjects/Mathematics/find-a-tutor" element={<FindTutor/>} />
  </Route>
  
  </Route>
  </Route>
  <Route path="/find-a-tutor" element={<FindTutor/>} />
  <Route path="/courses" element={<Courses />}>
    <Route path="web-dev" element={<WebDev />} />
    <Route path="data-science" element={<DataScience />} />
    <Route path="ui-ux" element={<UxUi />} />
  </Route>
  <Route path="/calendar" element={<Calendar />} />
  <Route path="/user-home-page" element={<User/>} >
  <Route path="/user-home-page/sign-in" element={<Login/>} />
  <Route path="/user-home-page/sign-up" element={<Logout/>} />
  </Route>
  
  
</Routes>
                <Toaster/>
            </div>
            
           <Footer/>
        </Router>
    );
    
}

export default App;
