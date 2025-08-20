import React from "react";
import ProjectGrid from "../components/ProjectGrid";
import { webProjects, nonWebProjects } from "../data/projects";

function Projects() {
  return (
    <div className="max-w-[95%] mx-auto px-3 sm:px-4 py-6 sm:py-8 space-y-8 md:space-y-10">
      <ProjectGrid title="Web" projects={webProjects} />
      <ProjectGrid title="Non-Web" projects={nonWebProjects} hideImage />
    </div>
  );
}

export default Projects;
