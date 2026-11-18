import React from 'react';
import { Sparkles, CheckCircle2, Award, Zap, Compass } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import { TiltCard } from '../components/TiltCard';

export const ExhibitLounge: React.FC = () => {
  return (
    <section
      id="exhibits"
      className="relative min-h-screen py-28 sm:py-36 lg:py-40 bg-[#05070E] overflow-hidden border-t border-white/5 scroll-mt-24"
      aria-label="Chapter 06: Exhibit Lounge & Confirmed Partners"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#FF5E36]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 sm:mb-24 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00F0FF] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span>Chapter 06 // Interactive Installations & Pavilions</span>
          </div>

          <h2 className="font-display uppercase text-5xl sm:text-7xl md:text-8xl font-black text-white leading-[0.9] tracking-tight">
            EXHIBIT LOUNGE & <br />
            <span className="sunset-gradient-text">PARTNER ECOSYSTEM.</span>
          </h2>

          <p className="mt-5 text-sm sm:text-base font-supporting text-white/70 font-light leading-relaxed">
            The Exhibit Lounge remains open throughout DevFest Indore 2026 at Essentia Luxury Hotel, allowing participants to experience live hardware demos, space telemetry, and embodied physical intelligence firsthand.
          </p>
        </div>

        {/* Visual Metaphor 3: FULL THROTTLE // UNCHARTED WATERS */}
        {/* Using 03-coastal-waterways.jpg as the metaphor for speed, edge acceleration, and raw hardware velocity */}
        <TiltCard maxTilt={4} className="mb-12 rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-r from-[#0D1127] via-[#111524] to-[#05070E] shadow-2xl group">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Visual Artwork */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[360px] overflow-hidden" data-cursor="EXPLORE">
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url('/assets/gta6/03-coastal-waterways.jpg')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1127] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0D1127]" />
              <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-black/75 border border-white/20 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-white/90">
                Hardware Velocity // Live Testbed
              </div>
            </div>

            {/* Narrative Metaphor */}
            <div className="lg:col-span-7 p-6 sm:p-10">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF8A50] mb-2 font-semibold">
                <Zap className="w-3.5 h-3.5 text-[#FFB800]" />
                <span>Cutting Across The Current</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-tight font-black mb-3">
                Accelerate Into <br />
                <span className="sunset-gradient-text">Physical Silicon & Space.</span>
              </h3>

              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed mb-4">
                Like cutting through open coastal waterways at full throttle, physical AI and space exploration discard conventional compute boundaries. Experience hands-on embedded microcontrollers, Arduino-powered sensor robotics, and orbital telemetry that operate far beyond traditional web stacks.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/60">
                <span className="flex items-center gap-1.5 text-[#FF8A50]">
                  <Compass className="w-3.5 h-3.5" /> Qualcomm AI Stack
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-white/80">
                  Space Club of India
                </span>
                <span>•</span>
                <span>All-Day Interactive Testing</span>
              </div>
            </div>
          </div>
        </TiltCard>

        {/* Two Featured Exhibit Pavilions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Pavilion 1: QUALCOMM × ARDUINO */}
          <TiltCard maxTilt={5} className="rounded-3xl border border-white/15 bg-gradient-to-br from-[#111524] to-[#080B1A] p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5E36]/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform" />

            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/15 text-white/90 font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A50]" />
                  <span>Physical AI Pavilion</span>
                </span>
                <span className="text-xs font-mono text-white/50">Open All Day</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-tight mb-2">
                QUALCOMM × ARDUINO
              </h3>

              <div className="text-xs font-mono text-[#FF8A50] uppercase tracking-wider mb-4 font-semibold">
                Arduino-Based Demonstrations & Edge Neural Computing
              </div>

              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed mb-6">
                Witness artificial intelligence interacting with physical reality. Explore how microcontrollers and neural silicon combine for robotics, edge sensors, and low-latency computer vision.
              </p>

              <div className="space-y-2.5 mb-8">
                {EVENT_DATA.exhibits[0].highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-white/75 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-[#FF8A50] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-white/50">Qualcomm AI Stack & Arduino Silicon</span>
              <span className="text-xs font-mono text-[#FF8A50] uppercase font-bold">Live Demos</span>
            </div>
          </TiltCard>

          {/* Pavilion 2: SPACE CLUB OF INDIA */}
          <TiltCard maxTilt={5} className="rounded-3xl border border-white/15 bg-gradient-to-br from-[#111524] to-[#080B1A] p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5E36]/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform" />

            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/15 text-white/90 font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A50]" />
                  <span>Space Technology Pavilion</span>
                </span>
                <span className="text-xs font-mono text-white/50">Open All Day</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-tight mb-2">
                SPACE CLUB OF INDIA
              </h3>

              <div className="text-xs font-mono text-[#FF8A50] uppercase tracking-wider mb-4 font-semibold">
                Scientific Exploration & India's Orbital Ecosystem
              </div>

              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed mb-6">
                Founded by keynote speaker Lt Gen PJS Pannu, this interactive pavilion showcases space technology, satellite telemetry, rocketry hardware, and pathways into India's expanding space sector.
              </p>

              <div className="space-y-2.5 mb-8">
                {EVENT_DATA.exhibits[1].highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-white/75 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-[#FF8A50] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-white/50">Space Education & Exploration</span>
              <span className="text-xs font-mono text-[#FF8A50] uppercase font-bold">Interactive Hardware</span>
            </div>
          </TiltCard>
        </div>

        {/* Official Partners Grid */}
        <div className="pt-10 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E02484] mb-6">
            <Award className="w-4 h-4" />
            <span>Confirmed Partners & Collaborators</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EVENT_DATA.partners.map((partner, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/20 inline-block mb-3">
                    {partner.tier}
                  </span>
                  <h4 className="font-display text-2xl text-white uppercase tracking-wide mb-1">
                    {partner.name}
                  </h4>
                  <div className="text-xs font-mono text-white/50 mb-3">
                    {partner.role}
                  </div>
                  <p className="text-xs text-white/70 font-sans leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
