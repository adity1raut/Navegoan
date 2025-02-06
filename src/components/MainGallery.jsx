import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import "../styles/Gallery.css";
import image1 from "../mainGallery/image1.webp";
import image2 from "../mainGallery/image2.webp";
import image3 from "../mainGallery/image3.webp";
import image4 from "../mainGallery/image4.webp";
import image5 from "../mainGallery/image5.webp";

const MainGallery = () => {
  const navigate = useNavigate(); // Hook for navigation

  const galleryItems = [
    { src: image1, alt: "Image 1", id: "1" },
    { src: image2, alt: "Image 2", id: "2" },
    { src: image3, alt: "Image 3", id: "3" },
    { src: image4, alt: "Image 4", id: "4" },
    { src: image5, alt: "Image 5", id: "5" },
  ];


  const handleMoreInfoClick = (id) => {
    navigate(`/animal-details/${id}`); // Navigate to the animal details page with the animal ID
  };

  // Function to handle button click for other page
  const handleButtonClick = () => {
    navigate('/other-page'); // Navigate to the desired route
  };

  return (
    <div className="py-8">
      <div className="relative overflow-hidden">
        <h2 className="text-5xl text-center font-extrabold pb-8">AMAZING ANIMALS <br />YOU WILL LOVE</h2>
        <div className="flex animate-scroll hover:pause">
          {galleryItems.concat(galleryItems).map((item, index) => (
            <div key={index} className="flex-none w-full md:w-1/5 p-2">
              <div className="relative group">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg mb-4">{item.alt}</p>
                  <button
                    onClick={() => handleMoreInfoClick(item.id)}
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    More Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default MainGallery;