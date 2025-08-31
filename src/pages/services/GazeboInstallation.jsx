import React from "react";
import { useNavigate } from "react-router-dom";
import gazeboImg from "../../assets/gazebo.jpeg";
import SEOHelmet from "../../components/SEOHelmet";

const GazeboInstallation = () => {
  const navigate = useNavigate();

  const handleQuote = () => {
    navigate("/quotation?service=Gazebo Installation");
  };

  return (
    <>
      <SEOHelmet 
        title="Gazebo Installation Kenya | Outdoor Pavilions & Garden Structures"
        description="Professional gazebo installation in Kenya. Custom outdoor pavilions and garden structures for relaxation and entertainment. Expert craftsmanship and design."
        keywords="gazebo installation Kenya, outdoor pavilion, garden structures, gazebo construction, outdoor shelter"
        canonicalUrl="https://blissfuloutdoorsolutions.com/services/gazebo-installation"
      />
      <div className="bg-gray-100 min-h-screen py-16 px-6 md:px-16 mt-20">
        <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Gazebo Installation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create a relaxing and functional outdoor retreat with our expertly crafted gazebos. Choose from custom wood or metal designs built to enhance your garden or backyard.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <img
            src={gazeboImg}
            alt="Gazebo Installation"
            className="w-full h-96 object-cover"
          />
          
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Service Overview */}
              <div>
                <h2 className="text-2xl font-semibold text-green-700 mb-4">
                  What is a Gazebo?
                </h2>
                <p className="text-gray-600 mb-6">
                  A pavilion structure constructed in a private area, like in a garden, is what we call a gazebo. Gazebos are an added resting areas. Apart from homes, Gazebos are also done in guest homes, restaurants, commercial enterprises, like outside a mall, and they are mainly for offering an added shelter outside the main building.
                </p>
                <p className="text-gray-600 mb-6">
                  Our Gazebos designs are unique and meant for holding private meetings, private conversations, bonfires, movie watching, and also dining. They provide versatile outdoor spaces that enhance both functionality and aesthetics of any property.
                </p>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Key Benefits
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Space-efficient outdoor shelter that doesn't occupy too much area</li>
                  <li>Highly customizable designs to serve specific purposes</li>
                  <li>Versatile functionality for meetings, dining, entertainment, and relaxation</li>
                  <li>Adds unique value and character to any property</li>
                  <li>Suitable for both residential and commercial applications</li>
                  <li>Professional designs that replace outdated gazebo concepts</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Design Features
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Weather-resistant construction</li>
                  <li>Custom sizing to fit available space</li>
                  <li>Integrated seating and table options</li>
                  <li>Lighting and electrical provisions</li>
                  <li>Decorative elements and finishes</li>
                  <li>Professional foundation and anchoring</li>
                </ul>
              </div>

              {/* Who Needs This Service */}
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Who Needs a Gazebo?
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Anyone who wants a gazebo in their space, as it does not occupy too much space</li>
                  <li>Anyone can have a Gazebo as it is effective since modifications can be made in whichever way to serve the intended purpose of shelter outside</li>
                  <li>Commercial garden owners, private property owners, or facilities like hospitals, restaurants, or harbors that need to accommodate guests</li>
                  <li>Properties looking for unique outdoor spaces that add value and offer additional areas for special meetings, dining, or conversations</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Gazebo Uses
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Private meetings and business discussions</li>
                  <li>Intimate conversations and relaxation</li>
                  <li>Outdoor dining and entertainment</li>
                  <li>Bonfires and evening gatherings</li>
                  <li>Movie watching and outdoor activities</li>
                  <li>Reading and meditation spaces</li>
                  <li>Event hosting and celebrations</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Installation Locations
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Residential gardens and backyards</li>
                  <li>Commercial properties and malls</li>
                  <li>Hotels and guest accommodations</li>
                  <li>Restaurants with outdoor seating</li>
                  <li>Hospitals and healthcare facilities</li>
                  <li>Parks and recreational areas</li>
                  <li>Event venues and wedding locations</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Material Options
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-700">Wood Gazebos</h4>
                    <p className="text-gray-600 text-sm">Natural, traditional aesthetic with custom staining and finishing options</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Metal Gazebos</h4>
                    <p className="text-gray-600 text-sm">Modern, durable construction with powder-coated finishes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 text-center">
              <button
                onClick={handleQuote}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4"
              >
                Get Custom Quote
              </button>
              <button
                onClick={() => navigate("/gallery")}
                className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors"
              >
                View Gazebo Designs
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default GazeboInstallation;
