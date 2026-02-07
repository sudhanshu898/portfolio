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
      description:
        "An educational game focused on teaching children about their fundamental rights through interactive gameplay and engaging activities.",
      tech: ["Game Development", "Education", "Interactive"],
      github: "https://github.com/sudhanshu898/ChildRightsEduGame/tree/main/project",
      live: null, // ❗ FIXED
      image: ChildRightsImage,
    },
    {
      title: "Fashion Store - MERN E-Commerce",
      description:
        "A full-stack e-commerce platform for fashion retail with shopping cart, user authentication, payment integration, and admin dashboard.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github:
        "https://github.com/sudhanshu898/Fashion-Store---MERN-E-Commerce-Application",
      live: "https://fashion-store-frontend-liard.vercel.app/",
      image: FashionStoreImage,
    },
    {
      title: "Advanced Page Replacement Algorithm Simulator",
      description:
        "Operating system project simulating FIFO, LRU, and Optimal page replacement algorithms with performance analysis.",
      tech: ["Operating Systems", "Algorithms", "C++"],
      github: "https://github.com/sudhanshu898/OS_Project",
      live: "https://sudhanshu898.github.io/OS_Project/",
      image: PageReplacementImage,
    },
    {
      title: "AI DIY Project Planner",
      description:
        "An AI-powered application that helps users plan and organize DIY projects with intelligent suggestions.",
      tech: ["AI", "React"],
      github: "https://github.com/sudhanshu898/DIY-Project-Planner-",
      live: "https://sudhanshu898.github.io/DIY-Project-Planner-/",
      image: AIDiyImage,
    },
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio showcasing projects, skills, and experience with smooth animations.",
      tech: ["React", "Tailwind CSS", "AOS"],
      github: "https://github.com/sudhanshu898/portfolio",
      live: "https://portfolio-vercel-cfmlo99r4.vercel.app/",
      image: PortfolioImage,
    },
    {
      title: "Simple Compiler",
      description:
        "A compiler that parses and evaluates arithmetic expressions using lexical analysis and syntax parsing.",
      tech: ["Compiler Design", "C++"],
      github:
        "https://github.com/sudhanshu898/SimpleCompiler_Arithmeti_Expression",
      live:
        "https://sudhanshu898.github.io/SimpleCompiler_Arithmeti_Expression/",
      image: SimpleCompilerImage,
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Featured <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl overflow-hidden border border-gray-700 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative group h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-slate-700 text-blue-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition-colors"
                  >
                    <FaGithub size={20} />
                    <span className="text-sm">Code</span>
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition-colors"
                    >
                      <FaExternalLinkAlt size={18} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


