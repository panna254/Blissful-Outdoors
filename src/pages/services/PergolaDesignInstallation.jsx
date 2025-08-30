import React from "react";
import { useNavigate } from "react-router-dom";
import pergolaImg from "../../assets/pergola.jpeg";

const PergolaDesignInstallation = () => {
  const navigate = useNavigate();

  const handleQuote = () => {
    navigate("/quotation?service=Pergola Design & Installation");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-6 md:px-16 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Pergola Design & Installation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Custom wood or metal pergolas to transform your patio or garden into an elegant retreat.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <img
            src={pergolaImg}
            alt="Pergola Design & Installation"
            className="w-full h-96 object-cover"
          />
          
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Service Overview */}
              <div>
                <h2 className="text-2xl font-semibold text-green-700 mb-4">
                  What is a Pergola?
                </h2>
                <p className="text-gray-600 mb-6">
                  A pergola is a design that creates an extended roof either beside the house/building or on top of a massionate. A pergola design serves a much more massive purpose than anyone would imagine.
                </p>
                <p className="text-gray-600 mb-6">
                  It is worth noting that the above applies to both ground floors and areas above the house. The extended roofing created by the pergola is not meant to cover the area thoroughly; the polycarbonate used in designing this roof allows light to pass through, thus creating a unique design with lighting.
                </p>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Benefits
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Creates authentic outdoor resting areas</li>
                  <li>Provides protection from rain and sun</li>
                  <li>Allows natural light to pass through</li>
                  <li>Enhances property aesthetics and value</li>
                  <li>Suitable for both residential and commercial properties</li>
                  <li>Defines outdoor living spaces</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Design Features
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Polycarbonate roofing for light filtration</li>
                  <li>Custom sizing to fit your space</li>
                  <li>Weather-resistant materials</li>
                  <li>Professional structural design</li>
                  <li>Integrated lighting options</li>
                  <li>Decorative elements and finishes</li>
                </ul>
              </div>

              {/* Who Needs This Service */}
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Who Needs a Pergola Design?
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>If you just built your home or premises and realized that part of the construction would look great covered with an extended roofing to accommodate visitors or family as an outdoor resting area</li>
                  <li>If you need extra coverage from rains or sun, especially in areas with floor tiles where rain spills could cause slippery conditions</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Installation Locations
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Patios and outdoor dining areas</li>
                  <li>Garden walkways and pathways</li>
                  <li>Pool areas and deck spaces</li>
                  <li>Entrance areas and courtyards</li>
                  <li>Commercial outdoor seating</li>
                  <li>Balconies and terraces</li>
                  <li>Both ground level and elevated areas</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Material Options
                </h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Wood Pergolas</h4>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                      <li>Natural, warm aesthetic</li>
                      <li>Cedar, pine, or treated lumber options</li>
                      <li>Can be stained or painted</li>
                      <li>Traditional craftsmanship</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Metal Pergolas</h4>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                      <li>Modern, sleek appearance</li>
                      <li>Aluminum or steel construction</li>
                      <li>Low maintenance requirements</li>
                      <li>Powder-coated finishes</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Applications
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Residential outdoor living enhancement</li>
                  <li>Commercial dining and seating areas</li>
                  <li>Event venues and entertainment spaces</li>
                  <li>Hotel and resort outdoor areas</li>
                  <li>Garden and landscape features</li>
                  <li>Architectural design elements</li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 text-center">
              <button
                onClick={handleQuote}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4"
              >
                Get Custom Design Quote
              </button>
              <button
                onClick={() => navigate("/gallery")}
                className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors"
              >
                View Pergola Designs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PergolaDesignInstallation;
