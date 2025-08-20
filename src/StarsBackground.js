import React, { useEffect, useRef } from 'react';

function StarsBackground() {
    const canvasRef = useRef(null);
    const starsRef = useRef([]);
    const animationFrameRef = useRef(null);
    const resizeTimeoutRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        const getDpr = () => Math.min(window.devicePixelRatio || 1, 2);
        const getStarCount = () => {
            const w = window.innerWidth;
            // Menos estrellas en móviles, más en pantallas grandes
            if (w < 640) return 100;      // sm-
            if (w < 1024) return 160;     // md/lg-
            return 220;                   // xl+
        };

        // Ajustar el tamaño del canvas al tamaño de la ventana y DPR
        const resizeCanvas = () => {
            const dpr = getDpr();
            const width = window.innerWidth;
            const height = window.innerHeight;

            // Estilo (CSS px)
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';

            // Buffer (device px)
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);

            // Escalar el contexto para dibujar en coordenadas de CSS px
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };
        
        // Debounce de resize
        const onResize = () => {
            if (resizeTimeoutRef.current) clearTimeout(resizeTimeoutRef.current);
            resizeTimeoutRef.current = setTimeout(() => {
                resizeCanvas();
                starsRef.current = createStars();
            }, 150);
        };
        
        resizeCanvas();
        window.addEventListener('resize', onResize, { passive: true });

        // Crear estrellas
        const createStars = () => {
            const stars = [];
            const starCount = getStarCount();
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
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
            if (document.hidden) {
                // Si la pestaña no es visible, no renderizamos frames
                return;
            }
            const dpr = getDpr();
            const width = canvas.width / dpr;
            const height = canvas.height / dpr;
            ctx.clearRect(0, 0, width, height);

            // Ajustar propiedades de sombra una vez por frame
            ctx.shadowBlur = window.innerWidth < 640 ? 6 : 10;
            ctx.shadowColor = 'white';

            starsRef.current.forEach(star => {
                // Actualizar posición
                star.x += Math.cos(star.angle) * star.speed;
                star.y += Math.sin(star.angle) * star.speed;
                
                // Reaparecer en el otro lado si sale de la pantalla
                if (star.x < 0) star.x = width;
                if (star.x > width) star.x = 0;
                if (star.y < 0) star.y = height;
                if (star.y > height) star.y = 0;
                
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
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        // Controlar visibilidad del documento para pausar/reanudar
        const handleVisibility = () => {
            if (document.hidden) {
                if (animationFrameRef.current) {
                    cancelAnimationFrame(animationFrameRef.current);
                    animationFrameRef.current = null;
                }
            } else {
                // Reiniciar la animación cuando vuelve a ser visible
                animationFrameRef.current = requestAnimationFrame(animate);
            }
        };

        document.addEventListener('visibilitychange', handleVisibility);

        // Iniciar animación
        animationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', onResize);
            document.removeEventListener('visibilitychange', handleVisibility);
            if (resizeTimeoutRef.current) clearTimeout(resizeTimeoutRef.current);
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
