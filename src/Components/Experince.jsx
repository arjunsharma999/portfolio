import React from 'react'
import { useState } from 'react'



function ScrollAnimation() {

  return (
    <>
       <div className='mid-head' id='Experience'>
                <h2>Experience</h2>
            </div>
     
    <div className=' container-experience d-flex align-items-end col-md-6 mx-auto' >

    <div className='col-md-5 mx-auto'>
    <img className='kb-box-img' src="images/kb sensor mart.png" alt="" />
    <h2 className='company-name'>KB Sensor Mart</h2>
    <h3 className='company-info col-md-12'>
        Web Application Developer -<br/>
        Jun -  Present<br/>
        <h2> On-Site</h2>
    </h3>
    <a href="https://www.sensormart.co.in/" target='_'><button className='card-button'>know more</button></a>
</div>
    

    <div className='spiders-co col-md-5 mx-auto'>
    <img className='box-img' src="images/spiders.png" alt="" />
    <h2 className='company-name'>Spiders Tech Services</h2>
    <h3 className='company-info col-md-12'>
        Intern -<br/>
        Jun 2023 - Jul 2023 · 2 mos<br/>
        <h2> Remote</h2>
    </h3>
    <a href="https://www.linkedin.com/in/arjun-sharma-62509925b/" target='_'><button className='card-button'>know more</button></a>
</div>

<div className='col-md-2 mx-auto'>
    <img className='box-img' src="images/iitr.png" alt="" />
    <h2 className='company-name'>IIT Roorkee</h2>
    <h3 className='company-info col-md-12'>
        Project Intern -<br/>
        Jul 2022 - Aug 2022 · 2 mos<br/>
        <h2> On-Site</h2>
    </h3>
    <a href="https://docs.google.com/document/d/13Cbot5c6mxRNBNSkeE9b9_AdNByMj0Aj/edit?usp=sharing&ouid=108477359735058797703&rtpof=true&sd=true" target='_'><button className='card-button'>know more</button></a>
</div>

</div>
 
    </>
  )
}

export default ScrollAnimation