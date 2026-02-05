import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Using Formspree with your endpoint
        const response = await fetch('https://formspree.io/f/mojnadkp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
                _replyto: formData.email, // This ensures replies go to the sender
            }),
        });
        
        if (response.ok) {
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
            setSubmitStatus('error');
        }
        
        setIsSubmitting(false);
        
        // Hide status message after 5 seconds
        setTimeout(() => setSubmitStatus(''), 5000);
    };

    const handleEmailMe = () => {
        window.location.href = 'mailto:sudhanshu78787@gmail.com?subject=Inquiry from Portfolio Website';
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10"></div>
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16" data-aos="fade-down">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Contact
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Feel free to reach out to me for any questions or opportunities!
                    </p>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-center">
                        ✅ Message sent successfully! I'll get back to you soon.
                    </div>
                )}
                {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-center">
                        ❌ Failed to send message. Please try again or email me directly.
                    </div>
                )}

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Column - Contact Info & Social */}
                    <div className="lg:w-1/3" data-aos="fade-right">
                        {/* Email Me Button */}
                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 mb-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
                             onClick={handleEmailMe}>
                            <div className="flex items-center">
                                <div className="bg-white/20 p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                                    <FiMail className="text-white text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Email Me</h3>
                                    <p className="text-blue-100 mt-1">sudhanshu78787@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                            <h3 className="text-xl font-semibold text-white mb-6">Connect with me</h3>
                            <div className="space-y-4">
                                {[
                                    { icon: FaGithub, label: "GitHub", href: "https://github.com/sudhanshu898" },
                                    { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sudhanshu7878" },
                                    { icon: FaTwitter, label: "Twitter", href: "https://x.com/Sudhans81082967" },
                                    { icon: FaEnvelope, label: "Email", href: "mailto:sudhanshu78787@gmail.com" }
                                ].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center p-4 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group"
                                    >
                                        <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                                            <social.icon className="text-white text-lg" />
                                        </div>
                                        <span className="text-gray-300 group-hover:text-white font-medium">{social.label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="lg:w-2/3" data-aos="fade-left">
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl">
                            <h3 className="text-2xl font-bold text-white mb-2">Send me a message</h3>
                            <p className="text-gray-400 mb-8">I'll get back to you as soon as possible</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Your Name */}
                                    <div className="relative">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                                        <div className="relative">
                                            <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-slate-900/50 border border-gray-700/50 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder-gray-500"
                                                placeholder="Enter your name"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Your Email */}
                                    <div className="relative">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                                        <div className="relative">
                                            <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-slate-900/50 border border-gray-700/50 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder-gray-500"
                                                placeholder="Enter your email"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Subject */}
                                <div className="relative">
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                                    <div className="relative">
                                        <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full bg-slate-900/50 border border-gray-700/50 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder-gray-500"
                                            placeholder="What is this regarding?"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="relative">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                    <div className="relative">
                                        <FiMessageSquare className="absolute left-4 top-4 text-gray-500" />
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="6"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full bg-slate-900/50 border border-gray-700/50 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none placeholder-gray-500"
                                            placeholder="Write your message here..."
                                            required
                                        ></textarea>
                                    </div>
                                </div>

                                {/* Send Message Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;