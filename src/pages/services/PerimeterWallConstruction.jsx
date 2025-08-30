import React from "react";
import { useNavigate } from "react-router-dom";
import perimeterWallImg from "../../assets/pwall.jpeg";

const PerimeterWallConstruction = () => {
  const navigate = useNavigate();

  const handleQuote = () => {
    navigate("/quotation?service=Perimeter Wall Construction");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-6 md:px-16 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Perimeter Wall Construction
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your property's security and aesthetic with strong, stylish perimeter walls. We offer stone, concrete, and precast solutions tailored to your design and budget.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <img
            src={perimeterWallImg}
            alt="Perimeter Wall Construction"
            className="w-full h-96 object-cover"
          />
          
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Service Overview */}
              <div>
                <h2 className="text-2xl font-semibold text-green-700 mb-4">
                  Professional Wall Construction
                </h2>
                <p className="text-gray-600 mb-6">
                  Perimeter walls are essential security and aesthetic elements that define your property boundaries while enhancing the overall appeal of your premises. Our professional perimeter wall construction services provide durable, stylish solutions tailored to your specific design preferences and security requirements.
                </p>
                <p className="text-gray-600 mb-6">
                  We offer multiple construction materials and techniques including stone walls, concrete walls, and precast solutions. Each option is designed to withstand environmental challenges while maintaining visual appeal and structural integrity for years to come.
                </p>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Construction Materials & Options
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li><strong>Stone Walls:</strong> Natural, durable, and aesthetically pleasing with unique character</li>
                  <li><strong>Concrete Walls:</strong> Strong, cost-effective, and highly customizable in design</li>
                  <li><strong>Precast Solutions:</strong> Quick installation, consistent quality, and modern appearance</li>
                  <li><strong>Hybrid Designs:</strong> Combination of materials for optimal strength and beauty</li>
                </ul>
              </div>

              {/* Who Needs This Service */}
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Who Needs Perimeter Wall Construction?
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>New property owners looking to establish clear boundaries and enhance security</li>
                  <li>Existing property owners wanting to upgrade or replace deteriorating perimeter walls</li>
                  <li>Commercial properties requiring enhanced security and professional appearance</li>
                  <li>Residential properties needing privacy and boundary definition</li>
                  <li>Properties in areas requiring additional security measures</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Key Benefits
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Enhanced property security and boundary definition</li>
                  <li>Improved property aesthetics and curb appeal</li>
                  <li>Increased property value and marketability</li>
                  <li>Privacy enhancement for residential properties</li>
                  <li>Professional appearance for commercial properties</li>
                  <li>Durable construction designed for long-term performance</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Construction Process
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Site survey and boundary marking</li>
                  <li>Foundation excavation and preparation</li>
                  <li>Material selection and procurement</li>
                  <li>Professional construction and installation</li>
                  <li>Finishing and aesthetic enhancements</li>
                  <li>Quality inspection and handover</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Design Options
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Various heights and thicknesses</li>
                  <li>Decorative caps and finishes</li>
                  <li>Integrated gates and access points</li>
                  <li>Lighting and security features</li>
                  <li>Landscaping integration</li>
                  <li>Custom architectural elements</li>
                </ul>
              </div>
            </div>

            {/* Consultation Section */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                Professional Consultation
              </h3>
              <p className="text-gray-600 mb-4">
                Our team works closely with you to understand your specific requirements, budget constraints, and design preferences. We provide detailed consultations and transparent pricing to ensure you get the perfect perimeter wall solution for your property.
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-8 text-center">
              <button
                onClick={handleQuote}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4"
              >
                Get Consultation & Quote
              </button>
              <button
                onClick={() => navigate("/gallery")}
                className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors"
              >
                View Completed Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerimeterWallConstruction;
