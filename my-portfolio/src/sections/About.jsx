import React from 'react';

const About = () => {
    const stats = [
        { label: 'Projects Completed', value: '7+' },
        { label: 'Solving Code problems', value: '150+' },
        { label: 'NGO & Social Work', value: 'Active' },
    ];


    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    data-aos="fade-up"
                    className="text-3xl font-bold text-center mb-16"
                >
                    About <span className="text-blue-500">Me</span>
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* Left Side - About Content */}
                    <div
                        data-aos="fade-right"
                        className="flex-1"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

                            <div className="relative px-7 py-6 bg-slate-800 ring-1 ring-gray-900/5 rounded-lg">
                                <div className="space-y-2 text-gray-400">

                                    <p className="text-lg leading-8 text-gray-300">
                                        I specialize in building scalable and efficient web applications by turning
                                        complex ideas into clean, functional solutions. My interest in web technologies
                                        has evolved into hands-on experience with modern full-stack development.
                                    </p>

                                    <p className="text-lg leading-8 text-gray-300 mt-6">
                                        I consistently work on improving my skills through real-world projects,
                                        internships, and certifications, with a strong focus on problem-solving,
                                        performance, and clean code practices.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Stats & Focus */}
                    <div
                        data-aos="fade-left"
                        className="flex-1 w-full"
                    >
                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 100}
                                    className="p-4 bg-slate-800 rounded-xl border border-gray-700 text-center transition-all hover:border-blue-500 hover:scale-105 duration-300"
                                >
                                    <h3 className="text-3xl font-bold text-white mb-2">
                                        {stat.value}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Focus Area */}
                        <div className="p-6 bg-slate-800/50 rounded-xl border border-gray-700">
                            <h3 className="text-xl font-bold text-white mb-4">
                                My Focus
                            </h3>
                            <ul className="space-y-2">
                                {[
                                    'Full Stack Web Development',
                                    'MERN Stack Applications',
                                    'Problem Solving & DSA',
                                    'Clean UI & Performance'
                                ].map((item, i) => (
                                    <li
                                        key={i}
                                        data-aos="fade-up"
                                        data-aos-delay={i * 100}
                                        className="flex items-center text-gray-300"
                                    >
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
