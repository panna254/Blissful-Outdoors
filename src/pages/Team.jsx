import React from "react";
import { motion } from "framer-motion";
import SEOHelmet from "../components/SEOHelmet";
import { FaUsers, FaAward, FaTools, FaHeart, FaLightbulb, FaHandshake } from "react-icons/fa";
import aboutImg from "../assets/aboutimage.jpeg";
import landscapingImg from "../assets/landscaping1.jpeg";
import gazeboImg from "../assets/gazebo.jpeg";
import terrazzoImg from "../assets/terrazzo.jpeg";

const Team = () => {
  const teamValues = [
    {
      title: "Experienced Professionals",
      description: "Our team consists of skilled craftsmen with years of experience in outdoor construction and landscaping.",
      icon: FaAward,
      image: aboutImg
    },
    {
      title: "Quality Craftsmanship",
      description: "We take pride in delivering exceptional quality workmanship that stands the test of time.",
      icon: FaTools,
      image: landscapingImg
    },
    {
      title: "Passionate About Outdoors",
      description: "Our team is genuinely passionate about transforming outdoor spaces and creating beautiful environments.",
      icon: FaHeart,
      image: gazeboImg
    },
    {
      title: "Innovative Solutions",
      description: "We bring creative and innovative solutions to every project, ensuring unique and stunning results.",
      icon: FaLightbulb,
      image: terrazzoImg
    }
  ];

  const teamMembers = [
    {
      name: "Project Management Team",
      role: "Leadership & Coordination",
      description: "Experienced project managers who ensure every project runs smoothly from start to finish.",
      image: aboutImg
    },
    {
      name: "Landscaping Specialists",
      role: "Design & Implementation",
      description: "Creative designers and skilled landscapers who bring your outdoor visions to life.",
      image: landscapingImg
    },
    {
      name: "Construction Experts",
      role: "Building & Installation",
      description: "Professional builders and installers with expertise in outdoor structures and installations.",
      image: gazeboImg
    },
    {
      name: "Quality Assurance Team",
      role: "Inspection & Maintenance",
      description: "Dedicated quality inspectors ensuring every project meets our high standards.",
      image: terrazzoImg
    }
  ];

  return (
    <>
      <SEOHelmet 
        title="Our Team - Blissful Outdoor Solutions"
        description="Meet our experienced team of professionals, craftsmen, and outdoor specialists. Learn about our skilled team members who bring your outdoor visions to life."
        keywords="team blissful outdoors, landscaping team, outdoor construction team, professional craftsmen"
        canonicalUrl="https://blissfuloutdoorsolutions.com/about/team"
      />
      
      <div className="bg-gray-50 min-h-screen py-16 px-6 md:px-16 mt-20">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
              Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the passionate professionals behind Blissful Outdoor Solutions. 
              Our experienced team of craftsmen, designers, and specialists work together 
              to transform your outdoor spaces into beautiful, functional environments.
            </p>
          </div>

          {/* Team Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              What Makes Our Team Special
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {teamValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <value.icon className="text-white text-2xl mb-2" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team Members Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Our Team Structure
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-green-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-green-700 text-white rounded-2xl p-8 md:p-12 text-center"
          >
            <FaHandshake className="text-4xl mx-auto mb-6 text-green-300" />
            <h2 className="text-3xl font-bold mb-4">
              Ready to Work With Our Team?
            </h2>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              Let our experienced team transform your outdoor space. Contact us today 
              to discuss your project and see how our professionals can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/quotation"
                className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Get a Quote
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-700 transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Team;
