import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Import your images here
import landscapingImg from "../assets/landscaping.jpeg";
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

const images = [
  landscapingImg,
  cabroImg,
  carShadeImg,
  shadeSailsImg,
  canopiesImg,
  privacyScreenImg,
  mazerasImg,
  electricFenceImg,
  flowersImg,
  pergolaImg,
  perimeterWallImg,
  terrazzoImg,
  gazeboImg,
];

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
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 px-6 md:px-16 bg-gray-50 mt-12 scroll-mt-24">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
        Project Gallery
      </h2>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform hover:scale-[1.02] transition duration-300"
            onClick={() => openLightbox(index)}
          >
            <img
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="w-full rounded-lg object-cover hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            <X size={36} />
          </button>

          {/* Prev Button */}
          <button
            className="absolute left-6 text-white hover:text-gray-300"
            onClick={goPrev}
          >
            <ChevronLeft size={48} />
          </button>

          {/* Image */}
          <img
            src={images[currentIndex]}
            alt="Selected"
            className="max-w-4xl max-h-[90vh] rounded-lg shadow-xl"
          />

          {/* Next Button */}
          <button
            className="absolute right-6 text-white hover:text-gray-300"
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
