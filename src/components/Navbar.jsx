import React, { useState } from "react";
import "../styles/Navbar.css";
import image from "../assets/logo.png"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img
            src={image}
            alt="Website Logo"
            className="logo-img"
            loading="lazy"
          />
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <svg
            className="menu-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div className={`menu-links ${isOpen ? "active" : ""}`}>
          <a href="#home" className="menu-link">Home</a>
          <a href="#about" className="menu-link">About</a>
          <a href="#animals" className="menu-link">Animals</a>
          <a href="#services" className="menu-link">Services</a>
          <a href="#contact" className="menu-link">Contact</a>
        </div>

        <div className="contact-info">
          <div className="contact-email">
            <span className="email-text">contact@example.com</span>
          </div>
          <button className="book-now-button">Book Now</button>
        </div>
      </div>
    </nav>
  );
}
