import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Toaster, toast } from "react-hot-toast";
import Navigation from "./componets/navigation";
import Footer from "./pages/Footer";
import ProtectedRoute from "./componets/ProtectedRoute";
import Greet from './componets/Greet';
import './index.css';
import './App.css';
import AdminPanel from "./pages/AdminPanel"
// import Layout from "./Layout";
import Loader from './componets/PageLoader';
// Lazy-loaded Pages
const LandingPage = lazy(() => import('./pages/LandingPage'));
const About = lazy(() => import('./pages/About'));
const Post = lazy(() => import('./pages/Post'));
const Location = lazy(() => import('./pages/Location'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const QuestionPapers = lazy(() => import('./componets/QuestionPapers'));
const TrackApplication = lazy(() => import('./pages/TrackApplication'));
const Contact = lazy(() => import('./componets/contact'));
const Quotes = lazy(() => import('./pages/Quotes'));
const Services = lazy(() => import('./pages/Services'));
const PrivacyPolicy = lazy(() => import('./pages/Privacy_policy'));
const TermsOfService = lazy(() => import('./pages/Terms_of_service'));
const Tutoring = lazy(() => import('./pages/Tutoring'));
const TutorApplyForm = lazy(() => import('./pages/TutorApplyForm'));
const Subjects = lazy(() => import('./pages/Subjects'));
const LifeSciences = lazy(() => import('./pages/LifeSciences'));
const VidLfs = lazy(() => import('./pages/vidcomponets/VidLfs'));
const PhysicalScience = lazy(() => import('./pages/PhysicalScience'));
const VidPhys = lazy(() => import('./pages/vidcomponets/VidPhys'));
const Mathematics = lazy(() => import('./pages/Mathematics'));
const VidMath = lazy(() => import('./pages/vidcomponets/VidMath'));
const FindTutor = lazy(() => import('./pages/FindTutor'));
const Courses = lazy(() => import('./pages/courses/Courses'));
const WebDev = lazy(() => import('./pages/courses/WebDev'));
const DataScience = lazy(() => import('./pages/courses/DataScience'));
const UxUi = lazy(() => import('./pages/courses/UxUi'));
const Calendar = lazy(() => import('./pages/Calendar'));
const User = lazy(() => import('./pages/loginform/UserPage'));
const SignIn = lazy(() => import('./componets/SignIn'));
const SignUp = lazy(() => import('./componets/SignUp'));
const RecoverPassword = lazy(() => import('./componets/RecoverPassword'));
const TicTacToe = lazy(() => import('./pages/games/tictactoe/TicTacToe'));
const CBP = lazy(() => import('./pages/CBP'));
const TableExample = lazy(() => import('./pages/TablePrice'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  useEffect(() => {
    const APP_KEY = crypto.randomUUID();
    console.log(APP_KEY);
    if (localStorage.getItem(APP_KEY)) {
      toast((t) => (
        <span className="p-2 bg-warning-subtle">
          <Greet />
          This application is already opened on the other tab.<br />
          <b>Note:</b> This Tab will close automatically.
          <br /><br />
          <button onClick={() => toast.dismiss(t.id)}>OK</button>
        </span>
      ), { duration: 10000 });

      setTimeout(() => {
        window.close();
      }, 8000);
    } else {
      localStorage.setItem(APP_KEY, "open");
      window.addEventListener("beforeunload", () => {
        localStorage.removeItem(APP_KEY);
      });
    }

    return () => localStorage.removeItem(APP_KEY);
  }, []);
const path = window.location.pathname;
 const show= "/not-found";

  return (
    <Router>
     {path ==! show ? "":<Navigation />}
      <StructuredData />
    
      <div className="container-fluid error-con">
        <Suspense fallback={<Loader/>}>
          
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/form-admin" element={<AdminPanel />} />
            <Route path="/post-ads" element={<Post />} />
            <Route path="/location" element={<Location />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/question-papers" element={<QuestionPapers />} />
            <Route path="/track-application" element={<TrackApplication />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/services" element={<Services />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-services" element={<TermsOfService />} />
            <Route path="/tutoring" element={<Tutoring />}>
              <Route path="applicationForm" element={<TutorApplyForm />} />
              <Route path="applicationForm/track-application" element={<TrackApplication />} />
              <Route
                path="subjects"
                element={<ProtectedRoute isAuthenticated={isAuthenticated}><Subjects /></ProtectedRoute>}
              >
                <Route path="life-sciences" element={<LifeSciences />} />
                <Route path="life-sciences/clip-overview" element={<VidLfs />} />
                <Route path="physical-science" element={<PhysicalScience />} />
                <Route path="physical-science/clip-overview" element={<VidPhys />} />
                <Route path="mathematics" element={<Mathematics />} />
                <Route path="mathematics/clip-overview" element={<VidMath />} />
              </Route>
            </Route>
            <Route path="/find-a-tutor" element={<ProtectedRoute isAuthenticated={isAuthenticated}><FindTutor /></ProtectedRoute>} />
            <Route path="/courses" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Courses /></ProtectedRoute>}>
              <Route path="web-dev" element={<WebDev />} />
              <Route path="data-science" element={<DataScience />} />
              <Route path="ui-ux" element={<UxUi />} />
            </Route>
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/user-home-page" element={<User />}>
              <Route path="sign-in" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="recover-password" element={<RecoverPassword />} />
            </Route>
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
            <Route path="/cbp" element={<CBP />}>
              <Route path="pricing" element={<TableExample />} />
            </Route>
            <Route path="/not-found" element={<NotFound/>} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
            
        </Suspense>
        <ToastContainer />
        <Toaster />
      </div>
      <Footer />
    </Router>
  );
};

// Structured data for SEO (JSON-LD)
const StructuredData = () => {
  const location = useLocation();

  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Quorvex Institute",
      "url": "https://quorvexinstitute.vercel.app" + location.pathname,
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://quorvexinstitute.vercel.app/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [location.pathname]);

  return null;
};

export default App;

