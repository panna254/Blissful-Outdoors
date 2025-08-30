import React from "react";
import { useNavigate } from "react-router-dom";
import electricFenceImg from "../../assets/electricfence.jpeg";

const ElectricFenceInstallation = () => {
  const navigate = useNavigate();

  const handleQuote = () => {
    navigate("/quotation?service=Electric Fence Installation");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-6 md:px-16 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Electric Fence Installation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure your home, school, or business with reliable electric fencing solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <img
            src={electricFenceImg}
            alt="Electric Fence Installation"
            className="w-full h-96 object-cover"
          />
          
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Service Overview */}
              <div>
                <h2 className="text-2xl font-semibold text-green-700 mb-4">
                  Electric Fence Solutions
                </h2>
                <p className="text-gray-600 mb-6">
                  One might think an electric fence is only applicable if one has a perimeter wall to their premises/homes, but that is not the case. An electric fence can be erected right from the ground and still serve the purpose for those who do not have perimeter walls around their properties. The merits carried by the existence of an electric fence, of course, outweigh the demerits.
                </p>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Key Features
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Can be installed without requiring a perimeter wall</li>
                  <li>Customizable specifications: Height, Width, Length, density, and color</li>
                  <li>Advanced security technology with razor wire and T wire systems</li>
                  <li>Effective protection against intruders and unauthorized access</li>
                  <li>Safeguards plantations and gardens from animal damage</li>
                  <li>Professional installation tailored to customer specifications</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Installation Options
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li><strong>Ground-Up Installation:</strong> Independent fence system from ground level</li>
                  <li><strong>Wall-Top Installation:</strong> Mounted on existing perimeter walls</li>
                  <li><strong>Hybrid Systems:</strong> Combination of ground and wall-mounted sections</li>
                </ul>
              </div>

              {/* Who Needs This Service */}
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Who Needs an Electric Fence?
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Are you tired of intruders jumping over your fence? You would need an electric fence</li>
                  <li>Do you want to keep animals away from your beautiful plantation and safeguard it from damage? Heavy and enough proceeds from your garden or a plantation are fully guaranteed with an electric fence in place</li>
                  <li>Are you in need of keeping away from any form of breach by thieves? No thief or intruder would stand the stability kept by our razor, T wire, and the density created there</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Security Applications
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Residential homes and compounds</li>
                  <li>Commercial and industrial facilities</li>
                  <li>Schools and educational institutions</li>
                  <li>Agricultural properties and plantations</li>
                  <li>Government and institutional buildings</li>
                  <li>Warehouses and storage facilities</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Customization Options
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li><strong>Height:</strong> Customizable to meet security requirements</li>
                  <li><strong>Width & Length:</strong> Tailored to property dimensions</li>
                  <li><strong>Density:</strong> Wire spacing based on security level needed</li>
                  <li><strong>Color:</strong> Various options to match property aesthetics</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Benefits
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>24/7 perimeter security protection</li>
                  <li>Deters intruders and unauthorized access</li>
                  <li>Protects valuable property and assets</li>
                  <li>Guards against animal intrusion</li>
                  <li>Cost-effective long-term security solution</li>
                  <li>Low maintenance requirements</li>
                  <li>Professional monitoring capabilities</li>
                </ul>
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
                onClick={() => navigate("/contact")}
                className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors"
              >
                Security Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricFenceInstallation;
