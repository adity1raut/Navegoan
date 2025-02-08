// src/components/AnimalCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AnimalCard = ({ id, name, image, shortDescription }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/animal/${id}`); // Navigate to the detailed page
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-700">{shortDescription}</p>
      </div>
    </div>
  );
};

export default AnimalCard;