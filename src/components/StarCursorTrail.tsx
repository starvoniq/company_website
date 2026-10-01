import React, { useEffect, useRef } from 'react';

interface StarParticle {
  x: number;
  y: number;
  size: number;
  maxSize: number;
  alpha: number;
  maxLife: number;
  life: number;
  vx: number;
  vy: number;
  rotation: number;
  rotSpeed: number;
  color: string;
  points: number;
}

export const StarCursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Only activate on devices with fine pointer (mouse / trackpad)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    const particles: StarParticle[] = [];
    const colors = ['#FFC107', '#F4B400', '#2563EB', '#3B82F6', '#FFFFFF', '#FFD54F'];

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const createStar = (x: number, y: number, isBurst = false) => {
      const count = isBurst ? 8 : 1;
      for (let i = 0; i < count; i++) {
        const angle = isBurst ? (Math.PI * 2 * i) / count + (Math.random() * 0.4 - 0.2) : Math.random() * Math.PI * 2;
        const speed = isBurst ? Math.random() * 2.5 + 1.2 : Math.random() * 0.8 + 0.2;
        const size = isBurst ? Math.random() * 6 + 3 : Math.random() * 4 + 2.5;
        const life = isBurst ? Math.random() * 25 + 20 : Math.random() * 20 + 12;

        particles.push({
          x: x + (Math.random() * 4 - 2),
          y: y + (Math.random() * 4 - 2),
          size,
          maxSize: size,
          alpha: 1,
          maxLife: life,
          life,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.2, // slight upward float
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.15,
          color: colors[Math.floor(Math.random() * colors.length)],
          points: Math.random() > 0.4 ? 4 : 5, // 4-point diamond star or 5-point
        });
      }
    };

    let lastSpawn = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastSpawn > 20) {
        createStar(e.clientX, e.clientY);
        lastSpawn = now;
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      createStar(e.clientX, e.clientY, true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });

    // Draw 4-point diamond star shape
    const drawDiamondStar = (cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number, rotation: number, color: string, alpha: number) => {
      ctx.save();
      ctx.beginPath();
      ctx.translate(cx, cy);
      ctx.rotate(rotation);
      ctx.fillStyle = color;
      ctx.globalAlpha = alpha;

      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(0, -outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = Math.cos(rot) * outerRadius;
        y = Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = Math.cos(rot) * innerRadius;
        y = Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(0, -outerRadius);
      ctx.closePath();
      ctx.fill();

      // Soft glow center
      ctx.shadowBlur = 8;
      ctx.shadowColor = color;
      ctx.fill();

      ctx.restore();
    };

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Update and render particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life--;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;
        p.alpha = Math.max(0, p.life / p.maxLife);
        p.size = p.maxSize * (p.life / p.maxLife);

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Draw particle
        drawDiamondStar(
          p.x,
          p.y,
          p.points,
          p.size,
          p.size * 0.32,
          p.rotation,
          p.color,
          p.alpha * 0.85
        );
      }

      // Particles are updated and rendered above
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
      style={{ willChange: 'transform' }}
    />
  );
};
