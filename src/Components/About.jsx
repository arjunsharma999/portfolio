import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
function About() {
  return (
    <>
      <Navbar />
      <div className="m-10 md:m-20 flex flex-col w-[100%] lg:w-[80%] mx-auto justify-center text-center">
  {/* Main Image and Heading */}
  <img
    className="mx-auto w-[60%] sm:w-[40%] md:w-[30%] lg:w-[25%] m-5"
    src="/images/Mainimg.png"
    alt=""
  />
  <h2 className="mx-auto text-2xl sm:text-3xl md:text-4xl m-10">
    Experienced Full Stack Developer
  </h2>
  <p className="text-lg sm:text-2xl md:text-4xl leading-relaxed">
    Building Solutions Which Help Companies Grow
  </p>


  <section className="py-12 w-[80%] m-10 mx-auto items-center rounded-xl">
      <h2 className="text-4xl font-bold text-center mb-8 ">Variety of Tools</h2>
      <div className="grid grid-cols-3 items-center sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
        <img className="shadow-md mx-auto w-12 sm:w-16 md:w-20" src="/images/Html.png" alt="HTML" />
        <img className="shadow-md mx-auto w-12 sm:w-16 md:w-20" src="/images/css-3.png" alt="CSS" />
        <img className="shadow-md mx-auto w-12 sm:w-16 md:w-20" src="/images/Bootstrap.png" alt="JavaScript" />
        <img className="shadow-md mx-auto w-12 sm:w-16 md:w-20" src="/images/atom.png" alt="React" />
        <img className="shadow-md mx-auto w-12 sm:w-16 md:w-20" src="/images/aws.png" alt="Node.js" />
        <img className="shadow-md mx-auto w-12 sm:w-16 md:w-20" src="/images/figma.png" alt="Tailwind CSS" />
        <img className="shadow-md mx-auto w-12 sm:w-16 md:w-20" src="/images/python.png" alt="Python" />
        <img className="shadow-md mx-auto w-12 sm:w-16 md:w-20" src="/images/git1.png" alt="MySQL" />
        <img className="shadow-md mx-auto w-12 sm:w-16 md:w-20" src="/images/tw1.png" alt="Node.js" />
        <img className="shadow-md mx-auto w-12 sm:w-16 md:w-20" src="/images/redux1.png" alt="Python" />
        <img className="shadow-md mx-auto w-12 sm:w-16 md:w-20" src="/images/node-js.png" alt="MySQL" />
        <img className="shadow-md mx-auto w-12 sm:w-16 md:w-20" src="/images/raspberry-pi.png" alt="Python" />
      
      </div>
    </section>
</div>


      <div className="w-[90%] mx-auto mb-20 items-center justify-center">
  <h1 className="text-4xl text-center m-10">Corporate Experience</h1>

  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-10 lg:space-y-0">
    {/* KB Sensor Mart Section */}

    {/* <div className="lg:w-[48%] flex justify-center">
      <img className="w-full max-w-[400px] object-contain" src="/images/experience.png" alt="" />
    </div> */}
    <div className="lg:w-[56%]">
      <h1 className="text-3xl m-4 underline">KB Sensor Mart, June 2024 - Present</h1>
      <p className="m-4">I am a Full-Stack Developer at KB SensorMart, specializing in creating innovative web applications for sensor-based IoT solutions. With expertise in React.js, Python FastAPI, and Redux, I build full-stack systems that seamlessly integrate hardware and software. I am passionate about clean design, intuitive UI/UX, and developing solutions from scratch. My work bridges electronics and web technologies, leveraging tools like Raspberry Pi, Microcontrollers, and Arduino to deliver connected, user-friendly experiences.</p>
    </div>
  </div>

  <hr className="h-px my-8 bg-gray-200 border-3 dark:bg-gray-700" />

  {/* Elevate Clicks Section */}
  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-10 lg:space-y-0">
    <div className="lg:w-[56%]">
      <h1 className="text-3xl m-4 underline">Elevate Clicks, Aug 2023 - Oct 2023</h1>
      <p className="m-4">During my internship at Spiders, I focused on frontend development, where I honed my skills in crafting responsive and visually appealing user interfaces. I contributed to building dynamic web applications from scratch, emphasizing clean code, intuitive design, and seamless user experiences. This experience strengthened my expertise in modern frontend technologies and deepened my passion for creating engaging and functional web solutions.</p>
    </div>
  </div>

  <hr className="h-px my-8 bg-gray-200 border-3 dark:bg-gray-700" />

  {/* IIT Roorkee Section */}
  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-10 lg:space-y-0">
    <div className="lg:w-[56%]">
      <h1 className="text-3xl m-4 underline">IIT Roorkee, Sept 2022 - Oct 2022</h1>
      <p className="m-4">
      As a Project Intern at IIT Roorkee, I worked on web development projects that required a deep understanding of modern web technologies and design principles. I developed scalable and efficient web solutions, gaining valuable experience in solving complex problems and delivering high-quality results. This opportunity enhanced my technical expertise and reinforced my commitment to creating impactful digital experiences.</p>
    </div>
  </div>
</div>


      <Footer />
    </>
  );
}

export default About;
