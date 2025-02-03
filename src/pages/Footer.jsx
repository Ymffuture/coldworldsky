import React from 'react'
import { Link } from 'react-router-dom';
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
const Footer = (props) => {
  
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
              to="##"
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
    <p id='p'>
      SkyfordCCI
     </p>
    <div className="mt-5">
          <div className="col-lg-12 text-center">
            <div className="social">
              <ul className="list-inline">

                <li className="list-inline-item " >
                  <a 
                  data-tooltip-id="my-tooltip" data-tooltip-content="Facebook"
                  href={props.data ? props.data.facebook : "/"}>
                    <i className="fa fa-facebook text-primary fs-4"></i>
                  </a>
                </li>

                {/* <li className="list-inline-item" title="X">
                  <a href={props.data ? props.data.twitter : "/"}>
                    <i className="fa fa-twitter text-primary fs-4"></i>
                  </a>
                </li> */}


                {/* <li className="list-inline-item" title="YouTube">
                  <a href={props.data ? props.data.youtube : "/"}>
                    <i className="fa fa-youtube text-primary fs-4"></i>
                  </a>
                </li> */}



                <li className="list-inline-item">
                  <a 
                  data-tooltip-id="my-tooltip" data-tooltip-content='Whatsapp'
                  href={props.data ? props.data.whatsapp : "/"}>
                    <i className="fa fa-whatsapp text-primary fs-4"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a 
                    data-tooltip-id="my-tooltip" data-tooltip-content="Linkedin"
                  href={props.data ? props.data.youtube : "/"}>
                    <i className="fa fa-linkedin text-primary fs-4"></i>
                  </a>
                </li>
               
                <li className="list-inline-item">
               
                  <a 
                      data-tooltip-id="my-tooltip" data-tooltip-content="Github"
                  href={props.data ? props.data.youtube : "/"}>
                  
                    <i className="fa fa-github text-primary fs-4"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Tooltip id="my-tooltip" />
        </div>
          </div>
          <p className=''>
            Copyright &copy; 2021 - {new Date().getFullYear()} @SkyfordCCI&reg;, All Rights Reserved.{" "}
            <Link
              to="https://webpy-7tcd.onrender.com/views/Privacy-Policy"
              rel="nofollow"
              className="text-white"
            >
              Privacy Policy
            </Link>
          </p>
         
        </div>
  )
}

export default Footer