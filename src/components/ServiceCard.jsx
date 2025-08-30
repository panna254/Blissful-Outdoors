import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ title, description, image, route }) => {
  const navigate = useNavigate();

  const handleReadMore = (e) => {
    e.stopPropagation();
    navigate(route);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 border border-green-200 hover:shadow-xl group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-4 right-4">
          <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            Professional Service
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-green-700 mb-3 group-hover:text-green-600 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <button
            onClick={handleReadMore}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            READ MORE
          </button>
          
          <div className="text-green-600 group-hover:text-green-700 transition-colors duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
