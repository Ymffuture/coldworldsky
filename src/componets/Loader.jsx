import React from 'react'
import '../styles/loader.scss'
const Loader = () => {
  return (
    <div className='div' title='loading...'>
        <svg>
         
            <circle cx='70' cy='70' r='50'>Loader</circle>
        </svg>
      {/* <img src='./img/logoskblack.jpg' alt='logo' title='Loading, Please wait...'/> */}
      
    </div>
  )
}

export default Loader;