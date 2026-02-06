import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import sudhanshuImg from '../assets/Sudhanshu1.jpeg';
import { FaReact, FaRocket } from 'react-icons/fa';

const Hero = () => {
    const roles = [
        "Full Stack Developer",
        "AI Enthusiast",
        "Problem Solver",
        "Competitive Programmer"
    ];

    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[currentRoleIndex];

            if (isDeleting) {
                // Deleting text
                setDisplayedText(prev => prev.substring(0, prev.length - 1));
            } else {
                // Typing text
                setDisplayedText(currentRole.substring(0, displayedText.length + 1));
            }

            // Typing Speed Logic
            if (!isDeleting && displayedText === currentRole) {
                // Finished typing, wait before deleting
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayedText === "") {
                // Finished deleting, switch to next role
                setIsDeleting(false);
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? 50 : 150);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentRoleIndex, roles]);

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
        >
            {/* Moon/Planet Element - Local to Hero */}
            <motion.div
                className="absolute top-20 right-20 w-32 h-32 rounded-full border border-gray-700/30 opacity-20 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute top-0 right-0 w-4 h-4 bg-blue-500 rounded-full blur-md"></div>
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center md:text-left"
                    >
                        <h2 className="text-blue-400 font-medium text-xl mb-4 tracking-wide">
                            Hi, I am
                        </h2>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
                            Sudhanshu <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                Shekhar
                            </span>
                        </h1>

                        <h3 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center justify-center md:justify-start gap-3 min-h-[40px]">
                            <span className="text-gray-300">I am a</span>
                            <span className="text-blue-400 text-xl md:text-2xl overflow-hidden relative inline-flex items-center">
                                {displayedText}
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                    className="w-[2px] h-8 bg-blue-400 ml-1"
                                ></motion.span>
                            </span>
                        </h3>

                        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-10 mx-auto md:mx-0">
                            I'm currently pursuing a B.Tech in Computer Science and Engineering at
                            <span className="text-white font-medium"> Lovely Professional University</span>,
                            graduating in 2027. My focus lies in transforming ideas into impactful solutions
                            through innovation, collaboration, and a commitment to growth.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <motion.a
                                href="https://drive.google.com/file/d/1_hDCrZanxEAWcNLG4DLWzWeLqh9sNpbh/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-transparent border-2 border-purple-500 text-white rounded-full font-medium hover:bg-purple-500/10 transition-colors duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                            >
                                Check CV
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Image Profile with Golden Glow */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 relative flex justify-center md:justify-end"
                    >
                        {/* Floating Container */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative"
                        >
                            {/* The Golden Glow & Shape */}
                            <div className="relative w-72 h-[420px] md:w-80 md:h-[480px]">
                                {/* Glow Layer */}
                                <div className="absolute -inset-1 rounded-[50%] bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 opacity-70 blur-md"></div>

                                {/* Image Container (Oval Cutout) */}
                                <div className="relative w-full h-full rounded-[50%] overflow-hidden border-4 border-yellow-500/50 shadow-[0_0_40px_rgba(234,179,8,0.3)] bg-slate-900">
                                    <img
                                        src={sudhanshuImg}
                                        alt="Sudhanshu Kumar"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Floating Tech Badges (Orbiting) */}
                                <motion.div
                                    className="absolute -top-6 -right-6 bg-slate-800 p-3 rounded-full border border-gray-700 shadow-lg text-cyan-400 text-2xl"
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                                >
                                    <FaReact />
                                </motion.div>
                                <motion.div
                                    className="absolute bottom-10 -left-6 bg-slate-800 p-3 rounded-full border border-gray-700 shadow-lg text-purple-400 text-2xl"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                                >
                                    <FaRocket />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Connected Dots/Constellation Graphic (Abstract SVG) */}
                        <svg className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-30 hidden md:block" viewBox="0 0 400 400">
                            <circle cx="50" cy="200" r="2" fill="#3b82f6" />
                            <line x1="50" y1="200" x2="150" y2="150" stroke="#3b82f6" strokeWidth="0.5" />
                            <circle cx="150" cy="150" r="3" fill="#3b82f6" />
                        </svg>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
