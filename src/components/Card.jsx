import React from "react";

const categoryColors = {
  gamedevelopment: "bg-purple-200 text-purple-800",
  webdevelopment: "bg-green-200 text-green-800",
};

function Card({ title, description, onClick, category }) {
  const tagColor =
    categoryColors[category.toLowerCase()] || "bg-gray-200 text-gray-800";

  return (
    <div
      onClick={onClick}
      className="bg-white p-6 rounded-xl shadow transition hover:shadow-2xl hover:ring-2 hover:ring-blue-400 cursor-pointer"
    >
      {/* Category Tag */}
      <span
        className={`inline-block ${tagColor} text-xs font-semibold px-3 py-1 rounded-full mb-3`}
      >
        {category}
      </span>

      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 line-clamp-2">{description}</p>
    </div>
  );
}

export default Card;
