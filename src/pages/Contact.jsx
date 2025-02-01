import React, { useState } from 'react';
import "../styles/Contact.css";

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
    // Add logic to submit the form data to a backend or email service
  };

  return (
    <div className="contact-page-container pt-16">
      {/* Information Section */}
      <div className="info-section">
        <h1>Explore Our National Park</h1>
        <p>
          Experience nature like never before. From serene lakes to lush forests, our National Park offers everything an adventurer dreams of. Whether you're hiking, camping, or simply exploring, we've got something for everyone.
        </p>
        <h2>Park Highlights</h2>
        <ul>
          <li>Mountain Trails</li>
          <li>Guided Tours</li>
          <li>Bird Watching</li>
          <li>Campsites</li>
        </ul>
      </div>

      <div className="contact-section">
        <div className="contact-details">
          <h2>Contact Information</h2>
          <ul>
            <li><strong>Phone:</strong> +1 (123) 456-7890</li>
            <li><strong>Email:</strong> info@nationalpark.com</li>
            <li><strong>Address:</strong> 123 Park Road, Adventure City, Country</li>
          </ul>
          <h3>Operating Hours:</h3>
          <p>Open every day from 7:00 AM to 6:00 PM</p>
        </div>

        <div className="booking-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmitContactForm}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter the subject"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="5"
                required
              />
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;