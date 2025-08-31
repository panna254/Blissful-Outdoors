import React from "react";
import { useNavigate } from "react-router-dom";
import shadeSailImg from "../../assets/shadesail.jpeg";
import SEOHelmet from "../../components/SEOHelmet";

const ShadeSailsCanopies = () => {
  const navigate = useNavigate();

  const handleQuote = () => {
    navigate("/quotation?service=Shade Sails & Canopies");
  };

  return (
    <>
      <SEOHelmet 
        title="Shade Sails & Canopies Kenya | Modern Outdoor Shade Solutions"
        description="Professional shade sails and canopy installation in Kenya. Modern shade solutions for outdoor spaces. Custom designs for residential and commercial properties."
        keywords="shade sails Kenya, outdoor canopies, shade structures, sun protection, modern shade solutions"
        canonicalUrl="https://blissfuloutdoorsolutions.com/services/shade-sails-canopies"
      />
      <div className="bg-gray-100 min-h-screen py-16 px-6 md:px-16 mt-20">
        <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Shade Sails & Canopies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern shade solutions for irregular areas like car washes, clubs, restaurants, and gardens. Unlike mobile tents, they don't carry rainwater and are wind-resistant.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <img
            src={shadeSailsImg}
            alt="Shade Sails & Canopies"
            className="w-full h-96 object-cover"
          />
          
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Service Overview */}
              <div>
                <h2 className="text-2xl font-semibold text-green-700 mb-4">
                  Modern Shade Solutions
                </h2>
                <p className="text-gray-600 mb-6">
                  When you think of Shade Sails and Canopies, think about something like a Car Parking Shade, but these are done in irregular areas. Name them: Car Wash, Clubs, Restaurants, Gardens, and at the same time, they create a new, different look to your property, adding more value to outsiders.
                </p>
                <p className="text-gray-600 mb-6">
                  It is the modern image and idea that we have equipped ourselves with to put up with the current trends. Unlike mobile tents, Shade Sails and Canopies do not carry rainwater and in any way cannot get damaged by these adversaries. Again, Shade Sails and Canopies are held firm by the structure within them, and not even wind can break them, unlike movable tents.
                </p>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Key Benefits
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Modern, stylish alternative to traditional roofing</li>
                  <li>Wind-resistant and durable construction</li>
                  <li>No rainwater accumulation like mobile tents</li>
                  <li>Creates attractive outdoor spaces that add property value</li>
                  <li>Suitable for irregular areas and modern design requirements</li>
                  <li>Professional installation with structural integrity</li>
                </ul>
              </div>

              {/* Who Needs This Service */}
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Who Needs Shade Sails & Canopies?
                </h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Car Wash Businesses</h4>
                    <p className="text-gray-600 text-sm">
                      Do you plan to come up with a car wash that accommodates more than 4 or 5 cars at a time, basically because the space is available? A Canopy would be ideal as it will carry the essentials that come with a Canopy.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Restaurants & Clubs</h4>
                    <p className="text-gray-600 text-sm">
                      If you are planning on starting a restaurant or a club and you are looking to cover the balconies in a modern style that is not the ordinary roofing, what is it? Ask for a Shade Sail. They are beautiful on the outside, and that tells you what—this by default invites customers inside.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Extended Roofing</h4>
                    <p className="text-gray-600 text-sm">
                      Let's say you have a property that needs an extended roofing, but in style. This roofing, for instance, is to go to the balcony areas or your veranda. Look to have a Shade Sail installed in these areas by us.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Applications
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Car wash facilities</li>
                  <li>Restaurant outdoor seating</li>
                  <li>Club balconies and terraces</li>
                  <li>Garden and landscape areas</li>
                  <li>Commercial outdoor spaces</li>
                  <li>Residential verandas and patios</li>
                  <li>Event venues and entertainment areas</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Design Features
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Custom shapes for irregular areas</li>
                  <li>Multiple attachment points for stability</li>
                  <li>UV-resistant fabric materials</li>
                  <li>Waterproof and weather-resistant</li>
                  <li>Modern aesthetic appeal</li>
                  <li>Professional tensioning systems</li>
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
                onClick={() => navigate("/gallery")}
                className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors"
              >
                View Gallery
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default ShadeSailsCanopies;
