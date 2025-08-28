import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import landscapingImg from "../assets/landscaping.jpeg";
import gazeboImg from "../assets/gazebo.jpeg";
import pergolaImg from "../assets/pergola.jpeg";
import shadesailImg from "../assets/shadesail.jpeg";
import carshadeImg from "../assets/carshade.jpeg";
import terrazzoImg from "../assets/terrazzo.jpeg";
import privacyScreensImg from "../assets/privacyscreens.jpeg";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 7-slide hero showcasing key services with descriptive text
  const slides = [
    {
      image: landscapingImg,
      title: "Landscaping & Garden Design",
      description: "Custom softscapes and layouts that transform outdoor spaces into lush retreats.",
    },
    {
      image: gazeboImg,
      title: "Gazebo Construction",
      description: "Beautiful, durable gazebos for shade, style, and outdoor living.",
    },
    {
      image: pergolaImg,
      title: "Pergolas & Outdoor Structures",
      description: "Elegant pergolas to define spaces and support vines or shade solutions.",
    },
    {
      image: shadesailImg,
      title: "Shade Sails",
      description: "Modern, UV-protective shade sails for patios, play areas, and parking.",
    },
    {
      image: carshadeImg,
      title: "Car Shades",
      description: "Protect your vehicles with sleek, weather-resistant car shade solutions.",
    },
    {
      image: terrazzoImg,
      title: "Terrazzo Finishes",
      description: "Durable, elegant terrazzo for pathways, patios, and outdoor accents.",
    },
    {
      image: privacyScreensImg,
      title: "Privacy Screens",
      description: "Stylish screens for comfort, seclusion, and architectural interest.",
    },
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Image Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* Per-slide overlay text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="relative z-10 h-full w-full flex items-center justify-center px-6 md:px-16">
            {index === 0 ? (
              <div className="text-center text-white max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                  <span className="block">Welcome to</span>
                  <span className="block text-green-500">
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
            ) : (
              <div className="text-center text-white max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-base md:text-lg text-white/90 drop-shadow">
                  {slide.description}
                </p>
                <div className="mt-8 flex items-center justify-center gap-4">
                  <Link to="/services" className="inline-block">
                    <button className="px-6 py-3 bg-transparent text-white border border-green-500 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-all duration-200">
                      Explore Services
                    </button>
                  </Link>
                  <Link to="/quotation" className="inline-block">
                    <button className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all duration-200">
                      Get a Quote
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Global darkening layer for additional contrast */}
      <div className="pointer-events-none absolute inset-0 bg-black/20 z-0"></div>

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
        {slides.map((_, index) => (
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

      {/* Brand Heading overlay (optional) */}
      {currentImageIndex !== 0 && (
        <div className="pointer-events-none absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center">
          <h1 className="text-white text-3xl md:text-5xl font-black tracking-tight drop-shadow-xl">
            Blissful Outdoors Services
          </h1>
        </div>
      )}
    </div>
  );
};

export default Hero;
