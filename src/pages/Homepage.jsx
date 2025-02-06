import React, { useState } from 'react';
import backgroundImage from '../assets/background.jpg';
import "../styles/Homepage.css"

const Homepage = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setPosition({ x: clientX, y: clientY });
  };

  return (
    <div className="homepage-container" onMouseMove={handleMouseMove}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translate(${position.x / 10}px, ${position.y / 10}px)`,
        }}
      ></div>
      <div className="content-overlay">
        <div className="content-text">
          <h1 className="welcome-text">Welcome to Nawegaon/Bandh</h1>
          <h1 className="explore-text">EXPLORE & DISCOVER, TRAVEL</h1>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
