import React from "react";
import "./Home.css";
import StarsBackground from "./StarsBackground";
import Projects from "./Pages/Projects"
import Navbar from "./Navbar"; // Importa el componente Navbar

function Home() {
    return (
        <div> {/* Agregar un div contenedor para el navbar y el contenido */}
            <div>
                <Navbar/> {/* Usar el componente Navbar */} </div>
            {/* Agregar un div contenedor para el contenido */}
            <div className="content-container">
                <StarsBackground/>
                
                <div className="content-wrapper">
                    <div className="paragraph-container">
                        <p>
                            Hey there! I'm Ricky, and welcome to my portfolio. Here, I showcase the array of projects I've been passionately coding over the years. From my earliest ventures into programming to my most recent endeavors, this portfolio encapsulates my journey and growth as a developer. Each project represents a unique challenge I've tackled, whether it's crafting sleek user interfaces, optimizing algorithms for efficiency, or diving into the intricacies of backend development. Join me on this journey through my digital creations, and let's explore the world of code together.
                        </p>
                        
                    </div>
                    
                    
                </div>
                <div className="content-wrapper">
                    <div className="paragraph-container">
                        <p>
Projects:                        </p>
                        
                    </div>
                    
                    
                </div>
                <div className="projectview-home"><Projects/></div>
            </div>
        </div>
    );
}

export default Home;
