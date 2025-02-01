import React, { useState } from 'react';
import "../styles/Contact.css"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    tripDate: '',
    numberOfPeople: 1,
    tripType: 'day-trip',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitBookingForm = (e) => {
    e.preventDefault();
    console.log('Booking Form Data:', formData);
  };

  return (
    <div className="contact-page-container">
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
          <h2>Book Your Trip</h2>
          <form onSubmit={handleSubmitBookingForm}>
            <div className="form-group">
              <label htmlFor="tripDate">Trip Date</label>
              <input
                type="date"
                id="tripDate"
                name="tripDate"
                value={formData.tripDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="numberOfPeople">Number of People</label>
              <input
                type="number"
                id="numberOfPeople"
                name="numberOfPeople"
                value={formData.numberOfPeople}
                onChange={handleChange}
                min="1"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="tripType">Type of Trip</label>
              <select
                id="tripType"
                name="tripType"
                value={formData.tripType}
                onChange={handleChange}
                required
              >
                <option value="day-trip">Day Trip</option>
                <option value="camping">Camping</option>
                <option value="guided-tour">Guided Tour</option>
              </select>
            </div>

            <button type="submit" className="submit-button">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
