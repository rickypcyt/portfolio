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
            <Link
              to="/about"
              className="navbar-link"
              style={{ color: "khaki" }}
            >
              About
            </Link>
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </div>
        </nav>
      </div>
      {/* Agregar un div contenedor para el contenido */}
      <div className="content-container">
        <StarsBackground />
        <div className="paragraph-container">
          <p>
            "I'm a passionate 20-year-old engineering student who finds joy and
            fulfillment in the realm of coding as a hobby. While pursuing my
            studies, I've developed a keen interest in web development, where I
            enjoy creating visually captivating and functional websites. Beyond
            web development, my curiosity extends into the fascinating world of
            artificial intelligence (AI). Exploring the complexities of AI
            algorithms and their applications excites me, and I'm eager to delve
            deeper into this field to unlock its potential for innovation and
            problem-solving. With a blend of academic rigor and personal
            enthusiasm, I aspire to contribute meaningfully to the ever-evolving
            landscape of technology."{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
