import React from 'react';
import image1 from "../mainGallery/image1.webp";
import image2 from "../mainGallery/image2.webp";
import image3 from "../mainGallery/image3.webp";
import image4 from "../mainGallery/image4.webp";
import image5 from "../mainGallery/image5.webp";

const MainGallery = () => {
  const galleryItems = [
    { src: image1, alt: "Image 1" },
    { src: image2, alt: "Image 2" },
    { src: image3, alt: "Image 3" },
    { src: image4, alt: "Image 4" },
    { src: image5, alt: "Image 5" },
  ];

  return (
    <div className="py-8">
      <div className="relative overflow-hidden">
        <h2 className="text-5xl text-center font-extrabold pb-8">AMAZING ANIMALS <br />YOU WILL LOVE</h2>
        <div className="flex animate-scroll">
          {galleryItems.concat(galleryItems).map((item, index) => (
            <div key={index} className="flex-none w-full md:w-1/5 p-2">
              <div className="relative group">
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg">{item.alt}</p>
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