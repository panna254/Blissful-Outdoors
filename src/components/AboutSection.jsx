import React from "react";
import { motion } from "framer-motion";
import fluxImg from "../assets/aboutimage.jpeg";
import missionIcon from "../assets/mission.png";
import servicesIcon from "../assets/services.png";
import whyUsIcon from "../assets/who.png";

const AboutSection = () => {
  return (
    <section className="py-0 bg-white mt-12 scroll-mt-24">
      <div className="container mx-auto flex flex-col lg:flex-row min-h-screen">
        {/* Left: Full-height Image */}
        <motion.div
          className="w-full lg:w-1/2 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={fluxImg}
            alt="About Blissful Outdoors"
            className="h-full w-full object-cover lg:sticky lg:top-0 lg:h-screen"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="w-full lg:w-1/2 p-8 lg:p-16 space-y-10 flex flex-col justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold leading-tight">
            Creating Beauty & Comfort in Outdoor Spaces Since{" "}
            <span className="text-green-600">2015</span>
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            At{" "}
            <strong className="text-green-700">
              Blissful Outdoor Solutions
            </strong>
            , we believe outdoor spaces should inspire joy, comfort, and pride.
            For the past decade, we’ve transformed spaces in over 35 counties
            across Kenya – from serene coastal towns to the rugged beauty of the
            north – leaving behind satisfied clients and stunning projects.
          </p>

          {/* Mission */}
          <div className="bg-gray-50 shadow-lg p-6 rounded-2xl flex gap-4 items-start">
            <img src={missionIcon} alt="Mission" className="w-12 h-12" />
            <div>
              <h3 className="text-xl font-semibold text-green-700">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To transform and add value to your outdoor living areas by
                combining artistry, innovation, and professional craftsmanship.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="bg-gray-50 shadow-lg p-6 rounded-2xl flex gap-4 items-start">
            <img src={servicesIcon} alt="Services" className="w-12 h-12" />
            <div>
              <h3 className="text-xl font-semibold text-green-700">
                What We Do
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-gray-700">
                <li>🌿 Landscaping</li>
                <li>🚗 Car Parking Shades</li>
                <li>🏖 Shade Sails</li>
                <li>🧱 Cabros Installation</li>
                <li>🏡 Pergolas & Canopies</li>
                <li>🪵 Privacy Fences</li>
                <li>🪨 Mazeras</li>
                <li>⚡ Electric Fences</li>
                <li>🌸 Flowers & Vases</li>
              </ul>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gray-50 shadow-lg p-6 rounded-2xl flex gap-4 items-start">
            <img src={whyUsIcon} alt="Why Choose Us" className="w-12 h-12" />
            <div>
              <h3 className="text-xl font-semibold text-green-700">
                Why Choose Us?
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mt-2">
                <li>Over 10 years of outdoor project excellence</li>
                <li>Premium designs with long-lasting results</li>
                <li>Spaces that invite comfort and serenity</li>
                <li>Tailored solutions for your unique vision</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
