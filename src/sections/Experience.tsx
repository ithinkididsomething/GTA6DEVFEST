import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertCircle, Target, Laptop, CheckCircle, Clock, Sparkles } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

gsap.registerPlugin(ScrollTrigger);

export const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftDeckRef = useRef<HTMLDivElement>(null);
  const rightScrollRef = useRef<HTMLDivElement>(null);
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);

  // Synchronize internal right-rail scrolling with left command deck
  useEffect(() => {
    const container = rightScrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cards = container.querySelectorAll<HTMLElement>('.workshop-track-card');
      const containerRect = container.getBoundingClientRect();
      const centerY = containerRect.top + containerRect.height / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      cards.forEach((card, idx) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.top + cardRect.height / 2;
        const dist = Math.abs(cardCenter - centerY);
        if (dist < minDistance) {
          minDistance = dist;
          closestIndex = idx;
        }
      });

      setActiveItemIndex(closestIndex);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const activeWorkshop = EVENT_DATA.workshops[Math.min(activeItemIndex, EVENT_DATA.workshops.length - 1)];

  // Smooth scroll directly to card inside the right rail
  const scrollToCard = (index: number) => {
    setActiveItemIndex(index);
    const container = rightScrollRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>('.workshop-track-card');
    if (cards[index]) {
      const cardTop = cards[index].offsetTop - container.offsetTop;
      container.scrollTo({ top: cardTop - 12, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="workshops"
      ref={containerRef}
      className="relative bg-[#05070E] border-t border-white/5 py-28 sm:py-36 scroll-mt-24"
      aria-label="Chapter 05: Practical Labs & Agenda"
    >
      {/* Ambient Atmospheric Lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#FF5E36]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Section Header */}
        <div className="mb-12 sm:mb-16 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#FF4B72] uppercase mb-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#FF5E36] to-[#FF4B72]" />
            <span>Chapter 05 // Practical Labs & Agenda</span>
          </div>

          <h2 className="font-display uppercase text-5xl sm:text-7xl md:text-8xl font-black text-white leading-[0.9] tracking-tight">
            THE LABS ROOM. <br />
            <span className="sunset-gradient-text">TWO HALLS. ONE ARENA.</span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm md:text-base font-supporting text-white/70 font-light leading-relaxed">
            Hands-on engineering workshops in Hall 1 & Hall 2, running in parallel with the main stage agenda. Explore active stations below.
          </p>
        </div>

        {/* Dual-Rail Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
          
          {/* LEFT RAIL: Butter-smooth CSS Sticky Command Deck */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 z-20 self-start">
            <div
              ref={leftDeckRef}
              className="relative rounded-3xl border border-white/20 bg-[#0D1127]/95 backdrop-blur-xl p-6 sm:p-8 shadow-[0_15px_50px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300"
            >
              {/* Background Atmospheric Artwork */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-25 transition-opacity duration-700 pointer-events-none"
                style={{ backgroundImage: `url('/assets/cinematic/04-workspace-workshop.jpg')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1127] via-[#0D1127]/85 to-[#0D1127]/50 pointer-events-none" />

              <div className="relative z-10 flex flex-col justify-between min-h-[460px] sm:min-h-[500px]">
                {/* Station Navigator Pills */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-white/90 font-mono text-[10px] font-bold uppercase tracking-widest">
                      <Target className="w-3 h-3 text-[#FF8A50] animate-pulse" />
                      Station 0{activeItemIndex + 1} of 0{EVENT_DATA.workshops.length}
                    </span>
                    <span className="text-xs font-mono font-bold text-white/90 px-2.5 py-0.5 rounded bg-white/[0.06] border border-white/15">
                      {activeWorkshop.hall}
                    </span>
                  </div>

                  {/* Interactive Jump Selector */}
                  <div className="grid grid-cols-6 gap-1.5 mb-6">
                    {EVENT_DATA.workshops.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => scrollToCard(i)}
                        title={`Jump to Station 0${i + 1}`}
                        className={`py-1.5 rounded-lg font-mono text-[11px] font-bold uppercase tracking-wider transition-all duration-200 border ${
                          activeItemIndex === i
                            ? 'bg-gradient-to-r from-[#FF5E36] to-[#E11D48] text-white border-transparent shadow-[0_0_12px_rgba(255,94,54,0.4)] scale-105'
                            : 'bg-white/5 text-white/50 border-white/10 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        0{i + 1}
                      </button>
                    ))}
                  </div>

                  <div className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-[#FF8A50]" />
                    <span>Currently Focused Lab:</span>
                  </div>

                  {/* Station Title */}
                  <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-tight font-black leading-tight mb-3 transition-all duration-200">
                    {activeWorkshop.title}
                  </h3>

                  {/* Facilitator & Organization */}
                  <div className="text-xs font-mono text-white/90 flex flex-wrap items-center gap-1.5 mb-4 p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                    <span className="text-white/40">Lead:</span>
                    <strong className="text-[#FF8A50] font-semibold">{activeWorkshop.facilitator}</strong>
                    <span className="text-white/60">({activeWorkshop.organization})</span>
                  </div>

                  {/* Focus Description */}
                  <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed mb-5">
                    {activeWorkshop.focus}
                  </p>

                  {/* Integrated Technology Stack */}
                  {activeWorkshop.technologies && (
                    <div className="p-3 rounded-xl bg-black/60 border border-white/10 mb-4">
                      <div className="text-[10px] font-mono uppercase text-[#FF8A50] tracking-wider mb-1 flex items-center gap-1.5 font-semibold">
                        <Laptop className="w-3 h-3" />
                        <span>Integrated Stack & Frameworks:</span>
                      </div>
                      <div className="text-xs font-mono text-white/90">
                        {activeWorkshop.technologies}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom HUD: Progress Bar & Requirements */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-[11px] font-mono text-white/60 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-[#FF8A50]" /> Check-in 9:00 AM
                    </span>
                    <span className="text-[#FF8A50] font-bold">BRING LAPTOP</span>
                  </div>

                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#FF5E36] to-[#E11D48] h-full transition-all duration-300 ease-out"
                      style={{
                        width: `${((activeItemIndex + 1) / EVENT_DATA.workshops.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT RAIL: Dedicated Independently Scrollable Command Track */}
          <div
            ref={rightScrollRef}
            className="lg:col-span-7 lg:max-h-[580px] lg:overflow-y-auto lg:pr-3.5 space-y-6 scrollbar-thin scrollbar-thumb-white/20 hover:scrollbar-thumb-[#FF8A50]/60 scrollbar-track-white/5 rounded-3xl"
          >
            {/* Warning Alert */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3.5 text-xs text-amber-200/90 font-sans">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-mono text-xs uppercase tracking-wider mb-0.5">
                  Workshop Capacity & First-Come Seating:
                </strong>
                Hall 1 and Hall 2 seats are filled on a first-come, first-served basis on 28 November 2026. A conference pass does not guarantee a reserved workshop seat. Arrive early at Essentia.
              </div>
            </div>

            {/* Scrolling Workshop Cards */}
            <div className="space-y-6">
              {EVENT_DATA.workshops.map((workshop, idx) => {
                const isActive = activeItemIndex === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveItemIndex(idx)}
                    data-cursor="INSPECT"
                    className={`workshop-track-card p-6 sm:p-8 rounded-3xl border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-br from-[#111524] to-[#0D1127] border-[#FF5E36] shadow-[0_0_35px_rgba(255,94,54,0.25)] ring-1 ring-[#FF5E36]/50'
                        : 'bg-white/[0.025] border-white/10 opacity-75 hover:opacity-100 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-md bg-[#FF5E36]/20 border border-[#FF5E36]/40 text-[#FF5E36] font-mono text-xs font-bold uppercase tracking-wider">
                          {workshop.hall}
                        </span>
                        {isActive && (
                          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-[#00F0FF] uppercase tracking-wider">
                            <CheckCircle className="w-3.5 h-3.5 text-[#00F0FF]" /> Active in Command Deck
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-mono text-white/50">
                        Station 0{idx + 1}
                      </span>
                    </div>

                    <h4 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-wide mb-2 group-hover:text-[#FF5E36] transition-colors">
                      {workshop.title}
                    </h4>

                    <div className="text-xs font-mono text-white/80 mb-3 flex items-center gap-1.5">
                      <span className="text-white/40">Led by:</span>
                      <strong className="text-white">{workshop.facilitator}</strong>
                      <span className="text-[#00F0FF]">({workshop.organization})</span>
                    </div>

                    <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-4">
                      {workshop.focus}
                    </p>

                    {workshop.technologies && (
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/80">
                        <span className="text-[#E02484] uppercase block text-[10px] mb-0.5">Stack:</span>
                        {workshop.technologies}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Main Stage Running Order Divider */}
            <div className="pt-10 border-t border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] font-bold">
                  // Main Stage Published Running Order
                </span>
                <span className="text-xs font-mono text-white/50">Essentia Ballroom</span>
              </div>

              <div className="space-y-3">
                {EVENT_DATA.agenda.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/10 transition-colors flex items-center justify-between gap-4 text-xs font-sans"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-[#FF5E36] px-2 py-1 rounded bg-[#FF5E36]/10">
                        0{idx + 1}
                      </span>
                      <div>
                        <div className="font-display text-lg text-white uppercase tracking-wide">
                          {item.title}
                        </div>
                        <div className="text-white/60">{item.speaker}</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/60 shrink-0">
                      {item.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
