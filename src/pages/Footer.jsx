import React from 'react'
import { Link } from 'react-router-dom';
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Counter from './Counter';
import { FaCat, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaMobile, FaTwitter, FaVials, FaWhatsapp, FaYahoo, FaYoutube } from 'react-icons/fa';
const Footer = () => {
  
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
    {openlink:'https://Instagram.com/ymffuture' , label:'Instagram' , icon:<FaInstagram
      className='fa-instagram fa fs-4'
      />},
  ]
  const notWorkingBtn = ()=>{
    toast.loading('This feature is under constraction.',{
    duration:5000,
    style:{
      borderRadius:'50px',
      background:'#fff34b',
      opacity:.6,
      boxShadow:'1px 4px 6px gray',
    },
    position:'bottom-center'
  })
    }
  return (
     <div className="text-center " id='footer'>

    {[...Array(5)].map((e,index)=><div className='mainer' key={index}></div>)}
<div><FaCat className='text-light h2'/></div>
    <table className='col-md-12 alert-link table-responsive-lg' id='LinksTable'>
            <thead>
              <tr >
              <th className='py-4'>Important Links</th>
              <th>Info</th>
              <th>Open Links</th>
              <th>Other Links</th>
              </tr>
            </thead>
            <tbody id="recordsTable" className='p-4'>
              <tr>
                <td className='py-1' onClick={notWorkingBtn}> <Link
              to="##"
              rel="nofollow"
              className="text-white"
            >
            Partnership with:
            </Link></td>
                <td>
                <Link
              to="##"
              rel="nofollow"
              className="text-white"
            >
            Coverage radius
            </Link>
                </td>
                <td><Link
              to="##"
              rel="nofollow"
              className="text-white"
            >
           Skyford Code school
            </Link></td>
                
              </tr>
              <tr>
                <td className='py-1'><Link
              to="/games-tic-toc-toe-play"
              rel="nofollow"
              className="text-white"
            >
            Skyford Games
            </Link></td>
                <td><Link
              to="##"
              rel="nofollow"
              className="text-white"
            >
            Advanced Mathematics
            </Link></td>
                <td><Link
              to="##"
              rel="nofollow"
              className="text-white"
            >
           Registered Learners
            </Link></td>
               
              </tr>
              <tr>
                <td className='py-1'> <Link
              to="/quotes"
              
              className="text-white"
            >
              Qoutes
           
            </Link></td>
            <td className='py-1'> <Link
              to="https://webpy-7tcd.onrender.com/views/contact"
              rel="nofollow"
              className="text-white"
            >
            About Online classes
            </Link></td>
                <td> <Link
              to="/cbp-current-students/table-prices"
              rel="nofollow"
              className="text-white"
            >
            Choose best prices
            </Link></td>
                <td> <Link
              to="/calendar"
              rel="nofollow"
              className="text-white"
            >
            School calender
            </Link></td>
               
              </tr>
             
            </tbody>
            
    </table>
    
    <div id="contact" className='id'>
    {/* <p id='p'>
      SkyfordCCI
     </p> */}
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
            Copyright &copy; 2021 - {new Date().getFullYear()} @SkyfordCCI, All Rights Reserved.{" "}
            <Link
              to="https://webpy-7tcd.onrender.com/views/Privacy-Policy"
              rel="nofollow"
              className="text-white"
            >
              Privacy Policy
            </Link>
          </p>
  <div className='moon'>
    <div className='moon2'></div>
  </div>
        </div>
  )
}

export default Footer