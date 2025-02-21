import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProtectedRoute from "./componets/ProtectedRoute";
import './index.css';
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from "react-hot-toast";
// import { FaInfoCircle} from "react-icons/fa";
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
import Contact from './componets/contact'
import FindTutor from './pages/FindTutor';
import User from './pages/loginform/UserPage';
import SignIn from './componets/SignIn'
import SignUp from './componets/SignUp';
import RecoverPassword from './componets/RecoverPassword'
import TicTacToe from "./pages/games/tictactoe/TicTacToe";
import CBP from "./pages/CBP";
import TableExample from "./pages/TablePrice";
import VidPhys from "./pages/vidcomponets/VidPhys";
import VidLfs from "./pages/vidcomponets/VidLfs";
import VidMath from "./pages/vidcomponets/VidMath";
import TutorApplyForm from "./pages/TutorApplyForm";
import TrackApplication from "./pages/TrackApplication";
import ErrorPageTwo from "./pages/ErrorPageTwo";
import Post from "./pages/Post";
import Location from "./pages/Location";



const  App = ()=> {
  
const {id} =useParams()
const [show ,setShow] =useState(false);
const Error = (props)=>{
  useEffect(()=>props.handleHeaderFooterShow(false),[])
  return <ErrorPageTwo/>
}
useEffect(()=>{
  setShow(true)
},[id])
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is authenticated (e.g., using localStorage or a token)
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // true if token exists
  }, []);

  useEffect(() => {
    const App_KEY_UNI02 = crypto.randomUUID()
    const setClock = new Date().getSeconds()

    const APPKEY = App_KEY_UNI02
    const APP_KEY = APPKEY;


    console.log(APP_KEY)
    if (localStorage.getItem(APP_KEY)) {
      toast((t) => (
        <span className="p-2 bg-warning-subtle">
          <Greet />
          This application is already opened on the other tab. <br /> <b>Note:</b>This Tab will close automatically. <br /><br />
          <button style={buttonStyle} onClick={() => toast.dismiss(t.id)}>OK</button>
        </span>
      ), {
        duration: 10000,
      });
      setTimeout(() => {
        window.close()
      }, 8000)

    } else {
      localStorage.setItem(APP_KEY, 'open')
      window.addEventListener('beforeunload', () => {
        localStorage.removeItem(APP_KEY);

      });
    };

    return () => localStorage.removeItem(APP_KEY)
  }, [])

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
        <ErrorPage />
      </div>
      <div className="container-fluid error-con">
      {/* <TimeoutPopup /> */}
        {show&&<Navigation />}
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about/" element={<About/>} />
          <Route path="/post_ads/" element={<Post/>} />
          <Route path="/location/" element={<Location/>} />

          <Route path="/track-Application/" element={<TrackApplication/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quotes/" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Quotes /> </ProtectedRoute>} />
          <Route path="/services/" element={<Services/>} />
          <Route path="/tutoring/" element={<Tutoring/>} >
          <Route path="/tutoring/ApplicationForm-for-a-tutor/" element={<TutorApplyForm/>} >
          <Route path="/tutoring/ApplicationForm-for-a-tutor/track-Application/" element={<TrackApplication/>} />
          </Route>
            <Route path="/tutoring/subjects" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Subjects/> </ProtectedRoute>}>
              <Route path="/tutoring/subjects/Life-sciences" element={<LifeSciences />} >
                <Route path="/tutoring/subjects/Life-sciences/clip-overview" element={<VidLfs />} />
              </Route>
              <Route path="/tutoring/subjects/Physical-science" element={<PhysicalScience />} >
                <Route path="/tutoring/subjects/Physical-science/clip-overview" element={<VidPhys />} />
              </Route>
              <Route path="/tutoring/subjects/Mathematics" element={<Mathematics />} >
                <Route path="/tutoring/subjects/Mathematics/clip-overview" element={<VidMath />} />
              </Route>

            </Route>
          </Route>
          <Route path="/find-a-tutor" element={<ProtectedRoute isAuthenticated={isAuthenticated}><FindTutor /></ProtectedRoute>} />
          <Route path="/courses/" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Courses/></ProtectedRoute>}>
            <Route path="/courses/web-dev/" element={<WebDev />} />
            <Route path="/courses/data-science/" element={<DataScience />} />
            <Route path="/courses/ui-ux/" element={<UxUi />} />
          </Route>
          <Route path="/calendar/" element={<Calendar />} />
          <Route path="/user-home-page" element={<User />} >
            <Route path="/user-home-page/sign-in" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/user-home-page/sign-up" element={<SignUp />} />
            <Route path="/user-home-page/recover-password-getcode-page" element={<RecoverPassword />} />
          </Route>
          <Route path='/games-tic-toc-toe-play' element={<TicTacToe />} />
          <Route path='/cbp-current-students' element={<CBP />} >
          <Route path='/cbp-current-students/table-prices' element={<TableExample/>}/>
          </Route>
          <Route path='/path-err-Or-PageNotFound' element={<Error handleHeaderFooterShow={(res)=>setShow(false)}/>}/>
          <Route path='*' element={<Navigate to='/path-err-Or-PageNotFound/'/>}/>
        </Routes>
        <ToastContainer/>
        <Toaster />
      </div>
      {show&&  <Footer />}
     
    </Router>
  );

}

export default App;
