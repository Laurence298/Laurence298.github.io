import React, { useState } from "react";
import Card from "../components/Card";
import projects from "../constants/aboutMe.json";
import QuickCard from "../components/QuickLinkCard";

// Category mapping for consistent filtering
const CATEGORIES = {
  ALL: "All",
  GAME_DEV: "GameDevelopment",
  WEB_DEV: "WebDevelopment",
  APP_DEV: "AppDevelopment",
  OTHER: "Other"
};

function ListView() {
  const [activeFilter, setActiveFilter] = useState(CATEGORIES.ALL);

  // Filter projects based on active filter
  const filteredProjects = projects.projects.filter((project) => {
    if (activeFilter === CATEGORIES.ALL) return true;
    return project.category === activeFilter;
  });

  // Filter button component
  const FilterButton = ({ label, category, count }) => {
    const isActive = activeFilter === category;
    return (
      <button
        onClick={() => setActiveFilter(category)}
        className={`
          px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium text-xs sm:text-sm transition-all duration-200
          ${isActive
            ? 'bg-[#1B3C53] text-white shadow-md'
            : 'bg-white text-[#1B3C53] hover:bg-[#234C6A] hover:text-white border border-[#456882]'
          }
        `}
      >
        <span className="hidden sm:inline">{label}</span>
        <span className="sm:hidden">{label.replace(' Development', '').replace('All Projects', 'All')}</span>
        <span className={`ml-1 sm:ml-2 text-xs ${isActive ? 'opacity-80' : 'opacity-60'}`}>
          ({count})
        </span>
      </button>
    );
  };

  // Count projects per category
  const counts = {
    all: projects.projects.length,
    gameDev: projects.projects.filter(p => p.category === CATEGORIES.GAME_DEV).length,
    webDev: projects.projects.filter(p => p.category === CATEGORIES.WEB_DEV).length,
    appDev: projects.projects.filter(p => p.category === CATEGORIES.APP_DEV).length,
    other: projects.projects.filter(p => p.category === CATEGORIES.OTHER).length,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B3C53] mb-2 sm:mb-3">
          Projects
        </h1>
        <p className="text-[#456882] text-sm sm:text-base lg:text-lg">
          Explore my work across different categories
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="mb-6 sm:mb-8 flex flex-wrap justify-center gap-2 sm:gap-3">
        <FilterButton label="All Projects" category={CATEGORIES.ALL} count={counts.all} />
        <FilterButton label="Game Development" category={CATEGORIES.GAME_DEV} count={counts.gameDev} />
        <FilterButton label="Web Development" category={CATEGORIES.WEB_DEV} count={counts.webDev} />
        <FilterButton label="App Development" category={CATEGORIES.APP_DEV} count={counts.appDev} />
        {counts.other > 0 && (
          <FilterButton label="Other" category={CATEGORIES.OTHER} count={counts.other} />
        )}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((item) =>
            item.quickView ? (
              <QuickCard
                key={item.id}
                title={item.title}
                description={item.description}
                url={item?.Link}
                category={item.category}
              />
            ) : (
              <Card
                key={item.id}
                project={item}
              />
            )
          )
        ) : (
          <div className="col-span-full text-center py-12 sm:py-16 bg-white rounded-lg shadow-sm">
            <p className="text-[#456882] text-base sm:text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListView;
