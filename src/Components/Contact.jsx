import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
  return (
    <>  
    <Navbar />  
    <div className="mid-head" id="Contact">  
     <h2 className="text-center text-3xl font-bold mb-4">GET IN TOUCH</h2>  
    </div>  
    
    <div className="container-contact w-[100%] d-flex justify-content-center flex-column align-items-center p-4">  
     <div className="form-wrapper w-[50%] md:w-[70%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] bg-white p-4 rounded shadow">  
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
          className="form-control p-2 rounded border border-gray-300 w-100"  
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
          className="form-control p-2 rounded border border-gray-300 w-100"  
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
          className="form-control p-2 rounded border border-gray-300 w-100"  
         ></textarea>  
        </div>  
    
        {/* Submit Button */}  
        <div className="form-group">  
         <input  
          type="submit"  
          value="Send"  
          className="btn btn-primary w-100 p-2 rounded text-lg font-medium"  
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
