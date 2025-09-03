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
    description: "Transform your outdoor spaces into lush, vibrant sanctuaries with professional landscaping.",
    image: landscapingImg,
    route: "/services/landscaping"
  },
  {
    title: "Cabro Installation",
    description: "Durable and colorfast cabro paving for driveways, walkways, and parking areas.",
    image: cabroImg,
    route: "/services/cabro-installation"
  },
  {
    title: "Car Parking Shades",
    description: "Protect your vehicles with modern curved, cantilever, or plasma-cut shade structures.",
    image: carShadeImg,
    route: "/services/car-parking-shades"
  },
  {
    title: "Shade Sails & Canopies",
    description: "Wind-resistant shade solutions for irregular areas and commercial spaces.",
    image: shadeSailsImg,
    route: "/services/shade-sails-canopies"
  },
  {
    title: "Privacy Screen Fence",
    description: "Enhance privacy and aesthetics with durable, stylish outdoor screens.",
    image: privacyScreenImg,
    route: "/services/privacy-screen-fence"
  },
  {
    title: "Mazeras Installation",
    description: "Natural stone finishes for walkways, pool decks, and decorative walls.",
    image: mazerasImg,
    route: "/services/mazeras-installation"
  },
  {
    title: "Electric Fence Installation",
    description: "Reliable security solutions for homes, schools, and commercial properties.",
    image: electricFenceImg,
    route: "/services/electric-fence-installation"
  },
  {
    title: "Flowers & Flower Vases",
    description: "Beautiful flower arrangements and elegant vases for indoor and outdoor spaces.",
    image: flowersImg,
    route: "/services/flowers-flower-vases"
  },
  {
    title: "Pergola Design & Installation",
    description: "Custom wood or metal pergolas to create elegant outdoor retreats.",
    image: pergolaImg,
    route: "/services/pergola-design-installation"
  },
  {
    title: "Perimeter Wall Construction",
    description: "Strong and stylish perimeter walls with stone, concrete, and precast options.",
    image: perimeterWallImg,
    route: "/services/perimeter-wall-construction"
  },
  {
    title: "Terrazzo Flooring",
    description: "Timeless elegance with custom terrazzo solutions and seamless finishes.",
    image: terrazzoImg,
    route: "/services/terrazzo-flooring"
  },
  {
    title: "Gazebo Installation",
    description: "Expertly crafted gazebos in custom wood or metal designs for your garden.",
    image: gazeboImg,
    route: "/services/gazebo-installation"
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
              route={service.route}
            />
          ))}
        </div>
      </section>
      {/* FAQ Section */}
      <section className="w-full mt-16 mb-12 py-16 px-6 md:px-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
              <h3 className="font-bold text-lg text-green-800 mb-3">How do I request a quote or site survey?</h3>
              <p className="text-gray-700 leading-relaxed">You can request a quote or site survey by clicking the "Get a Quote" button on the navigation bar or the "Get a Site Survey" button under each service. Fill out the form and our team will contact you promptly.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
              <h3 className="font-bold text-lg text-green-800 mb-3">Which areas do you serve?</h3>
              <p className="text-gray-700 leading-relaxed">We serve residential, commercial, and institutional clients across Kenya. Contact us to confirm service availability in your area.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
              <h3 className="font-bold text-lg text-green-800 mb-3">Can I customize the services to fit my needs?</h3>
              <p className="text-gray-700 leading-relaxed">Absolutely! All our services are tailored to your specific requirements, preferences, and site conditions. We offer consultations to ensure the best solution for your space.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
              <h3 className="font-bold text-lg text-green-800 mb-3">How long does a typical project take?</h3>
              <p className="text-gray-700 leading-relaxed">Project timelines vary depending on the service and project size. After a site survey, we provide a detailed schedule and keep you updated throughout the process.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
              <h3 className="font-bold text-lg text-green-800 mb-3">Do you offer maintenance after installation?</h3>
              <p className="text-gray-700 leading-relaxed">Yes, we offer maintenance and aftercare for many of our services, including landscaping, fencing, and shade structures. Ask our team for details about ongoing support.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
              <h3 className="font-bold text-lg text-green-800 mb-3">What makes Blissful Outdoor Solutions different?</h3>
              <p className="text-gray-700 leading-relaxed">We combine expert craftsmanship, quality materials, and a passion for outdoor beauty. Our team is dedicated to delivering lasting results and exceptional customer service.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
