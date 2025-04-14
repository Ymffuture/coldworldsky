 import React from 'react';
 import '../styles/_Sidebutton.scss';
 import {FaBlog} from 'react-icons/fa';
 import { Tooltip } from "react-tooltip";
 import "react-tooltip/dist/react-tooltip.css";
 const SideButton = () => {
   return (
    <div className='button_'
    data-tooltip-id="id"
          data-tooltip-content='Blog'
    >

       <button className='#'><FaBlog className='fs-2 blog'/></button>
  <Tooltip id='id'/>
    </div>
   )
 }
 
 export default SideButton;