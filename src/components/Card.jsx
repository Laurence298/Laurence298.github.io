import React, { useState } from "react";

const categoryConfig = {
  gamedevelopment: {
    color: "#456882",
    label: "Game Development"
  },
  webdevelopment: {
    color: "#234C6A",
    label: "Web Development"
  },
  appdevelopment: {
    color: "#1B3C53",
    label: "App Development"
  },
  other: {
    color: "#456882",
    label: "Other"
  },
};

function Card({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const config = categoryConfig[project.category.toLowerCase()] || categoryConfig.other;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden border border-gray-200">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                style={{ backgroundColor: config.color }}
              >
                {config.label}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-[#1B3C53] mb-2">{project.title}</h2>
            <p className="text-[#456882] text-base leading-relaxed">{project.description}</p>
          </div>
        </div>

        {/* About Section */}
        {project.about && (
          <div className="mb-4 p-4 bg-[#E3E3E3] rounded-lg">
            <h3 className="text-lg font-semibold text-[#1B3C53] mb-2">About</h3>
            <p className="text-[#456882] text-sm leading-relaxed">{project.about}</p>
          </div>
        )}

        {/* Details Section */}
        {project.details && project.details.length > 0 && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-[#1B3C53] mb-3">My Role</h3>
            <div className="space-y-2">
              {project.details.map((detail, i) => (
                <div key={i} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#234C6A] text-white text-xs flex items-center justify-center font-semibold">
                    {i + 1}
                  </span>
                  <p className="text-[#456882] text-sm flex-1 pt-0.5">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-[#1B3C53] mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#234C6A] text-white text-sm rounded-md font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Video */}
        {project.live && (
          <div className="mb-4">
            <div className="aspect-video rounded-lg overflow-hidden border border-gray-300">
              <iframe
                className="w-full h-full"
                src={project.live}
                title="Project video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
          {project.Link && (
            <a
              href={project.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#1B3C53] text-white rounded-lg hover:bg-[#234C6A] transition-colors duration-200 font-medium text-sm"
            >
              View Project →
            </a>
          )}
          {project.Demo && (
            <a
              href={project.Demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#456882] text-white rounded-lg hover:bg-[#234C6A] transition-colors duration-200 font-medium text-sm"
            >
              View Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
