import React from "react";
import { useNavigate } from "react-router-dom";

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

const services = [
  {
    title: "Landscaping Services",
    description:
      "We turn ordinary outdoor spaces into lush, vibrant sanctuaries with full-site transformation, turf laying, planting, flower installation, walkway and paving slab installation, and soil conditioning.",
    image: landscapingImg,
  },
  {
    title: "Cabro Installation",
    description:
      "Professional cabro installations for driveways, parking areas, walkways, and more. Durable, colourfast, and resistant to heavy use.",
    image: cabroImg,
  },
  {
    title: "Car Parking Shades",
    description:
      "Protect your vehicle from harsh weather with our curved, cantilever, or plasma-cut shades. Standard size: 2.5m x 5m per vehicle.",
    image: carShadeImg,
  },
  {
    title: "Restaurant & Club Shade Sails",
    description:
      "Stylish sail shades for outdoor dining or relaxation in restaurants and clubs.",
    image: shadeSailsImg,
  },
  {
    title: "Canopies",
    description:
      "Stylish overhead covers ideal for patios, terraces, and lounging areas—both functional and elegant.",
    image: canopiesImg,
  },
  {
    title: "Privacy Screen Fence",
    description:
      "Improve privacy and aesthetics with durable, stylish screens for your outdoor space.",
    image: privacyScreenImg,
  },
  {
    title: "Mazeras Installation",
    description:
      "Natural stone finishes that bring texture and beauty to walkways, pool decks, and walls.",
    image: mazerasImg,
  },
  {
    title: "Electric Fence Installation",
    description:
      "Secure your home, school, or business with reliable electric fencing solutions.",
    image: electricFenceImg,
  },
  {
    title: "Flowers & Flower Vases",
    description:
      "Brighten up your indoors or garden with curated flowers and elegant vases.",
    image: flowersImg,
  },
  {
    title: "Pergola Design & Installation",
    description:
      "Custom wood or metal pergolas to transform your patio or garden into an elegant retreat.",
    image: pergolaImg,
  },
  {
    title: "Perimeter Wall Construction",
    description:
      "Enhance your property's security and aesthetic with strong, stylish perimeter walls. We offer stone, concrete, and precast solutions tailored to your design and budget.",
    image: perimeterWallImg,
  },
  {
    title: "Terrazzo Flooring",
    description:
      "Add timeless elegance to your spaces with our custom terrazzo solutions. From surface prep to polishing, we deliver durable, seamless finishes with beautiful aggregate patterns.",
    image: terrazzoImg,
  },
  {
    title: "Gazebo Installation",
    description:
      "Create a relaxing and functional outdoor retreat with our expertly crafted gazebos. Choose from custom wood or metal designs built to enhance your garden or backyard.",
    image: gazeboImg,
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleQuote = (serviceName) => {
    navigate(`/quotation?service=${encodeURIComponent(serviceName)}`);
  };

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16 mt-20">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        What we Do
      </h2>
      <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12">
        At Blissful Outdoor Solutions, we provide premium outdoor design,
        construction, and beautification services. From lush landscaping to
        durable paving and stylish structures, our team delivers excellence
        tailored to your space.
      </p>

      <div className="space-y-16">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full md:w-1/2 rounded-lg shadow-lg object-cover h-64"
            />
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-green-700 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button
                onClick={() => handleQuote(service.title)}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                Get a Site Survey for {service.title}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
