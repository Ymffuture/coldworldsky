import React from 'react'
import { FaFacebook, FaGithub ,FaWhatsapp } from "react-icons/fa";
const ErrorPage = () => {
  return (
    <div className='error-page'>
      <div>
        <p className='text-error'>
            <i className='fa fa-ban fw-bold a accordion'></i> {''}
        The Service is unavailable at the moment.
        Please try again later.

</p>
<div className=' table-responsive-lg accordion-collapse block-err d-flex bg-body-secondary border-black '>
<ul className='d-flex g63 p-2'>
    <li><a href='##'><FaFacebook/></a>
</li>
<li><a href='##'><FaGithub className='text text-black'/></a>
</li>
<li><a href='##'><FaWhatsapp className='FaWhatsapp'/></a></li>
</ul>
<p>Do not wait contact us on social media <hr/> Connect. Code. Innovate <span className='te text-bg-warning p-2 rounded fw-bold'>Last updated: 18th January 2025</span></p>
</div>
<img src='../img/logosk.jpg' width='30%' height='10%' className='rounded-4'/>

      </div>
      <p className='text-logo'>
        Sky<b>f</b>ord 

</p>
    </div>
  )
}

export default ErrorPage
