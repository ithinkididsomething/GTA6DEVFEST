import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ShieldCheck, MapPin, Calendar, Sparkles } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

gsap.registerPlugin(ScrollTrigger);

export const FinalReveal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const titleLettersRef = useRef<HTMLDivElement>(null);
  const ctaButtonRef = useRef<HTMLAnchorElement>(null);

  // Magnetic button effect on CTA
  useEffect(() => {
    const btn = ctaButtonRef.current;
    if (!btn) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, {
        x: x * 0.35,
        y: y * 0.35,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1.1, 0.4)',
      });
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      tl.fromTo(
        bgImageRef.current,
        { scale: 1.06, filter: 'brightness(0.75)' },
        { scale: 1.0, filter: 'brightness(1.0)', duration: 0.6, ease: 'power2.out' }
      )
        .fromTo(
          [headlineRef.current, titleLettersRef.current, ctaButtonRef.current],
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.45, ease: 'power2.out' },
          0.1
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const devfestLetters = "DEVFEST".split("");

  return (
    <section
      id="register"
      ref={containerRef}
      className="relative min-h-screen py-36 sm:py-48 lg:py-56 bg-[#05070E] flex items-center justify-center overflow-hidden scroll-mt-24"
      aria-label="Chapter 10: The Grand Destination"
    >
      {/* Full-Frame Panoramic Nighttime Metropolis */}
      <div
        ref={bgImageRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url('/assets/cinematic/07-neon-night-reveal.jpg')`,
        }}
      />

      {/* Atmospheric Neon Shading Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#05070E] via-[#05070E]/60 to-[#05070E]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#F43F5E]/15 via-transparent to-[#38BDF8]/15 mix-blend-color-dodge pointer-events-none" />
      <div className="cinematic-vignette" />

      {/* Content Centerpiece */}
      <div
        ref={contentRef}
        className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
      >
        {/* Subtle Lead Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/20 backdrop-blur-md mb-6 shadow-xl">
          <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-white/90 font-semibold">
            {EVENT_DATA.organiser.name} • 2026 EDITION
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F43F5E] animate-ping" />
        </div>

        {/* Lead Chapter Tagline */}
        <h3
          ref={headlineRef}
          className="font-supporting text-lg sm:text-2xl md:text-3xl text-white/90 font-light tracking-wide uppercase max-w-xl"
        >
          YOUR NEXT CHAPTER STARTS HERE.
        </h3>

        {/* Staggered Masked Typography: DEVFEST */}
        <div
          ref={titleLettersRef}
          className="mt-4 flex items-center justify-center overflow-hidden select-none"
        >
          {devfestLetters.map((char, index) => (
            <span
              key={index}
              className="inline-block font-display uppercase text-7xl sm:text-9xl md:text-[11rem] lg:text-[13rem] leading-[0.88] font-black tracking-tight sunset-gradient-text drop-shadow-[0_20px_50px_rgba(244,63,94,0.35)]"
            >
              {char}
            </span>
          ))}
        </div>

        {/* Secondary Title: INDORE 2026 */}
        <div className="font-display text-4xl sm:text-6xl md:text-7xl tracking-widest text-white uppercase font-black mt-2">
          INDORE <span className="sunset-gradient-text">2026</span>
        </div>

        {/* Date & Venue Stamp */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-mono uppercase tracking-widest text-white/80">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#FF9B55]" />
            <span>{EVENT_DATA.dates.fullDate}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#F87572]" />
            <span>{EVENT_DATA.venue.name}</span>
          </div>
        </div>

        {/* Magnetic Action Button */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center gap-4">
          <a
            ref={ctaButtonRef}
            href={EVENT_DATA.registration.url}
            target="_blank"
            rel="noreferrer"
            data-cursor="TICKETS"
            className="group relative overflow-hidden px-8 py-4 sm:px-12 sm:py-5 rounded-full font-mono text-sm sm:text-base font-bold uppercase tracking-widest text-white bg-gradient-to-r from-[#FFB450] via-[#FF9B55] to-[#C9349B] shadow-[0_0_50px_rgba(255,155,85,0.4)] hover:shadow-[0_0_80px_rgba(201,52,155,0.6)] transition-shadow duration-300 inline-flex items-center gap-3 cursor-pointer will-change-transform"
          >
            <span className="relative z-10 flex items-center gap-3">
              <span>GET PASSES — FROM {EVENT_DATA.registration.startingPrice}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-[#C9349B] via-[#7B208F] to-[#3B146B] transition-transform duration-500" />
          </a>

          <div className="flex items-center gap-2 text-xs font-mono text-white/60">
            <ShieldCheck className="w-4 h-4 text-[#FF9B55]" />
            <span>Official KonfHub Ticketing • Cadet & Commander Passes</span>
          </div>
        </div>
      </div>
    </section>
  );
};
