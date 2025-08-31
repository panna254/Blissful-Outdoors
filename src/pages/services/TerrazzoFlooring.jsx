import React from "react";
import { useNavigate } from "react-router-dom";
import terrazzoImg from "../../assets/terrazzo.jpeg";
import SEOHelmet from "../../components/SEOHelmet";

const TerrazzoFlooring = () => {
  const navigate = useNavigate();

  const handleQuote = () => {
    navigate("/quotation?service=Terrazzo Flooring");
  };

  return (
    <>
      <SEOHelmet 
        title="Terrazzo Flooring Kenya | Durable Floor Solutions"
        description="Professional terrazzo flooring installation in Kenya. Durable, low-maintenance flooring for residential and commercial properties. Expert installation and finishing."
        keywords="terrazzo flooring Kenya, durable flooring, commercial flooring, terrazzo installation, floor solutions"
        canonicalUrl="https://blissfuloutdoorsolutions.com/services/terrazzo-flooring"
      />
      <div className="bg-gray-100 min-h-screen py-16 px-6 md:px-16 mt-20">
        <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Terrazzo Flooring
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Add timeless elegance to your spaces with our custom terrazzo solutions. From surface prep to polishing, we deliver durable, seamless finishes with beautiful aggregate patterns.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <img
            src={terrazzoImg}
            alt="Terrazzo Flooring"
            className="w-full h-96 object-cover"
          />
          
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Service Overview */}
              <div>
                <h2 className="text-2xl font-semibold text-green-700 mb-4">
                  Premium Terrazzo Solutions
                </h2>
                <p className="text-gray-600 mb-6">
                  As our primary job is outdoor living areas, we cannot leave out the floors in these areas. Flooring is also part of Blissful Outdoor Solutions in carrying out the outdoor work. Terrazzo is an exceptional flooring design that is made of marble or granite and highly polished to give the original look.
                </p>
                <p className="text-gray-600 mb-6">
                  Our Terrazzos flooring is authentic and durable, and comes in different colours to offer the customer's preferences. On that note, Terrazzos offer a number of advantages and purposes to take pride in.
                </p>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Key Features
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Premium marble and granite materials for exceptional quality</li>
                  <li>Non-slip surface perfect for cleaning areas and high-traffic zones</li>
                  <li>Highly polished finish that enhances aesthetic appeal</li>
                  <li>Durable construction suitable for outdoor living areas</li>
                  <li>Versatile color options for design flexibility</li>
                  <li>Professional installation by outdoor living specialists</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Installation Process
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Surface preparation and assessment</li>
                  <li>Base layer installation and leveling</li>
                  <li>Terrazzo mixture application</li>
                  <li>Aggregate placement and distribution</li>
                  <li>Curing and drying process</li>
                  <li>Grinding and polishing to perfection</li>
                  <li>Final sealing and protection</li>
                </ul>
              </div>

              {/* Applications & Benefits */}
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Why Choose Terrazzo?
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>For your cleaning areas - they are not slippery and thus offer an authentic area for this reason</li>
                  <li>For your balcony paths - durable and elegant flooring solution</li>
                  <li>Exceptional marble or granite composition for premium quality</li>
                  <li>Highly polished finish that maintains the original look</li>
                  <li>Authentic and durable construction for long-lasting performance</li>
                  <li>Multiple color options to match customer preferences and design schemes</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Ideal Applications
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Outdoor cleaning and utility areas</li>
                  <li>Balcony and terrace flooring</li>
                  <li>Pool decks and surrounding areas</li>
                  <li>Walkways and pathways</li>
                  <li>Commercial outdoor spaces</li>
                  <li>Patio and entertainment areas</li>
                  <li>High-traffic outdoor zones</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Benefits
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Slip-resistant surface for safety</li>
                  <li>Weather-resistant and durable</li>
                  <li>Easy to clean and maintain</li>
                  <li>Timeless aesthetic appeal</li>
                  <li>Increases property value</li>
                  <li>Seamless, continuous surface</li>
                  <li>Customizable colors and patterns</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Color Options
                </h3>
                <p className="text-gray-600 mb-4">
                  Our terrazzo comes in different colors to match your design preferences and complement your outdoor living spaces. From neutral tones to vibrant hues, we can create the perfect terrazzo floor for your project.
                </p>
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
                onClick={() => navigate("/gallery")}
                className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors"
              >
                View Terrazzo Collection
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default TerrazzoFlooring;
