import React from "react";
import "./Home.css";
import StarsBackground from "./StarsBackground";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Navbar"; // Importa el componente Navbar

function Home() {
    return (
        <div> {/* Agregar un div contenedor para el navbar y el contenido */}
            <div>
                <Navbar /> {/* Usar el componente Navbar */}
            </div>
            {/* Agregar un div contenedor para el contenido */}
            <div className="content-container">
                <StarsBackground />

                <div id="home-section" className="content-wrapper">
                    <div className="paragraph-container">
                        <p>
                        Welcome to my portfolio! Below you can see my projects, a little about me and where you can follow me and contact me.                         </p>
                    </div>
                </div>

                <div id="projects-section" className="content-wrapper">
                    <div className="paragraph-container">
                        <p>Projects:</p>
                    </div>
                </div>

                <div className="projectview-home">
                    <Projects />
                </div>

                <div id="about-section" className="content-wrapper">
                    <div className="paragraph-container">
                        <p>About:</p>
                    </div>
                </div>

                <About />

                <div id="contact-section" className="content-wrapper">
                    <div className="paragraph-container">
                        <p>Contact:</p>
                    </div>
                </div>

                <Contact />
            </div>
        </div>
    );
}

export default Home;
