import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Import your images here
import landscapingImg from "../assets/landscaping.jpeg";
import landscaping1Img from "../assets/landscaping1.jpeg";
import cabroImg from "../assets/cabro.jpeg";
import carShadeImg from "../assets/carshade.jpeg";
import shadeSailsImg from "../assets/shadesail.jpeg";
import canopiesImg from "../assets/canopies.jpeg";
import privacyScreenImg from "../assets/privacyscreens.jpeg";
import mazerasImg from "../assets/mazeras.jpeg";
import electricFenceImg from "../assets/electricfence.jpeg";
import flowersImg from "../assets/flowers.jpeg";
import pergolaImg from "../assets/pergola.jpeg";
import perimeterWallImg from "../assets/pwall.jpeg";
import terrazzoImg from "../assets/terrazzo.jpeg";
import gazeboImg from "../assets/gazebo.jpeg";

// Organize images by project categories
const projectCategories = [
  {
    title: "Landscaping & Garden Design",
    description: "Transform your outdoor spaces with lush greenery and professional landscaping",
    images: [
      { src: landscapingImg, alt: "Professional Landscaping Project" },
      { src: landscaping1Img, alt: "Garden Transformation" },
      { src: flowersImg, alt: "Flower Installation & Design" }
    ]
  },
  {
    title: "Paving & Hardscaping",
    description: "Durable and beautiful paving solutions for driveways, walkways, and patios",
    images: [
      { src: cabroImg, alt: "Cabro Paving Installation" },
      { src: terrazzoImg, alt: "Terrazzo Flooring Project" },
      { src: mazerasImg, alt: "Mazeras Stone Installation" }
    ]
  },
  {
    title: "Shade Solutions",
    description: "Modern shade structures for comfort and protection",
    images: [
      { src: carShadeImg, alt: "Car Parking Shade Structure" },
      { src: shadeSailsImg, alt: "Shade Sails Installation" },
      { src: canopiesImg, alt: "Custom Canopy Design" }
    ]
  },
  {
    title: "Outdoor Structures",
    description: "Custom-built structures to enhance your outdoor living experience",
    images: [
      { src: pergolaImg, alt: "Pergola Construction" },
      { src: gazeboImg, alt: "Gazebo Installation" }
    ]
  },
  {
    title: "Security & Privacy",
    description: "Professional fencing and security solutions",
    images: [
      { src: electricFenceImg, alt: "Electric Fence Installation" },
      { src: privacyScreenImg, alt: "Privacy Screen Fence" },
      { src: perimeterWallImg, alt: "Perimeter Wall Construction" }
    ]
  }
];

// Create a flat array of all images for lightbox navigation
const allImages = projectCategories.flatMap(category => category.images);

const GalleryGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openLightbox = (index) => {
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
  };

  const goPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const goNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 px-6 md:px-16 bg-gray-50 mt-12 scroll-mt-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
          Project Gallery
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our completed projects and see the quality craftsmanship that sets Blissful Outdoors apart
        </p>
      </div>

      {/* Project Categories */}
      {projectCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-16">
          {/* Category Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-green-700 mb-3">
              {category.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {category.description}
            </p>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.images.map((image, imageIndex) => {
              const globalIndex = projectCategories
                .slice(0, categoryIndex)
                .reduce((acc, cat) => acc + cat.images.length, 0) + imageIndex;
              
              return (
                <div
                  key={imageIndex}
                  className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                  onClick={() => openLightbox(globalIndex)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium px-4">{image.alt}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Lightbox Modal */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300 z-10"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            <X size={36} />
          </button>

          {/* Prev Button */}
          <button
            className="absolute left-6 text-white hover:text-gray-300 z-10"
            onClick={goPrev}
          >
            <ChevronLeft size={48} />
          </button>

          {/* Image */}
          <div className="max-w-4xl max-h-[90vh] flex flex-col items-center">
            <img
              src={allImages[currentIndex].src}
              alt={allImages[currentIndex].alt}
              className="max-w-full max-h-[80vh] rounded-lg shadow-2xl object-contain"
            />
            <p className="text-white text-center mt-4 text-lg font-medium">
              {allImages[currentIndex].alt}
            </p>
          </div>

          {/* Next Button */}
          <button
            className="absolute right-6 text-white hover:text-gray-300 z-10"
            onClick={goNext}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </section>
  );
};

export default GalleryGrid;
