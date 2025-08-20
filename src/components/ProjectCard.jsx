import React from "react";

export default function ProjectCard({ project, hideImage = false }) {
  if (!project) return null;
  const { title, description, technologies = [], imageUrl, linkUrl } = project;

  return (
    <a
      href={linkUrl}
      className="card mini-card transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="p-3 sm:p-4 md:p-6 h-full flex flex-col">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-white text-center">{title}</h3>
        {!hideImage && (
          <div className="relative w-full h-40 sm:h-52 md:h-60 rounded-lg overflow-hidden mb-4 bg-[rgba(0,0,0,0.8)] backdrop-blur-sm">
            <img
              src={imageUrl}
              alt={`${title} preview`}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-contain object-center rounded-lg drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
            />
            {/* Visible border overlay to avoid being clipped by parent overflow */}
            <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-white/15"></div>
          </div>
        )}
        <p className="text-sm sm:text-base text-gray-300 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
