import React from 'react'
import {Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import {FaAdn, FaBookmark, FaCalendarCheck, FaEnvelope, FaGlobe, FaLocationArrow, FaNetworkWired, FaPhone, FaPrint, FaTabletAlt, FaWhatsapp } from 'react-icons/fa'
const Post = () => {
  return (
    <div className='container post'>
<h1 className='text-center text-bg-primary p-2 rounded fw-bold'> <img width='10%' src='/img/logosk.jpg' alt='logo'/> SkyfordCCI Tutoring Classes</h1>
<p className='text-bg-warning p-3 rounded'>We offer Physics and Mathematics And get Life sciences <b>FREE</b> YES! FREE Only For Grade 10 and 12.
<hr/>
<span className='text-bg-light p-2 rounded text-center m-2 container-fluid'>
<FaEnvelope className='text-secondary'/> <Link to='mailto:skyfordcciacademy@gmail.com'>skyfordcciacademy@gmail.com</Link> 
{''}
 {''} | <FaWhatsapp className='text-success'/> <Link to='tell:+27653935339'>0653935339</Link> {''} 
 | 
 {''} <FaGlobe className='text-primary'/> <a href='https//skyfordcci.vercel.app'>skyfordcci.vercel.app</a>
 {''} 
 | 
 {''}  <button  className='btn btn-outline-success' onClick={()=>window.open('/location')}><FaLocationArrow className='text-primary'/> Tjovitjo Phase 2</button>
</span>
</p>
<p><b>How we work</b>?  <div class="calendar-days">
              <div className="text text-bg-danger">Sun</div>
                {['Mon' ,'Tue' , 'Wed', 'Thu', 'Fri'].map((weekdays)=>(
                  <>
                  <div key={weekdays}><FaBookmark/> {weekdays}</div>
                  </>
                ))}
              <div className="text text-bg-danger">Sat</div>
              </div>
              <br/>
    <b><FaCalendarCheck/> Tuesday to Thursday  a week </b>
<br/>
<hr/>
    <u className='list-group'>
        <li className='list-group-item list-group-item-info '>Fist week Tuesday and wed is Mathematics and Thursday is Physical sciences </li>
        <li className='list-group-item list-group-item-info'>Second week Tuesday and wed is Physical sciences and Thursday is Mathematics </li >
        <hr/>
        <ol className='list-group'>
            <li className='list-group-item list-group-item-warning'>Finally on weekends is Optional we include one Subject PLUS Life sciences</li>
            <li className='list-group-item list-group-item-danger'>Duration: 60mins to 90mins</li>
        </ol>
        </u>         
               </p>
               <h3><FaTabletAlt/> Per subject Pricing</h3>
         
<Table stripped bordered hover size="sm" className='container' variant='light'> 
  <thead> 
    <tr> 
      <th width="800">Subjects</th> 
      <th width="100">Reg.no</th> 
      <th width="100">Sub.Code</th> 
      <th width="150">Price (R)</th> 
      <th width="150">Any 2 (R)</th> 
  
    </tr> 
  </thead> 
  <tbody> 
    <tr> 
      <td>Mathematics</td> 
      <td>1427</td> 
      <td>MAT</td> 
      <td>180</td> 
      <td>300</td> 
  
    </tr> 
    <tr> 
      <td>Physical Science</td> 
      <td>1124</td> 
      <td>PHYS</td> 
      <td>170</td> 
      <td>300</td> 
  
    </tr> 
    <tr> 
      <td>Life sciences</td> 
      <td>1168</td> 
      <td>LFS</td> 
      <td>150</td> 
      <td>280</td> 
  
    </tr> 
    <tr> 
      <td>Maths & sciences</td> 
      <td>3485</td> 
      <td>MAT?SCI</td> 
      <td>350</td> 
      <td>N/A</td> 
  
    </tr> 
  
  </tbody> 
</Table> 
<button className='btn' onClick={()=>window.print()}><FaPrint/> Print Here</button>
    </div>
  )
}

export default Post