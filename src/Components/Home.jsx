import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
    const scrollToSection = () => {
        const nextSection = document.getElementById('next-section');
        nextSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className="min-h-screen">
                <Navbar />
                {/* Hero Section */}
                <div className="flex flex-col justify-center items-center h-screen">
                    {/* Typing Text */}
                    <h1 className="font-bold text-4xl text-customPurple text-center mb-10">
                        <Typewriter
                            words={['Designer', 'Full Stack Developer', 'IoT Enthusiast']}
                            loop={Infinity}
                            cursor
                            cursorStyle="_"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h1>

                    <div className="font-bold text-2xl text-black-500 text-center mb-10">
                        I design and code beautifully simple things!
                    </div>

                    <div>
                        <img src="/images/mf-avatar.svg" alt="Avatar" />
                    </div>

                    {/* Bouncing Down Arrow */}
                    <div
                        onClick={scrollToSection}
                        className="cursor-pointer animate-bounce mt-10"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={5}
                            stroke="currentColor"
                            className="w-10 h-10 text-gray-600"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                </div>

                {/* The Next Section */}
                <div
    id="next-section"
    className="h-screen flex items-center justify-center bg-customPurple text-white"
>
    <div className="text-center px-4 sm:px-8 w-full max-w-[600px]">
        <img
            className="mx-auto w-[60%] sm:w-[50%] md:w-[60%]"
            src="/images/homee.png"
            alt="Home"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl mt-4">
            Hi, I'm Arjun. Nice to meet you! 
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-2 leading-relaxed">
            I'm a web app developer who loves bringing ideas to life through functional and eye-catching digital solutions. From crafting interactive user interfaces to fine-tuning backend systems, I focus on building apps that are not just easy to use but also deliver top-notch performance.
        </p>
    </div>
</div>




<div className="grid grid-cols-1 md:grid-cols-3 w-[80%] m-40  cursor-pointer mx-auto rounded-xl border text-white gap-8 p-4 md:p-8">
  {/* Full Stack Developer Section */}
  <div className="text-center border-r border-black last:border-r-0">
    <img className="mx-auto w-16 md:w-20" src="/images/code2.png" alt="Code" />
    <h1 className="text-2xl md:text-4xl text-black font-bold mt-4">Developer</h1>
    <p className="text-base md:text-lg mt-2 text-black">
      I like to code things from scratch, and enjoy bringing ideas to life in the browser.
    </p>
    <h2 className='text-2xl text-black m-3'> Languages I Speaks!</h2>
    <div className='flex text-black font-bold justify-center m-3'>
        <p>  HTML5, CSS3, JavaScript, python, </p>
        
    </div>
  </div>

  {/* Design Section */}
  <div className="text-center border-r border-black last:border-r-0">
    <img className="mx-auto w-16 md:w-20" src="/images/webd.png" alt="Design" />
    <h1 className="text-2xl md:text-4xl text-black font-bold mt-4">Design</h1>
    <p className="text-base md:text-lg mt-2  text-black">
      I value simple content structure, clean design patterns, and thoughtful interactions.
    </p>
    <h2 className='text-2xl text-black m-3'> What I Love The Most!</h2>
    <div className='flex text-black font-bold justify-center m-3'>
        <p>  Design, UI, UX, Web, </p>
        
    </div>
  </div>

  {/* IoT Engineer Section */}
  <div className="text-center">
    <img className="mx-auto w-16 md:w-20" src="/images/raspberry-pi.png" alt="IoT" />
    <h1 className="text-2xl md:text-4xl text-black font-bold mt-4">IoT </h1>
    <p className="text-base md:text-lg mt-2 text-black">
      I believe in designing IoT solutions ensuring seamless interactions between devices,
    </p>
    <h2 className='text-2xl text-black m-3'> Ease To Internet! </h2>
    <div className='flex text-black justify-center font-bold m-3'>
        <p>  RaspberryPi,  MicroControllers, Arduino Uno </p>
        
    </div>
  </div>
</div>

</div>

<Footer/>
            </>
             );
};
 export default Home;
