import React, { useEffect, useState } from "react";
import { useTransition, animated,useSpring} from "@react-spring/web";
import axios from "axios";
import toast from "react-hot-toast";
import { FaCheckSquare, FaCloudDownloadAlt, FaCopy, FaFacebookF, FaLinkedinIn, FaRedo, FaRegNewspaper, FaTwitter,FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../componets/Loader";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Quotes = () => {
  const [data, setData] = useState([]);
  const [visibleData , setVisibleData] = useState([])
  const [count ,setCount]= useState(0);
  const [dailyQuote, setDailyQuote] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
const itemsPerClik =2;
  const slideIn ={
    opacity: 0,
    transform: 'translateX(-200%)',
  }
  const slideOut ={
    opacity: 1,
    transform: 'translateX(0)',
  }
   const fadeIn = useSpring({ from: slideIn, to: slideOut ,config:{duration:1000}});

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/datatype.json");
        setData(res.data);
            const today = new Date();
            const index = today.getDate() % res.data.length;
            setDailyQuote(res.data[index].quote);
      } catch (err) {
        setError(err);
      } finally {
        setTimeout(()=>{setLoading(false);},5000)
      }
    };
    getData();
    
    
  }, []);


  const loadData = () => {
    if (data.length === 0) return; // Ensure data is not empty
  
    const nextCount = count + itemsPerClik;
    setVisibleData(data.slice(0, nextCount)); // Update visibleData correctly
    setCount(nextCount);
  };
  
  

  const transition = useTransition(visibleData, {
    from: { opacity: 0, transform: "translateY(20px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-20px)" },
    keys: item => item.id, // Ensure 'id' exists in data
    config: { tension: 200, friction: 15 }
  });

  const copyText = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.custom(<div className='text-bg-success p-2 rounded'><FaCheckSquare/> Copied to clipboard</div>,{
          duration:5000,
          position:'top-center',
          transition:".6s all"
  
        });
      })
      .catch((err) => {
        toast.error("Fail to copy a text." ,{
          duration:5000,
          position:'center',
          style:{
            background:'black',
            color:'red'
          }
        });
        console.error(err);
        
      });
  };

  if (loading) return (
    <div className='load-dm'>
      <Loader />
      <div className="transition-animationhtml preload">
        <p className='g-3 center justify-content-center text-center'>
          Loading...
        </p>
        <p className='g-3 center fw-bolder justify-content-center text-center size'>
        </p>
      </div>
    </div>
  );
  
  if (error)  return <div>
  <span className='err-text'>
    Error loading qoutes: {error.message}
    </span>
  </div>;
  


  return (
    <>
    <header id="header">
      <div className="intro container-fluid ">
        <div className="overlay d-flex justify-content-center align-items-center vh-100">
          <div className="container">
            <div className="row ">
              <div className="col-md-8 col-md-offset-2 intro-text ">
                <h1 >
                Quotes
                  <span>.</span>
                </h1>
                <animated.p style={fadeIn}>
                  Daily Qoute: <FaRegNewspaper/> {""}
                  {""} 
                  <b className="p-4">{dailyQuote}</b>
                </animated.p>
                <animated.a style={fadeIn} 
                >
                 <Link to='/'  className="btn btn-custom btn-lg page-scroll">
                 Home
                 </Link> 
                </animated.a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div className="content">
      <h2 id='header' className='p-4 text-bg-primary rounded m-4'>Quotes</h2>

      {transition((styles, item) => (
  <animated.code className="code"
    key={item.id} 
    style={styles}
     data-tooltip-id="tooltip"
      data-tooltip-content={item.author}
  >
    *** {""}
    {item.quote} - (author: {item.author}) {""}
    <a onClick={() => copyText(item.quote)} title="Copy a text">
      <FaCopy className="copy" />
    </a>
    <hr />
{/* <i className="text-bg-info p-2 rounded">
  Share on social media <FaShare />
</i> */}

<div className="d-flex text-center">
  {/* Facebook */}
  <p className="p-2">
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-dark"
    >
      <FaFacebookF className="fs-4"      data-tooltip-id="tooltip-iconz-btn"
      data-tooltip-content='Share on Facebook' />
    </a>
  </p>

  {/* LinkedIn */}
  <p className="p-2">
    <a
      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-dark"
    >
      <FaLinkedinIn className="fs-4"      data-tooltip-id="tooltip-iconz-btn"
      data-tooltip-content='Share on LinkedinIn'/>
    </a>
  </p>

  {/* Twitter / X */}
  <p className="p-2">
    <a
      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Check out this quote!")} &url=${encodeURIComponent(window.location.href)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-dark"
    >
      <FaTwitter className="fs-4"      data-tooltip-id="tooltip-iconz-btn"
      data-tooltip-content='Share on X'/>
    </a>
  </p>

  {/* WhatsApp */}
  <p className="p-2">
    <a
      href={`https://wa.me/?text=${encodeURIComponent("Check out this quote! " + window.location.href)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-success"
    >
      <FaWhatsapp className="fs-4"      data-tooltip-id="tooltip-iconz-btn"
      data-tooltip-content='Share on Whatsapp'/>
    </a>
  </p>
</div>

 
    <hr className='hr'/>
  </animated.code>
))}


  <hr/>
<hr/>
     
     
    </div>

 
   
    <div>
        <button
         data-tooltip-id="tooltip"
              data-tooltip-content="Load More"
         onClick={loadData}
          className='btn btn-outline-warning m-md-4 m-4'
          disabled={count>=data.length}
          style={{cursor:count>= data.length?"not-allowed":"pointer"}}
          >
          {count>=data.length? <FaRedo className="fs-4"/>:  <FaCloudDownloadAlt className="fs-4"/>} 
           {""}
       
        
          </button>
      </div>
      <Tooltip id="tooltip" />
      <Tooltip id="tooltip-iconz-btn" />
    </>
  );
};

export default Quotes;
