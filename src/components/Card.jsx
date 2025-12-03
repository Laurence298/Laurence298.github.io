import React from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const config = categoryConfig[project.category.toLowerCase()] || categoryConfig.other;

  const handleClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden border border-gray-200 cursor-pointer group h-full flex flex-col"
    >
      <div className="p-4 sm:p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="mb-3 sm:mb-4 flex-1">
          <span
            className="inline-block px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold text-white mb-2 sm:mb-3"
            style={{ backgroundColor: config.color }}
          >
            {config.label}
          </span>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1B3C53] mb-1.5 sm:mb-2 group-hover:text-[#234C6A] transition-colors line-clamp-2">
            {project.title}
          </h2>
          <p className="text-[#456882] text-sm sm:text-base leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Technologies Preview */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-3 sm:mb-4">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.technologies.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 sm:px-2 sm:py-1 bg-[#E3E3E3] text-[#1B3C53] text-xs rounded font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-0.5 sm:px-2 sm:py-1 bg-[#E3E3E3] text-[#456882] text-xs rounded font-medium">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Click to view more */}
        <div className="pt-3 sm:pt-4 border-t border-gray-200 mt-auto">
          <span className="text-[#234C6A] text-xs sm:text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
            View Details
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
