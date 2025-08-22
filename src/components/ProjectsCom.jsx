// src/components/ProjectsCom.jsx
import React, { useState } from "react";
import { X } from "lucide-react";

import heroBg from "../assets/herobg.jpg"; // background image

import landscapingImg from "../assets/landscaping.jpeg";
import cabroImg from "../assets/cabro.jpeg";
import gazeboImg from "../assets/gazebo.jpeg";
import carShadeImg from "../assets/carshade.jpeg";
import mazerasImg from "../assets/mazeras.jpeg";

const completedProjects = [
  {
    title: "Luxury Garden Landscaping",
    image: landscapingImg,
    location: "Ruiru, Kiambu",
  },
  {
    title: "Cabro Installation",
    image: cabroImg,
    location: "Karen, Nairobi",
  },
  {
    title: "Custom Gazebo Installation",
    image: gazeboImg,
    location: "Naivasha, Nakuru",
  },
];

const inProgressProjects = [
  {
    title: "Car Parking Shade",
    image: carShadeImg,
    location: "Westlands, Nairobi",
  },
  { title: "Mazeras Poolside Finish", image: mazerasImg, location: "Mombasa" },
];

const ProjectsCom = () => {
  const [activeTab, setActiveTab] = useState("completed");
  const [selectedProject, setSelectedProject] = useState(null);

  const ProjectGrid = ({ projects }) => (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer transform hover:scale-[1.02] duration-300"
          onClick={() => setSelectedProject(project)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-4">
            <h3 className="font-semibold text-lg text-white">
              {project.title}
            </h3>
            <p className="text-gray-200 text-sm">{project.location}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div
        className="relative text-white text-center py-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto">
          <h1 className="text-5xl font-extrabold">Our Projects</h1>
          <p className="mt-4 text-xl opacity-90">
            See how we bring landscapes to life — from concept to completion.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-6 mt-12 mb-10">
        <button
          onClick={() => setActiveTab("completed")}
          className={`px-6 py-3 rounded-full font-medium text-lg transition ${
            activeTab === "completed"
              ? "bg-green-600 text-white"
              : "bg-white shadow text-gray-700 hover:bg-green-50"
          }`}
        >
          Completed Projects
        </button>
        <button
          onClick={() => setActiveTab("progress")}
          className={`px-6 py-3 rounded-full font-medium text-lg transition ${
            activeTab === "progress"
              ? "bg-yellow-500 text-white"
              : "bg-white shadow text-gray-700 hover:bg-yellow-50"
          }`}
        >
          🚧 In Progress
        </button>
      </div>

      {/* Project Grid */}
      <div className="container mx-auto px-6 md:px-16 pb-16">
        {activeTab === "completed" && (
          <ProjectGrid projects={completedProjects} />
        )}
        {activeTab === "progress" && (
          <ProjectGrid projects={inProgressProjects} />
        )}
      </div>

      {/* Side Panel */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="flex-1 bg-black/50"
            onClick={() => setSelectedProject(null)}
          />
          <div className="w-full sm:w-[400px] bg-white shadow-xl flex flex-col relative animate-slideIn">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
            >
              <X size={24} />
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-green-700">
                {selectedProject.title}
              </h2>
              <p className="text-gray-600 mb-4">{selectedProject.location}</p>
              <p className="text-gray-700 leading-relaxed flex-grow">
                This project highlights our dedication to design excellence and
                quality craftsmanship. We tailor each transformation to your
                vision and environment.
              </p>
              <button
                onClick={() => (window.location.href = "/quotation")}
                className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Slide-in Animation */}
      <style>
        {`
          @keyframes slideIn {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
          .animate-slideIn {
            animation: slideIn 0.3s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default ProjectsCom;
