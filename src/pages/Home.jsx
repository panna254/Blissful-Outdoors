import React from "react";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import WorkSessionVideos from "../components/WorkSessionVideos";
import Testimonials from "../components/Testimonials";
import SEOHelmet from "../components/SEOHelmet";
import StructuredData from "../components/StructuredData";

const Home = () => {
  return (
    <div>
      <SEOHelmet />
      <StructuredData />
      <Hero />
      <ServicesSection />
      <WorkSessionVideos />
      <Testimonials />
    </div>
  );
};

export default Home;
