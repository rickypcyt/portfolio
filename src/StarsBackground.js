import React, { useState, useEffect } from "react";
import "./stars.css"; // Importing CSS styles for stars

const maxStars = 30; // Maximum number of stars on the screen

// Function to generate a single star with random position and speed
function generateStar() {
  return {
    left: Math.random() * 100, // Random horizontal position
    top: Math.random() * 100, // Random vertical position
    speedX: (Math.random() - 0.5) * 0.25, // Random horizontal speed
    speedY: (Math.random() - 0.5) * 0.25 // Random vertical speed
  };
}

// Function to generate an array of stars with a specified count
function generateStars(count) {
  const stars = []; // Array to store generated stars

  // Loop to generate 'count' number of stars
  for (let i = 0; i < count; i++) {
    // Generating a star using the 'generateStar()' function and adding it to the 'stars' array
    stars.push(generateStar());
  }

  // Returning the array of generated stars
  return stars;
}

// Functional component for the stars background
function StarsBackground() {
  const [stars, setStars] = useState(generateStars(15)); // State to store stars array

  // Function to add new stars periodically
  useEffect(() => {
    function addStar() {
      // Adding a new star with a probability of 10% until the maximum number of stars is reached
      if (stars.length < maxStars && Math.random() > 0.9) {
        setStars(prevStars => [...prevStars, generateStar()]);
      }
    }

    // Interval to add stars every 150 milliseconds
    const intervalId = setInterval(addStar, 150);

    // Cleaning up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [stars.length]);

  // Function to update star positions
  function updateStars() {
    setStars(prevStars => {
      return prevStars.map(star => {
        let newLeft = star.left + star.speedX;
        let newTop = star.top + star.speedY;

  // Check if the star has reached the left or right edge of the window        
      if (newLeft < 0 || newLeft > 100) {
      // If it has, reverse the horizontal speed to make it bounce off the edge
          star.speedX = -star.speedX;
        }
    // Check if the star has reached the top or bottom edge of the window
        if (newTop < 0 || newTop > 100) {
      // If it has, reverse the vertical speed to make it bounce off the edge
          star.speedY = -star.speedY;
        }

      // Update the position of the star with the new calculated values
        return {
          ...star,
          left: newLeft,
          top: newTop
        };
      });
    });
  }

  // Function to update star positions on each frame
  useEffect(() => {
    const animationFrame = requestAnimationFrame(updateStars);
    return () => cancelAnimationFrame(animationFrame); // Cleaning up animation frame
  }, [stars]);

  // Rendering stars as div elements with CSS animation for twinkling effect
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
            background: "#808080",
            borderRadius: "50%",
            animation: "twinkle 2s infinite", // CSS animation for twinkling effect
            animationTimingFunction: "ease-in-out" // Smooth animation timing
          }}
        />
      ))}
    </div>
  );
}

export default StarsBackground;
