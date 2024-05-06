import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar"; // Importa el componente Navbar
import StarsBackground from "../StarsBackground";
import "./Projects.css";

function Home() {
  // Definir información de proyectos
  const projects = [
    {
      id: 1,
      title: "Personal Blog",
      description: "A digital place where I share my thoughts, experiences, and reflections on life, coding, and the world around me.",
      imageUrl: "https://i.imgur.com/QFwEvte.png",
      linkUrl: "https://personal-blog2a.vercel.app/" // Cambia esto a la URL deseada para el proyecto 1
    },
    {
      id: 2,
      title: "Image Uploader Collage Style",
      description: "Upload images and enjoy seeing them creatively arranged in captivating collages.",
      imageUrl: "https://i.imgur.com/2Pscv75.png?1",
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
        <Navbar /> {/* Integra el componente Navbar */}
      </div>
      {/* Agregar un div contenedor para el contenido */}
      <div className="content-container">
        <StarsBackground />
        <div className="paragraph-container3">
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
