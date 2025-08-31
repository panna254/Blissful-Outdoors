import React from "react";
import { useNavigate } from "react-router-dom";
import privacyFenceImg from "../../assets/privacyscreens.jpeg";
import SEOHelmet from "../../components/SEOHelmet";

const PrivacyScreenFence = () => {
  const navigate = useNavigate();

  const handleQuote = () => {
    navigate("/quotation?service=Privacy Screen Fence");
  };

  return (
    <>
      <SEOHelmet 
        title="Privacy Screen Fence Kenya | Decorative Fencing Solutions"
        description="Professional privacy screen fence installation in Kenya. Decorative fencing for privacy and style. Custom designs for residential and commercial properties."
        keywords="privacy fence Kenya, screen fencing, decorative fence, privacy solutions, boundary fencing"
        canonicalUrl="https://blissfuloutdoorsolutions.com/services/privacy-screen-fence"
      />
      <div className="bg-gray-100 min-h-screen py-16 px-6 md:px-16 mt-20">
        <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Privacy Screen Fence
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Improve privacy and aesthetics with durable, stylish screens for your outdoor space.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <img
            src={privacyScreenImg}
            alt="Privacy Screen Fence"
            className="w-full h-96 object-cover"
          />
          
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Service Overview */}
              <div>
                <h2 className="text-2xl font-semibold text-green-700 mb-4">
                  What is a Privacy Screen Fence?
                </h2>
                <p className="text-gray-600 mb-6">
                  In principle, it is a fence made up of a fabric driz which separates one side of the divide from the other, and it is specifically to block the sight. Any wall that you come across and on top of it or beside it, is flanked with a fabric cover of whichever colour, that is the Privacy Screen Fence.
                </p>
                <p className="text-gray-600 mb-6">
                  Just like an electric fence, whoever is looking to have their properties blocked from sight does not need a perimeter wall, as it is possible to have it top over the perimeter wall or start right from the ground. Blissful Outdoor Solutions will offer you ideas and help you reach your decision, and after it all, have a favourable Privacy Fence that gives enough privacy with the correct measurements, strength, and beauty.
                </p>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Key Features
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Fabric driz material for effective sight blocking</li>
                  <li>Can be installed on top of existing perimeter walls</li>
                  <li>Can start from the ground without requiring a wall</li>
                  <li>Customizable heights to meet specific privacy requirements</li>
                  <li>Available in various colours to match your design preferences</li>
                  <li>Professional installation with correct measurements, strength, and beauty</li>
                </ul>
              </div>

              {/* Who Needs This Service */}
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Who Needs a Privacy Screen Fence?
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>If you have a fence, but your fence plantation has not grown fully to offer the privacy</li>
                  <li>If other properties beside yours have outshone your privacy in terms of height, design, and overall appearance</li>
                  <li>If you're looking to separate the garden area from the house in your home</li>
                  <li>For businesses like restaurants or hotels that need to separate amenities like swimming pools and block them from sight and passersby</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Installation Options
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li><strong>Wall-Top Installation:</strong> Mounted on existing perimeter walls</li>
                  <li><strong>Ground-Up Installation:</strong> Independent structure from ground level</li>
                  <li><strong>Hybrid Installation:</strong> Combination of wall-mounted and ground sections</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Applications
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Residential property privacy</li>
                  <li>Commercial facility screening</li>
                  <li>Restaurant outdoor dining areas</li>
                  <li>Hotel pool and amenity areas</li>
                  <li>Garden and landscape separation</li>
                  <li>Industrial site screening</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Benefits
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Enhanced privacy and security</li>
                  <li>Improved property aesthetics</li>
                  <li>Wind reduction and protection</li>
                  <li>Noise reduction capabilities</li>
                  <li>Cost-effective privacy solution</li>
                  <li>Quick installation process</li>
                  <li>Low maintenance requirements</li>
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
                View Examples
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyScreenFence;
