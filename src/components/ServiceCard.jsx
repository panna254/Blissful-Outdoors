import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ title, description, image }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/services");
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 border border-green-200 hover:shadow-xl cursor-pointer group"
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg font-semibold bg-green-600 px-4 py-2 rounded-full">
              View Details →
            </span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-green-700 mb-2 group-hover:text-green-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
