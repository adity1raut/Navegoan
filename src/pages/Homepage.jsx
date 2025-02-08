import React, { useState, useEffect } from 'react';
import backgroundImage1 from '../assets/pexels-pixabay-39857.jpg';
import backgroundImage2 from '../assets/background.jpg';
import backgroundImage3 from '../assets/download.jpg';
import "../styles/Homepage.css";

const Homepage = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    backgroundImage1,
    backgroundImage2,
    backgroundImage3,
    // Add more images as needed
  ];

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setPosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="homepage-container" onMouseMove={handleMouseMove}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          transform: `translate(${position.x / 10}px, ${position.y / 10}px)`,
        }}
      ></div>
      {/* Slide Animation Container */}
      <div className="slide-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <div className="content-overlay">
        <div className="content-text">
          <h1 className="welcome-text">Welcome to Nawegaon/Bandh</h1>
          <h1 className="explore-text">EXPLORE & DISCOVER, TRAVEL</h1>
        </div>
      </div>
      {/* Image Indicators */}
      <div className="image-indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;