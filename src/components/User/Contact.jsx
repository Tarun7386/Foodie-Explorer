import React from "react";
import ReceiveMsg from "./ReceiveMsg";
import './userStyles/Contact.css'
const Contact = () => {
  return (
      <div>
      <div className="contact_us" >
        <div className="profile-box">
          <img className="profile-img" src="men-logo.jpeg" alt="Profile Picture" />
          <div className="info">
            <h2>
              <span className="icon">
                <i className="fas fa-user"></i>
              </span>
              Name: N Tarun
            </h2>
            <p>
              <span className="icon">
                <i className="fas fa-envelope"></i>
              </span>
              Email: <a href="mailto:tarun73it@gmail.com">tarun@gmail.com</a>
            </p>
            <p>
              <span className="icon">
                <i className="fas fa-phone"></i>
              </span>
              Contact Us: <a href="tel:9875641230">9875641230</a>
            </p>
            <p>
              <span className="icon">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              Location: Hyderabad, Telangana
            </p>
            <div className="social-links">
              <a href="https://t.me/yourusername" target="_blank">
                <i className="fab fa-telegram"></i>
              </a>
              <a href="https://www.youtube.com/yourchannel" target="_blank">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://github.com/Tarun7386/" target="_blank">
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/tarun-nellikuduru-434214272/"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          
        </div>
       
        <div className="copyright">&copy; 2024 All rights reserved by N Tarun.</div>
        
        
      
      
      </div> 
      <div>
      <ReceiveMsg />
    </div>
    </div>
  
  );
};

export default Contact;
