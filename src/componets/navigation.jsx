import React, { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./Navigation.css";
import IconCloud  from "../custom/IconCloud/IconCloud";
import Themed from "./ThemeToggle";
import SearchLive from './SearchLive';
import {
  FaCalendarCheck,
  FaBookOpen,
  FaFacebook,
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaDatabase,
  FaPaintBrush,
  FaAddressBook,
  FaGithub,
  FaSignInAlt,
  FaBookReader,
  FaSignOutAlt,
  FaWhatsapp,
  FaRegAddressCard,
  FaRegCopy,
  FaLocationArrow,
  FaCloud,
  FaShareAltSquare,
  FaLock,
} from "react-icons/fa";
import imgLoad from '../assets/css/nivo-lightbox/loading.gif'
import CssLoader from "../pages/Cloader";
import AIShow from './AIShow';
const Navigation = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [navbar, setNavBar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showIcon, setShowIcon] = useState("");
  const [show, setShow] = useState(false);
  const [userQuery, setUserQuery] = useState()
  const [openGoogle, setOpenGoogle] = useState('')
  const sidemenuRef = useRef();

  const serachUserQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`)

    setOpenGoogle(`https://google.com/search?q=${userQuery}`)
  }

  // have to fix this 
  const Siginpage = () => {
    window.open(`https://skyfordcci.vercel.app/user-home-page/sign-in`)

  }

  const toastId = crypto.randomUUID().slice(0, 24);

  // scroll down effect
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setIsSidebarVisible(!isScrollingDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  // end here
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // true if token exists
  }, []);


  const copyText = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.custom(<div className="text-bg-success p-3 rounded"> <FaRegCopy /> LINK: <Link className=' text-light'>{window.location.href}</Link></div>, {
          duration: 5000,
          position: 'center',
          style: {
            background: '#1E2227',
            color: 'white',
          }
        });

      })
      .catch((err) => {
        toast.error("Fail to copy a text.", {
          duration: 5000,
          position: 'center',
          style: {
            background: '#1E2227',
            color: 'red'
          }
        });

      });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const toggleSwitch = () => {
        localStorage.removeItem("token"); // Clear token
        setIsAuthenticated(false);
  setTimeout(() =>{
    window.location.reload()
           },3000) 
      }
  const navLinks = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/about", label: "About", icon: <FaInfoCircle /> },
    { path: "/services", label: "Services", icon: <FaCogs /> },
    { path: "/tutoring/", label: "Tutoring", icon: <FaChalkboardTeacher />, applytobeatutor: <Badge><Link to='/tutoring/ApplicationForm-for-a-tutor/'></Link></Badge> },
    {
      path: "/courses/",
      label: `Courses `,
      icon: <FaBookReader />,
      submenu: [
        {
          path: "/courses/web-dev/",
          label: "Web Development",
          icon: <FaLaptopCode />,
        },
        {
          path: "/courses/data-science",
          label: "Data Science",
          icon: <FaDatabase />,
        },
        {
          path: "/courses/ui-ux/",
          label: "UI/UX Design",
          icon: <FaPaintBrush />,
        },

      ],
    },
    { path: "/contact", label: "Contact", icon: <FaAddressBook /> },
    {
      path: "#", label: isAuthenticated ? 'SignOut' : 'Share Page', icon: isAuthenticated ? <FaSignOutAlt className="text-danger" onClick={toggleSwitch} /> : <FaShareAltSquare className="text-secondary" onClick={() => copyText(window.location.href)} />
   
    },
  ];

  const buttonLinks = [
    {
      path: "/calendar/",
      label: "Calendar",
      icon: <FaCalendarCheck className="icon-bottom" />,
    },
    {
      path: "/location",
      label: "Loction",
      icon: <FaLocationArrow className="icon-bottom" />,
    },
    {
      path: "/tutoring/ApplicationForm",
      label: "Apply to be a Tutor",
      icon: <FaRegAddressCard className="icon-bottom" />,
    },
    {
      path: "/question-papers",
      label: "Books/question papers",
      icon: <FaBookOpen className="icon-bottom" />,
    },
    {
      path:isAuthenticated? "#" :"/user-home-page/sign-in" ,
      label:isAuthenticated? "Can't sign out here! " :"Sign in",
      icon: isAuthenticated? <FaSignOutAlt className="text-danger icon-bottom" /> :<FaSignInAlt className="icon-bottom" />,
     } 
  ];

  useEffect(() => {
    function updateConnectionStatus() {
      if (navigator.onLine) {
        setIsOnline(true);
        setStatusMessage("Online");
        setTimeout(() => {
          setStatusMessage("");
        }, 8000);

        setTimeout(() => {
          toast.success("You are back Online!", {
            position: "bottom-left",
            duration: 8000,
            icon: <FaCloud/>,
            toastId: toastId,
            style: {
              background: "#1E2227",
              borderRadius: "8px",
              color: "whitesmoke",
            },
          });
        }, 5000);

      } else {
        setIsOnline(false);
        toast.custom(<div className=" text-bg-secondary p-3 rounded"> No Connection Try <b onClick={()=>window.location.reload}>REFRESH</b></div>, {
          position: "top-center",
          duration: 3000,
          icon: null,
          toastId: toastId,
          style: {
            background: '#1E2227',
            color: 'whitesmoke'
          }
        });

        setTimeout(() => {
          toast.custom(<div ><img width='45%' src={imgLoad} alt='Loading...' /></div>, {
            duration: 2000,
            style: {
              background: "white",
              borderRadius: "8px",
              color: "black",
            },
            position: "bottom-center",
          });
        }, 5000);

        setTimeout(() => {
          toast.error("Failed to conntect to Internet.", {
            duration: 3000,
            icon:  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" width="48" height="48" viewBox="0 0 24 24">
  <path d="M3 3l18 18M19 19H8a5 5 0 01-5-5 5 5 0 014.38-4.94A6 6 0 0116 7a5.8 5.8 0 012.58.6" />
</svg>
 ,
            toastId: toastId,
            style: {
              background: "#1E2227",
              borderRadius: "8px",
              color: "whitesmoke",
            },
            position: "bottom-left",
          });
        }, 20000);
      }
    }

    // Initial check
    updateConnectionStatus();

    // Add event listeners
    window.addEventListener("online", updateConnectionStatus);
    window.addEventListener("offline", updateConnectionStatus);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("online", updateConnectionStatus);
      window.removeEventListener("offline", updateConnectionStatus);
    };
  }, []);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
    setShowIcon((view) => !view);
  };
  // search code here
  const handleSearch = () => {
    const results = demoSearchData.filter((item) =>
      item.searchname.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
    //#FF4B4B
    if (results.length === 0) {
      toast.error("No results found!", {
        position: "top-center",
        duration: 3000,
        icon: null,
        style: {
          background: '#1E2227',
          color: 'whitesmoke'
        }
      });
    } else {
      toast.success("Search results updated!", {
        position: "top-center",
        duration: 3000,
        icon: null,
        style: {
          background: '#1E2227',
          color: 'whitesmoke'
        }
      });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (searchQuery !== "") {
        const results = demoSearchData.filter((item) =>
          item.searchname.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(results);
      }
    }, 1000);
  }, [searchQuery]);

  // search end here...

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? "light" : "dark";
  };

  useEffect(() => {
    setTimeout(() => {
      setSearchResults("");
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setNavBar(true);
    }, 10000);
  }, []);

  useEffect(() => {
    const closesidebar = (e) => {
      if (!sidemenuRef.current.contains(e.target)) {
        setIsSidebarOpen(false);
        setShowIcon("");
      }
    };

    document.addEventListener("mousedown", closesidebar);
    return () => {
      document.removeEventListener("mousedown", closesidebar);
    };
  }, [sidemenuRef]);


  return (
    <>
      {/* Sidebar */}
      <div
        ref={sidemenuRef}
        className={`sidebar ${isSidebarOpen ? "open" : ""} ${darkMode ? "dark" : "light"}`}
      >

        <div className="sidebar-header">
          <div className="d-flex">
            <button
              data-tooltip-id="my-tooltip-dm"
              data-tooltip-content="Close Sidebar"
              onClick={handleToggleSidebar}
              className="close-btn"
            >
              <div className="lines">
                <div className="line-1"></div>
                <div className="line-2"></div>
              </div>
            </button>
            <Tooltip id="my-tooltip-dm" />
          </div>
        </div>
        {navbar ? (
          <>
            <p
              data-tooltip-id="my-tooltip"
              data-tooltip-content={
                statusMessage ||
                (isOnline ? "Status: Online" : "Status: Offline")
              }
              id="status"
              style={{
                backgroundColor: isOnline
                  ? statusMessage
                    ? "green"
                    : ""
                  : "#ff6161",
                color: isOnline ? "white" : "white",
              }}
              className="text-center card-header d-flex g-2"
            >
              {isTransitioning && (
                <>
                  <div
                    className="transition-animation-connect connect"
                    title="Loading..."
                  ></div>
                  <div className="transition-animation2-connect">
                    <span className="">
                      <i className="fa fa-signal"></i> {""}
                      <i className="fa fa-refresh"></i> {""}
                    </span>
                  </div>
                </>
              )}
              {""}
              {""} {statusMessage || (isOnline ? "Online" : "Offline")}
            </p>
            {/* Search Section */}
          <div className='p-2'>
          <SearchLive/>
          </div>
            


            {/* Navigation Links */}

            <ul className={`sidebar-links`}>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>
                    <span
                      className={`myicon ${showIcon ? "" : "show"} ${isSidebarVisible ? "visible" : "hidden"
                        } `}
                      data-tip={link.label}
                      data-tooltip-id="closesidebar"
                      data-tooltip-content={link.label}
                    >
                      {link.icon}
                    </span>{" "}
                    {link.label}
                  </Link>
                  {link.submenu && (
                    <ul className={`submenu `}>
                      {link.submenu.map((sub, index) => (
                        <li key={index}>
                          <Link to={sub.path} >
                            {" "}
                            <span

                              data-tooltip-id="closesidebar"
                              data-tooltip-content={sub.label}
                              className={`myicon ${showIcon ? "" : "show"}  ${isSidebarVisible ? "visible" : "hidden"
                                } `}
                              data-tip={link.label}
                            >
                              <i className={isAuthenticated? null : 'dropdown'} disabled>{sub.icon}</i>
                            </span>{" "}
                           
                            <span className={isAuthenticated? null : 'dropdown'}> {sub.label}</span> {""} {isAuthenticated? null : <FaLock className="fs-6 lockColor"/>}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              <div className="d-flex bg-dark-subtle rounded bottom-icons fs-2">
                {buttonLinks.map((base, index) => (
                  <li key={index}>
                    <Link
                      data-tooltip-id="tooltip-base"
                      data-tooltip-content={base.label}
                      to={base.path}
                      className="icon-body fs-3"
                      onClick={handleToggleSidebar}

                    >
                      {base.icon}
                    </Link>
                  </li>
                ))}
                <Tooltip id="tooltip-base" />
              </div>
            </ul>

            {/* Social Media Icons */}
            <div className="social-media d-flex justify-content-around mt-2">
              <a
                data-tooltip-id="Facebook"
                data-tooltip-content="Facebook"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                data-tip="Facebook"
              >
                <FaFacebook className="sideIcons facebook" />
              </a>

              <a
                data-tooltip-id="GitHub"
                data-tooltip-content="Github"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                data-tip="Github"
              >
                <FaGithub className="sideIcons" />
              </a>
              <a
                data-tooltip-id="Whatsapp"
                data-tooltip-content="Whatsapp"
                href="https://Whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                data-tip="Whatsapp"
              >
                <FaWhatsapp className="sideIcons inst" />
              </a>
              <Tooltip id="Facebook" />
              <Tooltip id="Whatsapp" />
              <Tooltip id="GitHub" />
            </div>
         
<hr/>

            {/* Theme Toggle */}
                <Themed/>
                <div className="flex p-4">
                <div className="p-2">
                <Link
              to="/privacy-policy"
              rel="nofollow"
              className="font-bold"
            >
         Privacy Policy
            </Link>
            
                </div>
                <div className="p-2">
                <Link
              to="/terms-of-serveces"
              rel="nofollow"
              className="font-bold"
            >
         Terms Of Service
            </Link>
            
                </div>
                <div className="p-2">
                <Link
              to="/about"
              rel="nofollow"
              className="font-bold"
            >
       FAQ
            </Link>
            
                </div>
                </div>
                <br/>
                <p className='position-raletive bottom-0 mt-4 p-4 text-bg-light'>
          &copy; {new Date().getFullYear()} Quorvex Institute. {" "} Powered by {''}
            <Link
              to="https://webpy-7tcd.onrender.com/views/Privacy-Policy"
              rel="nofollow"
              className="font-bold"
            >
         Quorvex
            </Link> {""}
            
          </p>
          <AIShow/>
          </>
        ) : (
         <CssLoader/>
        )}
      </div>


      <Tooltip id="closesidebar" />
      {/* Sidebar Toggle Button */}
      {isSidebarOpen ? '' : <button
        className={`sidebar-toggle-btn ${isSidebarOpen ? "" : "open"}`}
        onClick={handleToggleSidebar}
        data-tooltip-id="my-tooltip-menu"
        data-tooltip-content="Menu"
      >
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
        </div>
        <Tooltip id="my-tooltip-menu" />
      </button>}

    </>
  );
};

export default Navigation;
