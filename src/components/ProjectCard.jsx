import React from "react";

export default function ProjectCard({ project, hideImage = false }) {
  if (!project) return null;
  const { title, description, technologies = [], imageUrl, linkUrl } = project;

  return (
    <a
      href={linkUrl}
      className="card mini-card transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="p-3 sm:p-4 h-full flex flex-col">
        <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">{title}</h3>
        {!hideImage && (
          <div className="relative w-full h-32 sm:h-40 md:h-48 rounded-lg overflow-hidden mb-3 bg-[rgba(0,0,0,0.2)]">
            <img
              src={imageUrl}
              alt={`${title} preview`}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-contain object-center rounded-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-white/10"></div>
          </div>
        )}
        <p className="text-xs sm:text-sm text-gray-300 mb-3 flex-grow leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-0.5 bg-blue-500/15 text-blue-200 rounded-md text-xs hover:bg-blue-500/25 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
