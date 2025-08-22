import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Blissful Outdoors Solutions. All
          rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="mailto:info@blissful.co.ke" className="hover:underline">
            info@blissful.co.ke
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
