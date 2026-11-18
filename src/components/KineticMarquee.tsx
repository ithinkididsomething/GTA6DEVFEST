import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface KineticMarqueeProps {
  text?: string;
  direction?: 'left' | 'right';
  className?: string;
}

export const KineticMarquee: React.FC<KineticMarqueeProps> = ({
  text = "NEW FRONTIERS // FROM ORBIT TO INSIGHT // DEVFEST INDORE 2026 // GDG INDORE // ESSENTIA HOTEL //",
  direction = 'left',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Left-moving text starts slightly right and moves left.
    // Right-moving text starts further back and triggers later in the scroll so the text is fully readable when in view.
    const startOffset = direction === 'left' ? 10 : -40;
    const endOffset = direction === 'left' ? -60 : 18;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        track,
        { xPercent: startOffset },
        {
          xPercent: endOffset,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: direction === 'right' ? 'top 58%' : 'top 75%',
            end: direction === 'right' ? 'bottom 15%' : 'bottom 20%',
            scrub: 0.8,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [direction]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden py-4 sm:py-6 border-y border-white/5 bg-white/[0.01] select-none pointer-events-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}
      aria-hidden="true"
    >
      <div
        ref={trackRef}
        className="flex whitespace-nowrap will-change-transform font-display text-2xl sm:text-4xl md:text-5xl tracking-widest uppercase font-bold text-white/40"
      >
        <span className="mr-12">{text}</span>
        <span className="mr-12">{text}</span>
        <span className="mr-12">{text}</span>
        <span className="mr-12">{text}</span>
      </div>
    </div>
  );
};
