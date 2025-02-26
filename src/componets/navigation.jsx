import React, { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Badge from "react-bootstrap/Badge";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./Navigation.css";
import Modal from "react-bootstrap/Modal";
import GoogleAuth from "./SocialLogin"; 
import {
  FaSearch,
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
  FaLink,

  FaSignInAlt,
  FaBookReader,
  FaTimes,
  FaSignOutAlt,
  FaWhatsapp,
  FaCog,
  FaRegAddressCard,

  FaShareAlt,
  FaShare,
  FaRegCopy,
  FaLocationArrow,
} from "react-icons/fa";
import imgLoad from '../assets/css/nivo-lightbox/loading.gif'
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

  const navLinks = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/about/", label: "About", icon: <FaInfoCircle /> },
    { path: "/services/", label: "Services", icon: <FaCogs /> },
    { path: "/tutoring/", label: "Tutoring", icon: <FaChalkboardTeacher />, applytobeatutor: <Badge><Link to='/tutoring/ApplicationForm-for-a-tutor/'></Link></Badge> },
    {
      path: "/courses/",
      label: `Courses`,
      icon: <FaBookReader />,
      submenu: [
        {
          path: "/courses/web-dev/",
          label: "Web Development",
          icon: <FaLaptopCode />,
        },
        {
          path: "/courses/data-science/",
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
      path: "#", label: isAuthenticated ? 'SignOut' : 'Share Page', icon: isAuthenticated ? <FaSignOutAlt className="text text-danger" onClick={() => {
        localStorage.removeItem("token"); // Clear token
        setIsAuthenticated(false);
      }} /> : <FaShare className="text-secondary" onClick={() => copyText(window.location.href)} />
    },
  ];

  const buttonLinks = [
    {
      path: "/calendar/",
      label: "Calendar",
      icon: <FaCalendarCheck className="icon-bottom" />,
    },
    {
      path: "/location/",
      label: "Loction",
      icon: <FaLocationArrow className="icon-bottom" />,
    },
    {
      path: "/tutoring/ApplicationForm-for-a-tutor/",
      label: "Apply to be a Tutor",
      icon: <FaRegAddressCard className="icon-bottom" />,
    },
    {
      path: "#",
      label: "Books/question papers",
      icon: <FaBookOpen className="icon-bottom" />,
    },
    {
      path: "/user-home-page/sign-in",
      label: "SignIn",
      icon: <FaSignInAlt className="icon-bottom" />,
    },
  ];

  const demoSearchData = [
    {
      searchname: "Mathematics Course",
      pathlink: "/tutoring",
      Badge: <Badge bg="success">Available</Badge>,
    },
    {
      searchname: "Physical Sciences",
      pathlink: "/tutoring/subjects/Physical-science",
      Badge: <Badge bg="success">Available</Badge>,
    },
    {
      searchname: "Life Sciences",
      pathlink: "/tutoring",
      Badge: <Badge bg="success">Available</Badge>,
    },
    {
      searchname: "Online Tutoring",
      pathlink: "/tutoring",
      Badge: <Badge bg="danger">Not available</Badge>,
    },
    {
      searchname: "Affordable Bursaries",
      pathlink: "/tutoring",
      Badge: <Badge bg="success">Available</Badge>,
    },
    {
      searchname: "Career Guidance",
      pathlink: "/find-a-tutor",
      Badge: <Badge bg="success">Available</Badge>,
    },
  ];

  const closeSearch = () => {
    setSearchResults([])
    searchResults('')
    searchQuery('')
  }
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
            icon: null,
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
        toast.custom(<div className=" text-bg-secondary p-3 rounded">No Connection Try <b onClick={()=>window.location.reload}>REFRESH</b></div>, {
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
          toast.custom(<div ><img width='25%' src={imgLoad} alt='Loading...' /></div>, {
            duration: 2000,
            style: {
              background: "white",
              borderRadius: "8px",
              color: "black",
            },
            position: "bottom-center",
          });
        }, 5000);

        // setTimeout(() => {
        //   toast.loading("Reconnecting attempt::2.", {
        //     duration: 4200,
        //     style: {
        //       background: "#f6f6f675",
        //       borderRadius: "8px",
        //       color: "black",
        //     },
        //     position: "bottom-center",
        //   });
        // }, 8500);

        setTimeout(() => {
          toast.error("Failed to conntect to Internet.", {
            duration: 3000,
            icon: null,
            toastId: toastId,
            style: {
              background: "#1E2227",
              borderRadius: "8px",
              color: "whitesmoke",
            },
            position: "bottom-left",
          });
        }, 20000);

        // setTimeout(() => {
        //   const buttonStyle = {
        //     backgroundColor: "#ff3838",
        //     color: "whitesmoke",

        //     border: "none",
        //     borderRadius: "4px",
        //     cursor: "pointer",
        //     marginLeft: "8px",
        //     fontWeight: 800,
        //     padding: "5px 10px",
        //   };
        //   const pageStyle = {
        //     cursor: "pointer",
        //   };
        //   const page = () => {
        //     window.location.reload();
        //   };
        //   toast(
        //     (t) => (
        //       <span className="text-light d-flex ">
        //         <span onClick={page} style={pageStyle} title="Reload the page.">
        //           You can browse offline with some limited features.
        //         </span>
        //         <button style={buttonStyle} onClick={() => toast.dismiss(t.id)}>
        //           Dismiss
        //         </button>
        //       </span>
        //     ),
        //     {
        //       duration: 20000,
        //       style: {
        //         background: "#333",
        //         borderRadius: "7px",
        //         color: "whitesmoke",
        //       },
        //       position: "bottom-right",
        //     }
        //   );
        // }, 30000);
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
  }, []); // Empty dependency array ensures this runs only on mount/unmount
  const notWorkingBtn = () => {
    toast.loading("This feature is under constraction.", {
      duration: 5000,
      style: {
        borderRadius: "50px",
        background: "#fff34b",
        opacity: 0.6,
        boxShadow: "1px 4px 6px gray",
      },
      position: "bottom-center",
    });
  };
  // notwoking
  useEffect(() => {
    setTimeout(() => {
      setIsTransitioning(false);
    }, 8000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setNavBar(true);
    }, 5000);
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
    }, 5000);
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
            <div className="search-section">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input form-control"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
              
              {searchQuery === '' ? <button
                data-tooltip-id="my-tooltip-dm"
                data-tooltip-content="Search"
                onClick={handleSearch}
                className="search-btn btn btn-info m-1"
              >
                <FaSearch />
              </button> : <button
                data-tooltip-id="my-tooltip-dm"
                data-tooltip-content="Close search results"
                onClick={closeSearch}
                className="search-btn btn btn-info m-1"
              >
                <FaTimes />
              </button>}


              {searchResults.length > 0 && (
                <div className="search-results">
                  <ul>
                    {searchResults.map((result, index) => (
                      <li key={index} title={result.searchname}>
                        <Link
                          to={result.pathlink}
                          onClick={() => setSearchQuery("")}
                        >
                          <FaLink className="linkIcon" /> {result.searchname}
                        </Link>
                        {result.Badge}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>



            {/* Navigation Links */}

            <ul className={`sidebar-links`}>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className={`${darkMode ? "dark" : "light"}`}>
                    <span
                      className={`myicon ${showIcon ? "" : "show"} ${isSidebarVisible ? "visible" : "hidden"
                        } ${darkMode ? "dark" : "light"}`}
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
                          <Link to={sub.path} className={`${darkMode ? "dark" : "light"}`}>
                            {" "}
                            <span

                              data-tooltip-id="closesidebar"
                              data-tooltip-content={sub.label}
                              className={`myicon ${showIcon ? "" : "show"}  ${isSidebarVisible ? "visible" : "hidden"
                                } ${darkMode ? "dark" : "light"}`}
                              data-tip={link.label}
                            >
                              {sub.icon}
                            </span>{" "}
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              <div className="d-flex bg-dark-subtle rounded bottom-icons">
                {buttonLinks.map((base, index) => (
                  <li onClick={notWorkingBtn} key={index}>
                    <Link
                      data-tooltip-id="tooltip-base"
                      data-tooltip-content={base.label}
                      to={base.path}
                      className="icon-body"
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

            {/* Theme Toggle */}
            <div className="theme-toggle mt-1 p-4 mb-4 d-flex">
              <label class="switch">

                <input
                  className="input"
                  type="checkbox"

                />
                <span
                  class="slider round"
                  data-tooltip-id="my-theme-menu"
                  data-tooltip-content={`Theme set to: ${darkMode ? "Light Mode" : "Dark Mode"}`}
                  onClick={handleThemeToggle}
                ></span>
                <Tooltip id="my-theme-menu" />
              </label>
              <div className="sidegoogle"   data-tooltip-id="my-theme-menu"
                  data-tooltip-content='Sign In with Google'>
<GoogleAuth/>
</div>
            </div>

          </>
        ) : (
          <Loader />
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




      <Modal show={show} onHide={handleClose} className='bg-danger-subtle'>
        <Modal.Header closeButton>
          <Modal.Title><i className='fa fa-google-plus-square'></i>Google</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex mt-4 bg-warning-subtle p-3'>
            <input className='form-control' type='text' placeholder='Google Search...' value={userQuery} onChange={(e) => { setUserQuery(e.target.value) }} />
            <button className='btn btn-outline-info m-2' onClick={serachUserQuery}><FaSearch /></button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <span><i className='fa fa-link'></i> {''} {openGoogle}</span>
          <p className='bg text-bg-success fw-bolder p-2'>Open GOOGLE</p>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navigation;
