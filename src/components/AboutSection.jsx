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
          className="w-full lg:w-1/2 relative overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="relative h-full w-full lg:sticky lg:top-0 lg:h-screen"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={fluxImg}
              alt="About Blissful Outdoor Solutions"
              className="h-full w-full object-cover rounded-r-3xl lg:rounded-r-4xl shadow-2xl"
            />
            {/* Gradient overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent rounded-r-3xl lg:rounded-r-4xl" />
            
            {/* Floating decorative elements */}
            <motion.div
              className="absolute top-8 right-8 w-16 h-16 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-300/30"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="absolute bottom-16 right-12 w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-300/30"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="absolute top-1/2 left-8 w-8 h-8 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-300/30"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            />
          </motion.div>
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
            Who We Are — Since <span className="text-green-600">2015</span>
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            <strong className="text-green-700">Blissful Outdoor Solutions</strong> is a Limited Company in Kenya specialising in outdoor works — everything beyond enclosed buildings: homes, business premises, and public open spaces. We beautify outdoor areas by revamping, doing anew, and adding ideas that elevate appeal and value.
          </p>

          <div className="bg-green-50 shadow p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-green-800">Our Mantra</h3>
            <p className="text-gray-700 mt-2">
              “We transform and add value to your Outdoor Living Areas.” This slogan captures our approach from day one — transforming ideas into tangible results in outdoor living areas.
            </p>
          </div>

          <div className="bg-gray-50 shadow p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-green-800">Our Reach</h3>
            <p className="text-gray-700 mt-2">
              Established in 2015, we have delivered projects for 10+ years across 35+ counties — from Isiolo and Marsabit to Kilifi and Taita Taveta. Explore highlights on our <a href="/projects" className="text-green-700 underline">Projects</a> and <a href="/gallery" className="text-green-700 underline">Gallery</a> pages.
            </p>
            <p className="text-gray-700 mt-2">
              We also share videos and testimonials that reflect our clients’ experiences and the results we deliver.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gray-50 shadow-lg p-6 rounded-2xl flex gap-4 items-start">
            <img src={missionIcon} alt="Mission" className="w-12 h-12" />
            <div>
              <h3 className="text-xl font-semibold text-green-700">Our Mission</h3>
              <p className="text-gray-700">To transform and add value to your outdoor living areas by combining artistry, innovation, and professional craftsmanship.</p>
            </div>
          </div>

          {/* Services */}
          <div className="bg-gray-50 shadow-lg p-6 rounded-2xl flex gap-4 items-start">
            <img src={servicesIcon} alt="Services" className="w-12 h-12" />
            <div>
              <h3 className="text-xl font-semibold text-green-700">What We Do</h3>
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
                <li>🧱 Terrazzo & Perimeter Walls</li>
              </ul>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gray-50 shadow-lg p-6 rounded-2xl flex gap-4 items-start">
            <img src={whyUsIcon} alt="Why Choose Us" className="w-12 h-12" />
            <div>
              <h3 className="text-xl font-semibold text-green-700">Why Choose Us?</h3>
              <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                <li>You buy more than a product — you buy experience, class, comfort, serenity, glamour, confidence, and style.</li>
                <li>10+ years creating outdoor serenity for homes, businesses, and public spaces.</li>
                <li>Young, vibrant, liberal team — we listen, shape ideas, and deliver results.</li>
                <li>Transparent advice and realistic pricing for value-driven outcomes.</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Read what clients say on our <a href="/projects" className="text-green-700 underline">Projects</a> and <a href="/gallery" className="text-green-700 underline">Gallery</a> pages.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 shadow-lg p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-green-700">How We Work</h3>
            <p className="text-gray-700 mt-2">
              <span className="font-semibold">Communication first.</span> We engage deeply to understand your needs and constraints, explain trade‑offs, and avoid shortcuts that compromise quality. Where necessary, we recommend site surveys for accurate measurements and quotes.
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-semibold">Value for money.</span> Our pricing is fair and realistic, reflecting materials, logistics, and craftsmanship. Some services (e.g., Cabro Installation and Modern Car Parking Shades) support instant online quotations. Start your quote on the <a href="/quotation" className="text-green-700 underline">Quotation</a> page.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
