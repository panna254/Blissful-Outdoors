import React from "react";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <ServicesSection />
      {/* Add more sections like GalleryGrid, Testimonials, etc. */}
      <Testimonials />
    </div>
  );
};

export default Home;
