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
  link2,
  like,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-4xl bg-gradient-to-br from-purple-900/95 to-indigo-900/95 backdrop-blur-md border-2 border-purple-500/30 shadow-2xl shadow-purple-900/50">
        {/* Close button */}
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-slate-300 hover:text-white hover:bg-purple-700/50 hover:rotate-90 transition-all duration-300"
        >
          ✕
        </button>

        {/* Content */}
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
          {title}
        </h2>

        <p className="text-lg text-slate-300 mb-6 whitespace-pre-line leading-relaxed">
          {description}
        </p>

        {about && (
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-3 text-purple-300 flex items-center gap-2">
              <span>📖</span> About
            </h3>
            <p className="text-slate-300 text-base leading-relaxed bg-purple-900/30 p-4 rounded-lg border border-purple-500/20">
              {about}
            </p>
          </div>
        )}

        {details && (
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-3 text-purple-300 flex items-center gap-2">
              <span>⚔️</span> My Role
            </h3>
            <div className="space-y-3">
              {details.map((detail, i) => (
                <div key={i} className="flex gap-3 bg-purple-900/30 p-3 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-colors">
                  <span className="badge badge-primary badge-sm mt-1">{i + 1}</span>
                  <p className="text-slate-300 text-base flex-1">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {technologies?.length > 0 && (
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-3 text-purple-300 flex items-center gap-2">
              <span>🔮</span> Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <div
                  key={i}
                  className="badge badge-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-lg hover:scale-110 transition-transform"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action buttons and video */}
        <div className="flex flex-wrap gap-4 items-start">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary gap-2 shadow-lg shadow-purple-500/50 hover:scale-105 transition-transform"
            >
              <span>🔗</span>
              View Project
            </a>
          )}
          {link2 && (
            <a
              href={link2}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary gap-2 shadow-lg shadow-pink-500/50 hover:scale-105 transition-transform"
            >
              <span>🎮</span>
              Demo
            </a>
          )}
        </div>

        {live && (
          <div className="mt-6">
            <div className="aspect-video rounded-lg overflow-hidden border-2 border-purple-500/30 shadow-2xl">
              <iframe
                className="w-full h-full"
                src={live}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
      <div className="modal-backdrop" onClick={onClose}>
        <button className="cursor-default">close</button>
      </div>
    </div>
  );
}

export default Modal;

