import React, { useState, useEffect } from 'react';
import { Mic, Sparkles, Building2, ArrowUpRight, X, Clock, Award } from 'lucide-react';
import { EVENT_DATA, Speaker } from '../data/eventData';
import { TiltCard } from '../components/TiltCard';
import { Magnetic } from '../components/Magnetic';

export const Speakers: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [filter, setFilter] = useState<'All' | 'Keynote' | 'Main Stage' | 'Workshop'>('All');

  // Handle ESC key to dismiss modal and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedSpeaker(null);
    };
    if (selectedSpeaker) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedSpeaker]);

  const filteredSpeakers = EVENT_DATA.speakers.filter(s => {
    if (filter === 'All') return true;
    if (filter === 'Keynote') return s.type === 'Keynote';
    if (filter === 'Main Stage') return s.type === 'Main Stage';
    if (filter === 'Workshop') return s.type === 'Workshop';
    return true;
  });

  return (
    <section
      id="speakers"
      className="relative min-h-screen py-28 sm:py-36 lg:py-40 bg-[#05070E] overflow-hidden border-t border-white/5 scroll-mt-24"
      aria-label="Chapter 04: Confirmed Speakers & Industry Leaders"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#E02484]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#FF4B72] uppercase mb-3">
              <Mic className="w-3.5 h-3.5 text-[#FF5E36]" />
              <span>Chapter 04 // Voices of the Frontier</span>
            </div>

            <h2 className="font-display uppercase text-5xl sm:text-7xl md:text-8xl font-black text-white leading-[0.9] tracking-tight">
              VOICES OF THE <br />
              <span className="sunset-gradient-text">NEW FRONTIERS.</span>
            </h2>

            <p className="mt-5 text-sm sm:text-base font-supporting text-white/70 font-light leading-relaxed">
              Featuring visionary defense strategists, Qualcomm silicon architects, Google Developer Experts, AI researchers, and enterprise transformation leads.
            </p>
          </div>

          {/* Filter Pills with Counts */}
          <div className="flex flex-wrap items-center gap-2 bg-white/5 p-1 rounded-full border border-white/10 self-start md:self-auto">
            {(
              [
                { label: 'All', count: EVENT_DATA.speakers.length },
                { label: 'Keynote', count: EVENT_DATA.speakers.filter(s => s.type === 'Keynote').length },
                { label: 'Main Stage', count: EVENT_DATA.speakers.filter(s => s.type === 'Main Stage').length },
                { label: 'Workshop', count: EVENT_DATA.speakers.filter(s => s.type === 'Workshop').length },
              ] as const
            ).map((tab) => (
              <button
                key={tab.label}
                onClick={() => setFilter(tab.label)}
                className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                  filter === tab.label
                    ? 'bg-gradient-to-r from-[#FF9B55] to-[#C9349B] text-white font-bold shadow-md scale-105'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${filter === tab.label ? 'bg-black/30 text-white' : 'bg-white/10 text-white/50'}`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Visual Metaphor 2: TIME TO SHIP // ARCHITECTS OF PRECISION */}
        {/* Using 04-art-district-editorial.jpg as the editorial framing of timing, executive precision, and discipline */}
        <TiltCard maxTilt={4} className="mb-12 rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-r from-[#0D1127] via-[#111524] to-[#05070E] shadow-2xl group">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Visual Frame */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[380px] overflow-hidden" data-cursor="EXPLORE">
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url('/assets/gta6/04-art-district-editorial.jpg')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1127] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0D1127]" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 border border-white/20 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-[#FFB450]">
                Executive Briefing Corridor
              </div>
            </div>

            {/* Metaphor Narrative */}
            <div className="lg:col-span-7 p-6 sm:p-10">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00F0FF] mb-2">
                <Clock className="w-3.5 h-3.5" />
                <span>The Executive Standard</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-tight font-black mb-3">
                Precision In Design. <br />
                <span className="sunset-gradient-text">Discipline In Execution.</span>
              </h3>

              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed mb-4">
                In cutting-edge engineering, execution isn't just about writing algorithms—it's about timing, architectural discipline, and commanding complex enterprise systems. Our keynote leaders and speakers embody that standard: from former Deputy Chief of Integrated Defence Staff Lt Gen PJS Pannu to senior Qualcomm silicon engineers and Google Developer Experts.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/60">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#FFB800]" /> 10+ Confirmed Technical Leaders
                </span>
                <span>•</span>
                <span>Main Stage Keynotes & 2-Hall Workshops</span>
              </div>
            </div>
          </div>
        </TiltCard>

        {/* Featured Keynote Spotlight: Displayed when 'All' or 'Keynote' filter is selected */}
        {(filter === 'All' || filter === 'Keynote') && EVENT_DATA.speakers[0] && (
          <div className="mb-10 rounded-3xl overflow-hidden border border-[#FF9B55]/30 bg-gradient-to-r from-[#111524] via-[#0D1127] to-[#05070E] p-6 sm:p-10 shadow-2xl relative group animate-fade-in">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#FF9B55]/20 via-[#C9349B]/10 to-transparent blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF9B55]/20 border border-[#FF9B55]/40 text-[#FF9B55] text-[11px] font-mono uppercase tracking-widest font-bold mb-3">
                  <Sparkles className="w-3 h-3 text-[#FFB450]" />
                  Keynote Speaker // Space Club of India
                </div>

                <h3 className="font-display text-3xl sm:text-5xl text-white uppercase tracking-tight font-black">
                  {EVENT_DATA.speakers[0].name}
                </h3>

                <div className="text-sm font-mono text-white/70 mt-1 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#FF9B55]" />
                  <span>{EVENT_DATA.speakers[0].role}</span>
                </div>

                <div className="mt-4 p-4 rounded-xl bg-black/40 border border-white/10">
                  <div className="text-xs font-mono uppercase text-[#F87572] tracking-wider mb-1 font-semibold">
                    Keynote Address:
                  </div>
                  <div className="font-display text-xl sm:text-2xl text-white uppercase tracking-wide">
                    "{EVENT_DATA.speakers[0].topic}"
                  </div>
                  <div className="text-xs text-white/70 font-sans mt-2">
                    {EVENT_DATA.speakers[0].focus}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 shrink-0">
                <Magnetic strength={0.25}>
                  <button
                    onClick={() => setSelectedSpeaker(EVENT_DATA.speakers[0])}
                    data-cursor="DOSSIER"
                    className="px-6 py-3 rounded-full font-mono text-xs uppercase tracking-wider font-bold text-white bg-gradient-to-r from-[#FF9B55] via-[#F87572] to-[#C9349B] shadow-lg hover:shadow-[0_0_25px_rgba(255,155,85,0.5)] transition-all flex items-center gap-2"
                  >
                    <span data-magnetic-inner>View Keynote Profile</span>
                    <ArrowUpRight className="w-4 h-4" data-magnetic-inner />
                  </button>
                </Magnetic>
                <div className="text-[11px] font-mono text-white/50 text-center">
                  Former Deputy Chief of Integrated Defence Staff
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Speakers Grid: Smoothly displays matching speakers without any sliced out */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" key={filter}>
          {(filter === 'All' ? filteredSpeakers.slice(1) : filteredSpeakers).map((speaker) => (
            <div
              key={speaker.id}
              onClick={() => setSelectedSpeaker(speaker)}
              data-cursor="DOSSIER"
              className="p-6 rounded-2xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/70 group-hover:text-white">
                    {speaker.type}
                  </span>
                  <span className="text-xs font-mono text-[#FF8A50] font-semibold">
                    {speaker.company}
                  </span>
                </div>

                <h4 className="font-display text-2xl text-white uppercase tracking-wide group-hover:text-[#FF8A50] transition-colors">
                  {speaker.name}
                </h4>

                <div className="text-xs text-white/60 font-sans mt-0.5">
                  {speaker.role}
                </div>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="text-[11px] font-mono text-white/50 uppercase tracking-wider font-semibold mb-1">
                    Session Topic:
                  </div>
                  <div className="text-sm font-supporting font-medium text-white/90 line-clamp-2">
                    {speaker.topic}
                  </div>
                </div>

                {speaker.workshopDetails && (
                  <div className="mt-3 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] font-mono text-white/80">
                    {speaker.workshopDetails}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-3 flex items-center justify-between text-xs font-mono text-white/50 group-hover:text-white transition-colors">
                <span>{speaker.focus.split(',')[0]}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Notice of More Speakers */}
        <div className="mt-8 text-center text-xs font-mono text-white/50">
          * Additional confirmed speakers and special guests are continuously announced by the GDG Indore committee.
        </div>
      </div>

      {/* Speaker Details Modal */}
      {selectedSpeaker && (
        <div
          onClick={() => setSelectedSpeaker(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl rounded-2xl border border-white/20 bg-[#0D1127] p-6 sm:p-8 text-white shadow-2xl"
          >
            <button
              onClick={() => setSelectedSpeaker(null)}
              className="absolute top-4 right-4 p-2 text-white/60 hover:text-white rounded-full bg-white/5 hover:bg-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#FF9B55] uppercase tracking-wider mb-2 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB450]" />
              {selectedSpeaker.badge || selectedSpeaker.type}
            </div>

            <h3 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-tight">
              {selectedSpeaker.name}
            </h3>

            <div className="text-xs sm:text-sm font-mono text-[#FFB450] mt-1">
              {selectedSpeaker.role} • {selectedSpeaker.company}
            </div>

            <div className="my-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs font-mono uppercase text-[#F87572] tracking-wider mb-1 font-semibold">
                Session Title:
              </div>
              <div className="font-display text-xl sm:text-2xl text-white uppercase">
                "{selectedSpeaker.topic}"
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
              <div>
                <strong className="text-white block font-mono text-xs uppercase text-white/50 mb-1">
                  Focus Areas:
                </strong>
                {selectedSpeaker.focus}
              </div>

              {selectedSpeaker.bio && (
                <div>
                  <strong className="text-white block font-mono text-xs uppercase text-white/50 mb-1">
                    Background:
                  </strong>
                  {selectedSpeaker.bio}
                </div>
              )}

              {selectedSpeaker.workshopDetails && (
                <div className="p-3 rounded-lg bg-[#FF9B55]/10 border border-[#FF9B55]/30 text-xs font-mono text-white">
                  <strong className="text-[#FFB450] block uppercase mb-1">Hands-On Workshop:</strong>
                  {selectedSpeaker.workshopDetails}
                </div>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-white/50">
                DevFest Indore 2026 // Essentia
              </span>
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
