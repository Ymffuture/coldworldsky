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
import { Helmet } from 'react-helmet';
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
  
const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Quorvex Institute',
    url: 'https://quorvexinstitute.vercel.app',
    description:
      'Join Quorvex Institute to learn software development, full stack web, Python, React, mathematics, physics and more. Master coding with expert-led, career-ready training.',
    founder: {
      '@type': 'Person',
      name: 'Kgomotso Nkosi (Future_)',
    },
    offers: {
      '@type': 'Offer',
      category: 'Educational Services',
      itemOffered: [
        {
          '@type': 'Course',
          name: 'Software Development',
          description: 'Learn full stack web development, Python, React, and more.',
        },
        {
          '@type': 'Course',
          name: 'Mathematics and Physics',
          description: 'Master mathematics and physics for grades 10-12.',
        },
      ],
    },
  };
  
  return (
    <Router>
     {path ==! show ? "":<Navigation />}
      <StructuredData />
    
      <div className="container-fluid error-con">
        <Suspense fallback={<Loader/>}>
          
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/application-form" element={<TutorApplyForm />} />
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
      <Helmet>
        <title>Quorvex Institute - Learn Coding & More | Code the Future. Together </title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="google-adsense-account" content="ca-pub-2722864790738174" />
  <meta name="robots" content="index, follow" />
  <meta name="google-site-verification" content="xXWElQQdEb1YSMqAy524N-B58KqSZqsf5zc0O8fWg3A" />
  
  
  <meta name="description" content="Join Quorvex Institute to learn software development, full stack web, Python, React, mathematics, physics and more. Master coding with expert-led, career-ready training." />
  <meta name="author" content="Kgomotso Nkosi (Future_)" />
  <meta name="keywords" content="Quorvex, coding school, online courses, software engineering, HTML, CSS, JavaScript, React, Python, Full Stack, Mathematics, Physics Future" />

  
  <link rel="canonical" href="https://quorvexinstitute.vercel.app/" />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Quorvex Institute" />
  <meta property="og:title" content="Quorvex Institute - Code the Future  Together " />
  <meta property="og:description" content="Master coding at Quorvex Institute with modern, hands-on education. Learn Full Stack, Python, JavaScript and more." />
  <meta property="og:image" content="https://quorvexinstitute.vercel.app/img/Logo.jpg" />
  <meta property="og:url" content="https://quorvexinstitute.vercel.app/" />

  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Quorvex Institute - Code the Future  Together" />
  <meta name="twitter:description" content="Future-ready coding education: Full Stack, Python, React, HTML, CSS, JavaScript." />
  <meta name="twitter:image" content="https://quorvexinstitute.vercel.app/img/Logo.jpg" />
  <meta name="twitter:url" content="https://quorvexinstitute.vercel.app/" />
 
  <link rel="icon" href="img/favicon.png" type="image/x-icon" />
  <link rel="apple-touch-icon" sizes="180x180" href="img/logosk.png" />
  <link rel="apple-touch-icon" sizes="114x114" href="img/logosk.png" />

 
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&family=Raleway:wght@200;400&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900&display=swap" rel="stylesheet" />

  
  <link rel="stylesheet" href="./src/assets/css/bootstrap.css" />
  <link rel="stylesheet" href="./src/assets/fonts/font-awesome/css/font-awesome.css" />
  <link rel="stylesheet" href="./src/assets/css/style.css" />
  <link rel="stylesheet" href="./src/assets/css/nivo-lightbox/nivo-lightbox.css" />
  <link rel="stylesheet" href="./src/assets/css/nivo-lightbox/default.css" />
 
  <script type="application/ld+json">
[
  {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Quorvex Institute",
    "url": "https://quorvexinstitute.vercel.app",
    "logo": "https://quorvexinstitute.vercel.app/img/Logo.jpg",
    "description": "Quorvex Institute offers modern coding education in Full Stack Development, Mathematics, Physics, React, Python, and more.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2354 Drieziek 4",
      "addressLocality": "Orange Farm",
      "addressRegion": "Gauteng",
      "postalCode": "1841",
      "addressCountry": "ZA"
    },
    "sameAs": [
      "https://www.linkedin.com/in/kgomotsonkosi-l",
      "https://quorvexinstitute.vercel.app"
    ]
  },

  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Introduction to Full Stack Development",
    "description": "Master front-end and back-end technologies including HTML, CSS, JavaScript, Node.js, React, and MongoDB.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Quorvex Institute",
      "sameAs": "https://quorvexinstitute.vercel.app"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "53"
    },
    "review": {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Lerato Dlamini" },
      "reviewBody": "A thorough and practical course. The instructors were amazing and everything was hands-on."
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "startDate": "2025-06-01",
      "endDate": "2025-08-31",
      "location": { "@type": "VirtualLocation", "url": "https://quorvexinstitute.vercel.app/courses" },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "ZAR",
        "price": "0",
        "availability": "https://schema.org/InStock",
        "url": "https://quorvexinstitute.vercel.app/apply"
      }
    }
  },

  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Python for Data Science",
    "description": "An advanced course in Python tailored for data analysis and visualization. Tutor: Karabo Luwanda (Ace).",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Quorvex Institute",
      "sameAs": "https://quorvexinstitute.vercel.app"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "37"
    },
    "review": {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Thabo Mokoena" },
      "reviewBody": "Karabo made complex Python topics easy to grasp. Highly recommend for aspiring data scientists."
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "startDate": "2025-06-15",
      "endDate": "2025-09-15",
      "location": { "@type": "VirtualLocation", "url": "https://quorvexinstitute.vercel.app/courses" },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "ZAR",
        "price": "689",
        "availability": "https://schema.org/InStock",
        "url": "https://quorvexinstitute.vercel.app"
      }
    }
  },

  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "HTML and CSS Basics",
    "description": "Learn the foundation of web design using HTML and CSS. Perfect for beginners.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Quorvex Institute",
      "sameAs": "https://quorvexinstitute.vercel.app"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "29"
    },
    "review": {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "4.5" },
      "author": { "@type": "Person", "name": "Neo Nkosi" },
      "reviewBody": "Very beginner-friendly and great examples!"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "startDate": "2025-06-10",
      "endDate": "2025-08-10",
      "location": { "@type": "VirtualLocation", "url": "https://quorvexinstitute.vercel.app/courses/web-dev" },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "ZAR",
        "price": "499",
        "availability": "https://schema.org/InStock",
        "url": "https://quorvexinstitute.vercel.app/apply"
      }
    }
  },

  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Mathematics & Sciences Tutoring",
    "description": "Comprehensive tutoring in Math, Physics, and Chemistry for secondary and high school students.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Quorvex Institute",
      "sameAs": "https://quorvexinstitute.vercel.app"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "reviewCount": "44"
    },
    "review": {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Zanele Mthembu" },
      "reviewBody": "My child improved drastically in math and physics within just two months!"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "startDate": "2025-06-05",
      "endDate": "2025-12-01",
      "location": { "@type": "VirtualLocation", "url": "https://quorvexinstitute.vercel.app/courses/mathematics" },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "ZAR",
        "price": "300",
        "availability": "https://schema.org/InStock",
        "url": "https://quorvexinstitute.vercel.app/"
      }
    }
  },

  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Other Subjects",
    "description": "We offer tutoring in additional subjects including Business Studies, Geography, and more.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Quorvex Institute",
      "sameAs": "https://quorvexinstitute.vercel.app"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "startDate": "2025-07-01",
      "endDate": "2025-12-01",
      "location": { "@type": "VirtualLocation", "url": "https://quorvexinstitute.vercel.app/courses/subjects" },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "ZAR",
        "price": "300",
        "availability": "https://schema.org/InStock",
        "url": "https://quorvexinstitute.vercel.app/subjects"
      }
    }
  }
]
</script>


  
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2722864790738174"
    crossorigin="anonymous"></script>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
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
        "query-input": "required name=search_term_string optional name=subject optional name=level"
      }
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
