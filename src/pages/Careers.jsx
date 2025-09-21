import React from "react";
import { motion } from "framer-motion";
import SEOHelmet from "../components/SEOHelmet";
import { FaBriefcase, FaClock } from "react-icons/fa";

const Careers = () => {
  return (
    <>
      <SEOHelmet 
        title="Careers | Blissful Outdoor Solutions"
        description="Career opportunities at Blissful Outdoor Solutions. Join our team of landscaping professionals in Kenya."
        keywords="landscaping careers, outdoor design jobs, join our team, landscaping jobs Kenya"
        canonical="/careers"
      />
      
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
        <div className="text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaBriefcase className="text-3xl text-green-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Careers at Blissful Outdoor Solutions</h1>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 mb-8">
                We're excited to announce that our careers page is coming soon! We're always looking for talented individuals 
                to join our team of landscaping professionals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="mailto:careers@blissfuloutdoors.co.ke"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Contact Us About Opportunities
                </a>
                <a
                  href="/about/team"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Meet Our Team
                </a>
              </div>
            </div>
            
            <div className="mt-12 text-gray-500">
              <p>Check back soon for current job openings and career opportunities.</p>
              <div className="flex items-center justify-center mt-4">
                <FaClock className="mr-2" />
                <span>Last updated: September 2025</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Careers;
