import React from "react";
import ProjectsData from "../constants/projects";
import Project from "./Project";
function Projects() {
  return (
    <section className="bg-gray-50 pt-20 pb-28 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800">Projects</h1>
          <p className="pt-2">Here's what I offer</p>
        </div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {ProjectsData.map((data) => (
            <Project
              key={data.projectName}
              description={data.description}
              iconName={data.iconName}
              iconClassName={data.iconClassName}
              projectName={data.projectName}
              url={data.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
