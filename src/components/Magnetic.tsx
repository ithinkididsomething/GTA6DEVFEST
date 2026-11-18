import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MagneticProps {
  children: React.ReactElement;
  strength?: number;
  textStrength?: number;
  className?: string;
}

export const Magnetic: React.FC<MagneticProps> = ({
  children,
  strength = 0.35,
  textStrength = 0.15,
  className = '',
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on desktop pointer devices with hover capability
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const el = elementRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Magnetic translation of outer element
      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: 'power2.out',
      });

      // Subtle counter-parallax for inner magnetic text/icons
      const innerItems = el.querySelectorAll('[data-magnetic-inner]');
      if (innerItems.length > 0) {
        gsap.to(innerItems, {
          x: x * textStrength,
          y: y * textStrength,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseLeave = () => {
      // Spring smoothly back to original equilibrium
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.75,
        ease: 'elastic.out(1.1, 0.4)',
      });

      const innerItems = el.querySelectorAll('[data-magnetic-inner]');
      if (innerItems.length > 0) {
        gsap.to(innerItems, {
          x: 0,
          y: 0,
          duration: 0.65,
          ease: 'elastic.out(1.1, 0.4)',
        });
      }
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, textStrength]);

  return (
    <div ref={elementRef} className={`inline-block will-change-transform ${className}`}>
      {children}
    </div>
  );
};
