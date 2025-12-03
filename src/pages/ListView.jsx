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
          px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200
          ${isActive
            ? 'bg-[#1B3C53] text-white shadow-md'
            : 'bg-white text-[#1B3C53] hover:bg-[#234C6A] hover:text-white border border-[#456882]'
          }
        `}
      >
        {label}
        <span className={`ml-2 text-xs ${isActive ? 'opacity-80' : 'opacity-60'}`}>
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
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1B3C53] mb-3">
          Projects
        </h1>
        <p className="text-[#456882] text-lg">
          Explore my work across different categories
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        <FilterButton label="All Projects" category={CATEGORIES.ALL} count={counts.all} />
        <FilterButton label="Game Development" category={CATEGORIES.GAME_DEV} count={counts.gameDev} />
        <FilterButton label="Web Development" category={CATEGORIES.WEB_DEV} count={counts.webDev} />
        <FilterButton label="App Development" category={CATEGORIES.APP_DEV} count={counts.appDev} />
        {counts.other > 0 && (
          <FilterButton label="Other" category={CATEGORIES.OTHER} count={counts.other} />
        )}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="col-span-full text-center py-16 bg-white rounded-lg shadow-sm">
            <p className="text-[#456882] text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListView;
