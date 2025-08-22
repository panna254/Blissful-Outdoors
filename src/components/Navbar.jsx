import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
          <span
            className={`font-bold text-lg tracking-wide hidden sm:inline ${
              isScrolled ? "text-green-800" : "text-black"
            }`}
          >
            Blissful Outdoors
          </span>
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
            // Mobile: render Our Work with two sub-links
            if (item.toLowerCase() === "our work") {
              return (
                <div key={item} className="w-full flex flex-col items-center">
                  <Link
                    to="/projects"
                    onClick={toggleMenu}
                    className="hover:underline underline-offset-4 decoration-green-400"
                  >
                    {item}
                  </Link>
                  <div className="mt-2 flex flex-col space-y-2 text-sm">
                    <Link
                      to="/projects/completed"
                      onClick={toggleMenu}
                      className="hover:underline underline-offset-4 decoration-green-400"
                    >
                      Completed Projects
                    </Link>
                    <Link
                      to="/projects/in-progress"
                      onClick={toggleMenu}
                      className="hover:underline underline-offset-4 decoration-green-400"
                    >
                      In progress
                    </Link>
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
