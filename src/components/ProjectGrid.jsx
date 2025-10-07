import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects = [], title, hideImage = false }) {
  return (
    <div className="space-y-4 sm:space-y-5">
      {title && <h2 className="card-title">{title}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} hideImage={hideImage} />
        ))}
      </div>
    </div>
  );
}
