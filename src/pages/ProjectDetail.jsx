import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../constants/aboutMe.json";

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

function ProjectDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const project = projects.projects.find(p => p.id === parseInt(id));

    if (!project) {
        return (
            <div className="min-h-screen bg-[#E3E3E3] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#1B3C53] mb-4">Project Not Found</h1>
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-3 bg-[#1B3C53] text-white rounded-lg hover:bg-[#234C6A] transition-colors"
                    >
                        ← Back to Home
                    </button>
                </div>
            </div>
        );
    }

    const config = categoryConfig[project.category.toLowerCase()] || categoryConfig.other;

    return (
        <div className="min-h-screen bg-[#E3E3E3] py-8">
            <div className="max-w-4xl mx-auto px-4">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    className="mb-6 px-4 py-2 bg-white text-[#1B3C53] rounded-lg hover:bg-[#234C6A] hover:text-white transition-colors duration-200 font-medium flex items-center gap-2 border border-[#456882]"
                >
                    ← Back to Projects
                </button>

                {/* Project Content */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-8">
                        {/* Header */}
                        <div className="mb-6">
                            <span
                                className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white mb-4"
                                style={{ backgroundColor: config.color }}
                            >
                                {config.label}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-[#1B3C53] mb-4">
                                {project.title}
                            </h1>
                            <p className="text-xl text-[#456882] leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        {/* About Section */}
                        {project.about && (
                            <div className="mb-8 p-6 bg-[#E3E3E3] rounded-lg">
                                <h2 className="text-2xl font-bold text-[#1B3C53] mb-3">About</h2>
                                <p className="text-[#456882] text-base leading-relaxed">
                                    {project.about}
                                </p>
                            </div>
                        )}

                        {/* My Role Section */}
                        {project.details && project.details.length > 0 && (
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-[#1B3C53] mb-4">My Role</h2>
                                <div className="space-y-3">
                                    {project.details.map((detail, i) => (
                                        <div key={i} className="flex gap-4">
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#234C6A] text-white text-sm flex items-center justify-center font-bold">
                                                {i + 1}
                                            </span>
                                            <p className="text-[#456882] text-base flex-1 pt-1 leading-relaxed">
                                                {detail}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Technologies */}
                        {project.technologies && project.technologies.length > 0 && (
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-[#1B3C53] mb-4">Technologies Used</h2>
                                <div className="flex flex-wrap gap-3">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 bg-[#234C6A] text-white text-base rounded-lg font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Video */}
                        {project.live && (
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-[#1B3C53] mb-4">Demo Video</h2>
                                <div className="aspect-video rounded-lg overflow-hidden border-2 border-gray-300 shadow-md">
                                    <iframe
                                        className="w-full h-full"
                                        src={project.live}
                                        title="Project demo video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
                            {project.Link && (
                                <a
                                    href={project.Link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-[#1B3C53] text-white rounded-lg hover:bg-[#234C6A] transition-colors duration-200 font-semibold text-base"
                                >
                                    View Project →
                                </a>
                            )}
                            {project.Demo && (
                                <a
                                    href={project.Demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-[#456882] text-white rounded-lg hover:bg-[#234C6A] transition-colors duration-200 font-semibold text-base"
                                >
                                    View Demo →
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;
