import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800">Welcome to [National Park Name]</h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover the untamed beauty of nature and protect our planet's future.
          </p>
        </motion.header>

        {/* Two-Column Layout: Image and Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInLeft}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <img
              src="https://via.placeholder.com/600x400" // Replace with your image URL
              alt="National Park"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>

          {/* Information Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInRight}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* History Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our History</h2>
              <p className="text-gray-600">
                Founded in [Year], [National Park Name] is a cherished treasure located in the heart of [Location]. The park spans across [Area] and has been a sanctuary for wildlife, flora, and fauna for generations. Originally established as a conservation effort to protect endangered species, the park is now one of the most visited national parks in the country.
              </p>
              <p className="text-gray-600 mt-4">
                Over the years, it has earned recognition for its exceptional biodiversity, geological features, and commitment to environmental education. It offers a window into the wonders of the natural world, making it a must-visit for nature lovers and adventurers alike.
              </p>
            </section>

            {/* Mission Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                Our mission is simple yet powerful: to preserve and protect the natural heritage of [National Park Name] while educating the public about environmental stewardship. Through sustainable practices, we aim to safeguard the park’s unique ecosystems and provide a safe haven for its diverse species.
              </p>
              <p className="text-gray-600 mt-4">
                We also strive to inspire future generations to embrace conservation efforts by offering educational programs and fostering an appreciation for the natural world.
              </p>
            </section>
          </motion.div>
        </div>

        {/* Park Highlights Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Park Highlights</h2>
          <p className="text-gray-600">
            [National Park Name] is home to some of the most breathtaking landscapes and unique features. Here are a few highlights:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
            <li><strong>Mountain Trails:</strong> Explore over 50 miles of scenic hiking trails with stunning views.</li>
            <li><strong>Wildlife Sanctuary:</strong> Home to over 200 species of birds and 50 species of mammals.</li>
            <li><strong>Geological Wonders:</strong> Discover ancient rock formations and crystal-clear lakes.</li>
            <li><strong>Cultural Heritage:</strong> Learn about the indigenous tribes that once inhabited this land.</li>
          </ul>
        </motion.section>

        {/* Things to Do Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Things to Do</h2>
          <p className="text-gray-600">
            Whether you're an adventure seeker or a nature lover, [National Park Name] has something for everyone. Here are some activities you can enjoy:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
            <li><strong>Hiking:</strong> Explore trails ranging from easy walks to challenging climbs.</li>
            <li><strong>Camping:</strong> Spend a night under the stars at one of our well-maintained campsites.</li>
            <li><strong>Wildlife Watching:</strong> Spot rare species like the [Animal Name] and [Bird Name].</li>
            <li><strong>Photography:</strong> Capture the park's stunning landscapes and wildlife.</li>
            <li><strong>Guided Tours:</strong> Join our expert rangers for an educational and fun experience.</li>
          </ul>
        </motion.section>

        {/* Fun Facts Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Fun Facts</h2>
          <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
            <li>The park is home to the oldest tree in the region, which is over 500 years old.</li>
            <li>Over 1 million visitors explore the park every year.</li>
            <li>The park was featured in the famous movie "[Movie Name]."</li>
            <li>It is one of the few parks with a natural hot spring.</li>
          </ul>
        </motion.section>

        {/* Plan Your Visit Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Plan Your Visit</h2>
          <p className="text-gray-600">
            Ready to explore [National Park Name]? Here's everything you need to know to plan your trip:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
            <li><strong>Address:</strong> 123 Park Road, Adventure City, Country</li>
            <li><strong>Operating Hours:</strong> 7:00 AM to 6:00 PM daily</li>
            <li><strong>Entry Fees:</strong> $10 per adult, free for children under 12</li>
            <li><strong>Contact:</strong> +1 (123) 456-7890 | info@nationalpark.com</li>
          </ul>
        </motion.section>

      
      </div>
    </div>
  );
};

export default AboutPage;