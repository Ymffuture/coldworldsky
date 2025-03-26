import React from 'react'
import toast from "react-hot-toast";
import { Link } from 'react-router-dom';
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Counter from './Counter';
import { FaArrowCircleRight, FaCat, FaCogs, FaEnvelope, FaExclamationTriangle, FaFacebookF, FaGithub, FaLinkedinIn,FaPhoneAlt,FaVials, FaWhatsapp, FaYahoo, FaYoutube } from 'react-icons/fa';
import { Container,Row ,Col,Image,Stack ,Nav} from 'react-bootstrap';
import logo from '../assets/img/logoskblack.jpg'
import style_ from '../styles/__style.module.css'
const Footer = () => {
  
  // wait...
  const social = [
    {openlink:"https://facebook.com/skyfordCCI" , label:'Facebook' , icon:<FaFacebookF className='fa-facebook fa fs-4'
    />},

    {openlink:"https://yahoo.com/skyfordCCI" , label:'Yahoo' , icon:<FaYahoo
    className='fa-yahoo fa fs-4'
    />},

    {openlink:"https://youtube.com/skyfordCCI" , label:'YouTube' , icon:<FaYoutube
    className='fa-youtube fa fs-4 '
    />},
    {openlink:"https://github.com/ymffuture" , label:'GitHub' , icon:<FaGithub
    className='fa-github fa fs-4'
    />},
    {openlink:'https://linkedin.com/ymffuture' , label:'Linkedin' , icon:<FaLinkedinIn
    className='fa-linkedin fa fs-4'
    />},
    {openlink:'https://whatsapp.com/ymffuture' , label:'Whatsapp' , icon:<FaWhatsapp
    className='fa-whatsapp fa fs-4'
    />},
    // {openlink:'https://Instagram.com/ymffuture' , label:'Instagram' , icon:<FaInstagram
    //   className='fa-instagram fa fs-4'
    //   />},
  ]
  const copyText = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success('Email copied to clipboard',{
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
  const notWorkingBtn = ()=>{
    toast.error('This feature is under constraction.',{
    duration:10000,
    style:{
      borderRadius:'50px',
      background:'#fff34b',
      opacity:1,
      fontWeight:800,
      
    },
    position:'bottom-center',
    icon:<FaCogs/>
  })
    }
  return (
     <div className="text-center " id='footer'>

    {[...Array(5)].map((e,index)=><div className='mainer' key={index}></div>)}
<div><FaCat className='text-light h2'/></div>
<Container fluid id='LinksTable'>
<Row className='p-1'>
  <Col className='mx-2'>
  <Image
    className='pic-footer'
    src={logo}
    alt='logo'
    rounded
    width={100}
    height={100}
    />
    <h1 className='text-white'>Quorvex</h1>
    <p>Code The Future. Together</p>
  </Col>
  <Col>
  <Nav className='flex-column fs-6' >
  <h1 className='th'>Quick Links</h1>
  <Link
              to="/"
              
              className={style_.a}
            >
             Home
           
            </Link>


            <Link
              to="/games-tic-toc-toe-play"
              rel="nofollow"
              className="text-white"
            >
         Game
            </Link>
            <Link
            to="/calendar"
              rel="nofollow"
              className="text-white"
            >
          Calendar
            </Link>
           
         
            <Link
             to="/quotes"
              rel="nofollow"
              className="text-white"
            >
           Quotes
            </Link>
            
            <Link
         to="/location"
              rel="nofollow"
              className="text-white"
            >
            Coverage radius
            </Link>
            <Link
              to="/cbp-current-students/table-prices"
              rel="nofollow"
              className="text-white"
            >
            Choose best prices
            </Link>
  </Nav>

  </Col>
  <Col>
  <h1 className='th'>Contact Us</h1>
  <p onClick={()=>copyText('quorvexinstitute@zohomail.com')}><FaEnvelope/> quorvexinstitute@zohomail.com</p>
  <p className='tel'><FaPhoneAlt/><a  href='tel:+27634414863'> (+27) 63 441 4863</a> </p>
  <p>OR</p>
  <p>Message Us now <Link
  to='/contact'
  rel="nofollow"
  >
  <FaArrowCircleRight className='fs-5'/>
  </Link></p>
  </Col>
</Row>
</Container>

    <div id="contact" className='id'>
    <div className="mt-5">
          <div className="col-lg-12 text-center">
            <div className="social">
              <FaVials   data-tooltip-id="my-tooltip-icons-socials" data-tooltip-content={`? Number of people visited this website a day per user/visitor`}/>
            <Counter/>
<ul className='list-inline'>
{social.map((iconLink, index)=>(
  <li key={index} className='list-inline-items'><Link 
      data-tooltip-id={iconLink.label}
      data-tooltip-content={iconLink.label}
  to={iconLink.openlink}
  >
  {iconLink.icon}
  </Link></li>
  
))}

<Tooltip id="Instagram" />
<Tooltip id="Facebook" />
<Tooltip id="YouTube" />
<Tooltip id="Yahoo" />
<Tooltip id="Whatsapp" />
<Tooltip id="GitHub" />
<Tooltip id="Linkedin" />
<Tooltip id="my-tooltip-icons-socials" />
</ul>
     </div>
          </div>
          
        </div>
          </div>

          
          <p className=''>
          &copy; {new Date().getFullYear()} Quorvex Institute. {" "} Powered by {''}
            <Link
              to="https://webpy-7tcd.onrender.com/views/Privacy-Policy"
              rel="nofollow"
              className="text-white"
            >
         Quorvex
            </Link> {""}
            
          </p>
  <div className='moon' onClick={notWorkingBtn}>
    <div className='moon2'></div>
  </div>
        </div>
  )
}

export default Footer