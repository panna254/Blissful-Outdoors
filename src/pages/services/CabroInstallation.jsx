import React from "react";
import { useNavigate } from "react-router-dom";
import cabroImg from "../../assets/cabro.jpeg";
import SEOHelmet from "../../components/SEOHelmet";

const CabroInstallation = () => {
  const navigate = useNavigate();

  const handleQuote = () => {
    navigate("/quotation?service=Cabro Installation");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-6 md:px-16 mt-20">
      <SEOHelmet 
        title="Cabro Installation Kenya | Professional Cabro Paving Contractors Nairobi"
        description="Leading cabro installation Kenya & cabro paving contractors Nairobi. Expert driveway paving, parking areas & walkways. Durable interlocking blocks. Free quotes!"
        keywords="cabro installation Kenya, cabro installation Nairobi, cabro paving contractors Nairobi, cabro paving Kenya, driveway paving Kenya, interlocking blocks Kenya, cabro contractors Kenya, professional cabro installation"
        canonicalUrl="https://blissfuloutdoorsolutions.com/services/cabro-installation"
      />
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Professional Cabro Installation Kenya
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading cabro installation Kenya services for driveways, parking areas, walkways, and more. Professional cabro paving contractors with durable, colourfast blocks resistant to heavy use.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <img
            src={cabroImg}
            alt="Cabro Installation"
            className="w-full h-96 object-cover"
          />
          
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Service Overview */}
              <div>
                <h2 className="text-2xl font-semibold text-green-700 mb-4">
                  Service Overview
                </h2>
                <p className="text-gray-600 mb-6">
                  Ideal for driveways, parking lots, loading zones, petrol stations, and walkways. Our cabro installations feature patterns, designs, and sizes for enhanced aesthetics with heavy-duty sub-base preparation for durability under constant loads.
                </p>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Key Features
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Patterns, designs, and sizes for enhanced aesthetics</li>
                  <li>Heavy-duty sub-base prep for durability under constant loads</li>
                  <li>Colourfast, low-breakage blocks designed to last</li>
                  <li>Professional installation with proper drainage</li>
                  <li>Weather-resistant and long-lasting materials</li>
                  <li>Custom designs to match your property aesthetics</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Benefits
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Superior durability compared to concrete</li>
                  <li>Easy maintenance and repair</li>
                  <li>Excellent drainage properties</li>
                  <li>Slip-resistant surface</li>
                  <li>Increases property value</li>
                  <li>Environmentally friendly option</li>
                </ul>
              </div>

              {/* Installation Areas */}
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Where to Install Cabros
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Driveways</li>
                  <li>Parking lots</li>
                  <li>Loading and offloading points</li>
                  <li>Petrol stations</li>
                  <li>Walkways and defined paths</li>
                  <li>Commercial parking areas</li>
                  <li>Industrial loading zones</li>
                  <li>Residential courtyards</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Design Options
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Herringbone pattern for maximum strength</li>
                  <li>Running bond for classic appearance</li>
                  <li>Basket weave for decorative appeal</li>
                  <li>Custom patterns for unique designs</li>
                  <li>Multiple color combinations</li>
                  <li>Border and accent designs</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Installation Process
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Site survey and measurement</li>
                  <li>Excavation and ground preparation</li>
                  <li>Sub-base installation and compaction</li>
                  <li>Sand bedding layer preparation</li>
                  <li>Cabro laying in chosen pattern</li>
                  <li>Edge restraints and finishing</li>
                  <li>Final compaction and sand filling</li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 text-center">
              <button
                onClick={handleQuote}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4"
              >
                Get Quote
              </button>
              <button
                onClick={() => navigate("/projects/completed")}
                className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors"
              >
                See Pictures
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabroInstallation;
