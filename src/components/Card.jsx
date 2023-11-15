import React from "react";

export const Card = ({
  name,
  platforms,
  background_image,
  released,
  rating,
  createdVideogame,
  genres,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-48 object-cover" src={background_image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-blue-500">{name}</div>
      
        <ul className="mb-4">
          {platforms.map((platform, index) => (
            <li key={index} className="text-gray-700">
              {platform}
            </li>
          ))}
        </ul>
       
      </div>
    </div>
  );
};
