import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowUp, Info, ExternalLink, Mail, MapPin, Calendar } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import { ASSET_MANIFEST } from '../data/assetManifest';

export const Footer: React.FC = () => {
  const [showManifest, setShowManifest] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowManifest(false);
    };
    if (showManifest) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [showManifest]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative bg-[#05070E] border-t border-white/10 text-white overflow-hidden">
        {/* Subtle top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#FF8A50] to-transparent opacity-50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          {/* Official GDG Indore & GDG on Campus IET DAVV Header in Footer */}
          <div className="mb-14 pb-10 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <img
                src="/assets/logos/gdg-indore.svg"
                alt="Google Developer Groups Indore"
                className="h-9 sm:h-10 w-auto object-contain"
              />
              <span className="hidden sm:inline text-white/30 text-lg">|</span>
              <img
                src="/assets/logos/gdgoc-iet-davv.svg"
                alt="Google Developer Groups on Campus - IET DAVV"
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </div>

            <div className="text-xs font-mono text-white/60">
              DevFest Indore 2026 • Official Community Gathering
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-display tracking-wider text-3xl font-black bg-gradient-to-r from-[#FFF5EA] via-[#FF8A50] to-[#F43F5E] bg-clip-text text-transparent">
                  DEVFEST
                </span>
                <span className="px-2 py-0.5 text-xs font-mono tracking-widest bg-gradient-to-r from-[#FF8A50] to-[#E11D48] text-white font-bold rounded">
                  2026
                </span>
              </div>

              <div className="text-xs font-mono uppercase tracking-widest text-[#38BDF8]">
                {EVENT_DATA.organiser.name} (Organising Since {EVENT_DATA.organiser.since})
              </div>

              <p className="text-sm text-white/70 font-supporting font-light max-w-sm leading-relaxed">
                Central theme: <strong>{EVENT_DATA.theme.title}</strong> — "{EVENT_DATA.theme.concept}". An annual developer conference connecting students, engineers, researchers, founders, and industry leaders.
              </p>

              <div className="space-y-1.5 text-xs font-mono text-white/60 pt-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#FF8A50]" />
                  <span>{EVENT_DATA.dates.fullDate} (9:00 AM – 4:30 PM IST)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>{EVENT_DATA.venue.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#FF8A50]" />
                  <a href={`mailto:${EVENT_DATA.organiser.email}`} className="hover:text-white underline">
                    {EVENT_DATA.organiser.email}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setShowManifest(true)}
                  className="inline-flex items-center gap-2 text-xs font-mono text-white/70 hover:text-white px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 transition-colors"
                >
                  <Info className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Inspect Asset Manifest ({ASSET_MANIFEST.length} Scenes)</span>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3 space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-[#FF8A50] font-bold">
                Experience Chapters
              </div>
              <ul className="space-y-1.5 text-xs font-mono text-white/60">
                <li><a href="#arrival" className="hover:text-white transition-colors">01 // The Arrival</a></li>
                <li><a href="#frontiers" className="hover:text-white transition-colors">02 // New Frontiers</a></li>
                <li><a href="#discover" className="hover:text-white transition-colors">03 // The Blueprint</a></li>
                <li><a href="#speakers" className="hover:text-white transition-colors">04 // Confirmed Speakers</a></li>
                <li><a href="#workshops" className="hover:text-white transition-colors">05 // Workshops & Agenda</a></li>
                <li><a href="#exhibits" className="hover:text-white transition-colors">06 // Exhibit Lounge</a></li>
                <li><a href="#community" className="hover:text-white transition-colors">07 // Community Culture</a></li>
                <li><a href="#tickets" className="hover:text-white transition-colors">08 // Passes (₹849)</a></li>
                <li><a href="#details" className="hover:text-white transition-colors">09 // Venue & Checklist</a></li>
              </ul>
            </div>

            {/* Official GDG Links & Tickets */}
            <div className="lg:col-span-4 space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-[#F43F5E] font-bold">
                Official Links & Registration
              </div>
              <ul className="space-y-2 text-xs font-mono text-white/70">
                <li>
                  <a href={EVENT_DATA.officialLinks.website} target="_blank" rel="noreferrer" className="hover:text-[#38BDF8] flex items-center gap-1.5">
                    Official Website <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href={EVENT_DATA.officialLinks.tickets} target="_blank" rel="noreferrer" className="hover:text-[#38BDF8] flex items-center gap-1.5">
                    Tickets on KonfHub (₹849) <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href={EVENT_DATA.officialLinks.agenda} target="_blank" rel="noreferrer" className="hover:text-[#38BDF8] flex items-center gap-1.5">
                    Official Schedule <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href={EVENT_DATA.officialLinks.speakers} target="_blank" rel="noreferrer" className="hover:text-[#38BDF8] flex items-center gap-1.5">
                    Speaker Directory <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href={EVENT_DATA.officialLinks.communityEvent} target="_blank" rel="noreferrer" className="hover:text-[#38BDF8] flex items-center gap-1.5">
                    GDG Community Listing <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>

              <div className="pt-3">
                <a
                  href={EVENT_DATA.officialLinks.tickets}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider font-bold text-white bg-gradient-to-r from-[#FF8A50] to-[#E11D48] hover:shadow-lg transition-all"
                >
                  Book Tickets Now (₹849)
                </a>
              </div>
            </div>
          </div>

          {/* Legal / Creative Attribution & Disclaimers */}
          <div className="pt-8 border-t border-white/10 space-y-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-[11px] font-mono text-white/50 leading-relaxed">
              <span className="text-white/80 font-semibold block mb-1">
                // ORGANIZING CREDITS & TRADEMARK ACKNOWLEDGEMENT
              </span>
              DEVFEST INDORE 2026 is organized by Google Developer Groups (GDG) Indore in partnership with Google Developer Groups on Campus (GDG on Campus) IET DAVV, hosted at Essentia Luxury Hotel, Indore. The creative web experience takes artistic inspiration from the cinematic color grading, photography, and lighting aesthetics of Grand Theft Auto VI (Vice City) and Apple product storytelling. All trademarks and registered names belong to their respective owners.
            </div>

            {/* Creator Credit & Copyright */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
              <a
                href="https://www.linkedin.com/in/parth-saxena-psa11/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="CONNECT"
                className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FFB450]/15 via-[#F87572]/15 to-[#C9349B]/15 border border-[#FF7A00]/40 shadow-[0_0_20px_rgba(255,122,0,0.2)] hover:border-[#FFE600] hover:scale-105 transition-all group"
              >
                <span className="w-2 h-2 rounded-full bg-[#FFE600] animate-pulse shadow-[0_0_8px_#FFE600]" />
                <span className="text-white/90 uppercase tracking-widest text-[11px] font-bold">
                  Created by{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE600] via-[#FF7A00] to-[#E02484] font-black group-hover:brightness-125 transition-all">
                    Parth Saxena
                  </span>
                </span>
                <ExternalLink className="w-3 h-3 text-[#FFB450] opacity-75 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <div className="text-white/50 text-[11px] text-center sm:text-left">
                © 2026 Google Developer Groups (GDG) Indore & GDG on Campus IET DAVV.
              </div>

              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
                aria-label="Scroll back to top"
              >
                <span>Back to Arrival</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Asset Manifest Inspection Dialog */}
      {showManifest && (
        <div
          onClick={() => setShowManifest(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/15 bg-[#0D1127] p-6 sm:p-8 text-white"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#00F0FF] uppercase">
                  <Sparkles className="w-3.5 h-3.5" /> Pipeline Verification
                </div>
                <h3 className="font-display text-2xl uppercase text-white mt-1">
                  Connected Photographic Asset Manifest
                </h3>
              </div>
              <button
                onClick={() => setShowManifest(false)}
                className="px-3 py-1.5 text-xs font-mono bg-white/10 hover:bg-white/20 rounded-lg text-white"
              >
                Close [ESC]
              </button>
            </div>

            <div className="text-xs text-white/70 font-sans mb-4">
              All compositions below follow the master creative brief: intact 16:9 full-frame photographic scenes with zero transparent character cutouts, matching color transitions, and continuous horizon perspectives.
            </div>

            <div className="space-y-4">
              {ASSET_MANIFEST.map((asset) => (
                <div
                  key={asset.id}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row gap-4 items-start"
                >
                  <img
                    src={asset.src}
                    alt={asset.altText}
                    className="w-full sm:w-36 aspect-video object-cover rounded-lg border border-white/15"
                  />
                  <div className="space-y-1 text-xs">
                    <div className="font-mono font-bold text-white uppercase text-sm">
                      {asset.filename}
                    </div>
                    <div className="font-mono text-[#FF5E36]">{asset.intendedSection}</div>
                    <div className="text-white/70">{asset.description}</div>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="px-2 py-0.5 rounded bg-white/5 font-mono text-[10px] text-white/60">
                        {asset.licensingStatus}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/5 font-mono text-[10px] text-white/60">
                        Aspect: {asset.aspectRatio}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
