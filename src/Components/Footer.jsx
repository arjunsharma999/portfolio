import React from "react";

function Footer() {
  return (
    <>
      {/* Start A Project Section */}
      <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-16 w-[90%] sm:w-[80%] p-4 sm:p-10 mx-auto mb-10 rounded-xl bg-gray-900">
        <h1 className="text-2xl sm:text-3xl text-white font-bold">Start A Project</h1>
        <p className="text-sm sm:text-base text-white">
          Interested in working together? We should queue up a time to chat. I’ll buy the coffee.
        </p>
        <a href="/Contact">
        <button className=" p-2 sm:mt-0 border-white text-black font-bold rounded-lg bg-white hover:bg-white hover:text-black transition-all">
          Let’s Do It
        </button>
        </a>
        
      </div>

      {/* Footer Section */}
      <footer className="flex flex-col bg-customPurple text-white py-10 px-5 sm:py-20 sm:px-40">
        {/* Logo */}
        <div className="mx-auto mb-6">
          <img src="images/logo.png" alt="Logo" className="w-12 sm:w-16" />
        </div>

        {/* Tagline */}
        <h1 className="text-lg sm:text-2xl text-center mx-auto mb-4 break-words">
          Living, learning, & leveling up one day at a time.
        </h1>

        {/* Social Media and Handcrafted Section */}
        <div className="text-center space-y-6">
          <h1 className="text-lg sm:text-2xl font-semibold">Handcrafted By Me @ <a href="https://www.instagram.com/arjun_sharma99/">Arjun </a></h1>
          <p className="text-sm sm:text-lg font-semibold">
            For more queries, visit my
            <a
              href="https://www.linkedin.com/in/arjun-sharma-62509925b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline ml-1"
            >
              LinkedIn
            </a>
          </p>

          {/* Social Media Icons */}
          <div className="social-media">
            <ul className="flex justify-center space-x-4 sm:space-x-6">
              <li>
                <a
                  href="https://www.instagram.com/arjun_sharma99/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <ion-icon name="logo-instagram" size="large"></ion-icon>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/arjunsharma999"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <ion-icon name="logo-github" size="large"></ion-icon>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/arjun-sharma-62509925b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <ion-icon name="link-outline" size="large"></ion-icon>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <ion-icon name="logo-facebook" size="large"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
