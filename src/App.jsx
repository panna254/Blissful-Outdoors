import React from "react";
import { Routes, Route } from "react-router-dom";

// Import shared layout components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsappButton";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import QuotationForm from "./components/QuotationForm";
import SiteSurveyForm from "./components/SiteSurveyForm";
import Projects from "./pages/Projects";
import CompletedProjects from "./pages/CompletedProjects";
import InProgressProjects from "./pages/InProgressProjects";
import WhyChooseUs from "./pages/WhyChooseUs";
import Downloads from "./pages/Downloads";

// Import individual service pages
import LandscapingServices from "./pages/services/LandscapingServices";
import CabroInstallation from "./pages/services/CabroInstallation";
import CarParkingShades from "./pages/services/CarParkingShades";
import ShadeSailsCanopies from "./pages/services/ShadeSailsCanopies";
import PrivacyScreenFence from "./pages/services/PrivacyScreenFence";
import MazerasInstallation from "./pages/services/MazerasInstallation";
import ElectricFenceInstallation from "./pages/services/ElectricFenceInstallation";
import FlowersFlowerVases from "./pages/services/FlowersFlowerVases";
import PergolaDesignInstallation from "./pages/services/PergolaDesignInstallation";
import PerimeterWallConstruction from "./pages/services/PerimeterWallConstruction";
import TerrazzoFlooring from "./pages/services/TerrazzoFlooring";
import GazeboInstallation from "./pages/services/GazeboInstallation";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quotation" element={<QuotationForm />} />
          <Route path="/site-survey" element={<SiteSurveyForm />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/completed" element={<CompletedProjects />} />
          <Route path="/projects/in-progress" element={<InProgressProjects />} />
          <Route path="/about/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/about/downloads" element={<Downloads />} />
          
          {/* Individual Service Routes */}
          <Route path="/services/landscaping" element={<LandscapingServices />} />
          <Route path="/services/cabro-installation" element={<CabroInstallation />} />
          <Route path="/services/car-parking-shades" element={<CarParkingShades />} />
          <Route path="/services/shade-sails-canopies" element={<ShadeSailsCanopies />} />
          <Route path="/services/privacy-screen-fence" element={<PrivacyScreenFence />} />
          <Route path="/services/mazeras-installation" element={<MazerasInstallation />} />
          <Route path="/services/electric-fence-installation" element={<ElectricFenceInstallation />} />
          <Route path="/services/flowers-flower-vases" element={<FlowersFlowerVases />} />
          <Route path="/services/pergola-design-installation" element={<PergolaDesignInstallation />} />
          <Route path="/services/perimeter-wall-construction" element={<PerimeterWallConstruction />} />
          <Route path="/services/terrazzo-flooring" element={<TerrazzoFlooring />} />
          <Route path="/services/gazebo-installation" element={<GazeboInstallation />} />
        </Routes>
      </main>

      <Footer />
      
      {/* Floating WhatsApp Button - Available on all pages */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
