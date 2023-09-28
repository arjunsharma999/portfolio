import React from 'react'
import { useState } from 'react'



function ScrollAnimation() {

  return (
    <>
       <div className='mid-head' id='Experience'>
                <h2>Experience</h2>
            </div>
     
    <div className=' container-experience' >
    

<div className='  boxx ' >
    <img className='box-img' src="images/spiders.png" alt="" />

    <h2 className='company-name'> Spiders Tech Services</h2>

    <h3 className=' company-info col-md-11'>
        Intern -
        
        Jun 2023 - Jul 2023 · 2 mos

        Remote </h3>

     <a href="https://www.linkedin.com/in/arjun-sharma-62509925b/ " target='_'><button className='card-button'> know more</button> </a>

</div>

<div className='boxxx' >

    <img className='box-img' src="images/iitr.png" alt="" />

    <h2 className='company-name'> IIT Roorkee </h2>

    <h3 className='company-info  col-md-11'>
        Project Intern -
        
        Jul 2022 - Aug 2022 ·  2 mos
        
        On-site   </h3>

    <a href="https://docs.google.com/document/d/13Cbot5c6mxRNBNSkeE9b9_AdNByMj0Aj/edit?usp=sharing&ouid=108477359735058797703&rtpof=true&sd=true" target='_'> <button className='card-button'> know more</button> </a>

</div>


</div>


    
    
    </>
  )
}

export default ScrollAnimation