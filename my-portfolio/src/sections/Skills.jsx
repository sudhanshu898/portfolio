import React from 'react';
import {
    FaReact, FaHtml5, FaCss3Alt, FaJs, FaSass, FaPython, FaJava, FaPhp,
    FaNodeJs, FaDocker, FaLinux, FaGitAlt, FaGithub, FaFigma, FaBrain,
    FaCode, FaServer, FaTools, FaLaptopCode
} from "react-icons/fa";
import {
    SiThreedotjs, SiExpo, SiTailwindcss, SiRedux, SiCplusplus, SiC,
    SiExpress, SiMysql, SiOpenai, SiMongodb, SiAppwrite, SiFirebase,
    SiOpencv, SiScikitlearn, SiKeras, SiAnaconda,
    SiCanva, SiAutodesk
} from "react-icons/si";
import { VscVscode, VscAzure } from "react-icons/vsc";
import { TbBrandNextjs } from "react-icons/tb";

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
                { name: "ThreeJS", icon: <SiThreedotjs />, color: "text-white" },
                { name: "Sass", icon: <FaSass />, color: "text-pink-500" },
                { name: "Expo", icon: <SiExpo />, color: "text-white" },
                { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-300" },
                { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
            ]
        },
        {
            title: "Languages",
            color: "border-green-500",
            bgGradient: "bg-gradient-to-br from-green-900/20 to-green-900/5",
            icon: <FaCode className="text-2xl" />,
            skills: [
                { name: "C++", icon: <SiCplusplus />, color: "text-blue-400" },
                { name: "C", icon: <SiC />, color: "text-gray-400" },
                { name: "Python", icon: <FaPython />, color: "text-yellow-400" },
                { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
                { name: "JAVA", icon: <FaJava />, color: "text-red-400" },
                { name: "PHP", icon: <FaPhp />, color: "text-indigo-400" },
            ]
        },
        {
            title: "Backend & Services",
            color: "border-purple-500",
            bgGradient: "bg-gradient-to-br from-purple-900/20 to-purple-900/5",
            icon: <FaServer className="text-2xl" />,
            skills: [
                { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
                { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
                { name: "Python", icon: <FaPython />, color: "text-yellow-400" },
                { name: "MySQL", icon: <SiMysql />, color: "text-blue-300" },
                { name: "OpenAI", icon: <SiOpenai />, color: "text-green-400" },
                { name: "Docker", icon: <FaDocker />, color: "text-blue-500" },
                { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
                { name: "AppWrite", icon: <SiAppwrite />, color: "text-orange-500" },
                { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
                { name: "Azure", icon: <VscAzure />, color: "text-blue-400" },
            ]
        },
        {
            title: "Machine Learning",
            color: "border-orange-500",
            bgGradient: "bg-gradient-to-br from-orange-900/20 to-orange-900/5",
            icon: <FaBrain className="text-2xl" />,
            skills: [
                { name: "Python", icon: <FaPython />, color: "text-yellow-400" },
                { name: "OpenCV", icon: <SiOpencv />, color: "text-green-500" },
                { name: "Scikit", icon: <SiScikitlearn />, color: "text-orange-500" },
                { name: "Keras", icon: <SiKeras />, color: "text-red-500" },
                { name: "Anaconda", icon: <SiAnaconda />, color: "text-green-600" },
            ]
        },
        {
            title: "Tools & Others",
            color: "border-pink-500",
            bgGradient: "bg-gradient-to-br from-pink-900/20 to-pink-900/5",
            icon: <FaTools className="text-2xl" />,
            skills: [
                { name: "Linux", icon: <FaLinux />, color: "text-yellow-500" },
                { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
                { name: "GitHub", icon: <FaGithub />, color: "text-white" },
                { name: "VS Code", icon: <VscVscode />, color: "text-blue-500" },
                { name: "Canva", icon: <SiCanva />, color: "text-blue-400" },
                { name: "Figma", icon: <FaFigma />, color: "text-purple-500" },
                { name: "AutoCAD", icon: <SiAutodesk />, color: "text-red-400" },
            ]
        }
    ];

    return (
        <section id="skills" className="py-16 md:py-20 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 mb-4 border border-purple-500/30">
                        <span className="text-3xl text-white">🚀</span>
                    </div>
                    <h2
                        data-aos="fade-up"
                        className="text-3xl md:text-4xl font-bold text-white mb-3"
                    >
                        My <span className="text-blue-500">Skills</span>
                    </h2>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="text-lg text-gray-400 max-w-2xl mx-auto"
                    >
                        Technologies and tools I work with
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={idx}
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                            className={`rounded-2xl border ${category.color} ${category.bgGradient} p-6 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                        >
                            {/* Category Header */}
                            <div className="flex items-center mb-6">
                                <div className={`w-2 h-8 ${category.color.replace('border', 'bg')} rounded-full mr-3`}></div>
                                <div className="flex items-center">
                                    <span className="mr-3 text-white">{category.icon}</span>
                                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                                </div>
                            </div>

                            {/* Skills List */}
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                {category.skills.map((skill, sIdx) => (
                                    <div
                                        key={sIdx}
                                        data-aos="zoom-in"
                                        data-aos-delay={sIdx * 50}
                                        className="group relative bg-slate-800/80 backdrop-blur-sm rounded-xl p-3 border border-gray-700 hover:border-blue-500 transition-all duration-200 hover:scale-105 cursor-default flex flex-col items-center justify-center"
                                    >
                                        {/* Skill Icon */}
                                        <div className={`text-3xl mb-2 ${skill.color} transition-transform group-hover:scale-110 duration-300`}>
                                            {skill.icon}
                                        </div>

                                        {/* Skill Name */}
                                        <span className="block text-[10px] sm:text-xs font-medium text-gray-400 group-hover:text-gray-300 text-center truncate w-full">
                                            {skill.name}
                                        </span>

                                        {/* Hover effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Skill Level Indicators */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="bg-gradient-to-br from-blue-900/20 to-blue-900/5 rounded-2xl p-6 border border-blue-500/30"
                    >
                        <div className="text-3xl font-bold text-blue-400 mb-2">Advanced</div>
                        <p className="text-gray-400 text-sm">React, JS, Python, Node</p>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="bg-gradient-to-br from-purple-900/20 to-purple-900/5 rounded-2xl p-6 border border-purple-500/30"
                    >
                        <div className="text-3xl font-bold text-purple-400 mb-2">Intermediate</div>
                        <p className="text-gray-400 text-sm">Docker, ML, ThreeJS, DBs</p>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="bg-gradient-to-br from-green-900/20 to-green-900/5 rounded-2xl p-6 border border-green-500/30"
                    >
                        <div className="text-3xl font-bold text-green-400 mb-2">Proficient</div>
                        <p className="text-gray-400 text-sm">Tools, Design, Automation</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;