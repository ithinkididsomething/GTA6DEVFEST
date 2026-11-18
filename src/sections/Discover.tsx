import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Layers, Users2, Compass, ShieldCheck, Target } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import { TiltCard } from '../components/TiltCard';
import { Magnetic } from '../components/Magnetic';
import {
  PalmTreesSilhouette,
  LighthouseSilhouette,
  SunsetDiscSilhouette,
  MiamiSkylineSilhouette,
} from '../components/GtaSilhouettes';

gsap.registerPlugin(ScrollTrigger);

export const Discover: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const photoCardRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const narrativeRef = useRef<HTMLDivElement>(null);
  const blueprintHeroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
        },
      });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' }
      )
        .fromTo(
          photoCardRef.current,
          { opacity: 0, scale: 0.94, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power2.out' },
          '-=0.7'
        )
        .fromTo(
          narrativeRef.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 1.0, ease: 'power2.out' },
          '-=0.8'
        )
        .fromTo(
          statsRef.current?.children ? Array.from(statsRef.current.children) : [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out' },
          '-=0.6'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="discover"
      ref={containerRef}
      className="relative min-h-screen py-28 sm:py-36 lg:py-40 bg-[#05070E] overflow-hidden border-t border-white/5 scroll-mt-24"
      aria-label="Chapter 03: Discover DevFest"
    >
      {/* Ambient Atmospheric Backdrop Glow */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#7B208F]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-[#FF9B55]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#FF9B55] uppercase mb-3 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB450]" />
            <span>Chapter 03 // The Tactical Blueprint</span>
          </div>

          <h2
            ref={headlineRef}
            className="font-display uppercase text-5xl sm:text-7xl md:text-8xl font-black text-white leading-[0.9] tracking-tight"
          >
            MORE THAN AN EVENT. <br />
            <span className="sunset-gradient-text drop-shadow-[0_10px_30px_rgba(201,52,155,0.35)]">
              A CALCULATED MISSION.
            </span>
          </h2>
        </div>

        {/* Editorial Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-28 sm:mb-36">
          {/* Left: Deep Narrative & Institutional Alignment */}
          <div ref={narrativeRef} className="lg:col-span-6 space-y-8">
            <div className="space-y-5 text-base sm:text-lg text-white/80 font-supporting font-light leading-relaxed">
              <p>
                <strong className="text-white font-medium">DevFest Indore 2026</strong> is the annual developer conference organized by <strong className="text-white font-semibold">{EVENT_DATA.organiser.name}</strong>, bringing the global momentum of technology directly to central India since {EVENT_DATA.organiser.since}.
              </p>
              <p>
                Hosted at <strong className="text-white font-semibold">{EVENT_DATA.venue.name}</strong>, this year’s theme—<strong className="text-[#FFB450]">New Frontiers: From Orbit to Insight</strong>—treats software not as isolated code, but as high-stakes mission architecture bridging space exploration, multi-agent systems, Qualcomm physical silicon, and distributed cloud computing.
              </p>
              <p className="text-sm text-white/60 font-sans">
                Every engineer in Indore knows that breakthroughs don't happen by accident. They happen when engineers gather around the blueprint table, interrogate trade-offs, and execute with absolute clarity.
              </p>
            </div>

            {/* Core Values Pillars - GTA Vice City Themed Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {/* Tactical Engineering Box - Palm Trees & Sunset Glow */}
              <div className="relative overflow-hidden p-5 rounded-2xl bg-gradient-to-br from-[#111524] to-[#080B18] border border-white/15 hover:border-[#FF9B55]/60 transition-all duration-300 shadow-xl group">
                {/* Glowing Top Edge Accent */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#FFB450] via-[#FF7A00] to-transparent" />
                
                {/* Vice City Tropical Palm Silhouette Watermark */}
                <div className="absolute -bottom-2 -right-3 pointer-events-none opacity-20 group-hover:opacity-45 group-hover:scale-105 transition-all duration-500 text-[#FF9B55]">
                  <PalmTreesSilhouette className="w-32 h-28" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-black/60 border border-[#FF9B55]/30">
                      <Layers className="w-5 h-5 text-[#FFB450]" />
                    </div>
                    <span className="text-[9px] font-mono tracking-widest uppercase text-[#FF9B55]/70 font-bold">
                      LABS // H1-H2
                    </span>
                  </div>
                  <h4 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                    Tactical Engineering
                  </h4>
                  <p className="text-xs text-white/70 mt-1.5 font-sans leading-relaxed">
                    Rigorous code labs in Hall 1 & Hall 2, physical AI exhibits, and verified agent architectures.
                  </p>
                </div>
              </div>

              {/* GDG Indore Legacy Box - Coastal Lighthouse Silhouette */}
              <div className="relative overflow-hidden p-5 rounded-2xl bg-gradient-to-br from-[#111524] to-[#080B18] border border-white/15 hover:border-[#F87572]/60 transition-all duration-300 shadow-xl group">
                {/* Glowing Top Edge Accent */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#F87572] via-[#E02484] to-transparent" />

                {/* Coastal Lighthouse Silhouette Watermark */}
                <div className="absolute -bottom-2 -right-2 pointer-events-none opacity-20 group-hover:opacity-45 group-hover:scale-105 transition-all duration-500 text-[#F87572]">
                  <LighthouseSilhouette className="w-36 h-28" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-black/60 border border-[#F87572]/30">
                      <Users2 className="w-5 h-5 text-[#F87572]" />
                    </div>
                    <span className="text-[9px] font-mono tracking-widest uppercase text-[#F87572]/70 font-bold">
                      EST. 2014 // GUILD
                    </span>
                  </div>
                  <h4 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                    GDG Indore Legacy
                  </h4>
                  <p className="text-xs text-white/70 mt-1.5 font-sans leading-relaxed">
                    A thriving developer community empowering central India’s students and professionals since 2014.
                  </p>
                </div>
              </div>
            </div>

            {/* Metric Counters - Leveled GTA HUD Stat Boxes with Silhouette Watermarks */}
            <div
              ref={statsRef}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-6 border-t border-white/10"
            >
              {/* Stat 1: Builders Reached - Sunset Disc */}
              <div className="relative overflow-hidden p-4 rounded-xl bg-gradient-to-b from-[#111524]/90 to-[#080B18] border border-white/10 hover:border-[#FFB450]/40 transition-all duration-300 group flex flex-col justify-between">
                <div className="absolute -bottom-3 -right-3 pointer-events-none opacity-15 group-hover:opacity-35 transition-opacity text-[#FFB450]">
                  <SunsetDiscSilhouette className="w-16 h-16" />
                </div>
                <div className="font-display text-3xl sm:text-4xl text-white font-bold tracking-tight whitespace-nowrap leading-none relative z-10">
                  {EVENT_DATA.stats.communityReach}
                </div>
                <div className="text-[10px] font-mono text-white/60 uppercase tracking-widest mt-2 whitespace-nowrap relative z-10 font-medium">
                  Builders Reached
                </div>
              </div>

              {/* Stat 2: Core Frontiers - Palm Trees */}
              <div className="relative overflow-hidden p-4 rounded-xl bg-gradient-to-b from-[#111524]/90 to-[#080B18] border border-white/10 hover:border-[#F87572]/40 transition-all duration-300 group flex flex-col justify-between">
                <div className="absolute -bottom-3 -right-3 pointer-events-none opacity-15 group-hover:opacity-35 transition-opacity text-[#F87572]">
                  <PalmTreesSilhouette className="w-16 h-16" />
                </div>
                <div className="font-display text-3xl sm:text-4xl text-white font-bold tracking-tight whitespace-nowrap leading-none relative z-10">
                  {EVENT_DATA.stats.tracksCount}
                </div>
                <div className="text-[10px] font-mono text-white/60 uppercase tracking-widest mt-2 whitespace-nowrap relative z-10 font-medium">
                  Core Frontiers
                </div>
              </div>

              {/* Stat 3: Confirmed Speakers - Coastal Lighthouse */}
              <div className="relative overflow-hidden p-4 rounded-xl bg-gradient-to-b from-[#111524]/90 to-[#080B18] border border-white/10 hover:border-[#C9349B]/40 transition-all duration-300 group flex flex-col justify-between">
                <div className="absolute -bottom-3 -right-3 pointer-events-none opacity-15 group-hover:opacity-35 transition-opacity text-[#C9349B]">
                  <LighthouseSilhouette className="w-18 h-16" />
                </div>
                <div className="font-display text-3xl sm:text-4xl text-white font-bold tracking-tight whitespace-nowrap leading-none relative z-10">
                  {EVENT_DATA.stats.confirmedSpeakers}
                </div>
                <div className="text-[10px] font-mono text-white/60 uppercase tracking-widest mt-2 whitespace-nowrap relative z-10 font-medium">
                  Confirmed Speakers
                </div>
              </div>

              {/* Stat 4: Pass Starting At - Miami Skyline */}
              <div className="relative overflow-hidden p-4 rounded-xl bg-gradient-to-b from-[#111524]/90 to-[#080B18] border border-white/10 hover:border-[#E02484]/40 transition-all duration-300 group flex flex-col justify-between">
                <div className="absolute -bottom-3 -right-3 pointer-events-none opacity-15 group-hover:opacity-35 transition-opacity text-[#E02484]">
                  <MiamiSkylineSilhouette className="w-20 h-16" />
                </div>
                <div className="font-display text-3xl sm:text-4xl sunset-gradient-text font-bold tracking-tight whitespace-nowrap leading-none relative z-10">
                  {EVENT_DATA.stats.startingPrice}
                </div>
                <div className="text-[10px] font-mono text-white/60 uppercase tracking-widest mt-2 whitespace-nowrap relative z-10 font-medium">
                  Pass Starting At
                </div>
              </div>
            </div>
          </div>

          {/* Right: City Skyline Frame */}
          <div ref={photoCardRef} className="lg:col-span-6">
            <TiltCard maxTilt={5} className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl group">
              <div
                className="w-full aspect-[16/10] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                data-cursor="EXPLORE"
                style={{
                  backgroundImage: `url('/assets/cinematic/03-city-metropolis.jpg')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070E] via-transparent to-transparent pointer-events-none" />

              {/* Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between">
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-[#FFB450] uppercase mb-1 flex items-center gap-1.5 font-bold">
                    <Compass className="w-3 h-3 text-[#FF9B55]" /> Essentia Luxury Convention
                  </div>
                  <div className="font-display text-2xl text-white uppercase tracking-wide">
                    Indore // The Epicenter
                  </div>
                  <div className="text-xs text-white/70 font-sans mt-0.5">
                    Saturday, 28 November 2026 • World Cup Square
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-white/80">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Official GDG Indore
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Meaningful Visual Metaphor 1: THE MISSION BLUEPRINT */}
        {/* Using 05-blueprint-tactics.jpg as the tactical planning table for DevFest Indore */}
        <div ref={blueprintHeroRef}>
          <TiltCard
            maxTilt={4}
            className="rounded-3xl overflow-hidden border border-[#FF9B55]/30 bg-gradient-to-br from-[#111524] to-[#05070E] shadow-2xl group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[460px]">
              {/* Full-Frame Artwork: The War Room / Blueprint Strategy */}
              <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-full overflow-hidden" data-cursor="EXPLORE">
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{
                    backgroundImage: `url('/assets/gta6/05-blueprint-tactics.jpg')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1127] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0D1127]" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 border border-white/20 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-[#FFB450] font-bold">
                  Architecture War Room
                </div>
              </div>

              {/* Editorial Metaphor Content */}
              <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-[#0D1127]/90 lg:bg-[#0D1127]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF9B55] mb-2 font-bold">
                    <Target className="w-4 h-4 text-[#FFB450]" />
                    <span>The Strategic Approach</span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-tight font-black mb-3">
                    Map The Architecture. <br />
                    <span className="sunset-gradient-text">Execute The Mission.</span>
                  </h3>

                  <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed mb-6">
                    Like veterans reviewing the operational layout before a high-stakes heist, DevFest Indore 2026 is built on ruthless technical preparation. No vague hype decks—just raw system designs, low-level Qualcomm telemetry, Gemini enterprise orchestration, and real code deployed to real infrastructure.
                  </p>

                  <div className="space-y-2.5 border-t border-white/10 pt-4 text-xs font-mono text-white/70">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFB450]" />
                      <span>01. Interrogate failure modes before production</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F87572]" />
                      <span>02. Multi-agent coordination with Model Context Protocol</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9349B]" />
                      <span>03. From orbital telemetry directly into developer hands</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-white/50">Essentia Convention Floor</span>
                  <Magnetic strength={0.2}>
                    <a
                      href="#workshops"
                      className="text-[#FF9B55] hover:text-white uppercase font-bold tracking-wider flex items-center gap-1"
                    >
                      <span data-magnetic-inner>Inspect The Workshops →</span>
                    </a>
                  </Magnetic>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};
