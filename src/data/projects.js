// Centralized project data
// Edit this file to add/remove projects. Images can live in public/images

export const webProjects = [
  {
    id: 9,
    title: "Macroview",
    description:
      "Finance website that uses the IMF and World Bank APIs to build a comparative table and a country-specific dashboard.",
    imageUrl: "/images/macroviewpng.png", // Add this image to public/images or replace with an external URL
    linkUrl: "https://macroview.vercel.app/",
    technologies: ["Next.js", "React", "Tailwind CSS", "IMF API", "World Bank API"],
  },
  {
    id: 8,
    title: "Uni Tracker",
    description:
      "Application for managing university tasks and activities. Built with Vite.js, React, and Supabase as the backend.",
    imageUrl: "/images/utthumb.png",
    linkUrl: "https://unitracker.me",
    technologies: ["Vite.js", "React", "Supabase", "Tailwind CSS"],
  },
  {
    id: 7,
    title: "Music4Study",
    description:
      "Web application for listening to music while studying, featuring different ambient sounds to improve concentration.",
    imageUrl: "https://i.imgur.com/viL95bA.png",
    linkUrl: "https://music4study.vercel.app/",
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    id: 6,
    title: "ThreeJS Playground",
    description:
      "Utilizes ThreeJS to render 3D models. Allows to change objects, color and activate/deactivate border. Also you can zoom in and out.",
    imageUrl: "https://i.imgur.com/opQTIiK.png",
    linkUrl: "https://threejsplayground-nb48.vercel.app/",
    technologies: ["React", "ThreeJS", "JavaScript"],
  },
  {
    id: 5,
    title: "Matrix Rain",
    description:
      "Matrix Rain is a web application that displays a visual effect inspired by the iconic code rain sequence from The Matrix movie.",
    imageUrl: "https://i.imgur.com/XPROZe3.png",
    linkUrl: "https://matrixrain.vercel.app/",
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    id: 4,
    title: "Fallout Pip Boy Terminal",
    description:
      "Recreation of a Fallout Pip Boy device with interactive terminal. Allows to create, view and delete entries.",
    imageUrl: "https://i.imgur.com/XcvspyJ.png",
    linkUrl: "https://falloutportfolioterminal.vercel.app/",
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    id: 3,
    title: "Flappy Bird Clone",
    description:
      "Simple clone of the popular game Flappy Bird, implemented using React.",
    imageUrl: "https://i.imgur.com/ktsTByE.png",
    linkUrl: "https://flappybird-psi.vercel.app/",
    technologies: ["React", "JavaScript", "HTML5 Canvas"],
  },
  {
    id: 2,
    title: "Personal Blog",
    description:
      "A blog where I share my thoughts, experiences, and reflections on life and coding.",
    imageUrl: "https://i.imgur.com/QFwEvte.png",
    linkUrl: "https://personal-blog2a.vercel.app/",
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    id: 1,
    title: "Image Uploader Collage Style",
    description:
      "Upload images and enjoy seeing them creatively arranged in captivating collages.",
    imageUrl: "https://i.imgur.com/2Pscv75.png?1",
    linkUrl: "https://webmural.vercel.app/",
    technologies: ["React", "JavaScript", "CSS"],
  },
];

export const nonWebProjects = [
  {
    id: 5,
    title: "C++ Game Engine",
    description:
      "3D game engine developed from scratch using C++ and SDL2. Includes physics system, rendering, and resource management.",
    imageUrl: "https://i.imgur.com/placeholder.png",
    linkUrl: "https://github.com/rickypcyt/CppGameEngine",
    technologies: ["C++", "SDL2", "OpenGL"],
  },
  {
    id: 4,
    title: "Internal Audio Wav Recorder",
    description:
      "Application for recording internal system audio in WAV format. Useful for capturing sound from applications and games.",
    imageUrl: "https://i.imgur.com/placeholder.png",
    linkUrl: "https://github.com/rickypcyt/InternalAudioWavRecorder",
    technologies: ["C++", "Windows API", "WAV"],
  },
  {
    id: 3,
    title: "Python Mercadona Script",
    description:
      "Python script for automating Mercadona shopping. Includes GUI and product management features.",
    imageUrl: "https://i.imgur.com/placeholder.png",
    linkUrl: "https://github.com/rickypcyt/ScriptPythonMercadona",
    technologies: ["Python", "Selenium", "Tkinter"],
  },
];
