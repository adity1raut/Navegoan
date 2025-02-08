import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    numberOfPeople: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'numberOfPeople' && value < 0) {
      return;
    }
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex flex-col items-center pt-28 justify-center">
      {/* Header Section */}
      <div className="bg-green-900 py-12 w-full text-center shadow-lg">
        <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">
          Explore National Park Packages
        </h1>
        <p className="text-xl text-green-200 animate-fade-in-delay">
          Discover the beauty of nature with our exclusive trip packages.
        </p>
      </div>

      {/* Packages Section */}
      <div className="py-16 w-full bg-white bg-opacity-90 shadow-lg">
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {/* 3-Day Package */}
          <div className="bg-white p-8 rounded-lg shadow-2xl border border-green-100 transform hover:scale-105 transition-transform duration-300 w-full sm:w-1/3 md:w-1/4 animate-slide-in-left">
            <h2 className="text-3xl font-bold text-green-900 mb-4">3 Day Adventure</h2>
            <p className="mb-4 text-gray-700">Explore the park over three days with guided tours, wildlife spotting, and more.</p>
            <p className="font-bold text-green-700 text-2xl">$300</p>
          </div>
          {/* 2-Day Package */}
          <div className="bg-white p-8 rounded-lg shadow-2xl border border-green-100 transform hover:scale-105 transition-transform duration-300 w-full sm:w-1/3 md:w-1/4 animate-slide-in-up">
            <h2 className="text-3xl font-bold text-green-900 mb-4">2 Day Escape</h2>
            <p className="mb-4 text-gray-700">Enjoy a two-day adventure with guided tours and wildlife spotting.</p>
            <p className="font-bold text-green-700 text-2xl">$200</p>
          </div>
          {/* 1-Day Package */}
          <div className="bg-white p-8 rounded-lg shadow-2xl border border-green-100 transform hover:scale-105 transition-transform duration-300 w-full sm:w-1/3 md:w-1/4 animate-slide-in-right">
            <h2 className="text-3xl font-bold text-green-900 mb-4">1 Day Experience</h2>
            <p className="mb-4 text-gray-700">Experience the park in a single day with a guided tour and wildlife spotting.</p>
            <p className="font-bold text-green-700 text-2xl">$100</p>
          </div>
        </div>
      </div>

      {/* Trip Information and Booking Form */}
      <div className="bg-white p-12 rounded-lg shadow-2xl w-full max-w-6xl flex flex-col lg:flex-row my-16 animate-fade-in-up">
        {/* Trip Information */}
        <div className="w-full lg:w-1/2 p-8 bg-green-50 rounded-lg shadow-inner mb-8 lg:mb-0">
          <h1 className="text-3xl font-bold text-green-900 mb-8">Trip Information</h1>
          <p className="mb-6 text-gray-700 text-lg">Join us for an unforgettable adventure in the beautiful national park. Explore the stunning landscapes, encounter diverse wildlife, and immerse yourself in nature.</p>
          <p className="mb-6 text-gray-700 text-lg">Our guided tours are designed to provide you with an enriching experience, ensuring your safety and comfort throughout the trip.</p>
          <p className="mb-6 text-gray-700 text-lg">For any inquiries, feel free to contact us at:</p>
          <p className="font-bold text-green-700 text-lg">Email: info@nationalpark.com</p>
          <p className="font-bold text-green-700 text-lg">Phone: +123 456 7890</p>
        </div>

        {/* Booking Form */}
        <div className="w-full lg:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-green-900 mb-8 text-center">Book Your Trip</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-bold mb-3">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:border-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-3">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:border-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-3">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:border-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-3">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:border-green-500"
                min={today}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-3">Number of People</label>
              <input
                type="number"
                name="numberOfPeople"
                value={formData.numberOfPeople}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:border-green-500"
                min="0"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-3">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:border-green-500"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300 font-bold text-xl animate-pulse"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
