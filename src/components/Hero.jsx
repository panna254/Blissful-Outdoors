import React from "react";
import heroImage from "../assets/hero.jpeg";

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

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
