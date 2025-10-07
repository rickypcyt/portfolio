import { nonWebProjects, webProjects } from "../data/projects";

import ProjectGrid from "../components/ProjectGrid";
import React from "react";

function Projects() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <ProjectGrid title="" projects={webProjects} />
      <ProjectGrid title="Non-Web" projects={nonWebProjects} hideImage />
    </div>
  );
}

export default Projects;
