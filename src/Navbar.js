import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-sm">
      <div className="max-w-[95%] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <RouterLink 
              to="/" 
              className="text-xl font-bold text-white hover:text-blue-400 transition-colors duration-200"
            >
              Ricky's Portfolio
            </RouterLink>
          </div>
          <div className="flex space-x-8">
            <ScrollLink
              to="home-section"
              smooth={true}
              duration={900}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about-section"
              smooth={true}
              duration={900}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="projects-section"
              smooth={true}
              duration={900}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact-section"
              smooth={true}
              duration={900}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer"
            >
              Contact
            </ScrollLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
