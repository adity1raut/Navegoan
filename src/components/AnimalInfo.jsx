import React from 'react';

const AnimalInfo = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 pt-28">
      {/* Container for Image and Information */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <img
            src="https://images.unsplash.com/photo-1550353127-b0da3aeaa0ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" // Replace with your animal image URL
            alt="Lion"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        {/* Information Section */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-4xl font-bold text-center mb-6">Lion</h1>
          <p className="mb-4">
            <strong>Name:</strong> Simba
          </p>
          <p className="mb-4">
            <strong>Age:</strong> 5 years
          </p>
          <p className="mb-4">
            <strong>Habitat:</strong> Savannas and grasslands of Africa
          </p>
          <p className="mb-4">
            <strong>Description:</strong> The lion is a large cat of the genus Panthera, native to Africa and India. It is the second-largest living cat species after the tiger. Lions are social animals, living in groups called prides, which consist of related females, their offspring, and a small number of adult males. Lions are apex predators and play a crucial role in maintaining the balance of their ecosystems.
          </p>
          <p className="mb-4">
            <strong>Behavior:</strong> Lions are primarily nocturnal, spending most of their day resting and becoming active during the night. They are known for their social structure, with prides consisting of up to 30 individuals. Male lions defend the pride's territory, while females are responsible for hunting.
          </p>
          <p className="mb-4">
            <strong>Diet:</strong> Lions are carnivores and primarily hunt large ungulates such as zebras, wildebeests, and buffalo. They are opportunistic feeders and will also scavenge when the opportunity arises.
          </p>
          <p className="mb-4">
            <strong>Conservation Status:</strong> Lions are classified as vulnerable due to habitat loss, human-wildlife conflict, and declining prey populations. Conservation efforts are underway to protect their habitats and reduce conflicts with humans.
          </p>
          <p>
            <strong>Fun Fact:</strong> A lion's roar can be heard up to 5 miles away!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimalInfo;