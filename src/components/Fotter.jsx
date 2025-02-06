import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import image from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-6 flex flex-col items-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left max-w-5xl w-full mx-auto px-4">
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">
              <img src={image} alt="Website Logo" className=" h-16 mx-auto md:mx-0" />
            </h2>
            <p>
              This website hopes to keep people informed about the current state of India.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Links</h2>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white hover:underline">Home</a></li>
              <li><a href="#about" className="text-white hover:underline">About</a></li>
              <li><a href="#services" className="text-white hover:underline">Services</a></li>
              <li><a href="#contact" className="text-white hover:underline">Contact</a></li>
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <p>Email: <a href="mailto:info@nawegaonnationalpark.com" className="text-white hover:underline">info@nawegaonnationalpark.com</a></p>
            <p>Phone: <a href="tel:+911234567890" className="text-white hover:underline">+91 12345 67890</a></p>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl transition-colors hover:text-blue-500">
                <FaFacebook />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl transition-colors hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl transition-colors hover:text-pink-500">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="h-20 flex items-center justify-center text-wheat bg-gradient-to-r from-gray-900 via-gray-800 to-black">
        <h1>@ Navega Bhandh @gmailasfdkanasdkasdvnk</h1>
      </div>
    </>
  );
};

export default Footer;
