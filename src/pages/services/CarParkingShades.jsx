import React from "react";
import { useNavigate } from "react-router-dom";
import carShadeImg from "../../assets/carshade.jpeg";

const CarParkingShades = () => {
  const navigate = useNavigate();

  const handleQuote = () => {
    navigate("/quotation?service=Car Parking Shades");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-6 md:px-16 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Car Parking Shades
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect your vehicle from harsh weather with our curved, cantilever, or plasma-cut shades. Standard size: 2.5m x 5m per vehicle.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <img
            src={carShadeImg}
            alt="Car Parking Shades"
            className="w-full h-96 object-cover"
          />
          
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Service Overview */}
              <div>
                <h2 className="text-2xl font-semibold text-green-700 mb-4">
                  Why Car Parking Shades?
                </h2>
                <p className="text-gray-600 mb-6">
                  Have you ever asked yourself what it means to cover your car from adverse weather? Adverse weather poses risks like fading paint and dashboard damage. People prefer basement parking or installed car shades because they know how to prevent damage from rain, sun, wind, and bird droppings.
                </p>
                <p className="text-gray-600 mb-6">
                  We accommodate any number of vehicles at home or business premises, provided there's enough space. Our technicians work from scratch under your supervision until achieving exactly what you described.
                </p>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Protection Benefits
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Prevents paint fading from UV rays</li>
                  <li>Protects dashboard from heat damage</li>
                  <li>Shields from rain and hail damage</li>
                  <li>Keeps vehicle clean from bird droppings</li>
                  <li>Reduces interior temperature</li>
                  <li>Extends vehicle lifespan</li>
                </ul>
              </div>

              {/* Design Options & Pricing */}
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Design Options
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li><strong>Curved (Standard Design):</strong> Classic aesthetic with excellent water runoff</li>
                  <li><strong>Cantilever:</strong> Modern design with no support posts on one side</li>
                  <li><strong>Curved with Plasma Cutting:</strong> Decorative edges for enhanced appeal</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Pricing Information
                </h3>
                <p className="text-gray-600 mb-4">
                  Pricing is calculated by square meters (SQM). We determine how many cars will fit based on our standard car size: 2.5m × 5m. Our design ensures complete vehicle coverage, even with doors fully open.
                </p>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Installation Features
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Custom sizing for any number of vehicles</li>
                  <li>Professional site assessment</li>
                  <li>Durable steel frame construction</li>
                  <li>Weather-resistant materials</li>
                  <li>Complete door clearance design</li>
                  <li>Supervised installation process</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Suitable For
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Residential homes</li>
                  <li>Commercial buildings</li>
                  <li>Office complexes</li>
                  <li>Shopping centers</li>
                  <li>Industrial facilities</li>
                  <li>Any property with adequate space</li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 text-center">
              <button
                onClick={handleQuote}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4"
              >
                Generate Quotation
              </button>
              <button
                onClick={() => navigate("/projects/completed")}
                className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors"
              >
                See Previous Designs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarParkingShades;
