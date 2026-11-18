import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max tilt degrees, default 6
  perspective?: number; // default 1000px
  scale?: number; // default 1.01
  glare?: boolean;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 6,
  perspective = 1000,
  scale = 1.01,
  glare = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0 to 1
      const y = (e.clientY - rect.top) / rect.height; // 0 to 1

      const tiltX = (0.5 - y) * (maxTilt * 2);
      const tiltY = (x - 0.5) * (maxTilt * 2);

      gsap.to(card, {
        rotateX: tiltX,
        rotateY: tiltY,
        scale: scale,
        duration: 0.3,
        ease: 'power2.out',
        transformPerspective: perspective,
        transformStyle: 'preserve-3d',
      });

      if (glare && glareRef.current) {
        gsap.to(glareRef.current, {
          opacity: 0.25,
          background: `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.4), transparent 60%)`,
          duration: 0.15,
        });
      }

      // Parallax inner elements
      const parallaxItems = card.querySelectorAll('[data-tilt-parallax]');
      parallaxItems.forEach((item) => {
        gsap.to(item, {
          x: (x - 0.5) * 16,
          y: (y - 0.5) * 16,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1.0,
        duration: 0.7,
        ease: 'power3.out',
      });

      if (glare && glareRef.current) {
        gsap.to(glareRef.current, {
          opacity: 0,
          duration: 0.5,
        });
      }

      const parallaxItems = card.querySelectorAll('[data-tilt-parallax]');
      parallaxItems.forEach((item) => {
        gsap.to(item, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
        });
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxTilt, perspective, scale, glare]);

  return (
    <div
      ref={cardRef}
      className={`relative will-change-transform ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] opacity-0 transition-opacity duration-300"
          aria-hidden="true"
        />
      )}
    </div>
  );
};
