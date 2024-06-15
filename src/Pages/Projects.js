import React from "react";
import "./Projects.css";

function Home() {
  // Definir información de proyectos
  const projects = [
    {
      id: 6,
      title: "ThreeJS Playground",
      description: "Utilizes ThreeJS to render 3D models. Allows to change objects, color and activate/deactivate border. Also you can zoom in and out.",
      imageUrl: "https://i.imgur.com/opQTIiK.png",
      linkUrl: "https://threejsplayground-nb48.vercel.app/" // Cambia esto a la URL deseada para el proyecto 1
    },
    {
      id: 5,
      title: "Matrix Rain",
      description: "Matrix Rain is a web application that displays a visual effect inspired by the iconic code rain sequence from The Matrix movie.",
      imageUrl: "https://i.imgur.com/XPROZe3.png",
      linkUrl: "https://matrixrain.vercel.app/" // Cambia esto a la URL deseada para el proyecto 1
    },
    {
      id: 4,
      title: "Fallout Pip Boy Terminal",
      description: "Recreation of a Fallout Pip Boy device with interactive terminal. Allows to create, view and delete entries.",
      imageUrl: "https://i.imgur.com/XcvspyJ.png",
      linkUrl: "https://falloutportfolioterminal.vercel.app/" // Cambia esto a la URL deseada para el proyecto 1
    },
    {
      id: 3,
      title: "Flappy Bird Clone",
      description: "Simple clone of the popular game Flappy Bird, implemented using React.",
      imageUrl: "https://i.imgur.com/ktsTByE.png",
      linkUrl: "https://flappybird-psi.vercel.app/" // Cambia esto a la URL deseada para el proyecto 1
    },
    {
      id: 2,
      title: "Personal Blog",
      description: "A blog where I share my thoughts, experiences, and reflections on life and coding.",
      imageUrl: "https://i.imgur.com/QFwEvte.png",
      linkUrl: "https://personal-blog2a.vercel.app/" // Cambia esto a la URL deseada para el proyecto 1
    },
    {
      id: 1,
      title: "Image Uploader Collage Style",
      description: "Upload images and enjoy seeing them creatively arranged in captivating collages.",
      imageUrl: "https://i.imgur.com/2Pscv75.png?1",
      linkUrl: "https://webmural.vercel.app/" // Cambia esto a la URL deseada para el proyecto 2
    },
  ];

  return (
    <div>
      {/* Agregar un div contenedor para el contenido */}
      <div className="content-container">
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
