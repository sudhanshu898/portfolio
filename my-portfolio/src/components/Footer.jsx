import React from 'react';
import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Name */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Sudhanshu Shekhar
                    </h2>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-8 mb-8 text-white">
                    <a href="#about" className="hover:text-purple-400 transition-colors duration-300">
                        About
                    </a>
                    <a href="#skills" className="hover:text-purple-400 transition-colors duration-300">
                        Skills
                    </a>
                    <a href="#contact" className="hover:text-purple-400 transition-colors duration-300">
                        Contact
                    </a>
                    <a href="#projects" className="hover:text-purple-400 transition-colors duration-300">
                        Projects
                    </a>
                    <a href="#education" className="hover:text-purple-400 transition-colors duration-300">
                        Education
                    </a>
                </nav>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-6 mb-8">
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors duration-300"
                        aria-label="Facebook"
                    >
                        <Facebook size={24} />
                    </a>
                    <a
                        href="https://x.com/Sudhans81082967"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors duration-300"
                        aria-label="Twitter/X"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sudhanshu7878"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors duration-300"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href="https://www.instagram.com/itzsudhanshu_shekhar?igsh=OXcxY3Ixc2gzNGNu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors duration-300"
                        aria-label="Instagram"
                    >
                        <Instagram size={24} />
                    </a>
                    <a
                        href="https://www.youtube.com/@SudhanshuShekhar-oe2il"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors duration-300"
                        aria-label="YouTube"
                    >
                        <Youtube size={24} />
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} Copyright- All Rights Reserved to Sudhanshu Shekhar.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;