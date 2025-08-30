import React from "react";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import WorkSessionVideos from "../components/WorkSessionVideos";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <WorkSessionVideos />
      <Testimonials />
    </div>
  );
};

export default Home;
