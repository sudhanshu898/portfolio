import React from 'react';
import sudhanshuImg from '../assets/Sudhanshu1.jpeg';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            {/* Background blobs - kept CSS animation for continuous loop performance */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <div
                        data-aos="fade-right"
                        className="flex-1 text-center md:text-left"
                    >
                        <h2 className="text-blue-400 font-medium text-xl mb-4" data-aos="fade-up" data-aos-delay="200">
                            Hello, I'm
                        </h2>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight" data-aos="fade-up" data-aos-delay="400">
                            <span className="text-white">Sudhanshu </span>
                            <span className="gradient-text">Shekhar </span>
                        </h1>

                        <p
        className="text-gray-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="600"
                    >
                A creative <span className="text-white font-medium">Full Stack Developer</span> currently pursuing
                a B.Tech in Computer Science and Engineering at
            <span className="text-white font-medium"> Lovely Professional University</span>,
                focused on building exceptional digital experiences using modern web technologies.
            </p>


                        <div className="flex flex-col sm:flex-row items-center gap-4" data-aos="fade-up" data-aos-delay="800">
    
    <a href="#projects"
        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium shadow-lg shadow-blue-500/25 w-full sm:w-auto transition-all duration-300 transform hover:scale-105 active:scale-95"
    >
        View My Work
    </a>
    
    <a href="https://drive.google.com/file/d/1_hDCrZanxEAWcNLG4DLWzWeLqh9sNpbh/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium shadow-lg shadow-blue-500/25 w-full sm:w-auto transition-all duration-300 transform hover:scale-105 active:scale-95"
    >
        Check CV
    </a>
</div>
                    </div>

                    {/* Image / Avatar Placeholder */}
                    <div
                        data-aos="fade-left"
                        className="flex-1 relative"
                    >
                        <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto animate-float">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30"></div>
                            <div className="w-full h-full rounded-full border-2 border-white/10 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-md flex items-center justify-center overflow-hidden">
                                <img
                                    src={sudhanshuImg}
                                    alt="Sudhanshu"
                                    className="w-80 max-h-full object-cover"
                                />
                            </div>

                            {/* Floating Tech Badges */}
                            <div className="absolute -top-4 -right-4 bg-gray-800 p-3 rounded-xl border border-gray-700 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                                <span className="text-2xl">⚛️</span>
                            </div>
                            <div className="absolute bottom-10 -left-8 bg-gray-800 p-3 rounded-xl border border-gray-700 shadow-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                                <span className="text-2xl">🚀</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

