import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitContactForm = (e) => {
    e.preventDefault();
    console.log('Contact Form Data:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 pt-28">
      <div className="max-w-4xl mx-auto">
        {/* Information Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Explore Our National Park</h1>
          <p className="text-gray-600 mb-6">
            Experience nature like never before. From serene lakes to lush forests, our National Park offers everything an adventurer dreams of. Whether you're hiking, camping, or simply exploring, we've got something for everyone.
          </p>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Park Highlights</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Mountain Trails</li>
            <li>Guided Tours</li>
            <li>Bird Watching</li>
            <li>Campsites</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Information</h2>
              <ul className="text-gray-600 space-y-2">
                <li><strong>Phone:</strong> +1 (123) 456-7890</li>
                <li><strong>Email:</strong> info@nationalpark.com</li>
                <li><strong>Address:</strong> 123 Park Road, Adventure City, Country</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Operating Hours:</h3>
              <p className="text-gray-600">Open every day from 7:00 AM to 6:00 PM</p>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</h2>
              <form onSubmit={handleSubmitContactForm} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter the subject"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows="5"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;