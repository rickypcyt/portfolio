import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects = [], title, hideImage = false }) {
  return (
    <div>
      {title && (
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} hideImage={hideImage} />
        ))}
      </div>
    </div>
  );
}
