import React, { useEffect, useRef, useState } from 'react';

/**
 * GTA Vice City Tactical Aim & Reticle Cursor
 * 
 * Replaces the disjointed dual-circle cursor with an authentic,
 * unified GTA VI targeting reticle:
 * - Precision center aim dot
 * - 4-point tactical crosshairs with orbital reticle ring
 * - GTA "Lock-On" brackets when hovering interactive targets
 * - Instant recoil pinch & flash on mouse click
 * - 100% unified coordinate anchoring (no detached floating circles)
 */
export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const hasMovedRef = useRef<boolean>(false);
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicking, setIsClicking] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Only activate on devices with fine pointer and no reduced-motion override
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    document.body.classList.add('gta-cursor-active');

    let mouseX = -100;
    let mouseY = -100;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!hasMovedRef.current) {
        hasMovedRef.current = true;
        setIsVisible(true);
      }

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check for interactive targets
      const target = e.target as HTMLElement | null;
      if (target) {
        const explicitCursor = target.closest('[data-cursor]') as HTMLElement | null;
        const clickable = target.closest('a, button, input, select, [role="button"]');

        if (explicitCursor) {
          setIsHovered(true);
          setCursorText(explicitCursor.getAttribute('data-cursor')?.toUpperCase() || 'LOCK-ON');
        } else if (clickable) {
          setIsHovered(true);
          setCursorText('SELECT');
        } else {
          setIsHovered(false);
          setCursorText('');
        }
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      document.body.classList.remove('gta-cursor-active');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[999999] will-change-transform transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Precision Core Aim Dot */}
      <div
        className={`absolute -top-1 -left-1 w-2 h-2 rounded-full transition-all duration-150 ${
          isClicking
            ? 'scale-150 bg-[#FFE600] shadow-[0_0_15px_#FFE600]'
            : isHovered
            ? 'scale-125 bg-[#FF7A00] shadow-[0_0_8px_#FF7A00]'
            : 'scale-100 bg-[#FFE600] shadow-[0_0_5px_#FFE600]'
        }`}
      />

      {/* GTA Crosshairs & Reticle (Always strictly centered on pointer) */}
      <div
        className={`absolute -top-4 -left-4 w-8 h-8 flex items-center justify-center transition-all duration-200 ${
          isClicking
            ? 'scale-75'
            : isHovered
            ? 'scale-125'
            : 'scale-100'
        }`}
      >
        <svg
          viewBox="0 0 32 32"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isHovered ? (
            /* GTA VI Lock-on Target Brackets */
            <g className="text-[#E02484]">
              {/* Top-Left Bracket */}
              <path d="M4 11 V4 H11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              {/* Top-Right Bracket */}
              <path d="M28 11 V4 H21" stroke="#FFE600" strokeWidth="1.8" strokeLinecap="round" />
              {/* Bottom-Left Bracket */}
              <path d="M4 21 V28 H11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              {/* Bottom-Right Bracket */}
              <path d="M28 21 V28 H21" stroke="#FFE600" strokeWidth="1.8" strokeLinecap="round" />

              {/* Inner Pulsing Lock Ring */}
              <circle
                cx="16"
                cy="16"
                r="6"
                stroke="#FF7A00"
                strokeWidth="1"
                strokeDasharray="2 2"
                className="animate-spin"
                style={{ animationDuration: '4s' }}
              />
            </g>
          ) : (
            /* Default GTA Aim Crosshair Reticle */
            <g className="text-[#FF7A00]">
              {/* Thin Circular Reticle */}
              <circle
                cx="16"
                cy="16"
                r="9"
                stroke="currentColor"
                strokeWidth="1"
                strokeOpacity="0.6"
                strokeDasharray="3 3"
              />

              {/* 4 Precision Crosshair Ticks (12, 3, 6, 9 o'clock) */}
              <line x1="16" y1="2" x2="16" y2="5.5" stroke="#FFE600" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="16" y1="26.5" x2="16" y2="30" stroke="#FFE600" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="2" y1="16" x2="5.5" y2="16" stroke="#FFE600" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="26.5" y1="16" x2="30" y2="16" stroke="#FFE600" strokeWidth="1.5" strokeLinecap="round" />
            </g>
          )}
        </svg>
      </div>

      {/* GTA Tactical HUD Data Tag (Appears beside reticle on hover) */}
      {isHovered && (
        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/90 border border-[#FF7A00]/50 shadow-[0_0_15px_rgba(255,122,0,0.35)] backdrop-blur-md pointer-events-none whitespace-nowrap animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600] animate-ping" />
          <span className="font-mono text-[9px] font-black tracking-widest text-white uppercase">
            {cursorText || 'TARGET'}
          </span>
        </div>
      )}
    </div>
  );
};
