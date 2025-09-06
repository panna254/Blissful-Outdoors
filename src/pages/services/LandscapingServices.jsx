import React from "react";
import { useNavigate } from "react-router-dom";
import landscapingImg from "../../assets/landscaping.jpeg";
import SEOHelmet from "../../components/SEOHelmet";

const LandscapingServices = () => {
  const navigate = useNavigate();

  const handleQuote = () => {
    navigate("/quotation?service=Landscaping Services");
  };

  return (
    <>
      <SEOHelmet 
        title="Landscaping Services Kenya | Professional Landscaping Services Nairobi"
        description="Leading landscaping services Kenya & professional landscaping services Nairobi. Expert garden design, turf laying, flower planting & outdoor transformation. Free quotes!"
        keywords="landscaping services Kenya, landscaping services Nairobi, professional landscaping services Kenya, garden design Kenya, landscaping contractors Kenya, outdoor services Kenya, landscaping company Kenya, garden transformation Kenya"
        canonicalUrl="https://blissfuloutdoorsolutions.com/services/landscaping"
      />
      <div className="bg-gray-100 min-h-screen py-16 px-6 md:px-16 mt-20">
        <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Professional Landscaping Services Kenya
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading landscaping services Kenya - transform your outdoor spaces into lush, vibrant sanctuaries with our professional landscaping services and comprehensive garden design solutions
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <img
            src={landscapingImg}
            alt="Landscaping Services"
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
                  We turn ordinary outdoor spaces into lush, vibrant sanctuaries with full-site transformation, turf laying, planting, flower installation, walkway and paving slab installation, and soil conditioning.
                </p>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  What We Include
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Site segregation, soil conditioning, and turf laying</li>
                  <li>Flower and tree planting with uniform grass selection</li>
                  <li>Walkway and paving slab paths connecting key areas</li>
                  <li>Complete site transformation and beautification</li>
                  <li>Professional soil analysis and amendments</li>
                  <li>Irrigation system planning and installation</li>
                </ul>
              </div>

              {/* Who Needs This Service */}
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Who Needs Landscaping?
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Bumpy lawns that aren't comfortable for sitting, basking, or play</li>
                  <li>Mixed or drying grass needing a uniform, thriving lawn</li>
                  <li>Spaces that need ornamental flowers to elevate beauty and attract birds</li>
                  <li>Areas needing defined walking paths (e.g., house ↔ gazebo ↔ cleaning area)</li>
                  <li>New construction projects requiring complete outdoor setup</li>
                  <li>Properties wanting to increase curb appeal and value</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Benefits
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Increased property value and curb appeal</li>
                  <li>Improved outdoor living and entertainment spaces</li>
                  <li>Better drainage and soil health</li>
                  <li>Reduced maintenance with proper plant selection</li>
                  <li>Enhanced privacy and natural beauty</li>
                  <li>Environmental benefits through proper landscaping</li>
                </ul>
              </div>
            </div>

            {/* Pricing Information */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                Pricing Factors
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Area size (square metres)</li>
                  <li>Whether ground segregation is required</li>
                  <li>Flower types and quantities</li>
                </ul>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Grass type and number of bags</li>
                  <li>Soil suitability for grass, flowers, trees, and fruits</li>
                  <li>Manure and soil amendments</li>
                </ul>
              </div>
              <p className="text-gray-600 mt-4">
                We recommend a <span className="font-semibold">Site Survey</span> for accurate measurements and a tailored quote.
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-8 text-center">
              <button
                onClick={() => navigate('/site-survey?service=Landscaping Services')}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors shadow-lg"
              >
                Book Site Survey
              </button>
              <button
                onClick={() => navigate("/projects/completed")}
                className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors"
              >
                View Our Work
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default LandscapingServices;
