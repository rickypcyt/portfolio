import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import StarsBackground from "./StarsBackground";

function Home() {
  return (
    <div>
      {/* Agregar un div contenedor para el navbar y el contenido */}
      <div>
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
      </div>
      {/* Agregar un div contenedor para el contenido */}
      <div className="content-container">
        <StarsBackground />
        <div className="paragraph-container">
          <p>
            Hey there! I'm Ricky, and welcome to my portfolio. Here, I showcase the array of projects I've been passionately coding over the years. From my earliest ventures into programming to my most recent endeavors, this portfolio encapsulates my journey and growth as a developer. Each project represents a unique challenge I've tackled, whether it's crafting sleek user interfaces, optimizing algorithms for efficiency, or diving into the intricacies of backend development. Join me on this journey through my digital creations, and let's explore the world of code together.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
