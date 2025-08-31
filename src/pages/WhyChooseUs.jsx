import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEOHelmet from "../components/SEOHelmet";
import aboutImg from "../assets/aboutimage1.jpeg";
import missionIcon from "../assets/mission.png";
import servicesIcon from "../assets/services.png";
import whyUsIcon from "../assets/who.png";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: missionIcon,
      title: "10+ Years of Excellence",
      description: "Since 2015, we've been transforming outdoor spaces across 35+ counties in Kenya with proven expertise and craftsmanship."
    },
    {
      icon: servicesIcon,
      title: "Comprehensive Services",
      description: "From landscaping to shade structures, we offer complete outdoor solutions under one roof with professional quality."
    },
    {
      icon: whyUsIcon,
      title: "Value-Driven Approach",
      description: "You buy more than a product — you buy experience, class, comfort, serenity, glamour, confidence, and style."
    }
  ];

  const benefits = [
    "Young, vibrant, liberal team — we listen, shape ideas, and deliver results",
    "Transparent advice and realistic pricing for value-driven outcomes",
    "Communication first — we engage deeply to understand your needs",
    "Quality materials and professional craftsmanship guaranteed",
    "Nationwide service coverage across Kenya",
    "Custom solutions tailored to your specific requirements"
  ];

  return (
    <>
      <SEOHelmet 
        title="Why Choose Blissful Outdoors | Professional Outdoor Services Kenya"
        description="Discover why clients choose Blissful Outdoors for outdoor transformations. 10+ years experience, comprehensive services, and value-driven approach across Kenya."
        keywords="why choose blissful outdoors, outdoor services Kenya, landscaping company, professional contractors"
        canonicalUrl="https://blissfuloutdoorsolutions.com/about/why-choose-us"
      />
      
      <div className="bg-gray-50 min-h-screen py-16 px-6 md:px-16 mt-20">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
              Why Choose Blissful Outdoors?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We Transform and add value to your outdoor living areas with unmatched expertise, 
              quality craftsmanship, and a commitment to turning your vision into reality.
            </p>
          </div>

          {/* Hero Image */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={aboutImg}
              alt="Blissful Outdoors Team at Work"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Key Reasons Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img
                  src={reason.icon}
                  alt={reason.title}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-green-700 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Benefits List */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
              What Sets Us Apart
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Ready to Transform Your Outdoor Space?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quotation">
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Get Your Quote
                </button>
              </Link>
              <Link to="/projects">
                <button className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors">
                  View Our Work
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
