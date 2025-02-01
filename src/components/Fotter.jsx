import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Importing icons
import "../styles/Footer.css";
import image from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-section">
            <h2 className="footer-title">
              <img src={image} alt="Website Logo" className="footer-logo" />
            </h2>
            <p className="footer-description">
              This website hopes to keep people informed about the current state of India.
            </p>
          </div>

          <div className="footer-section">
            <h2 className="footer-title">Links</h2>
            <ul className="footer-links-list">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h2 className="footer-title">Contact Us</h2>
            <p>Email: <a href="mailto:info@nawegaonnationalpark.com" className="footer-contact">info@nawegaonnationalpark.com</a></p>
            <p>Phone: <a href="tel:+911234567890" className="footer-contact">+91 12345 67890</a></p>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebook />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-links">
        <h1>@ Navega Bhandh @gmailasfdkanasdkasdvnk</h1>
      </div>
    </>
  );
};

export default Footer;
