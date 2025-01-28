import React, { useEffect, useState,useRef } from "react";
import { useSpring, animated} from "@react-spring/web";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FaCopy } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../componets/Loader";
const Quotes = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ loadingData ,setLoadingData] =  useState(false);

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
      } catch (err) {
        setError(err);
      } finally {
        setTimeout(()=>{setLoading(false);},5000)
      }
    };
    getData();
    
    
  }, []);
const lessData = data.slice(0,10)
const moreData = data.slice(10,50)

const timer = new Date().getSeconds();
 

  const copyText = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Copied!",{
          duration:5000,
          position:'center',
          style:{
            background:'green',
            color:'white'
          }
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

  if (loading)
    return <div className='load-dm'>
       <Loader/>
  <div class="transition-animationhtml preload">
    <p class='g-3 center justify-content-center text-center'>
     Loading...</p>
      <p class='g-3 center fw-bolder justify-content-center text-center
      size
      '>
      </p>
  </div>
  </div>;
  if (error)  return <div><span className='err-text'>Error loading qoutes: {error.message}</span></div>;
  


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
                <p >Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.</p>
                <animated.a style={fadeIn} 
                >
                 <a href='/'  className="btn btn-custom btn-lg page-scroll">
                 Home
                 </a> 
                </animated.a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div className="content">
      <h2>Quotes</h2>

      {lessData.map((type, index) => (
        <code className="code" key={index} title={type.author}> *** {""}
          {type.quote} - (author: {type.author}) {""}
          
          <a onClick={() => copyText(type.quote)} title="Copy a text">
            <FaCopy className="copy" />
          </a>
          <hr/>
        </code>
      ))}

  <hr/>
<hr/>
     
     
    </div>
    {!timer>50 ? <div className="content">

      
{moreData.map((type, index) => (
  <code className="code" key={index} title={type.author}> *** {""}
    {type.quote} - (author: {type.author}) {""}
    
    <a onClick={() => copyText(type.quote)} title="Copy a text">
      <FaCopy className="copy" />
    </a>
    <hr/>
  </code>
))}

<hr/>
{loadingData}
<hr/>

</div>:<Loader/> }
   
    <div>
        <button className='btn btn-outline-dark m-md-4 m-4'>Show more</button>
      </div>
    </>
  );
};

export default Quotes;
