import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import image from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-12 w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            {/* Logo and Description */}
            <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
              <img src={image} alt="Website Logo" className="h-16 mb-4" />
              <p className="text-gray-400 text-sm">
                This website aims to keep people informed about the current state of India.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
              <h1 className="text-xl font-bold mb-4">Quick Links</h1>
              <ul className="space-y-2 list-none">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
              <h1 className="text-xl font-bold mb-4">Contact Us</h1>
              <p className="text-gray-400 text-sm mb-2">
                Email: <a href="mailto:info@nawegaonnationalpark.com" className="text-white hover:underline">info@nawegaonnationalpark.com</a>
              </p>
              <p className="text-gray-400 text-sm">
                Phone: <a href="tel:+911234567890" className="text-white hover:underline">+91 12345 67890</a>
              </p>
            </div>

            {/* Social Media Links */}
            <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
              <h1 className="text-xl font-bold mb-4">Follow Us</h1>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <FaFacebook size={24} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <FaTwitter size={24} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                  <FaInstagram size={24} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-400 py-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Navega Bhandh. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;