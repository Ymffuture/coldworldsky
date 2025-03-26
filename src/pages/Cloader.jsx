import React from 'react';
import '../styles/loader.css'

const CssLoader =()=>{


    return(
<div class="lds-default QCss">
    {[...Array(12)].map((e,i)=>(<div key={i}></div>))}
</div>

    );
};

export default CssLoader;