import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar"; // Importa el componente Navbar
import StarsBackground from "../StarsBackground";

function Home() {
  return (
    <div>
      <Navbar /> {/* Aquí se integra el componente Navbar */}
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
            landscape of technology."
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
