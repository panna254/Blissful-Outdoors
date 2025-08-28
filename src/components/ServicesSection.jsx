import React from "react";
import ServiceCard from "./ServiceCard";
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

export const services = [
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
    title: "Shade Sails & Canopies",
    description:
      "Modern shade solutions for irregular areas like car washes, clubs, restaurants, and gardens. Unlike mobile tents, they don't carry rainwater and are wind-resistant.",
    image: shadeSailsImg,
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
  return (
    <>
      <section className="py-16 px-6 md:px-16 bg-gray-100" id="services">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
          What we Do
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </section>
      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto mt-16 mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-green-800">How do I request a quote or site survey?</h3>
            <p className="text-gray-700">You can request a quote or site survey by clicking the "Get a Quote" button on the navigation bar or the "Get a Site Survey" button under each service. Fill out the form and our team will contact you promptly.</p>
          </div>
          <div>
            <h3 className="font-semibold text-green-800">Which areas do you serve?</h3>
            <p className="text-gray-700">We serve residential, commercial, and institutional clients across Kenya. Contact us to confirm service availability in your area.</p>
          </div>
          <div>
            <h3 className="font-semibold text-green-800">Can I customize the services to fit my needs?</h3>
            <p className="text-gray-700">Absolutely! All our services are tailored to your specific requirements, preferences, and site conditions. We offer consultations to ensure the best solution for your space.</p>
          </div>
          <div>
            <h3 className="font-semibold text-green-800">How long does a typical project take?</h3>
            <p className="text-gray-700">Project timelines vary depending on the service and project size. After a site survey, we provide a detailed schedule and keep you updated throughout the process.</p>
          </div>
          <div>
            <h3 className="font-semibold text-green-800">Do you offer maintenance after installation?</h3>
            <p className="text-gray-700">Yes, we offer maintenance and aftercare for many of our services, including landscaping, fencing, and shade structures. Ask our team for details about ongoing support.</p>
          </div>
          <div>
            <h3 className="font-semibold text-green-800">What makes Blissful Outdoors different?</h3>
            <p className="text-gray-700">We combine expert craftsmanship, quality materials, and a passion for outdoor beauty. Our team is dedicated to delivering lasting results and exceptional customer service.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
