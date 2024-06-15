import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <RouterLink to="/" className="navbar-link">Ricky's Portfolio</RouterLink>
      </div>
      <div className="navbar-links">
        <ScrollLink
          to="about-section"
          smooth={true}
          duration={900}
          className="navbar-link"
        >
          About
        </ScrollLink>
        <ScrollLink
          to="contact-section"
          smooth={true}
          duration={900}
          className="navbar-link"
        >
          Contact
        </ScrollLink>
      </div>
    </nav>
  );
}

export default Navbar;
