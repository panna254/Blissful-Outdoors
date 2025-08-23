import React, { useState, useEffect } from "react";
import heroImage from "../assets/hero.jpeg";
import landscapingImg from "../assets/landscaping.jpeg";
import gazeboImg from "../assets/gazebo.jpeg";
import pergolaImg from "../assets/pergola.jpeg";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    heroImage,           // Main hero image
    landscapingImg,      // Landscaping showcase
    gazeboImg,          // Gazebo installation
    pergolaImg,         // Pergola design
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Image Carousel */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous image"
      >
        ←
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next image"
      >
        →
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-green-500 scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 md:px-16">
        <div className="text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="block">Welcome to</span>
            <span className="block text-green-500 animate-bounce">
              Blissful Outdoors Solutions
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            We turn your outdoor space into paradise. <br /> Landscaping
            tailored to your dream.
          </p>
          <button className="px-6 py-3 bg-transparent text-white border border-green-600 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-all duration-200">
            Explore Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
