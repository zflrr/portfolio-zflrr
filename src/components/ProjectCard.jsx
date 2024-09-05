// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ title, description, imgSrc, link }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden my-4 w-full max-w-4xl h-64 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">

      {/* Text Section */}
      <div className="p-4 flex flex-col justify-between w-full md:w-2/3 h-full">
        <div>
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <p className="text-white mt-2">{description}</p>
        </div>

        <div className="mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
