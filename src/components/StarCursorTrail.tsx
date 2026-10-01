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
  isDot?: boolean;
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
    const colors = ['#FFC107', '#F4B400', '#2563EB', '#60A5FA', '#38BDF8', '#FFFFFF', '#FDE047'];

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

    const createStar = (x: number, y: number, isBurst = false, countOverride?: number) => {
      const count = countOverride ?? (isBurst ? 18 : 2);
      for (let i = 0; i < count; i++) {
        const angle = isBurst ? (Math.PI * 2 * i) / count + (Math.random() * 0.4 - 0.2) : Math.random() * Math.PI * 2;
        const speed = isBurst ? Math.random() * 3.2 + 1.5 : Math.random() * 0.9 + 0.3;
        const isMicro = Math.random() > 0.65;
        const size = isBurst ? Math.random() * 7 + 3.5 : isMicro ? Math.random() * 2.5 + 1.5 : Math.random() * 5 + 2.5;
        const life = isBurst ? Math.random() * 32 + 20 : isMicro ? Math.random() * 18 + 10 : Math.random() * 24 + 14;

        particles.push({
          x: x + (Math.random() * 6 - 3),
          y: y + (Math.random() * 6 - 3),
          size,
          maxSize: size,
          alpha: 1,
          maxLife: life,
          life,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.25, // gentle float
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.18,
          color: colors[Math.floor(Math.random() * colors.length)],
          points: Math.random() > 0.35 ? 4 : 5,
          isDot: isMicro,
        });
      }
    };

    let lastX = -100;
    let lastY = -100;
    let lastTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const now = performance.now();

      if (lastX > 0 && lastY > 0) {
        const dx = x - lastX;
        const dy = y - lastY;
        const dist = Math.hypot(dx, dy);

        // Interpolate trail points for fast mouse movement so no gaps appear
        const steps = Math.min(Math.floor(dist / 10), 6);
        if (steps > 1) {
          for (let s = 1; s <= steps; s++) {
            const ix = lastX + (dx * s) / steps;
            const iy = lastY + (dy * s) / steps;
            createStar(ix, iy, false, 1);
          }
        } else if (now - lastTime > 16) {
          createStar(x, y, false, 2);
          lastTime = now;
        }
      } else {
        createStar(x, y, false, 2);
        lastTime = now;
      }

      lastX = x;
      lastY = y;
    };

    const handleMouseDown = (e: MouseEvent) => {
      createStar(e.clientX, e.clientY, true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });

    // Draw 4-point / 5-point diamond star shape
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
      ctx.shadowBlur = 6;
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
        const progress = p.life / p.maxLife;
        p.alpha = Math.max(0, progress);
        p.size = p.maxSize * progress;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        if (p.isDot) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.7, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha * 0.9;
          ctx.shadowBlur = 4;
          ctx.shadowColor = p.color;
          ctx.fill();
          ctx.restore();
        } else {
          drawDiamondStar(
            p.x,
            p.y,
            p.points,
            p.size,
            p.size * 0.3,
            p.rotation,
            p.color,
            p.alpha * 0.9
          );
        }
      }

      // Limit particle array to prevent memory build up
      if (particles.length > 250) {
        particles.splice(0, particles.length - 250);
      }

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
