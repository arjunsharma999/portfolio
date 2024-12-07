import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
  return (
    <>
      <Navbar />
      <div className="mid-head py-6" id="Contact">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-6">GET IN TOUCH</h2>
      </div>

      <div className="container-contact flex justify-center items-center flex-col px-4">
        <div className="form-wrapper w-full max-w-[90%] sm:max-w-[70%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%] bg-white p-6 rounded-lg shadow-md">
          <form
            action="https://formspree.io/f/mwkdoagz"
            method="POST"
            target="_blank"
            className="contact-input"
          >
            {/* Name Input */}
            <div className="form-group mb-4">
              <label htmlFor="username" className="form-label text-lg font-medium">
                Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your name"
                autoComplete="off"
                required
                className="form-control p-3 rounded border border-gray-300 w-full"
              />
            </div>

            {/* Email Input */}
            <div className="form-group mb-4">
              <label htmlFor="email" className="form-label text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="off"
                required
                className="form-control p-3 rounded border border-gray-300 w-full"
              />
            </div>

            {/* Message Textarea */}
            <div className="form-group mb-4">
              <label htmlFor="message" className="form-label text-lg font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message"
                rows="6"
                autoComplete="off"
                required
                className="form-control p-3 rounded border border-gray-300 w-full"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="form-group">
              <input
                type="submit"
                value="Send"
                className="btn btn-primary w-full p-3 rounded text-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition"
              />
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
