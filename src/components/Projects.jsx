import React from 'react';
import { PROJECTS } from '../constants/index.js';

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-8">
      <h1 className="my-20 text-center text-4xl text-white">Projects</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="w-full max-w-xs bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:bg-gray-700"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-80"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="mb-2 text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-sm text-gray-300 py-1 px-2 rounded transition-colors duration-300 hover:bg-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex justify-between">
                <a
                  href={project.visitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300"
                >
                  Visit Site
                </a>
                <a
                  href={project.documentationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors duration-300"
                >
                  Documentation
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
