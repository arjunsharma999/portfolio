import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import React Router Link

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Navbar Section */}
      <nav className="flex items-center justify-between p-2 bg-white text-black text-lg shadow-md">
        {/* Logo */}
        <div className="logo">
          <img src="images/logo.png" alt="Logo" className="w-16" />
        </div>

        {/* Links */}
        <div
          className={`absolute top-16 left-0 w-full bg-white p-4 transition-all duration-300 md:static md:flex md:items-center md:space-x-6 md:p-0 ${
            showMenu ? "block" : "hidden"
          }`}
        >
          <ul className="space-y-4 md:flex md:space-y-0 md:space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-400 cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 cursor-pointer">
                About
              </Link>
            </li>
            <li>
              <Link to="/mywork" className="hover:text-blue-400 cursor-pointer">
                My-Work
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-400 cursor-pointer"
              >
                Get In Touch
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="hidden md:flex space-x-8">

          <a
            href="https://github.com/arjunsharma999"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <ion-icon name="logo-github" size="medium"></ion-icon>
          </a>
          <a
            href="https://www.linkedin.com/in/arjun-sharma-62509925b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <ion-icon name="logo-linkedin" size="medium"></ion-icon>
          </a>
          <a
            href="https://www.instagram.com/arjun_sharma99/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <ion-icon name="logo-instagram" size="medium"></ion-icon>
          </a>
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Toggle Menu"
        >
          <ion-icon name={showMenu ? "close-outline" : "menu-outline"}></ion-icon>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
