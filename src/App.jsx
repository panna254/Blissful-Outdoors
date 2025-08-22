import React from "react";
import { Routes, Route } from "react-router-dom";

// Import shared layout components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Quotation from "./pages/Quotation";
import Projects from "./pages/Projects";
import CompletedProjects from "./pages/CompletedProjects";
import InProgressProjects from "./pages/InProgressProjects";

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
          <Route path="/quotation" element={<Quotation />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/completed" element={<CompletedProjects />} />
          <Route path="/projects/in-progress" element={<InProgressProjects />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
