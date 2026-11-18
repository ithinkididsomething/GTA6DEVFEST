import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Satellite, Sparkles, Cpu, Layers, Radio } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import { TiltCard } from '../components/TiltCard';
import {
  PalmTreesSilhouette,
  MiamiSkylineSilhouette,
  SunsetDiscSilhouette,
  LighthouseSilhouette,
} from '../components/GtaSilhouettes';

gsap.registerPlugin(ScrollTrigger);

export const CityOpen: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const mascotCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation - reveals promptly as soon as Chapter 02 enters view
      gsap.fromTo(
        [badgeRef.current, headlineRef.current, paragraphRef.current, cardsRef.current, mascotCardRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Smooth cinematic camera push on background skyline
      gsap.to(imageRef.current, {
        scale: 1.15,
        yPercent: -5,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const icons = [Satellite, Sparkles, Cpu, Layers];

  return (
    <section
      id="frontiers"
      ref={containerRef}
      className="relative w-full min-h-screen py-24 sm:py-32 lg:py-36 overflow-hidden bg-[#05070E] flex items-center scroll-mt-24"
      aria-label="Chapter 02: New Frontiers"
    >
      {/* High-Altitude Balcony Metropolitan Sunset Artwork as Living Background */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url('/assets/gta6/02-skyline-balcony-sunset.jpg')`,
        }}
      />

      {/* Atmospheric Shading & Streetlight Glow Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#05070E]/95 via-[#05070E]/75 to-[#05070E]/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#05070E] via-transparent to-[#05070E]/60 pointer-events-none" />
      <div className="cinematic-vignette" />

      {/* Narrative Editorial Layer */}
      <div
        ref={contentRef}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Chapter Headline, Narrative & 4 Tracks */}
          <div className="lg:col-span-7">
            {/* Chapter Indicator */}
            <div
              ref={badgeRef}
              className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#FF9B55] uppercase mb-4 font-bold"
            >
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#FFB450] via-[#FF9B55] to-[#F87572]" />
              <span>Chapter 02 // Commanding The Horizon</span>
            </div>

            {/* Large Hero Headline */}
            <h2
              ref={headlineRef}
              className="font-display uppercase text-5xl sm:text-7xl md:text-8xl leading-[0.92] font-black text-white tracking-tight"
            >
              NEW FRONTIERS. <br />
              <span className="sunset-gradient-text">
                FROM ORBIT TO INSIGHT.
              </span>
            </h2>

            {/* Supporting Manifesto */}
            <p
              ref={paragraphRef}
              className="mt-5 text-sm sm:text-base md:text-lg font-supporting text-white/80 leading-relaxed font-light"
            >
              Standing high above the conventional city grid, looking out at the expanse of what software can achieve. Organized by <strong className="text-white font-medium">{EVENT_DATA.organiser.name}</strong>, DevFest Indore 2026 brings central India's builders together to survey the frontier—from space satellite fleets to multi-agent intelligence and low-latency physical silicon.
            </p>

            {/* Four Frontiers Grid - GTA Vice City Themed Boxes */}
            <div
              ref={cardsRef}
              className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-5 border-t border-white/10"
            >
              {EVENT_DATA.tracks.map((track, idx) => {
                const Icon = icons[idx];
                const silhouettes = [
                  <PalmTreesSilhouette key="palms" className="w-20 h-20 text-[#FF9B55]" />,
                  <MiamiSkylineSilhouette key="skyline" className="w-24 h-18 text-[#C9349B]" />,
                  <SunsetDiscSilhouette key="sunset" className="w-18 h-18 text-[#FFB450]" />,
                  <LighthouseSilhouette key="lighthouse" className="w-22 h-18 text-[#F87572]" />,
                ];
                const topGradients = [
                  "from-[#FFB450] via-[#FF7A00] to-transparent",
                  "from-[#E02484] via-[#7B208F] to-transparent",
                  "from-[#FF7A00] via-[#F87572] to-transparent",
                  "from-[#F87572] via-[#E02484] to-transparent",
                ];

                return (
                  <div
                    key={track.id}
                    className="relative overflow-hidden p-4 rounded-2xl bg-gradient-to-b from-[#111524]/95 to-[#080B18] border border-white/15 backdrop-blur-md hover:border-[#FF9B55]/50 transition-all duration-300 shadow-lg group flex flex-col justify-between"
                  >
                    {/* Glowing Top Line */}
                    <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${topGradients[idx]}`} />

                    {/* GTA Silhouette Watermark */}
                    <div className="absolute -bottom-3 -right-3 pointer-events-none opacity-15 group-hover:opacity-35 group-hover:scale-105 transition-all duration-500">
                      {silhouettes[idx]}
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <Icon className="w-4 h-4 text-[#FFB450] group-hover:scale-110 transition-transform" />
                        <span className="text-[9px] font-mono text-white/40 font-bold">
                          0{idx + 1}
                        </span>
                      </div>
                      <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                        {track.title}
                      </div>
                      <div className="text-[10px] text-white/70 font-sans mt-1 line-clamp-2 leading-relaxed">
                        {track.tagline}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Android Spacesuit Mascot Decoration */}
          <div ref={mascotCardRef} className="lg:col-span-5 flex justify-center">
            <TiltCard
              maxTilt={6}
              className="relative w-full max-w-sm sm:max-w-md rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#111524]/90 to-[#05070E]/95 p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group"
            >
              {/* Image Frame with Glow */}
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="/assets/android-astronaut.jpg"
                  alt="DevFest 2026 Mascot: Android Astronaut in Vice City Tropical Waters"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* HUD Glitch & Neon Water Reflections Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070E] via-transparent to-transparent opacity-85" />

                {/* Top Left Badge: Mascot Tag */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 border border-white/20 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#FFB450] animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-white font-bold">
                    MISSION MASCOT
                  </span>
                </div>

                {/* Top Right: Telemetry Frequency */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-[9px] font-mono text-white/80 flex items-center gap-1">
                  <Radio className="w-3 h-3 text-[#FF9B55] animate-pulse" />
                  <span>22.7°N • 75.8°E</span>
                </div>

                {/* Bottom Overlay Telemetry Data */}
                <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-black/85 border border-white/15 backdrop-blur-md">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider font-semibold">
                    <span className="text-[#FF9B55]">BUGDROID // EXTRAVEHICULAR</span>
                    <span className="text-white/80">VICE CITY WATERS</span>
                  </div>
                  <div className="text-xs text-white/95 font-display uppercase tracking-wide mt-1">
                    "From Orbit to Insight"
                  </div>
                  <p className="text-[10px] text-white/70 font-sans mt-0.5 leading-snug">
                    Exploring uncharted waters at the intersection of orbital satellite telemetry, edge intelligence, and autonomous AI agents.
                  </p>
                </div>
              </div>

              {/* Exterior Card Label */}
              <div className="mt-3 px-2 flex items-center justify-between text-[11px] font-mono text-white/50">
                <span className="flex items-center gap-1.5 text-white/80">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
                  <span>Official DevFest 2026 Mascot</span>
                </span>
                <span className="text-white/70 font-semibold">GDG INDORE</span>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};
