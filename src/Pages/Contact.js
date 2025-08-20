// Asegúrate de que las rutas sean correctas
import EmailIcon from "./svgs/icons8-gmail.svg";
import GitHubIcon from "./svgs/github-142-svgrepo-com.svg";
import React from "react";
import SocialMediaIcon from "./svgs/whatsapp-svgrepo-com.svg";

function Contact() {
  return (
    <div className="max-w-[95%] mx-auto px-4 py-8">
      <div className="flex justify-center gap-8 sm:gap-12">
        <a href="https://github.com/rickypcyt" target="_blank" rel="noopener noreferrer" className="block w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
          <img src={GitHubIcon} alt="GitHub Icon" className="w-full h-full object-contain filter invert" />
        </a>
        <a href="https://wa.me/+34686252372" target="_blank" rel="noopener noreferrer" className="block w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
          <img src={SocialMediaIcon} alt="Social Media Icon" className="w-full h-full object-contain filter invert" />
        </a>
        <a href="mailto:rickypcyt@gmail.com" className="block w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
          <img src={EmailIcon} alt="Email Icon" className="w-full h-full object-contain filter invert" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
