import React from 'react';
import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative py-12 overflow-hidden">
            {/* Glass Background Overlay */}
            <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-sm border-t border-white/5"></div>

            {/* Gradient Top Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Name */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-text">
                        Sudhanshu Shekhar
                    </h2>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-8 mb-8 text-white">
                    {['About', 'Skills', 'Contact', 'Projects', 'Education'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="relative text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Social Media Icons with Glow Effect */}
                <div className="flex justify-center gap-6 mb-8">
                    {[
                        { icon: Facebook, href: "https://www.facebook.com", color: "hover:text-blue-500 hover:shadow-blue-500/50" },
                        {
                            icon: null, href: "https://x.com/Sudhans81082967", color: "hover:text-gray-100 hover:shadow-white/50",
                            svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/sudhanshu7878", color: "hover:text-blue-600 hover:shadow-blue-600/50" },
                        { icon: Instagram, href: "https://www.instagram.com/itzsudhanshu_shekhar?igsh=OXcxY3Ixc2gzNGNu", color: "hover:text-pink-500 hover:shadow-pink-500/50" },
                        { icon: Youtube, href: "https://www.youtube.com/@SudhanshuShekhar-oe2il", color: "hover:text-red-500 hover:shadow-red-500/50" }
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-3 bg-white/5 rounded-full backdrop-blur-sm border border-white/5 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg ${social.color} hover:shadow-[0_0_20px_currentColor]`}
                        >
                            {social.icon ? <social.icon size={20} /> : social.svg}
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Copyright - All Rights Reserved by <span className="text-gray-300 font-medium">Sudhanshu Shekhar</span>.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;