import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTiktok } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Who We Are", path: "/about" },
    { name: "What We Do", path: "/services" },
    { name: "Our Work", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Get Quote", path: "/quotation" },
  ];

  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/blissfuloutdoorsolutions", icon: FaFacebook },
    { name: "Instagram", url: "https://www.instagram.com/blissful_outdoorsolutions/", icon: FaInstagram },
    { name: "YouTube", url: "https://www.youtube.com/@blissfuloutdoorsolutions", icon: FaYoutube },
    { name: "TikTok", url: "https://www.tiktok.com/@blissfuloutdoorsolutions", icon: FaTiktok },
    { name: "WhatsApp", url: "https://wa.me/254715812430", icon: FaWhatsapp },
  ];

  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info & Logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={logo}
                alt="Blissful Outdoor Solutions Logo"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold text-green-400">
                  Blissful Outdoor Solutions
                </h3>
                <p className="text-sm text-gray-300">
                  Transforming outdoor living areas since 2015
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              We transform and add value to your outdoor living areas with 
              professional landscaping, construction, and beautification services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  to="/services/landscaping"
                  className="hover:text-green-400 transition-colors"
                >
                  Landscaping
                </Link>
              </li>
              <li>
                <Link
                  to="/services/car-parking-shades"
                  className="hover:text-green-400 transition-colors"
                >
                  Car Parking Shades
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cabro-installation"
                  className="hover:text-green-400 transition-colors"
                >
                  Cabro Installation
                </Link>
              </li>
              <li>
                <Link
                  to="/services/shade-sails-canopies"
                  className="hover:text-green-400 transition-colors"
                >
                  Shade Sails & Canopies
                </Link>
              </li>
              <li>
                <Link
                  to="/services/privacy-screen-fence"
                  className="hover:text-green-400 transition-colors"
                >
                  Privacy Screens
                </Link>
              </li>
              <li>
                <Link
                  to="/services/electric-fence-installation"
                  className="hover:text-green-400 transition-colors"
                >
                  Electric Fences
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-4">
              Connect With Us
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-300 text-sm flex items-center space-x-2">
                  <FaEnvelope className="text-green-400 text-sm" />
                  <a
                    href="mailto:info@blissfuloutdoorsolutions.com"
                    className="hover:text-green-400 transition-colors"
                  >
                    info@blissfuloutdoorsolutions.com
                  </a>
                </p>
              </div>
              <div>
                <p className="text-gray-300 text-sm flex items-center space-x-2">
                  <FaPhone className="text-green-400 text-sm" />
                  <a href="tel:+254715812430" className="hover:text-green-400 transition-colors">
                    +254 715 812 430
                  </a>
                </p>
              </div>
              <div>
                <p className="text-gray-300 text-sm flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-green-400 text-sm" />
                  <span>Ruiru Membley, Northern Bypass</span>
                </p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-4">
              <h5 className="text-sm font-medium text-green-400 mb-3">
                Follow Us
              </h5>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      className="text-xl text-gray-300 hover:text-green-400 transition-colors duration-200"
                      title={social.name}
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-6">
      <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {currentYear} Blissful Outdoor Solutions. All rights reserved.
        </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
            Privacy Policy
          </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Terms of Service
          </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
