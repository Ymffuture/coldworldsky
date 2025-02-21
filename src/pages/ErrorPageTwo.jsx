import React from 'react';
import '../styles/err.two.css';
import { Link  } from 'react-router-dom';

const ErrorPageTwo = () => {

  return (
<div className='body2 container-fluid'>   
<div className="noise"></div>
<div className="overlay2"></div>
<div className="terminal typewriter">
  <h1>Error <span className="errorcode">404</span></h1>
  <p className="output ">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
  <p className="output">Either you aren't cool enough to visit this page or it doesn't exist <i className='text-warning'>...like your social life</i>.</p>
  <p className="output">Please try to <Link to="/contact" className='a'>Contact Us</Link> or <a href="/" className='a'>Reload the page</a>.</p>
  <p className="output AB">const err = (e) =<i className='errow'></i> <i className='curly'> const results = await axios.get('');
  setData(results.data)</i> + ERROR; ERROR_404 :( <i className='fa fa-bug'></i></p>
</div>
    </div>
  )
}

export default ErrorPageTwo;