// QuotationInfo.jsx
import React from "react";
import { CheckCircle, MapPin, Calculator, Phone } from "lucide-react";

const QuotationInfo = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 px-6 md:px-20 py-16 mt-12 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
            Professional Site Survey & Quotation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get accurate, detailed quotations for your outdoor project with our comprehensive on-site assessment
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Process */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
              <Calculator className="w-6 h-6 mr-3" />
              Our Survey Process
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Professional Assessment</h3>
                  <p className="text-gray-600">Our expert team conducts a thorough on-site evaluation of your property, measuring dimensions, assessing soil conditions, and understanding your specific requirements.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Detailed Quotation</h3>
                  <p className="text-gray-600">Receive a comprehensive breakdown of materials, labor, timeline, and costs tailored specifically to your project requirements.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Design Consultation</h3>
                  <p className="text-gray-600">Get expert advice on design options, material choices, and optimization suggestions for your outdoor space.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Survey Terms */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
              <MapPin className="w-6 h-6 mr-3" />
              Survey Terms & Conditions
            </h2>

            <div className="space-y-4 mb-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <p className="text-green-800 font-medium">
                  ✓ Survey fee is <strong>fully deductible</strong> from your final project cost when you proceed with us
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-blue-800 font-medium">
                  ✓ Payment is made <strong>only after</strong> the survey is completed
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <p className="text-yellow-800 font-medium">
                  ✓ No upfront payment required - we come to you first
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">What's Included:</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Site measurement and assessment</li>
                <li>• Soil and drainage evaluation</li>
                <li>• Design consultation and recommendations</li>
                <li>• Detailed written quotation</li>
                <li>• Material specifications and options</li>
                <li>• Project timeline and phases</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-green-700 rounded-xl text-white p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Outdoor Space?</h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Fill out our detailed quotation form below to schedule your professional site survey. 
            Our team will contact you within 24 hours to confirm your appointment.
          </p>
          <div className="flex items-center justify-center space-x-6 text-green-100">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span>+254 715 812 430</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span>+254 741 612 080</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotationInfo;
