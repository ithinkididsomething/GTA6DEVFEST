import React from 'react';
import { Ticket, CheckCircle2, ShieldAlert, ArrowUpRight, Tag } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import { TiltCard } from '../components/TiltCard';
import { Magnetic } from '../components/Magnetic';

export const Tickets: React.FC = () => {
  return (
    <section
      id="tickets"
      className="relative min-h-screen py-28 sm:py-36 lg:py-40 bg-[#080B1A] overflow-hidden border-t border-white/10 scroll-mt-24"
      aria-label="Chapter 08: Tickets and Official Passes"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#FF9B55]/15 via-[#F87572]/10 to-[#7B208F]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-[#FF9B55] uppercase mb-4">
            <Ticket className="w-3.5 h-3.5 text-[#FFB450]" />
            <span>Chapter 08 // Official Passes & Roles</span>
          </div>

          <h2 className="font-display uppercase text-5xl sm:text-7xl md:text-8xl font-black text-white leading-[0.9] tracking-tight">
            CHOOSE YOUR ROLE. <br />
            <span className="sunset-gradient-text">CLAIM YOUR PASS.</span>
          </h2>

          <p className="mt-5 text-sm sm:text-base font-supporting text-white/70 font-light leading-relaxed">
            Whether you are a student builder taking your first steps or a seasoned engineer commanding enterprise infrastructure, both passes unlock the complete DevFest Indore 2026 experience at Essentia.
          </p>
        </div>

        {/* Pricing Cards Grid Decorated with GTA VI Metaphors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto mb-20 sm:mb-24">
          {/* TIER 1: CADET PASS (Students) — Decorated with 01-neon-boulevard-vibes.jpg */}
          <TiltCard
            maxTilt={5}
            perspective={1200}
            className="rounded-3xl border border-white/15 hover:border-white/30 bg-gradient-to-b from-[#111524] to-[#0D1127] flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] group transition-all duration-300"
          >
            {/* Visual Header: Street-Level Builder */}
            <div className="relative w-full aspect-[21/10] overflow-hidden" data-cursor="EXPLORE">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url('/assets/gta6/01-neon-boulevard-vibes.jpg')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111524] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-black/75 border border-white/20 text-white/90 font-mono text-[10px] font-bold uppercase tracking-widest backdrop-blur-md flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A50]" />
                <span>Cadet Pass // Student</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 sm:p-10 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h3 className="font-display text-4xl sm:text-5xl text-white uppercase tracking-tight">
                    CADET PASS
                  </h3>
                  <span className="text-xs font-mono text-white/50">KonfHub</span>
                </div>

                <p className="text-xs sm:text-sm text-white/70 font-sans mb-6">
                  Exclusively for currently enrolled college & university students.
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-white/10">
                  <span className="font-display text-5xl sm:text-6xl text-white font-black tracking-tight">
                    ₹849
                  </span>
                  <span className="text-xs font-mono text-white/50 uppercase">/ Student</span>
                </div>

                {/* Perks List */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono uppercase tracking-widest text-[#FF8A50] font-semibold mb-2">
                    Pass Inclusions:
                  </div>
                  {EVENT_DATA.tickets[0].perks.map((perk, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80 font-sans">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#FF8A50]" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>

                {/* Discount Badge */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/70 mb-8 flex items-start gap-2">
                  <Tag className="w-4 h-4 text-[#FF9B55] shrink-0 mt-0.5" />
                  <span>Valid college ID required at check-in. 5% off with ambassador code.</span>
                </div>
              </div>

              {/* Action Button wrapped in Magnetic */}
              <Magnetic strength={0.25} className="w-full">
                <a
                  href={EVENT_DATA.tickets[0].ticketUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="TICKETS"
                  className="w-full py-4 rounded-xl font-mono text-xs uppercase tracking-widest font-bold text-white text-center flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF9B55] via-[#F87572] to-[#C9349B] shadow-lg hover:shadow-[0_0_30px_rgba(248,117,114,0.45)] transition-all"
                >
                  <span data-magnetic-inner>Book Cadet Pass on KonfHub (₹849)</span>
                  <ArrowUpRight className="w-4 h-4" data-magnetic-inner />
                </a>
              </Magnetic>
            </div>
          </TiltCard>

          {/* TIER 2: COMMANDER PASS (Professionals) — Decorated with 02-skyline-balcony-sunset.jpg */}
          <TiltCard
            maxTilt={5}
            perspective={1200}
            className="rounded-3xl border border-white/15 hover:border-white/30 bg-gradient-to-b from-[#111524] to-[#0D1127] flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] group transition-all duration-300"
          >
            {/* Visual Header: Commander High Above the City */}
            <div className="relative w-full aspect-[21/10] overflow-hidden" data-cursor="EXPLORE">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url('/assets/gta6/02-skyline-balcony-sunset.jpg')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111524] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-black/75 border border-white/20 text-white/90 font-mono text-[10px] font-bold uppercase tracking-widest backdrop-blur-md flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A50]" />
                <span>Commander Pass // Professional</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 sm:p-10 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h3 className="font-display text-4xl sm:text-5xl text-white uppercase tracking-tight">
                    COMMANDER PASS
                  </h3>
                  <span className="text-xs font-mono text-white/50">KonfHub</span>
                </div>

                <p className="text-xs sm:text-sm text-white/70 font-sans mb-6">
                  For working software engineers, founders, and industry professionals.
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-white/10">
                  <span className="font-display text-5xl sm:text-6xl text-white font-black tracking-tight">
                    ₹849
                  </span>
                  <span className="text-xs font-mono text-white/50 uppercase">/ Professional</span>
                </div>

                {/* Perks List */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono uppercase tracking-widest text-[#FF8A50] font-semibold mb-2">
                    Pass Inclusions:
                  </div>
                  {EVENT_DATA.tickets[1].perks.map((perk, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80 font-sans">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#FF8A50]" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>

                {/* Discount Badge */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/70 mb-8 flex items-start gap-2">
                  <Tag className="w-4 h-4 text-[#FF9B55] shrink-0 mt-0.5" />
                  <span>5% ambassador code OR 15% bulk discount for 6–10 team tickets.</span>
                </div>
              </div>

              {/* Action Button wrapped in Magnetic */}
              <Magnetic strength={0.25} className="w-full">
                <a
                  href={EVENT_DATA.tickets[1].ticketUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="TICKETS"
                  className="w-full py-4 rounded-xl font-mono text-xs uppercase tracking-widest font-bold text-white text-center flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF9B55] via-[#F87572] to-[#C9349B] shadow-lg hover:shadow-[0_0_30px_rgba(248,117,114,0.45)] transition-all"
                >
                  <span data-magnetic-inner>Book Commander Pass on KonfHub (₹849)</span>
                  <ArrowUpRight className="w-4 h-4" data-magnetic-inner />
                </a>
              </Magnetic>
            </div>
          </TiltCard>
        </div>

        {/* Essential Ticketing Policies */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-white/[0.025] border border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF9B55] font-bold mb-4">
            <ShieldAlert className="w-4 h-4" />
            <span>Important Ticket Policies & Check-in Rules</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-white/75 leading-relaxed">
            <div>
              <strong>Final & Non-Transferable:</strong> All ticket purchases are strictly final, non-refundable, and non-transferable under any circumstances.
            </div>
            <div>
              <strong>Mandatory Government ID:</strong> An original government-issued photo ID matching your registered registration name is strictly required at venue check-in.
            </div>
            <div>
              <strong>Student Verification:</strong> Cadet Pass holders must carry their original college/university ID card. Failure to produce valid ID invalidates admission.
            </div>
            <div>
              <strong>Workshops First-Come:</strong> A conference pass does not guarantee a workshop seat. Arrive early for Hall 1 and Hall 2 sessions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
