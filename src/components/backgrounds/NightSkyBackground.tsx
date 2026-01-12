import { useEffect, useRef, useCallback, memo } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  brightness: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  trail: number;
  active: boolean;
}

const NightSkyBackground = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const animationRef = useRef<number>(0);
  const lastShootingStarTime = useRef<number>(0);

  const createStars = useCallback((width: number, height: number): Star[] => {
    const stars: Star[] = [];
    const starCount = Math.floor((width * height) / 2000); // Density based on screen size
    
    for (let i = 0; i < starCount; i++) {
      // Create layered depth effect
      const layer = Math.random();
      let size: number;
      let brightness: number;
      
      if (layer < 0.7) {
        // Distant stars - small and dim
        size = Math.random() * 0.8 + 0.3;
        brightness = Math.random() * 0.4 + 0.1;
      } else if (layer < 0.92) {
        // Mid-distance stars
        size = Math.random() * 1.2 + 0.6;
        brightness = Math.random() * 0.5 + 0.3;
      } else {
        // Nearby bright stars
        size = Math.random() * 1.8 + 1;
        brightness = Math.random() * 0.4 + 0.6;
      }

      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size,
        brightness,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }
    return stars;
  }, []);

  const createShootingStar = useCallback((width: number, height: number): ShootingStar => {
    const startX = Math.random() * width * 0.8 + width * 0.1;
    const startY = Math.random() * height * 0.3;
    
    return {
      x: startX,
      y: startY,
      length: Math.random() * 80 + 60,
      speed: Math.random() * 8 + 6,
      angle: Math.random() * 0.4 + 0.5, // Diagonal angle (radians)
      opacity: 1,
      trail: 0,
      active: true,
    };
  }, []);

  const drawNebula = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Faint nebula wisps using your theme colors
    const nebulae = [
      { x: width * 0.2, y: height * 0.3, radius: 300, color: "175, 80%, 50%" }, // Primary teal
      { x: width * 0.8, y: height * 0.6, radius: 350, color: "280, 70%, 60%" }, // Accent purple
      { x: width * 0.5, y: height * 0.8, radius: 280, color: "220, 50%, 30%" }, // Deep blue
      { x: width * 0.15, y: height * 0.7, radius: 200, color: "280, 60%, 40%" }, // Muted purple
    ];

    nebulae.forEach((nebula) => {
      const gradient = ctx.createRadialGradient(
        nebula.x, nebula.y, 0,
        nebula.x, nebula.y, nebula.radius
      );
      gradient.addColorStop(0, `hsla(${nebula.color}, 0.04)`);
      gradient.addColorStop(0.5, `hsla(${nebula.color}, 0.02)`);
      gradient.addColorStop(1, "transparent");
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    });
  }, []);

  const drawBackground = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Deep cosmic gradient matching your theme
    const gradient = ctx.createRadialGradient(
      width * 0.5, height * 0.4, 0,
      width * 0.5, height * 0.5, Math.max(width, height) * 0.8
    );
    
    // Center: subtle deep navy with hints of your colors
    gradient.addColorStop(0, "hsl(240, 25%, 8%)");
    gradient.addColorStop(0.3, "hsl(230, 22%, 6%)");
    gradient.addColorStop(0.6, "hsl(225, 20%, 5%)");
    gradient.addColorStop(1, "hsl(220, 20%, 4%)"); // Matches --background
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Add nebula wisps
    drawNebula(ctx, width, height);
  }, [drawNebula]);

  const drawStars = useCallback((ctx: CanvasRenderingContext2D, time: number) => {
    starsRef.current.forEach((star) => {
      const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.3 + 0.7;
      const currentBrightness = star.brightness * twinkle;
      
      // Star glow
      if (star.size > 1) {
        const glowGradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 3
        );
        glowGradient.addColorStop(0, `hsla(200, 60%, 90%, ${currentBrightness * 0.3})`);
        glowGradient.addColorStop(1, "transparent");
        ctx.fillStyle = glowGradient;
        ctx.fillRect(star.x - star.size * 3, star.y - star.size * 3, star.size * 6, star.size * 6);
      }
      
      // Star core with slight color variation
      const hue = 180 + Math.random() * 40; // Blue-white to teal range
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${hue}, 20%, 95%, ${currentBrightness})`;
      ctx.fill();
    });
  }, []);

  const drawShootingStars = useCallback((ctx: CanvasRenderingContext2D) => {
    shootingStarsRef.current.forEach((meteor) => {
      if (!meteor.active) return;
      
      const endX = meteor.x + Math.cos(meteor.angle) * meteor.length;
      const endY = meteor.y + Math.sin(meteor.angle) * meteor.length;
      
      // Trail gradient
      const gradient = ctx.createLinearGradient(meteor.x, meteor.y, endX, endY);
      gradient.addColorStop(0, `hsla(175, 80%, 70%, ${meteor.opacity * 0.9})`);
      gradient.addColorStop(0.3, `hsla(200, 60%, 80%, ${meteor.opacity * 0.5})`);
      gradient.addColorStop(1, "transparent");
      
      ctx.beginPath();
      ctx.moveTo(meteor.x, meteor.y);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.stroke();
      
      // Bright head
      ctx.beginPath();
      ctx.arc(meteor.x, meteor.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(180, 90%, 95%, ${meteor.opacity})`;
      ctx.fill();
    });
  }, []);

  const updateShootingStars = useCallback((width: number, height: number) => {
    shootingStarsRef.current = shootingStarsRef.current.map((meteor) => {
      if (!meteor.active) return meteor;
      
      const newX = meteor.x + Math.cos(meteor.angle) * meteor.speed;
      const newY = meteor.y + Math.sin(meteor.angle) * meteor.speed;
      meteor.trail += meteor.speed;
      
      // Fade out as it travels
      if (meteor.trail > meteor.length * 2) {
        meteor.opacity -= 0.02;
      }
      
      if (meteor.opacity <= 0 || newX > width || newY > height) {
        meteor.active = false;
      }
      
      return { ...meteor, x: newX, y: newY };
    }).filter((m) => m.active);
  }, []);

  const animate = useCallback((time: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const width = canvas.width;
    const height = canvas.height;
    
    // Draw static background
    drawBackground(ctx, width, height);
    
    // Draw and animate stars
    drawStars(ctx, time);
    
    // Occasionally spawn shooting stars (every 4-8 seconds)
    const now = Date.now();
    if (now - lastShootingStarTime.current > 4000 + Math.random() * 4000) {
      if (shootingStarsRef.current.length < 2) {
        shootingStarsRef.current.push(createShootingStar(width, height));
        lastShootingStarTime.current = now;
      }
    }
    
    // Update and draw shooting stars
    updateShootingStars(width, height);
    drawShootingStars(ctx);
    
    animationRef.current = requestAnimationFrame(animate);
  }, [drawBackground, drawStars, drawShootingStars, updateShootingStars, createShootingStar]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      starsRef.current = createStars(canvas.width, canvas.height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [createStars, animate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: "hsl(220, 20%, 4%)" }}
    />
  );
});

NightSkyBackground.displayName = "NightSkyBackground";

export default NightSkyBackground;
