import React from 'react';
import image1 from "../assets/pexels-pixabay-39857.jpg";
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

  return (
    <div className="min-h-screen bg-gray-100 py-24">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">{item.name}</h2>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <div className="mt-4">
                  <span className="text-yellow-500 text-lg">{item.rating}</span>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800">Amenities</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {item.amenities.map((amenity, index) => (
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;