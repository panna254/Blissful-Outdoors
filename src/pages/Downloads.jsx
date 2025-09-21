import React from "react";
import { motion } from "framer-motion";
import SEOHelmet from "../components/SEOHelmet";
import { FaDownload, FaFileAlt, FaUsers, FaBriefcase, FaBuilding } from "react-icons/fa";
import aboutImg from "../assets/aboutimage.jpeg";
import landscapingImg from "../assets/landscaping1.jpeg";
import gazeboImg from "../assets/gazebo.jpeg";
import terrazzoImg from "../assets/terrazzo.jpeg";

const Downloads = () => {
  const downloadItems = [
    {
      title: "Company Profile",
      description: "Learn about our history, mission, and comprehensive outdoor services since 2015.",
      icon: FaBuilding,
      fileSize: "2.5 MB",
      format: "PDF",
      image: aboutImg,
      downloadUrl: "#" // Placeholder
    },
    {
      title: "Services Catalogue",
      description: "Detailed catalogue of all our landscaping, construction, and outdoor services with pricing guides.",
      icon: FaFileAlt,
      fileSize: "4.2 MB", 
      format: "PDF",
      image: landscapingImg,
      downloadUrl: "#" // Placeholder
    }
  ];

  const handleDownload = (item) => {
    // Placeholder function - would trigger actual download
    alert(`Download ${item.title} - Feature coming soon!`);
  };

  return (
    <>
      <SEOHelmet 
        title="Downloads | Company Profile, Catalogue & Careers - Blissful Outdoors"
        description="Download our company profile and services catalogue. Learn more about Blissful Outdoors professional outdoor services and comprehensive landscaping solutions."
        keywords="company profile download, services catalogue, blissful outdoors resources, outdoor services information"
        canonicalUrl="https://blissfuloutdoorsolutions.com/about/downloads"
      />
      
      <div className="bg-gray-50 min-h-screen py-16 px-6 md:px-16 mt-20">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
              Downloads & Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Access our company information and service catalogues. 
              Download our comprehensive resources to learn more about Blissful Outdoors and our services.
            </p>
          </div>

          {/* Downloads Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {downloadItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <IconComponent className="text-2xl mb-2" />
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* File Info */}
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <span className="flex items-center space-x-2">
                        <FaFileAlt />
                        <span>{item.format}</span>
                      </span>
                      <span>{item.fileSize}</span>
                    </div>

                    {/* Download Button */}
                    <button
                      onClick={() => handleDownload(item)}
                      className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <FaDownload />
                      <span>Download {item.title}</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Info */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Need More Information?
            </h2>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Contact us directly for custom documentation or specific project information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@blissfuloutdoorsolutions.com"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Email Us
              </a>
              <a
                href="tel:+254715812430"
                className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors"
              >
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Downloads;
