import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import StarsBackground from "./StarsBackground";

function Home() {
  return (
    <div>
      {/* Agregar un div contenedor para el navbar y el contenido */}
      <div>
        <nav className="navbar">
          <div className="navbar-title">
            <Link to="/" className="navbar-link">Ricky's Portfolio</Link>{" "}
          </div>
          <div className="navbar-links">
            <Link to="/projects" className="navbar-link">
              Projects
            </Link>
            <Link to="/about" className="navbar-link">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin
            porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
            scelerisque vitae, consequat in, pretium a, enim. Pellentesque
            congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum
            bibendum augue. Praesent egestas leo in pede. Praesent blandit odio
            eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque
            fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
