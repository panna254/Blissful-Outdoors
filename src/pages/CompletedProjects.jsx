import React from "react";
import heroBg from "../assets/herobg.jpg";
import landscapingImg from "../assets/landscaping.jpeg";
import cabroImg from "../assets/cabro.jpeg";
import gazeboImg from "../assets/gazebo.jpeg";

const completedProjects = [
  { title: "Luxury Garden Landscaping", image: landscapingImg, location: "Malindi, Msabaha, Gede Location" },
  { title: "Cabro Installation", image: cabroImg, location: "Ruiru Imani Court" },
  { title: "Custom Gazebo Installation", image: gazeboImg, location: "Naivasha, Nakuru" },
];

const CompletedProjects = () => {
  return (
    <section className="bg-gray-50 min-h-screen">
      <div
        className="relative text-white text-center py-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto">
          <h1 className="text-5xl font-extrabold">Completed Projects</h1>
          <p className="mt-4 text-xl opacity-90">
            A showcase of finished outdoor transformations delivered with excellence.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-16 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {completedProjects.map((project, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-4">
                <h3 className="font-semibold text-lg text-white">{project.title}</h3>
                <p className="text-gray-200 text-sm">{project.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/quotation"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompletedProjects;


