import React from "react";

function Modal({
  isOpen,
  onClose,
  title,
  description,
  details,
  technologies,
  github,
  live,
  about,
  like,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto flex justify-center">
      {/* Modal container with 3/4 width and full height */}
      <div className="relative w-3/4 min-h-screen p-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-600 hover:text-black text-4xl font-bold"
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">{title}</h2>
          <p className="text-lg text-gray-800 mb-6 whitespace-pre-line">
            {description}
          </p>

          {about && (
            <section className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">About</h3>
              <p className="text-gray-700 mb-2 text-lg">{about}</p>
            </section>
          )}

          {details && (
            <section className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">My Role</h3>
              {details.map((detail, i) => (
                <p key={i} className="text-gray-700 text-lg mb-2">
                  <span className="font-semibold">{i + 1}. </span> {detail}
                </p>
              ))}
            </section>
          )}
          {technologies?.length > 0 && (
            <section className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-200 text-blue-800  px-3 py-1 rounded-full text-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          <section className="flex gap-6 text-xl">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                <span className="p-3 border border-blue-700 rounded hover:bg-blue-700 hover:text-white transition-colors">
                  View Project
                </span>
              </a>
            )}
            {live && (
              <iframe
                className=""
                width="560"
                height="315"
                src={live}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Modal;
