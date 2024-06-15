import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar"; // Importa el componente Navbar
import StarsBackground from "../StarsBackground";
import "../Home.css";

// Asegúrate de que las rutas sean correctas
import EmailIcon from "./svgs/icons8-gmail.svg";
import GitHubIcon from "./svgs/github-142-svgrepo-com.svg";
import SocialMediaIcon from "./svgs/whatsapp-svgrepo-com.svg";

function Home() {
  return (
    <div>
      {/* Content */}
      <div className="paragraph-container2">
        <div className="icons-container">
        <a href="https://github.com/rickypcyt" target="_blank" rel="noopener noreferrer">
            <img src={GitHubIcon} alt="GitHub Icon" className="icon white-icon" />
          </a>
          <a href="https://wa.me/686252372" target="_blank" rel="noopener noreferrer">
            <img src={SocialMediaIcon} alt="Social Media Icon" className="icon white-icon" />
          </a>
          <a href="mailto:rickypcyt@gmail.com">
            <img src={EmailIcon} alt="Email Icon" className="icon white-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
