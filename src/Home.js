import { FaEnvelope, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

import About from "./Pages/About";
import { FaXTwitter } from "react-icons/fa6";
import Projects from "./Pages/Projects";
import React from "react";

function Home() {
    return (
        <div className="min-h-screen">
            <div className="mx-auto max-w-screen-2xl px-4 py-4 sm:py-6 md:py-6 lg:px-8 xl:px-16 2xl:px-32">

                <div className="space-y-6 sm:space-y-8 md:space-y-6">
                    {/* Home Section */}
                    <div id="home-section" className="card text-xl relative">
                        <div className="flex justify-between items-center">
                            <h1 className="card-title mb-0">Rickypcyt's Portfolio</h1>
                            <div className="flex space-x-4 items-center relative z-10">
                                <a href="https://github.com/rickypcyt" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                    <FaGithub size={24} />
                                </a>
                                <a href="https://linkedin.com/in/rickypcyt" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                    <FaLinkedin size={24} />
                                </a>
                                <a href="mailto:rickypcyt@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                                    <FaEnvelope size={24} />
                                </a>
                                <a href="https://twitter.com/rickypcyt" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                    <FaXTwitter size={24} />
                                </a>
                                <div className="relative">
                                    <a href="/RicardoPerezZuninoCV_4.pdf" download="" className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
                                        <FaDownload size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About Section */}
                    <div id="about-section" className="card relative" style={{ zIndex: 1 }}>
                        <h2 className="card-title">About Me</h2>
                        <About />
                    </div>

                    {/* Projects Section */}
                    <div id="projects-section" className="card">
                        <h2 className="card-title">Web Projects</h2>
                        <div className="projectview-home">
                            <Projects />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;
