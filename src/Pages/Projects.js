import React from "react";

function Projects() {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <a 
          href={project.linkUrl} 
          key={project.id} 
          className="card hover:scale-105 transition-transform duration-200"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4 text-white">{project.title}</h3>
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-300">{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Projects;
