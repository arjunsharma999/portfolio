import React, { Component, useState } from 'react'
import './navbar.css';
import { Link } from 'react-scroll'


function Navbar() {
    const [showmediIcons, setShowmediIcons] = useState(false);



    return (
        <>


            <nav className='main-nav'>
                <div className='logo'>
                    <img src="images/logo.png" alt="" />
                </div>

                <div className={showmediIcons ? "menu-link mobile-menu-link" : "menu-link"}>

                    <ul>
                        
                        <Link to="/" spy={true} smooth={true} duration={500}
                        >Home</Link>



                        <Link to="About" spy={true} smooth={true} duration={10}
                        >About</Link>

                        <Link to="Experience" spy={true} smooth={true} duration={10}
                        >Experience</Link>

                        <Link to="Mywork" spy={true} smooth={true} duration={10}
                        >My-Work</Link>

                        <Link to="Contact" spy={true} smooth={true} duration={10}
                        >Get In Touch</Link>

                      
                    
                    </ul>

                </div>
                <div className='social-media'>
                    <ul className='socipal-media-deskto'>
                        <li> <a href="https://www.instagram.com/arjun_sharma99/"> <ion-icon name="logo-instagram"></ion-icon></a></li>


                        <li> <a href="https://github.com/arjunsharma999"> <ion-icon name="logo-github"></ion-icon> </a></li>

                        <li>
                            <a href="https://www.linkedin.com/in/arjun-sharma-62509925b/">
                                <ion-icon name="link-outline"></ion-icon>
                            </a> </li>
                        <li>
                            <a href="">
                                <ion-icon name="logo-facebook"></ion-icon></a>
                        </li>



                    </ul>

                    <div className='hamburger-menu'> <a onClick={() => setShowmediIcons(!showmediIcons)}>
                        <ion-icon name="reorder-three-outline"></ion-icon>
                    </a></div>

                </div>

            </nav>



            <section className='main'>




                <div className='main-txt col-sm-7'>


                    <div className='wrapper'>I am Arjun sharma.

                    </div>

                    <div className='grad'>Computer Science Grad </div>


                    <div className='social'>

                        <a href="https://github.com/arjunsharma999" target='_'><img src="images/Github.png" alt="" /></a>

                        <a href="https://www.linkedin.com/in/arjun-sharma-62509925b/" target='_'><img src="images/download.png" alt="" /></a>


                    </div>

                </div>





                <div className='main-img'>
                    <img src="images/Mainimg.png" alt="" />
                </div>




            </section>

        </>
    )
}

export default Navbar







































