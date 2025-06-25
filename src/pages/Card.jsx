import React from "react";

function Card({ title, description, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white p-6 rounded-xl shadow transition hover:shadow-2xl hover:ring-2 hover:ring-blue-400 cursor-pointer"
    >
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 line-clamp-2">{description}</p>
    </div>
  );
}

export default Card;
