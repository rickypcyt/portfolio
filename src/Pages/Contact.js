import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";
import StarsBackground from "../StarsBackground";

function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-title">
          <Link to="/" className="navbar-link">
            Ricky's Portfolio
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/projects" className="navbar-link">
            Projects
          </Link>
          <Link to="/about" className="navbar-link">
            About
          </Link>
          <Link to="/contact" className="navbar-link" style={{ color: "khaki" }}>
            Contact
          </Link>
        </div>
      </nav>
      
      {/* Content */}
      <div className="content-container">
        <StarsBackground />
        <div className="paragraph-container">
          <p>"In this page, you'll find various means to get in touch with me, ensuring seamless communication and collaboration. Whether you prefer traditional methods like phone calls and emails or seek alternative ways to connect, such as through social media platforms, I've provided multiple avenues to reach me. Feel free to explore and utilize the contact information provided here to initiate discussions, share feedback, or inquire about any queries you may have."</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
