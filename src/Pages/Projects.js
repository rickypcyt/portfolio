import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";
import StarsBackground from "../StarsBackground";
import "./Projects.css";

function Home() {
  // Definir información de proyectos
  const projects = [
    {
      id: 1,
      title: "Personal Blog",
      description: "A digital place where I share my thoughts, experiences, and reflections on life, coding, and the world around me.",
      imageUrl: "https://i.imgur.com/HleDYr0.png",
      linkUrl: "https://personal-blog2a.vercel.app/" // Cambia esto a la URL deseada para el proyecto 1
    },
    {
      id: 2,
      title: "Image Uploader Collage Style",
      description: "Upload images and enjoy seeing them creatively arranged in captivating collages.",
      imageUrl: "https://i.imgur.com/2Pscv75.png",
      linkUrl: "https://webmural.vercel.app/" // Cambia esto a la URL deseada para el proyecto 2
    },
    {
      id: 3,
      title: "Image Uploader Collage Style",
      description: "Upload images and enjoy seeing them creatively arranged in captivating collages.",
      imageUrl: "https://i.imgur.com/NfapX14.png",
      linkUrl: "/uploader" // Cambia esto a la URL deseada para el proyecto 3
    },
    {
      id: 4,
      title: "Image Uploader Collage Style",
      description: "Upload images and enjoy seeing them creatively arranged in captivating collages.",
      imageUrl: "https://i.imgur.com/NfapX14.png",
      linkUrl: "/uploader" // Cambia esto a la URL deseada para el proyecto 4
    },
    // Agrega más proyectos si es necesario
  ];

  return (
    <div>
      {/* Agregar un div contenedor para el navbar y el contenido */}
      <div>
        <nav className="navbar">
          <div className="navbar-title">
            <Link to="/" className="navbar-link">
              Ricky's Portfolio
            </Link>{" "}
          </div>
          <div className="navbar-links">
            <Link to="/projects" className="navbar-link-projects">
              Projects
            </Link>
            <Link to="/about" className="navbar-link">
              About
            </Link>
            <Link
              to="/contact"
              className="navbar-link"
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
      {/* Agregar un div contenedor para el contenido */}
      <div className="content-container">
        <StarsBackground />
        <div className="paragraph-container">
          {projects.map((project) => (
            <a href={project.linkUrl} key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <p className="project-description">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
