import React from 'react';
import lpuLogo from '../assets/logolpu.png';
import bsebLogo from '../assets/logoBBE.png';
import cbseLogo from '../assets/LogoCBSE.png';

const Education = () => {
    const educationData = [
        {
            id: 1,
            school: "Lovely Professional University, Punjab",
            degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
            date: "Aug 2023 - Present",
            description: "I'm currently pursuing a Bachelor's degree in Computer Science and Engineering at LPU, Punjab.I've completed foundational courses in Data Structures, Algorithms, and Object-Oriented Programming. I'm actively exploring emerging technologies like Artificial Intelligence and Blockchain, and I'm especially interested in how they can be applied to solve real-world problems. I enjoy building projects that push me to think critically and learn beyond the classroom.",
            logo: lpuLogo,
            position: "left"
        },
        {
            id: 2,
            school: "Bihar School Examination Board (BSEB)",
            degree: "Intermediate",
            date: "Jun 2020 - Apr 2022",
            description: "Actively participated in inter-college science competitions and contributed to group projects in Physics and Chemistry. Recognized by faculty for consistent academic dedication and teamwork skills during the program.",
            logo: bsebLogo,
            position: "right"
        },
        {
            id: 3,
            school: "Central Board of Secondary Education (CBSE)",
            degree: "Matriculation",
            date: "Jan 2018 - May 2020",
            description: "Attended Bramha High School, receiving a comprehensive education that laid the foundation for academic excellence and personal growth, shaping a well-rounded individual.",
            logo: cbseLogo,
            position: "left"
        }
    ];

    return (
        <section id="education" className="py-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Section Header */}
                <div className="text-center mb-16" data-aos="fade-down">
                    <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My education has been a journey of self-discovery and growth. My educational details are as follows.
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-600 transform md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {educationData.map((item, index) => (
                            <div key={item.id} className={`relative flex flex-col md:flex-row ${item.position === 'left' ? 'md:flex-row-reverse' : ''} items-center`}>

                                {/* Date on the opposite side (Desktop) */}
                                <div className="hidden md:flex w-1/2 px-6 justify-center flex-col">
                                    <div className={`${item.position === 'left' ? 'text-left' : 'text-right'} w-full`}>
                                        <span className="text-gray-300 font-medium text-lg block">{item.date}</span>
                                    </div>
                                </div>

                                {/* Timeline Logo (Center) */}
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-purple-500 z-10 overflow-hidden"
                                    data-aos="zoom-in" data-aos-delay={index * 100}>
                                    <img
                                        src={item.logo}
                                        alt={item.school}
                                        className="w-full h-full object-cover p-1" // Added padding for better logo fit
                                    />
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-1/2 pl-16 pr-4 md:px-8`}>
                                    <div
                                        className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 shadow-xl relative group"
                                        data-aos={item.position === 'left' ? "fade-right" : "fade-left"}
                                    >

                                        {/* Card Content Construction matching the screenshot:
                                            Logo (Top Left), Title (Right of Logo), Subtitle (Below Title), Date (Below Subtitle)
                                        */}
                                        <div className="flex flex-col gap-4">

                                            {/* Header Section */}
                                            <div className="flex flex-row items-center gap-4">
                                                {/* Logo inside card */}
                                                <div className="flex-shrink-0">
                                                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center p-1 overflow-hidden shadow-md">
                                                        <img src={item.logo} alt={item.school} className="w-full h-full object-contain" />
                                                    </div>
                                                </div>

                                                {/* Title and Info - Always Left Aligned */}
                                                <div className="flex flex-col items-start flex-1">
                                                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                                                        {item.school}
                                                    </h3>
                                                    <p className="text-gray-400 text-sm md:text-base mt-1 font-medium">
                                                        {item.degree}
                                                    </p>
                                                    {/* Mobile Date */}
                                                    <p className="text-gray-500 text-sm mt-1 md:hidden">
                                                        {item.date}
                                                    </p>
                                                </div>
                                            </div>

                                            

                                            {/* Description */}
                                            <div className="text-gray-400 text-sm leading-relaxed text-justify">
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
