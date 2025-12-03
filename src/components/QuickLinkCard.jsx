import React from "react";

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

function QuickCard({ title, description, url, category }) {
  const config = categoryConfig[category.toLowerCase()] || categoryConfig.other;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden border-2 border-[#456882] hover:border-[#234C6A] group h-full"
    >
      <div className="p-4 sm:p-6 flex flex-col h-full">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-2 sm:mb-3">
          <span
            className="px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold text-white"
            style={{ backgroundColor: config.color }}
          >
            {config.label}
          </span>
          <span className="px-2 py-0.5 sm:px-2 sm:py-1 bg-[#E3E3E3] text-[#1B3C53] text-xs font-semibold rounded">
            External Link
          </span>
        </div>

        <h2 className="text-lg sm:text-xl font-bold text-[#1B3C53] mb-1.5 sm:mb-2 group-hover:text-[#234C6A] transition-colors line-clamp-2">
          {title}
        </h2>
        <p className="text-[#456882] text-sm leading-relaxed mb-2 sm:mb-3 flex-1 line-clamp-3">
          {description}
        </p>

        <div className="text-[#234C6A] text-xs sm:text-sm font-medium flex items-center gap-1 mt-auto">
          Visit site <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </a>
  );
}

export default QuickCard;
