import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <Link to="/" className="navbar-link">Ricky's Portfolio</Link>{" "}
      </div>
      <div className="navbar-links">
        <Link to="/projects" className="navbar-link">
          Projects
        </Link>
        <Link to="/about" className="navbar-link">
          About
        </Link>
        <Link to="/contact" className="navbar-link">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
