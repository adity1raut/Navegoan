import React, { useState } from 'react';
import image1 from "../assets/pexels-pixabay-39857.jpg";
import image2 from "../mainGallery/image2.webp";
import image3 from "../mainGallery/image3.webp";
import image4 from "../mainGallery/image4.webp";
import image5 from "../mainGallery/image5.webp";

const Hotel = () => {
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
      src: image3,
      alt: "Hotel 3",
      name: "Urban Boutique Hotel",
      description: "A chic and modern hotel located in the heart of the city, close to major attractions.",
      rating: "★★★★☆",
      amenities: ["Free Wi-Fi", "Rooftop Terrace", "Concierge", "Parking"],
    },
    {
      src: image4,
      alt: "Hotel 4",
      name: "Rustic Country Inn",
      description: "Escape to the countryside and enjoy cozy accommodations with a rustic charm.",
      rating: "★★★☆☆",
      amenities: ["Free Parking", "Garden", "Fireplace", "Pet-Friendly"],
    },
    {
      src: image5,
      alt: "Hotel 5",
      name: "Lakeside Retreat",
      description: "A serene retreat by the lake, ideal for nature lovers and outdoor enthusiasts.",
      rating: "★★★★★",
      amenities: ["Free Wi-Fi", "Kayaking", "Hiking Trails", "Campfire"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const handleBookNow = () => {
    alert(`Booking ${galleryItems[currentIndex].name}...`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Hotel Gallery</h1>
      <div className="flex flex-col lg:flex-row w-full max-w-5xl space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Image Section */}
        <div className="relative w-full lg:w-2/3">
          <img
            src={galleryItems[currentIndex].src}
            alt={galleryItems[currentIndex].alt}
            className="w-full h-64 sm:h-96 object-cover rounded-lg shadow-lg"
          />
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300"
          >
            &lt;
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300"
          >
            &gt;
          </button>
        </div>

        {/* Hotel Details Section */}
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">{galleryItems[currentIndex].name}</h2>
          <p className="text-gray-600 mb-4">{galleryItems[currentIndex].description}</p>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 mr-2">{galleryItems[currentIndex].rating}</span>
          </div>
          <h3 className="font-semibold mb-2">Amenities:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {galleryItems[currentIndex].amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>

          {/* Book Now Button */}
          <button
            onClick={handleBookNow}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition duration-300"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex overflow-x-auto space-x-4 mt-6 pb-4">
        {galleryItems.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className={`w-16 h-16 object-cover rounded-lg cursor-pointer flex-shrink-0 ${
              index === currentIndex ? "border-4 border-blue-500" : "opacity-50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Footer / Rough Content */}
      <div className="mt-12 w-full bg-gray-200 p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Our Gallery</h2>
        <p className="text-gray-700">
          Welcome to our exclusive hotel gallery! Here, you will find luxurious and cozy accommodations 
          tailored for every kind of traveler. Whether you're seeking a mountain retreat or a beachside escape, 
          we have something special for you. Browse through our curated collection of hotels and find your next dream getaway.
        </p>
        <p className="text-gray-700 mt-4">
          For more information or to make inquiries, feel free to contact us at <strong>info@hotelbooking.com</strong>.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-blue-500 hover:text-blue-700">Facebook</a>
            <a href="#" className="text-blue-500 hover:text-blue-700">Instagram</a>
            <a href="#" className="text-blue-500 hover:text-blue-700">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;