import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Office Section */}
        <div className="footer-section">
          <h3>Office</h3>
          <p>XXXXXXXXX</p>
          <p>XXXXXXXXXXX, XXXXXXXXXXX</p>
          <p>XXXXXXXXXXX, PIN XXXX</p>
          <p>India</p>
          <p>
            <FaEnvelope /> kinor14@outlook.com
          </p>
        </div>

        {/* Links Section */}
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Enter your email id</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Your email" />
            <button>Contact</button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright">
        <p>Kinor AI © {new Date().getFullYear()} - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;