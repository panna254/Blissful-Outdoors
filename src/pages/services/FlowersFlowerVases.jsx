import React from "react";
import { useNavigate } from "react-router-dom";
import flowersImg from "../../assets/flowers.jpeg";
import SEOHelmet from "../../components/SEOHelmet";

const FlowersFlowerVases = () => {
  const navigate = useNavigate();

  const handleQuote = () => {
    navigate("/quotation?service=Flowers & Flower Vases");
  };

  return (
    <>
      <SEOHelmet 
        title="Flowers & Flower Vases Kenya | Garden Decoration & Landscaping"
        description="Professional flower installation and decorative vases in Kenya. Beautiful garden decoration, flower arrangements, and ornamental landscaping services."
        keywords="flowers Kenya, flower vases, garden decoration, ornamental plants, landscaping flowers, decorative gardening"
        canonicalUrl="https://blissfuloutdoorsolutions.com/services/flowers-flower-vases"
      />
      <div className="bg-gray-100 min-h-screen py-16 px-6 md:px-16 mt-20">
        <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Flowers & Flower Vases
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Brighten up your indoors or garden with curated flowers and elegant vases.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <img
            src={flowersImg}
            alt="Flowers & Flower Vases"
            className="w-full h-96 object-cover"
          />
          
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Service Overview */}
              <div>
                <h2 className="text-2xl font-semibold text-green-700 mb-4">
                  Our Nursery Collection
                </h2>
                <p className="text-gray-600 mb-6">
                  In our Nursery located along the Northern Bypass, Ruiru Membley, we have plenty of flowers. Any flower you can think of, we have it. Ornamental flowers, colourful, flowers of different shapes, not forgetting Fragrant flowers. Which flower/flowers are you looking for and how many?
                </p>
                <p className="text-gray-600 mb-6">
                  Flower vases are essential in creating the attractiveness and also holding any flower or tree in place. Based on the growth and strength of whichever tree, our yard also carries different sizes of these vases. About modelling, our vases are made of fibre and clay.
                </p>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Our Flower Collection
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Ornamental flowers for decorative purposes</li>
                  <li>Colorful flowers in various shades and hues</li>
                  <li>Flowers of different shapes and sizes</li>
                  <li>Fragrant flowers for sensory appeal</li>
                  <li>Comprehensive selection available at our Ruiru Membley nursery</li>
                  <li>Seasonal and year-round varieties</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Popular Flower Types
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Roses - Various colors and varieties</li>
                  <li>Marigolds - Bright and cheerful</li>
                  <li>Petunias - Perfect for borders</li>
                  <li>Bougainvillea - Vibrant climbing flowers</li>
                  <li>Hibiscus - Tropical beauty</li>
                  <li>Chrysanthemums - Long-lasting blooms</li>
                </ul>
              </div>

              {/* Flower Vases & Services */}
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Flower Vase Options
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Different sizes based on tree growth and strength requirements</li>
                  <li>Fibre-made vases for durability and lightweight handling</li>
                  <li>Clay vases for traditional aesthetics and natural appeal</li>
                  <li>Essential for creating attractive flower arrangements</li>
                  <li>Proper support for flowers and trees</li>
                  <li>Weather-resistant outdoor options</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Vase Materials & Sizes
                </h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Fibre Vases</h4>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                      <li>Lightweight and durable</li>
                      <li>Weather-resistant finish</li>
                      <li>Available in multiple sizes</li>
                      <li>Modern aesthetic appeal</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Clay Vases</h4>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                      <li>Traditional natural material</li>
                      <li>Excellent drainage properties</li>
                      <li>Breathable for plant health</li>
                      <li>Classic, timeless appearance</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Services We Offer
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Flower selection and consultation</li>
                  <li>Vase matching and sizing</li>
                  <li>Planting and arrangement services</li>
                  <li>Delivery to your location</li>
                  <li>Garden design consultation</li>
                  <li>Maintenance and care guidance</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Visit Our Nursery
                </h3>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-semibold">Location:</p>
                  <p className="text-gray-600">Northern Bypass, Ruiru Membley</p>
                  <p className="text-gray-600 mt-2">
                    Come visit our extensive collection and see the quality of our flowers and vases firsthand.
                  </p>
                </div>
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
                View Flower Collection
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default FlowersFlowerVases;
