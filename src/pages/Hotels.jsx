import React, { useState } from 'react';
import image1 from "../mainGallery/image5.webp";
import image2 from "../mainGallery/image2.webp";


const Hotels = () => {
  const galleryItems = [
    { src: image1, alt: "Hotel 1" },
    { src: image2, alt: "Hotel 2" },
    { src: image2, alt: "Hotel 3" },
    { src: image2, alt: "Hotel 4" },
    { src: image1, alt: "Hotel 5" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="relative w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Hotel Gallery</h1>
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {galleryItems.map((item, index) => (
              <div key={index} className="flex-none w-full">
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <button onClick={handlePrev} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition duration-300">
            &lt;
          </button>
          <button onClick={handleNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition duration-300">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hotels;