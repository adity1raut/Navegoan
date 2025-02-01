import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import "../styles/Navbar.css";
import image from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
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

        {/* Menu Links */}
        <div className={`menu-links ${isOpen ? "active" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `menu-link ${isActive ? "active" : ""}`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `menu-link ${isActive ? "active" : ""}`
            }
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/hotels"
            className={({ isActive }) =>
              `menu-link ${isActive ? "active" : ""}`
            }
            onClick={closeMenu}
          >
            Hotels
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `menu-link ${isActive ? "active" : ""}`
            }
            onClick={closeMenu}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `menu-link ${isActive ? "active" : ""}`
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </div>

        {/* Contact Info and Book Now Button */}
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