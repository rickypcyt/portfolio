import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import StarsBackground from "../StarsBackground";

function About() {
  return (
    <div className="card">
      <div className="p-6">
        <p className="text-lg text-gray-300 leading-relaxed">
          My name is Ricardo I am 20 years old and I have been programming on and off since 2021. I'm from Ecuador and I'm currently studying engineering in Spain and in my free time I like to do fun projects that come to my mind or solve something that I feel it would be fun to have on my computer. Coding for me is an art form and I believe that the best ability of humans is to create. Since I was a kid I have liked to build new things and I am always looking to innovate in something I like.
        </p>
      </div>
    </div>
  );
}

export default About;
