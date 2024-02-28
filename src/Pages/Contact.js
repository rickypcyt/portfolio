import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Home.css";
import StarsBackground from "../StarsBackground";

function Home() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      // Verificar si el offset es mayor que la altura del navbar para activar el sticky
      if (offset > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Agregar el event listener al cargar el componente
    window.addEventListener("scroll", handleScroll);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Agregar un div contenedor para el navbar y el contenido */}
      <div>
        <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
          <div className="navbar-title">
            <Link to="/" className="navbar-link">
              Ricky's Portfolio
            </Link>{" "}
          </div>
          <div className="navbar-links">
            <Link to="/projects" className="navbar-link">
              Projects
            </Link>
            <Link to="/about" className="navbar-link">
              About
            </Link>
            <Link
              to="/contact"
              className="navbar-link"
              style={{ color: "khaki" }}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
      {/* Agregar un div contenedor para el contenido */}
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
