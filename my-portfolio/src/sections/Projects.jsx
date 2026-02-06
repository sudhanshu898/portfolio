import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ChildRightsImage from '../assets/childrightedu.png';
import FashionStoreImage from '../assets/FashionStore.png';
import PageReplacementImage from '../assets/PageReplacement.png';
import AIDiyImage from '../assets/AI_DIY_Project.png';
import PortfolioImage from '../assets/Portfolio.png';
import SimpleCompilerImage from '../assets/SimpleCompiler.png';

const Projects = () => {
    const projects = [
        {
            title: "ChildRightsEduGame",
            description: "An educational game focused on teaching children about their fundamental rights through interactive gameplay and engaging activities.",
            tech: ["Game Development", "Education", "Interactive"],
            github: "https://github.com/sudhanshu898/ChildRightsEduGame/tree/main/project",
            live: "#",
            image: ChildRightsImage
        },
        {
            title: "Fashion Store - MERN E-Commerce",
            description: "A full-stack e-commerce platform for fashion retail with shopping cart, user authentication, payment integration, and admin dashboard.",
            tech: ["MongoDB", "Express", "React", "Node.js"],
            github: "https://github.com/sudhanshu898/Fashion-Store---MERN-E-Commerce-Application/tree/main/OneDrive/Attachments/Desktop/MERNStackeCommerce",
            live: "#",
            image: FashionStoreImage
        },
        {
            title: "Advanced Page Replacement Algorithm Simulator",
            description: "Operating system project simulating various page replacement algorithms including FIFO, LRU, and Optimal with performance analysis.",
            tech: ["Operating Systems", "Algorithms", "C++"],
            github: "https://github.com/sudhanshu898/OS_Project",
            live: "https://sudhanshu898.github.io/OS_Project/",
            image: PageReplacementImage
        },
        {
            title: "AI DIY Project Planner",
            description: "An AI-powered application that helps users plan and organize DIY projects with intelligent suggestions and step-by-step guidance.",
            tech: ["AI", "React", "Planning Tools"],
            github: "https://github.com/sudhanshu898/DIY-Project-Planner-",
            live: "https://sudhanshu898.github.io/DIY-Project-Planner-/",
            image: AIDiyImage
        },
        {
            title: "Portfolio Website",
            description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience with smooth animations and clean design.",
            tech: ["React", "Tailwind CSS", "AOS"],
            github: "https://github.com/sudhanshu898/portfolio",
            live: "#",
            image: PortfolioImage
        },
        {
            title: "Simple Compiler - Arithmetic Expression",
            description: "A compiler implementation that parses and evaluates arithmetic expressions, demonstrating lexical analysis and syntax parsing concepts.",
            tech: ["Compiler Design", "C++", "Parsing"],
            github: "https://github.com/sudhanshu898/SimpleCompiler_Arithmeti_Expression",
            live: "https://sudhanshu898.github.io/SimpleCompiler_Arithmeti_Expression/",
            image: SimpleCompilerImage
        }
    ];

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    data-aos="fade-up"
                    className="text-3xl font-bold text-center mb-16"
                >
                    Featured <span className="text-blue-500">Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                            className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
                        >
                            <div className="h-48 relative overflow-hidden group bg-gray-900">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/10 rounded-full text-white backdrop-blur-sm hover:scale-110 transition-transform active:scale-95"
                                        aria-label={`View ${project.title} on GitHub`}
                                    >
                                        <FaGithub size={20} />
                                    </a>
                                    {project.live !== "#" && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white/10 rounded-full text-white backdrop-blur-sm hover:scale-110 transition-transform active:scale-95"
                                            aria-label={`View ${project.title} live demo`}
                                        >
                                            <FaExternalLinkAlt size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 bg-slate-700 text-blue-400 text-xs rounded-full font-medium">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    data-aos="fade-in"
                    data-aos-delay="600"
                    className="mt-16 text-center"
                >
                    <a
                        href="https://github.com/sudhanshu898"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        View All Projects on GitHub <FaExternalLinkAlt className="ml-2 text-xs" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;