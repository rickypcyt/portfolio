import React, { useState, useEffect, useRef } from "react";
import "./stars.css"; // Importa el archivo CSS

function generateStars() {
  const STAR_COUNT = 50;
  const stars = [];

  for (let i = 0; i < STAR_COUNT; i++) {
    const left = Math.random() * 100; // Posición horizontal aleatoria
    const top = Math.random() * 100; // Posición vertical aleatoria
    const speedX = (Math.random() - 0.25) * 0.25; // Velocidad horizontal aleatoria (-0.5 a 0.5)
    const speedY = (Math.random() - 0.25) * 0.25; // Velocidad vertical aleatoria (-0.5 a 0.5)

    stars.push({ left, top, speedX, speedY });
  }

  return stars;
}

function StarsBackground() {
  const [stars, setStars] = useState(generateStars());
  const animationFrame = useRef(null);

  useEffect(() => {
    animationFrame.current = requestAnimationFrame(updateStars);

    function updateStars() {
      setStars((prevStars) => {
        return prevStars.map((star) => {
          let newLeft = star.left + star.speedX;
          let newTop = star.top + star.speedY;
          let newSpeedX = star.speedX;
          let newSpeedY = star.speedY;

          // Rebotar en los bordes de la ventana
          if (newLeft < 0 || newLeft > 100) {
            newSpeedX = -newSpeedX;
          }
          if (newTop < 0 || newTop > 100) {
            newSpeedY = -newSpeedY;
          }

          return {
            ...star,
            left: newLeft,
            top: newTop,
            speedX: newSpeedX,
            speedY: newSpeedY,
          };
        });
      });

      animationFrame.current = requestAnimationFrame(updateStars);
    }

    return () => cancelAnimationFrame(animationFrame.current);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
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
            animation: "twinkle 3s infinite",
          }}
        />
      ))}
    </div>
  );
}

export default StarsBackground;
