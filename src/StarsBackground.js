import React, { useState, useEffect } from "react";
import "./stars.css"; // Importa el archivo CSS

function generateStar() {
  return {
    left: Math.random() * 100, // Posición horizontal aleatoria
    top: Math.random() * 100, // Posición vertical aleatoria
    speedX: (Math.random() - 0.25) * 0.25, // Velocidad horizontal aleatoria (-0.5 a 0.5)
    speedY: (Math.random() - 0.25) * 0.25 // Velocidad vertical aleatoria (-0.5 a 0.5)
  };
}

function generateStars(count) {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(generateStar());
  }
  return stars;
}

function StarsBackground() {
  const [stars, setStars] = useState(generateStars(25));
  const maxStars = 50;

  useEffect(() => {
    // Función para generar nuevas estrellas
    function addStar() {
      if (stars.length < maxStars) {
        setStars(prevStars => [...prevStars, generateStar()]);
      }
    }

    // Intervalo para agregar nuevas estrellas cada cierto tiempo
    const intervalId = setInterval(addStar, 1000);

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, [stars.length]); // Se ejecuta cada vez que cambia la longitud de la lista de estrellas

  // Función para actualizar la posición de las estrellas
  function updateStars() {
    setStars(prevStars => {
      return prevStars.map(star => {
        let newLeft = star.left + star.speedX;
        let newTop = star.top + star.speedY;

        // Rebotar en los bordes de la ventana
        if (newLeft < 0 || newLeft > 100) {
          star.speedX = -star.speedX;
        }
        if (newTop < 0 || newTop > 100) {
          star.speedY = -star.speedY;
        }

        return {
          ...star,
          left: newLeft,
          top: newTop
        };
      });
    });
  }

  // Llama a la función para actualizar la posición de las estrellas en cada frame
  useEffect(() => {
    const animationFrame = requestAnimationFrame(updateStars);
    return () => cancelAnimationFrame(animationFrame);
  }, [stars]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1
      }}
    >
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            position: "absolute",
            top: `${star.top}%`,
            left: `${star.left}%`,
            height: "2px",
            width: "2px",
            background: "#fff",
            borderRadius: "50%",
            animation: "twinkle 3s infinite"
          }}
        />
      ))}
    </div>
  );
}

export default StarsBackground;
