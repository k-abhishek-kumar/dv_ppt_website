"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

const PARTICLE_COLOR = "45, 212, 191";
const LINK_DISTANCE = 120;
const LINK_DISTANCE_SQ = LINK_DISTANCE * LINK_DISTANCE;
const FRAME_INTERVAL = 1000 / 30;
const MIN_PARTICLES = 18;
const MAX_PARTICLES = 32;

function createParticle(width: number, height: number): Particle {
  const speed = 0.12 + Math.random() * 0.18;
  const angle = Math.random() * Math.PI * 2;

  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
  };
}

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationId = 0;
    let lastFrame = 0;
    let running = true;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    const cellSize = LINK_DISTANCE;
    let cols = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 1.25);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(
        MAX_PARTICLES,
        Math.max(MIN_PARTICLES, Math.floor((width * height) / 28000))
      );

      particles = Array.from({ length: count }, () => createParticle(width, height));
      cols = Math.ceil(width / cellSize) || 1;
    };

    const draw = (timestamp: number) => {
      if (!running) return;

      if (timestamp - lastFrame < FRAME_INTERVAL) {
        animationId = requestAnimationFrame(draw);
        return;
      }
      lastFrame = timestamp;

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x <= 0 || particle.x >= width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= height) particle.vy *= -1;

        particle.x = Math.max(0, Math.min(width, particle.x));
        particle.y = Math.max(0, Math.min(height, particle.y));
      }

      ctx.clearRect(0, 0, width, height);

      const grid: number[][] = Array.from({ length: cols * Math.ceil(height / cellSize) }, () => []);

      particles.forEach((particle, index) => {
        const col = Math.floor(particle.x / cellSize);
        const row = Math.floor(particle.y / cellSize);
        grid[row * cols + col]?.push(index);
      });

      ctx.lineWidth = 0.7;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        const col = Math.floor(a.x / cellSize);
        const row = Math.floor(a.y / cellSize);

        for (let ny = Math.max(0, row - 1); ny <= row + 1; ny++) {
          for (let nx = Math.max(0, col - 1); nx <= col + 1; nx++) {
            const cell = grid[ny * cols + nx];
            if (!cell) continue;

            for (const j of cell) {
              if (j <= i) continue;
              const b = particles[j];
              const dx = a.x - b.x;
              const dy = a.y - b.y;
              const distSq = dx * dx + dy * dy;

              if (distSq < LINK_DISTANCE_SQ) {
                const opacity = (1 - Math.sqrt(distSq) / LINK_DISTANCE) * 0.14;
                ctx.strokeStyle = `rgba(${PARTICLE_COLOR}, ${opacity})`;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
              }
            }
          }
        }
      }

      ctx.fillStyle = `rgba(${PARTICLE_COLOR}, 0.3)`;
      for (const particle of particles) {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      running = !document.hidden;
      if (running) {
        lastFrame = 0;
        animationId = requestAnimationFrame(draw);
      } else {
        cancelAnimationFrame(animationId);
      }
    };

    resize();
    animationId = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}
