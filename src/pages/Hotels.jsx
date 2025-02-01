import React, { useState } from 'react';
import image1 from "../mainGallery/image5.webp";
import image2 from "../mainGallery/image2.webp";

const Hotels = () => {
  const galleryItems = [
    {
      src: image1,
      alt: "Hotel 1",
      name: "Luxury Mountain Resort",
      description: "Experience unparalleled luxury amidst breathtaking mountain views. Perfect for a relaxing getaway.",
      rating: "★★★★★",
      amenities: ["Free Wi-Fi", "Spa", "Pool", "Restaurant"],
    },
    {
      src: image2,
      alt: "Hotel 2",
      name: "Beachfront Paradise",
      description: "Wake up to the sound of waves and enjoy direct access to pristine beaches.",
      rating: "★★★★☆",
      amenities: ["Free Breakfast", "Beach Access", "Fitness Center", "Bar"],
    },
    {
      src: image2,
      alt: "Hotel 3",
      name: "Urban Boutique Hotel",
      description: "A chic and modern hotel located in the heart of the city, close to major attractions.",
      rating: "★★★★☆",
      amenities: ["Free Wi-Fi", "Rooftop Terrace", "Concierge", "Parking"],
    },
    {
      src: image2,
      alt: "Hotel 4",
      name: "Rustic Country Inn",
      description: "Escape to the countryside and enjoy cozy accommodations with a rustic charm.",
      rating: "★★★☆☆",
      amenities: ["Free Parking", "Garden", "Fireplace", "Pet-Friendly"],
    },
    {
      src: image1,
      alt: "Hotel 5",
      name: "Lakeside Retreat",
      description: "A serene retreat by the lake, ideal for nature lovers and outdoor enthusiasts.",
      rating: "★★★★★",
      amenities: ["Free Wi-Fi", "Kayaking", "Hiking Trails", "Campfire"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1));
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Hotel Gallery</h1>
        <div className="relative w-full max-w-4xl mx-auto">
 
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {galleryItems.map((item, index) => (
                <div key={index} className="flex-none w-full">
                  <img src={item.src} alt={item.alt} className="w-full h-96 object-cover" />
                </div>
              ))}
            </div>
            <button onClick={handlePrev} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition duration-300">
              &lt;
            </button>
            <button onClick={handleNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition duration-300">
              &gt;
            </button>
          </div>

          {/* Hotel Details */}
          <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800">{galleryItems[currentIndex].name}</h2>
            <p className="text-gray-600 mt-2">{galleryItems[currentIndex].description}</p>
            <div className="mt-4">
              <span className="text-yellow-500 text-lg">{galleryItems[currentIndex].rating}</span>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800">Amenities</h3>
              <ul className="list-disc list-inside text-gray-600">
                {galleryItems[currentIndex].amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Book Now
              </button>
              <button className="ml-4 bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="flex justify-center mt-6 space-x-4">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`w-16 h-16 cursor-pointer rounded-lg overflow-hidden border-2 ${
                  currentIndex === index ? "border-blue-600" : "border-gray-300"
                }`}
              >
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;