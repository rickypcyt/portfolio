import React, { useEffect, useRef } from 'react';

function StarsBackground() {
    const canvasRef = useRef(null);
    const starsRef = useRef([]);
    const animationFrameRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        // Ajustar el tamaño del canvas al tamaño de la ventana
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Crear estrellas
        const createStars = () => {
            const stars = [];
            const starCount = 200; // Más estrellas para mejor efecto
            
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 1,
                    opacity: Math.random() * 0.5 + 0.5,
                    speed: Math.random() * 0.2 + 0.1,
                    angle: Math.random() * Math.PI * 2,
                    twinkleSpeed: Math.random() * 0.02 + 0.01,
                    twinkleDirection: Math.random() > 0.5 ? 1 : -1
                });
            }
            
            return stars;
        };

        starsRef.current = createStars();

        // Función de animación optimizada
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            starsRef.current.forEach(star => {
                // Actualizar posición
                star.x += Math.cos(star.angle) * star.speed;
                star.y += Math.sin(star.angle) * star.speed;
                
                // Reaparecer en el otro lado si sale de la pantalla
                if (star.x < 0) star.x = canvas.width;
                if (star.x > canvas.width) star.x = 0;
                if (star.y < 0) star.y = canvas.height;
                if (star.y > canvas.height) star.y = 0;
                
                // Actualizar opacidad para efecto de parpadeo
                star.opacity += star.twinkleSpeed * star.twinkleDirection;
                if (star.opacity > 1) {
                    star.opacity = 1;
                    star.twinkleDirection = -1;
                } else if (star.opacity < 0.3) {
                    star.opacity = 0.3;
                    star.twinkleDirection = 1;
                }
                
                // Dibujar estrella
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();
                
                // Añadir efecto de brillo
                ctx.shadowBlur = 10;
                ctx.shadowColor = 'white';
            });
            
            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        />
    );
}

export default StarsBackground;
