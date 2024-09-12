// src/components/Projects.jsx
import React from 'react';
import { PROJECTS } from '../constants/index';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-center">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
