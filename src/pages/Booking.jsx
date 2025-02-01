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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-gray-100 py-8 w-full">
        <h1 className="text-center text-4xl font-bold mb-8">Trip Packages</h1>
        <div className="flex justify-center gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/4">
            <h2 className="text-2xl font-bold mb-4">3 Day Package</h2>
            <p className="mb-4">Explore the park over three days with guided tours, wildlife spotting, and more.</p>
            <p className="font-bold">Price: $300</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/4">
            <h2 className="text-2xl font-bold mb-4">2 Day Package</h2>
            <p className="mb-4">Enjoy a two-day adventure with guided tours and wildlife spotting.</p>
            <p className="font-bold">Price: $200</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/4">
            <h2 className="text-2xl font-bold mb-4">1 Day Package</h2>
            <p className="mb-4">Experience the park in a single day with a guided tour and wildlife spotting.</p>
            <p className="font-bold">Price: $100</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl flex">
        <div className="w-1/2 p-4">
          <h1 className="text-2xl font-bold mb-6">Trip Information</h1>
          <p className="mb-4">Join us for an unforgettable adventure in the beautiful national park. Explore the stunning landscapes, encounter diverse wildlife, and immerse yourself in nature.</p>
          <p className="mb-4">Our guided tours are designed to provide you with an enriching experience, ensuring your safety and comfort throughout the trip.</p>
          <p className="mb-4">For any inquiries, feel free to contact us at:</p>
          <p className="font-bold">Email: info@nationalpark.com</p>
          <p className="font-bold">Phone: +123 456 7890</p>
        </div>
        <div className="w-1/2 p-4">
          <h1 className="text-2xl font-bold mb-6 text-center">Book Your Trip</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 h-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 h-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 h-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 h-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                min={today}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Number of People</label>
              <input
                type="number"
                name="numberOfPeople"
                value={formData.numberOfPeople}
                onChange={handleChange}
                className="w-full px-4 py-2 h-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                min="0"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
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