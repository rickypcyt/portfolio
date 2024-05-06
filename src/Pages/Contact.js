import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar"; // Importa el componente Navbar
import StarsBackground from "../StarsBackground";
import "../Home.css";

function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      
      {/* Content */}
      <div className="content-container">
        <StarsBackground />
        <div className="paragraph-container">
          <p>"In this page, you'll find various means to get in touch with me, ensuring seamless communication and collaboration. Whether you prefer traditional methods like phone calls and emails or seek alternative ways to connect, such as through social media platforms, I've provided multiple avenues to reach me. Feel free to explore and utilize the contact information provided here to initiate discussions, share feedback, or inquire about any queries you may have."</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
