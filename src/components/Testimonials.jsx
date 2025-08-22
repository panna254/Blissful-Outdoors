import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaYoutube } from "react-icons/fa";

const testimonials = [
  {
    name: "Jane M.",
    title: "Homeowner, Nairobi",
    feedback:
      "Blissful Outdoors completely transformed my backyard. Their attention to detail and professionalism exceeded my expectations.",
    image: "/assets/testimonials/jane.jpg",
    videoUrl: "",
    description: "Backyard transformation project with detailed landscaping.",
  },
  {
    name: "David K.",
    title: "Architect",
    feedback:
      "Working with Blissful has been smooth from start to finish. They deliver what they promise, and the results speak for themselves.",
    image: "/assets/testimonials/david.jpg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Collaboration on a multi-home estate design.",
  },
  {
    name: "Sarah N.",
    title: "Landlord",
    feedback:
      "Their gazebo installation was just perfect. It added so much value and beauty to my property.",
    image: "/assets/testimonials/sarah.jpg",
    videoUrl: "",
    description: "Gazebo installation in a rental compound.",
  },
  {
    name: "Brian O.",
    title: "Property Manager",
    feedback:
      "They brought our outdoor seating area to life. Our tenants love it!",
    image: "/assets/testimonials/brian.jpg",
    videoUrl: "https://youtu.be/dQw4w9WgXcQ?si=DHjlnUb4fbp5qkeY",
    description: "Outdoor seating area design and execution.",
  },
  {
    name: "Lilian T.",
    title: "Interior Designer",
    feedback:
      "It’s rare to find such a professional outdoor team. Highly recommend!",
    image: "/assets/testimonials/lilian.jpg",
    videoUrl: "",
    description: "Collaboration on villa aesthetics inside and out.",
  },
  {
    name: "George W.",
    title: "Business Owner",
    feedback:
      "Their patio work turned my café into a serene spot that attracts customers.",
    image: "/assets/testimonials/george.jpg",
    videoUrl: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
    description: "Café patio remodeling project.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12"
      >
        What Our Clients Say
      </motion.h2>

      <div className="overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory">
        <div className="flex gap-6 w-max px-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="snap-start min-w-[280px] sm:min-w-[340px] md:min-w-[400px] bg-gray-50 border border-green-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 ease-in-out"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-green-500"
                />
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-500">{t.title}</p>
                </div>
              </div>

              <p className="text-gray-700 italic mb-3">"{t.feedback}"</p>
              <p className="text-sm text-gray-600 mb-4">{t.description}</p>

              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {t.videoUrl && (
                <a
                  href={t.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300"
                >
                  <FaYoutube className="text-lg" />
                  Watch on YouTube
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
