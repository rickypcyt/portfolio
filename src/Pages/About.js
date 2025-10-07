import React from "react";

function About() {
  return (
    <div className="prose prose-invert max-w-none text-center mx-auto px-4 lg:px-12 xl:px-20">
        <p className="text-gray-300 leading-relaxed text-base sm:text-lg md:text-lg mx-auto">
          Software Engineering student in Spain. Passionate about coding, building
          innovative projects, and improving UI/UX. Interested in how programs
          work under the hood and exploring programming languages. Focused on
          creating functional and visually appealing applications.
        </p>
        
        <h3 className="text-gray-100 font-semibold mt-6 mb-3 text-lg sm:text-xl mx-auto">Technical Skills</h3>
        <ul className="space-y-1 text-gray-300 text-sm sm:text-base mx-auto max-w-md text-center">
          <li>Programming Languages: JavaScript, Python, Java</li>
          <li>Web Development: React, Node.js, Express, MongoDB</li>
          <li>UI/UX: Tailwind CSS, Responsive Design</li>
          <li>Tools & Technologies: Git, Docker, Linux</li>
        </ul>
        
        <h3 className="text-gray-100 font-semibold mt-6 mb-3 text-lg sm:text-xl mx-auto">Education</h3>
        <div className="space-y-2 text-gray-300 text-sm sm:text-base mx-auto max-w-md text-center">
          <p className="font-medium">Bachelor's in Software Engineering</p>
          <p className="text-gray-400">UMH · 2024 - Present</p>
        </div>
    </div>
  );
}

export default About;
