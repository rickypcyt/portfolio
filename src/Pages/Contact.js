import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar"; // Importa el componente Navbar
import StarsBackground from "../StarsBackground";

// Asegúrate de que las rutas sean correctas
import EmailIcon from "./svgs/icons8-gmail.svg";
import GitHubIcon from "./svgs/github-142-svgrepo-com.svg";
import SocialMediaIcon from "./svgs/whatsapp-svgrepo-com.svg";

function Contact() {
  return (
    <div className="card">
      <div className="p-6">
        <div className="flex justify-center space-x-12">
          <a href="https://github.com/rickypcyt" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
            <img src={GitHubIcon} alt="GitHub Icon" className="w-16 h-16 filter invert" />
          </a>
          <a href="https://wa.me/+34686252372" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
            <img src={SocialMediaIcon} alt="Social Media Icon" className="w-16 h-16 filter invert" />
          </a>
          <a href="mailto:rickypcyt@gmail.com" className="hover:scale-110 transition-transform duration-200">
            <img src={EmailIcon} alt="Email Icon" className="w-16 h-16 filter invert" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
