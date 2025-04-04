import React from "react";

function Projects() {
  // Web Projects
  const webProjects = [
    {
      id: 8,
      title: "Uni Tracker",
      description: "Application for managing university tasks and activities. Built with Vite.js, React, and Supabase as the backend.",
      imageUrl: "https://i.imgur.com/4COvNPH.png", // Replace with actual image
      linkUrl: "https://github.com/rickypcyt/vitejs-uni-tracker",
      technologies: ["Vite.js", "React", "Supabase", "Tailwind CSS"]
    },
    {
      id: 7,
      title: "Music4Study",
      description: "Web application for listening to music while studying, featuring different ambient sounds to improve concentration.",
      imageUrl: "https://i.imgur.com/viL95bA.png", // Replace with actual image
      linkUrl: "https://github.com/rickypcyt/music4study",
      technologies: ["React", "JavaScript", "CSS"]
    },
    {
      id: 6,
      title: "ThreeJS Playground",
      description: "Utilizes ThreeJS to render 3D models. Allows to change objects, color and activate/deactivate border. Also you can zoom in and out.",
      imageUrl: "https://i.imgur.com/opQTIiK.png",
      linkUrl: "https://threejsplayground-nb48.vercel.app/",
      technologies: ["React", "ThreeJS", "JavaScript"]
    },
    {
      id: 5,
      title: "Matrix Rain",
      description: "Matrix Rain is a web application that displays a visual effect inspired by the iconic code rain sequence from The Matrix movie.",
      imageUrl: "https://i.imgur.com/XPROZe3.png",
      linkUrl: "https://matrixrain.vercel.app/",
      technologies: ["React", "JavaScript", "CSS"]
    },
    {
      id: 4,
      title: "Fallout Pip Boy Terminal",
      description: "Recreation of a Fallout Pip Boy device with interactive terminal. Allows to create, view and delete entries.",
      imageUrl: "https://i.imgur.com/XcvspyJ.png",
      linkUrl: "https://falloutportfolioterminal.vercel.app/",
      technologies: ["React", "JavaScript", "CSS"]
    },
    {
      id: 3,
      title: "Flappy Bird Clone",
      description: "Simple clone of the popular game Flappy Bird, implemented using React.",
      imageUrl: "https://i.imgur.com/ktsTByE.png",
      linkUrl: "https://flappybird-psi.vercel.app/",
      technologies: ["React", "JavaScript", "HTML5 Canvas"]
    },
    {
      id: 2,
      title: "Personal Blog",
      description: "A blog where I share my thoughts, experiences, and reflections on life and coding.",
      imageUrl: "https://i.imgur.com/QFwEvte.png",
      linkUrl: "https://personal-blog2a.vercel.app/",
      technologies: ["React", "JavaScript", "CSS"]
    },
    {
      id: 1,
      title: "Image Uploader Collage Style",
      description: "Upload images and enjoy seeing them creatively arranged in captivating collages.",
      imageUrl: "https://i.imgur.com/2Pscv75.png?1",
      linkUrl: "https://webmural.vercel.app/",
      technologies: ["React", "JavaScript", "CSS"]
    },
  ];

  // Non-Web Projects
  const nonWebProjects = [
    {
      id: 5,
      title: "C++ Game Engine",
      description: "3D game engine developed from scratch using C++ and SDL2. Includes physics system, rendering, and resource management.",
      imageUrl: "https://i.imgur.com/placeholder.png", // Replace with actual image
      linkUrl: "https://github.com/rickypcyt/CppGameEngine",
      technologies: ["C++", "SDL2", "OpenGL"]
    },
    {
      id: 4,
      title: "Internal Audio Wav Recorder",
      description: "Application for recording internal system audio in WAV format. Useful for capturing sound from applications and games.",
      imageUrl: "https://i.imgur.com/placeholder.png", // Replace with actual image
      linkUrl: "https://github.com/rickypcyt/InternalAudioWavRecorder",
      technologies: ["C++", "Windows API", "WAV"]
    },
    {
      id: 3,
      title: "Python Mercadona Script",
      description: "Python script for automating Mercadona shopping. Includes GUI and product management features.",
      imageUrl: "https://i.imgur.com/placeholder.png", // Replace with actual image
      linkUrl: "https://github.com/rickypcyt/ScriptPythonMercadona",
      technologies: ["Python", "Selenium", "Tkinter"]
    },

  ];

  const ProjectCard = ({ project }) => (
    <a 
      href={project.linkUrl} 
      className="card hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <div className="p-6 h-full flex flex-col">
        <h3 className="text-xl font-bold mb-4 text-white text-center">{project.title}</h3>
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );

  return (
    <div className="space-y-12">
      {/* Web Projects Section */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Web</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Non-Web Projects Section */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Non-Web</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nonWebProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
