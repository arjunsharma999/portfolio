import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const MyWork = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <Navbar />
      <div className="bg-gray-50">
        {/* Projects Section */}
        <section className="py-16 flex flex-col items-center mx-auto justify-center px-4 bg-gray-100">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">My Projects</h1>
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <div
                className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl relative"
                onMouseEnter={() => setHoveredIndex(0)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src="/images/graph.png"
                  alt="Seismic Waves Data Logger"
                  className="w-100 object-cover"
                />
                <div
                  className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 p-6 transition-opacity duration-300 ${
                    hoveredIndex === 0 ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <h2 className="text-2xl font-bold text-white mb-4">Seismic Waves Data Logger</h2>
                  <p className="text-white text-sm mb-4">
                    This project involves a full-fledged web application built for monitoring and logging seismic waves using a
                    <strong className="text-blue-500">PIC24 microcontroller</strong>. The system collects real-time data from seismic
                    sensors and sends it to a backend server for further processing.
                    The IoT interaction is handled through a <strong className="text-blue-500">Raspberry Pi 4</strong> and the frontend is built with
                    <strong className="text-blue-500">React</strong>, <strong className="text-blue-500">TailwindCSS</strong>, and
                    <strong className="text-blue-500">Redux</strong>.
                  </p>
                  <a
                    href="https://github.com/your-github-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-500 hover:underline hover:text-blue-700 transition duration-300 mb-4"
                  >
                    Read More
                  </a>
                  <a
                    href="https://your-live-project-link.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-sky-400 text-white rounded-full hover:bg-sky-500 transition duration-300"
                  >
                    View Live
                  </a>
                </div>
              </div>

              {/* Project Card 2 */}
              <div
                className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl relative"
                onMouseEnter={() => setHoveredIndex(1)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src="/images/expel.png"
                  alt="Tinder Clone"
                  className="w-100 h-60 object-cover"
                />
                <div
                  className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 p-6 transition-opacity duration-300 ${
                    hoveredIndex === 1 ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <h2 className="text-2xl font-bold text-white mb-4">Tinder Clone</h2>
                  <p className="text-white text-sm mb-4">
                    This project involves a full-fledged web application built for monitoring and logging seismic waves using a
                    <strong className="text-blue-500">PIC24 microcontroller</strong>. The system collects real-time data from seismic
                    sensors and sends it to a backend server for further processing.
                    The IoT interaction is handled through a <strong className="text-blue-500">Raspberry Pi 4</strong> and the frontend is built with
                    <strong className="text-blue-500">React</strong>, <strong className="text-blue-500">TailwindCSS</strong>, and
                    <strong className="text-blue-500">Redux</strong>.
                  </p>
                  <a
                    href="https://github.com/your-github-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-500 hover:underline hover:text-blue-700 transition duration-300 mb-4"
                  >
                    Read More
                  </a>
                  <a
                    href="https://your-live-project-link.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-sky-400 text-white rounded-full hover:bg-sky-500 transition duration-300"
                  >
                    View Live
                  </a>
                </div>
              </div>

              {/* Project Card 3 */}
              <div
                className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl relative"
                onMouseEnter={() => setHoveredIndex(2)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src="/images/img1.png"
                  alt="Reporter Org"
                  className="w-100 h-60 object-cover"
                />
                <div
                  className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 p-6 transition-opacity duration-300 ${
                    hoveredIndex === 2 ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <h2 className="text-2xl font-bold text-white mb-4">Reporter Org</h2>
                  <p className="text-white text-sm mb-4">
                    This project involves a full-stack web application for managing and viewing news articles. The system includes a comprehensive 
                    <strong className="text-blue-500">React</strong> frontend, styled with <strong className="text-blue-500">TailwindCSS</strong>, and a 
                    <strong className="text-blue-500">Node.js</strong> backend that handles user authentication, news article management, and API 
                    communication. The application features a dynamic and responsive UI for users to view articles and an intuitive <strong className="text-blue-500">admin dashboard</strong> for content creation and management. 
                  </p>
                  <a
                    href="https://github.com/your-github-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-500 hover:underline hover:text-blue-700 transition duration-300 mb-4"
                  >
                    Read More
                  </a>
                  <a
                    href="https://your-live-project-link.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-sky-400 text-white rounded-full hover:bg-sky-500 transition duration-300"
                  >
                    View Live
                  </a>
                </div>
              </div>

              {/* Wordpress Project */}
              <div className="mx-auto items-center">
                <div
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl relative"
                  onMouseEnter={() => setHoveredIndex(3)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    src="/images/news.png"
                    alt='/images'
                    className="w-100 h-60 object-cover"
                  />
                  <div
                    className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 p-6 transition-opacity duration-300 ${
                      hoveredIndex === 3 ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <h2 className="text-2xl font-bold text-white mb-4">Regional Reporter</h2>
                    <p className="text-white text-sm mb-4">
                      This project is a fully functional <strong className="text-blue-500">news website</strong> built using <strong className="text-blue-500">WordPress</strong> and enhanced with <strong className="text-blue-500">Elementor</strong> for seamless page design.
                    </p>
                    <a
                      href="https://github.com/your-github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-blue-500 hover:underline hover:text-blue-700 transition duration-300 mb-4"
                    >
                      Read More
                    </a>
                    <a
                      href="https://your-live-project-link.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 bg-sky-400 text-white rounded-full hover:bg-sky-500 transition duration-300"
                    >
                      View Live
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default MyWork;
