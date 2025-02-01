import React from 'react';
import "../styles/About.css"

const AboutPage = () => {
  return (
    <div className="about-container mt-24 pb-8">
      <header className="about-header">
        <h1>Welcome to [National Park Name]</h1>
        <p>Discover the untamed beauty of nature and protect our planet's future.</p>
      </header>

      <section className="history">
        <h2>Our History</h2>
        <p>
          Founded in [Year], [National Park Name] is a cherished treasure located in the heart of [Location]. The park spans across [Area] and has been a sanctuary for wildlife, flora, and fauna for generations. Originally established as a conservation effort to protect endangered species, the park is now one of the most visited national parks in the country.
        </p>
        <p>
          Over the years, it has earned recognition for its exceptional biodiversity, geological features, and commitment to environmental education. It offers a window into the wonders of the natural world, making it a must-visit for nature lovers and adventurers alike.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is simple yet powerful: to preserve and protect the natural heritage of [National Park Name] while educating the public about environmental stewardship. Through sustainable practices, we aim to safeguard the park’s unique ecosystems and provide a safe haven for its diverse species.
        </p>
        <p>
          We also strive to inspire future generations to embrace conservation efforts by offering educational programs and fostering an appreciation for the natural world.
        </p>
      </section>

      <section className="conservation">
        <h2>Conservation Efforts</h2>
        <p>
          At [National Park Name], we are dedicated to the conservation of our park's wildlife and landscapes. Through strategic partnerships with local and international environmental organizations, we implement sustainable conservation practices aimed at preserving biodiversity and protecting endangered species.
        </p>
        <p>
          Our efforts include:
        </p>
        <ul>
          <li>Wildlife monitoring and habitat restoration projects.</li>
          <li>Eco-friendly infrastructure, including green visitor centers and renewable energy use.</li>
          <li>Ranger-led programs to educate visitors about sustainable practices.</li>
          <li>Supporting research to understand the ecological needs of the park’s diverse species.</li>
        </ul>
      </section>

      <section className="features">
        <h2>What Makes Us Special</h2>
        <p>
          [National Park Name] is not just a park; it's a living ecosystem full of vibrant life and natural beauty. Here are some features that make our park stand out:
        </p>
        <ul>
          <li><strong>Diverse Ecosystems:</strong> From dense forests to towering mountains, the park is home to a variety of landscapes that offer unparalleled natural beauty.</li>
          <li><strong>Rich Biodiversity:</strong> The park hosts over [X] species of animals, including rare and endangered ones, making it an essential site for wildlife conservation.</li>
          <li><strong>Adventure and Recreation:</strong> With miles of hiking trails, serene lakes, and stunning viewpoints, there’s always something to explore for adventurers and families alike.</li>
          <li><strong>Educational Programs:</strong> Our interactive exhibits, guided tours, and workshops provide visitors with valuable insights into conservation efforts and the importance of protecting nature.</li>
        </ul>
      </section>

      <section className="things-to-do">
        <h2>Things to Do</h2>
        <p>
          Whether you're an adventure seeker, a nature photographer, or someone looking to relax and reconnect with nature, [National Park Name] has something for everyone. Here’s a list of must-do activities during your visit:
        </p>
        <ul>
          <li><strong>Hiking:</strong> Explore our breathtaking trails with varying levels of difficulty. The [Trail Name] offers panoramic views of the entire park, while [Another Trail Name] is perfect for a peaceful walk through the forest.</li>
          <li><strong>Wildlife Watching:</strong> The park is home to diverse wildlife. Keep your eyes peeled for [animal species], [another animal], and the rare [species].</li>
          <li><strong>Camping:</strong> Enjoy the outdoors with our camping sites, offering the perfect place to unwind under the stars.</li>
          <li><strong>Photography Tours:</strong> Capture the stunning beauty of the park’s landscapes and wildlife during our guided photography tours.</li>
          <li><strong>Educational Workshops:</strong> Join our workshops to learn more about the park’s ecosystems, wildlife conservation, and sustainable practices.</li>
        </ul>
      </section>

      <section className="fun-facts">
        <h2>Fun Facts</h2>
        <ul>
          <li>The park is home to over [X] species of birds, making it a birdwatcher's paradise.</li>
          <li>Did you know that [National Park Name] has been featured in [famous movies or documentaries]?</li>
          <li>The oldest tree in the park is over [Y] years old and stands tall in [Location].</li>
          <li>More than [X] visitors come each year to experience the beauty and serenity of the park.</li>
        </ul>
      </section>

      <section className="visit-us">
        <h2>Plan Your Visit</h2>
        <p>
          We invite you to explore the natural beauty of [National Park Name]. Whether you’re coming for a weekend getaway, a day trip, or a longer adventure, there’s something for everyone.
        </p>
        <p>
          <strong>Address:</strong> [Full Address]
        </p>
        <p>
          For more information about visiting, check out our <a href="/visitor-info">Visitor Information</a> page or contact us at [Contact Information].
        </p>
      </section>

      <footer className="about-footer">
        <p>Follow us on social media for updates and events: [Social Media Links]</p>
        <p>Contact Us: [Phone Number] | [Email Address]</p>
      </footer>
    </div>
  );
}

export default AboutPage;
