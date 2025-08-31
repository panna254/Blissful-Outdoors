import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
// Import the services list from ServicesSection
import { services } from "./ServicesSection";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Collapsible state for mobile
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    "Home",
    "Who We Are",
    "What we Do",
    "Our Work",
    "Gallery",
    "Contact",
  ];

  // Scroll listener to toggle nav background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-green-50 shadow-md" : "bg-white/40 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Blissful Logo"
            className="h-10 sm:h-12 md:h-14 w-auto"
          />
          <div className="hidden sm:block">
            <span
              className={`font-bold text-lg tracking-wide ${
                isScrolled ? "text-green-800" : "text-black"
              }`}
            >
              Blissful Outdoors
            </span>
            <p
              className={`text-xs font-medium italic leading-tight ${
                isScrolled ? "text-green-600" : "text-gray-700"
              }`}
            >
              We Transform and add value to your outdoor living areas
            </p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div
          className={`hidden md:flex items-center space-x-6 font-medium ${
            isScrolled ? "text-green-800" : "text-black"
          }`}
        >
          {navLinks.map((item) => {
            // Special-case dropdown for Our Work
            if (item.toLowerCase() === "our work") {
              return (
                <div key={item} className="relative group inline-block">
                  <Link
                    to="/projects"
                    className="hover:underline underline-offset-4 decoration-green-500 transition duration-200"
                  >
                    {item}
                  </Link>
                  <div className="absolute left-0 top-full z-50 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition ease-out duration-150 bg-white shadow-lg rounded-md py-2 w-56 border border-gray-100 pointer-events-none group-hover:pointer-events-auto">
                    <Link
                      to="/projects/completed"
                      className="block px-4 py-2 text-sm hover:bg-gray-50"
                    >
                      Completed Projects
                    </Link>
                    <Link
                      to="/projects/in-progress"
                      className="block px-4 py-2 text-sm hover:bg-gray-50"
                    >
                      In progress
                    </Link>
                  </div>
                </div>
              );
            }
            // Add dropdown for What we Do (limit to 7 major services)
            if (item.toLowerCase() === "what we do") {
              return (
                <div key={item} className="relative group inline-block">
                  <Link
                    to="/services"
                    className="hover:underline underline-offset-4 decoration-green-500 transition duration-200"
                  >
                    {item}
                  </Link>
                  <div className="absolute left-0 top-full z-50 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition ease-out duration-150 bg-white shadow-lg rounded-md py-2 w-64 border border-gray-100 pointer-events-none group-hover:pointer-events-auto">
                    {services.slice(0, 7).map((service) => (
                      <Link
                        key={service.title}
                        to={`/services#${service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                        className="block px-4 py-2 text-sm hover:bg-gray-50"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            let path;
            if (item.toLowerCase() === "home") {
              path = "/";
            } else if (item.toLowerCase() === "who we are") {
              path = "/about";
            } else if (item.toLowerCase() === "what we do") {
              path = "/services";
            } else {
              path = `/${item.toLowerCase()}`;
            }
            return (
              <Link
                key={item}
                to={path}
                className="hover:underline underline-offset-4 decoration-green-500 transition duration-200"
              >
                {item}
              </Link>
            );
          })}

          <Link to="/quotation">
            <button
              className={`${
                isScrolled
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "border border-green-500 text-green-500 hover:bg-green-600 hover:text-white"
              } transition px-4 py-2 rounded-full text-sm font-semibold`}
            >
              Get a Quote
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div
          className={`${
            isScrolled ? "text-green-800" : "text-black"
          } md:hidden`}
        >
          <button onClick={toggleMenu} className="text-2xl">
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-green-900 text-white font-medium">
          {navLinks.map((item) => {
            // Mobile: collapsible Our Work
            if (item.toLowerCase() === "our work") {
              return (
                <div key={item} className="w-full flex flex-col items-center">
                  <button
                    onClick={() => setMobileWorkOpen((open) => !open)}
                    className="flex items-center justify-center w-full px-4 py-2 focus:outline-none hover:underline underline-offset-4 decoration-green-400 text-center"
                  >
                    {item}
                    <span className="ml-2">{mobileWorkOpen ? "▲" : "▼"}</span>
                  </button>
                  {mobileWorkOpen && (
                    <div className="mt-2 flex flex-col space-y-2 text-sm w-full pl-6">
                      <Link
                        to="/projects/completed"
                        onClick={() => { setMenuOpen(false); setMobileWorkOpen(false); }}
                        className="hover:underline underline-offset-4 decoration-green-400"
                      >
                        Completed Projects
                      </Link>
                      <Link
                        to="/projects/in-progress"
                        onClick={() => { setMenuOpen(false); setMobileWorkOpen(false); }}
                        className="hover:underline underline-offset-4 decoration-green-400"
                      >
                        In progress
                      </Link>
                    </div>
                  )}
                </div>
              );
            }
            // Mobile: collapsible What we Do
            if (item.toLowerCase() === "what we do") {
              return (
                <div key={item} className="w-full flex flex-col items-center">
                  <button
                    onClick={() => setMobileServicesOpen((open) => !open)}
                    className="flex items-center justify-center w-full px-4 py-2 focus:outline-none hover:underline underline-offset-4 decoration-green-400 text-center"
                  >
                    {item}
                    <span className="ml-2">{mobileServicesOpen ? "▲" : "▼"}</span>
                  </button>
                  {mobileServicesOpen && (
                    <div className="mt-2 flex flex-col space-y-2 text-sm w-full pl-6">
                      {services.slice(0, 7).map((service) => (
                        <Link
                          key={service.title}
                          to={`/services#${service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                          onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                          className="hover:underline underline-offset-4 decoration-green-400"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            let path;
            if (item.toLowerCase() === "home") {
              path = "/";
            } else if (item.toLowerCase() === "who we are") {
              path = "/about";
            } else if (item.toLowerCase() === "what we do") {
              path = "/services";
            } else {
              path = `/${item.toLowerCase()}`;
            }
            return (
              <Link
                key={item}
                to={path}
                onClick={toggleMenu}
                className="hover:underline underline-offset-4 decoration-green-400"
              >
                {item}
              </Link>
            );
          })}
          <Link to="/quotation" onClick={toggleMenu}>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition">
              Get a Quote
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
