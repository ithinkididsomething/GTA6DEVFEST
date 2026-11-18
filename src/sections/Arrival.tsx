import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Calendar, Ticket } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

gsap.registerPlugin(ScrollTrigger);

interface ArrivalProps {
  onEnterClick: () => void;
}

export const Arrival: React.FC<ArrivalProps> = ({ onEnterClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const titleContainerRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const scrollPromptRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        bgImageRef.current,
        { scale: 1.1, filter: 'brightness(0.8)' },
        { scale: 1.0, filter: 'brightness(1.0)', duration: 1.0 }
      )
        .fromTo(
          badgeRef.current,
          { opacity: 0, y: -15 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.7'
        )
        // Scattered Letter Assembly into final position
        .fromTo(
          titleContainerRef.current?.children ? Array.from(titleContainerRef.current.children) : [],
          {
            opacity: 0,
            y: (i) => (i % 2 === 0 ? 30 : -20),
            x: (i) => (i - 3) * 15,
            rotation: (i) => (i - 3) * 3,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            rotation: 0,
            stagger: 0.04,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.5'
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          scrollPromptRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.3'
        );

      // Scroll-driven camera push (desktop only, leaves mobile free to scroll naturally)
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=100%',
            pin: true,
            scrub: 0.8,
          },
        })
          .to(bgImageRef.current, {
            scale: 1.25,
            yPercent: -4,
            ease: 'none',
          })
          .to(
            [badgeRef.current, titleContainerRef.current, subtitleRef.current, scrollPromptRef.current],
            {
              yPercent: -30,
              opacity: 0,
              stagger: 0.04,
              ease: 'power1.in',
            },
            0.5
          )
          .to(
            overlayRef.current,
            {
              backgroundColor: 'rgba(5, 7, 14, 0.45)',
              ease: 'none',
            },
            0.4
          );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const titleChars = "DEVFEST".split("");

  return (
    <section
      id="arrival"
      ref={containerRef}
      className="relative w-full h-screen min-h-[660px] max-h-[1080px] pt-20 pb-4 sm:pt-24 sm:pb-6 overflow-hidden bg-[#05070E] flex flex-col justify-between items-center scroll-mt-24"
      aria-label="Chapter 01: The Arrival"
    >
      {/* Full-frame Cinematic Background Photo */}
      <div
        ref={bgImageRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url('/assets/cinematic/01-sunset-arrival.jpg')`,
        }}
      />

      {/* Atmospheric Color Grading & Lighting Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#05070E] via-transparent to-[#05070E]/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A00]/25 via-[#F87572]/20 via-[#E02484]/20 to-[#3B146B]/30 mix-blend-color-dodge pointer-events-none" />
      <div ref={overlayRef} className="absolute inset-0 pointer-events-none transition-colors duration-300" />
      <div className="cinematic-vignette" />

      {/* Official GDG Community Mission Badge - Top Row */}
      <div className="relative z-20 pt-1 sm:pt-2 flex justify-center w-full">
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/85 border border-[#FF7A00]/50 backdrop-blur-xl shadow-[0_0_25px_rgba(255,122,0,0.35)]"
        >
          <span className="w-2 h-2 rounded-full bg-[#FFE600] animate-pulse shadow-[0_0_8px_#FFE600]" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-white font-bold">
            GDG INDORE & GDG ON CAMPUS IET DAVV • 2026 EDITION
          </span>
        </div>
      </div>

      {/* Hero Content Container - Centered */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center my-auto">
        {/* Scattered Letter Assembly Headline: DEVFEST */}
        <div className="relative flex items-center justify-center my-1 sm:my-2">
          {/* Ambient GTA VI Neon Backlight Flare */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#FF7A00]/30 via-[#E02484]/35 to-[#7B208F]/30 blur-3xl rounded-full scale-125 pointer-events-none" />

          <h1
            ref={titleContainerRef}
            className="font-display uppercase text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[11.5rem] leading-[0.84] tracking-tight font-black select-none flex items-center justify-center"
          >
            {titleChars.map((char, index) => (
              <span
                key={index}
                className="inline-block gta-title-text gta-title-glow will-change-transform"
              >
                {char}
              </span>
            ))}
          </h1>
        </div>

        {/* Subtitle Block: INDORE 2026 & Theme */}
        <div ref={subtitleRef} className="max-w-3xl flex flex-col items-center">
          <div className="flex items-center gap-3 sm:gap-4 font-display text-2xl sm:text-3xl md:text-4xl tracking-[0.22em] font-extrabold uppercase">
            <span className="text-white drop-shadow-[0_4px_15px_rgba(255,255,255,0.4)]">INDORE</span>
            <span className="text-[#F87572] font-mono text-xl sm:text-2xl font-light">/</span>
            <span className="bg-gradient-to-r from-[#FF7A00] via-[#E02484] to-[#9D4EDD] bg-clip-text text-transparent drop-shadow-[0_4px_15px_rgba(224,36,132,0.6)]">2026</span>
          </div>

          <div className="mt-2 p-[1px] rounded-full bg-gradient-to-r from-[#FFB450] via-[#F87572] via-[#C9349B] to-[#7B208F] shadow-[0_0_20px_rgba(201,52,155,0.35)]">
            <div className="px-4 py-1 rounded-full bg-[#05070E]/90 backdrop-blur-md text-[11px] sm:text-xs font-mono tracking-widest text-white uppercase font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] animate-ping" />
              <span>NEW FRONTIERS — "FROM ORBIT TO INSIGHT"</span>
            </div>
          </div>

          <p className="mt-2 text-xs sm:text-sm font-supporting text-white/90 tracking-wide font-normal max-w-lg">
            {EVENT_DATA.theme.tagline}
          </p>

          {/* 3 Color-Coded GTA VI Meta Chips */}
          <div className="mt-2.5 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono uppercase tracking-wider">
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFB450]/15 border border-[#FFB450]/50 text-[#FFD600] backdrop-blur-md shadow-[0_0_15px_rgba(255,180,80,0.25)]">
              <Calendar className="w-3.5 h-3.5 text-[#FFB450]" />
              <span className="font-semibold">{EVENT_DATA.dates.fullDate}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F87572]/15 border border-[#F87572]/50 text-[#FFA099] backdrop-blur-md shadow-[0_0_15px_rgba(248,117,114,0.25)]">
              <MapPin className="w-3.5 h-3.5 text-[#F87572]" />
              <span className="font-semibold">{EVENT_DATA.venue.name}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#C9349B]/15 border border-[#C9349B]/50 text-[#FF70D0] backdrop-blur-md shadow-[0_0_15px_rgba(201,52,155,0.25)]">
              <Ticket className="w-3.5 h-3.5 text-[#E02484]" />
              <span className="font-semibold">From {EVENT_DATA.registration.startingPrice}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator Prompt - Pinned cleanly at bottom, guaranteed never to clip */}
      <div className="relative z-20 pb-2 sm:pb-3 flex justify-center w-full">
        <div
          ref={scrollPromptRef}
          onClick={onEnterClick}
          className="flex flex-col items-center cursor-pointer group"
          role="button"
          tabIndex={0}
          aria-label="Scroll to enter the city"
        >
          <div className="px-5 py-2 rounded-full gta-pill-btn hover:scale-105 transition-transform flex items-center gap-2.5 shadow-[0_0_30px_rgba(224,36,132,0.5)]">
            <span className="text-[11px] sm:text-xs font-mono font-black tracking-[0.25em] uppercase text-white">
              ENTER THE NEW FRONTIERS
            </span>
            <span className="text-white font-black text-sm">↓</span>
          </div>
          <div className="w-4 h-6 mt-1.5 rounded-full border border-white/40 flex items-start justify-center p-0.5 group-hover:border-[#F87572] transition-colors">
            <div className="w-1 h-1.5 rounded-full bg-gradient-to-b from-[#FFE600] via-[#F87572] to-[#E02484] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
