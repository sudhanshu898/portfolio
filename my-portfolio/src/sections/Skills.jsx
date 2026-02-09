import React from "react";
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaPhp,
  FaNodeJs, FaLinux, FaGitAlt, FaGithub, FaFigma, FaBrain,
  FaCode, FaServer, FaTools, FaLaptopCode,
  FaLightbulb, FaUsers, FaComments, FaProjectDiagram, FaRocket
} from "react-icons/fa";

import {
  SiThreedotjs, SiTailwindcss, SiRedux, SiCplusplus, SiC,
  SiExpress, SiMysql, SiOpenai, SiMongodb,
  SiCanva, SiAutodesk
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "border-blue-500",
      bgGradient: "bg-gradient-to-br from-blue-900/20 to-blue-900/5",
      icon: <FaLaptopCode className="text-2xl" />,
      skills: [
        { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
        { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
        { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-400" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
        { name: "Three.js", icon: <SiThreedotjs />, color: "text-white" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-300" },
        { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
      ],
    },
    {
      title: "Languages",
      color: "border-blue-500",
      bgGradient: "bg-gradient-to-br from-blue-900/20 to-blue-900/5",
      icon: <FaCode className="text-2xl" />,
      skills: [
        { name: "C++", icon: <SiCplusplus />, color: "text-blue-400" },
        { name: "C", icon: <SiC />, color: "text-gray-400" },
        { name: "Python", icon: <FaPython />, color: "text-yellow-400" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
        { name: "Java", icon: <FaJava />, color: "text-red-400" },
        { name: "PHP", icon: <FaPhp />, color: "text-indigo-400" },
      ],
    },
    {
      title: "Backend & Services",
      color: "border-blue-500",
      bgGradient: "bg-gradient-to-br from-blue-900/20 to-blue-900/5",
      icon: <FaServer className="text-2xl" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
        { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
        { name: "MySQL", icon: <SiMysql />, color: "text-blue-300" },
        { name: "OpenAI APIs", icon: <SiOpenai />, color: "text-green-400" },
      ],
    },
    {
      title: "Soft Skills",
      color: "border-blue-500",
      bgGradient: "bg-gradient-to-br from-blue-900/20 to-blue-900/5",
      icon: <FaBrain className="text-2xl" />,
      skills: [
        { name: "Problem Solving", icon: <FaLightbulb />, color: "text-yellow-400" },
        { name: "Critical Thinking", icon: <FaProjectDiagram />, color: "text-blue-400" },
        { name: "Team Collaboration", icon: <FaUsers />, color: "text-green-400" },
        { name: "Communication", icon: <FaComments />, color: "text-purple-400" },
        { name: "Adaptability", icon: <FaRocket />, color: "text-pink-400" },
      ],
    },
    {
      title: "Tools & Others",
      color: "border-blue-500",
      bgGradient: "bg-gradient-to-br from-blue-900/20 to-blue-900/5",
      icon: <FaTools className="text-2xl" />,
      skills: [
        { name: "Linux", icon: <FaLinux />, color: "text-yellow-500" },
        { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
        { name: "GitHub", icon: <FaGithub />, color: "text-white" },
        { name: "VS Code", icon: <VscVscode />, color: "text-blue-500" },
        { name: "Canva", icon: <SiCanva />, color: "text-blue-400" },
        { name: "Figma", icon: <FaFigma />, color: "text-purple-500" },
        { name: "AutoCAD", icon: <SiAutodesk />, color: "text-red-400" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 mb-4 border border-purple-500/30">
            <span className="text-3xl">🚀</span>
          </div>
          <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-white mb-3">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technologies, tools, and strengths I bring to the table
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" data-aos="fade-up">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 120}
              className={`group relative rounded-2xl border ${category.color} ${category.bgGradient} p-6 backdrop-blur-sm shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-blue-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />

              {/* Category Header */}
              <div className="relative flex items-center mb-6">
                <div className={`w-2 h-8 ${category.color.replace("border", "bg")} rounded-full mr-3`} />
                <span className="mr-3 text-white">{category.icon}</span>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-3">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    data-aos="zoom-in"
                    data-aos-delay={sIdx * 40}
                    className="group bg-slate-800/80 rounded-xl p-3 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-110 flex flex-col items-center"
                  >
                    <div className={`text-3xl mb-2 ${skill.color} transition-transform duration-300 group-hover:rotate-6 group-hover:scale-125`}>
                      {skill.icon}
                    </div>
                    <span className="text-[10px] sm:text-xs text-gray-400 text-center truncate w-full">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
