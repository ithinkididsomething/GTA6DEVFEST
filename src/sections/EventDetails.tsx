import React, { useState } from 'react';
import { Calendar, MapPin, HelpCircle, ArrowUpRight, Compass, ShieldAlert, Sparkles, Navigation, Laptop, Mail, QrCode, IdCard } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import { Magnetic } from '../components/Magnetic';
import {
  PalmTreesSilhouette,
  LighthouseSilhouette,
  SunsetDiscSilhouette,
  MiamiSkylineSilhouette,
} from '../components/GtaSilhouettes';

export const EventDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'venue' | 'checklist' | 'faq'>('venue');

  return (
    <section
      id="details"
      className="relative min-h-screen py-28 sm:py-36 lg:py-40 bg-[#080B1A] text-white overflow-hidden border-t border-white/10 scroll-mt-24"
      aria-label="Chapter 09: Venue Information & Attendee Guide"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#FF8A50]/10 via-[#F43F5E]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#38BDF8]/10 via-[#6366F1]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#FF9B55] uppercase mb-3">
            <Compass className="w-3.5 h-3.5 text-[#FF9B55]" />
            <span>Chapter 09 // Venue & Attendee Guide</span>
          </div>

          <h2 className="font-display uppercase text-5xl sm:text-7xl md:text-8xl font-black text-white leading-[0.9] tracking-tight">
            VENUE & ATTENDEE <br />
            <span className="sunset-gradient-text">BRIEFING GUIDE.</span>
          </h2>

          <p className="mt-5 text-sm sm:text-base font-supporting text-white/70 font-light leading-relaxed">
            Essential operational details for your day at <strong className="text-white font-medium">{EVENT_DATA.venue.name}</strong> on Saturday, 28 November 2026.
          </p>
        </div>

        {/* Essential Quick Fact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 sm:mb-20">
          {/* Card 1: Date & Time */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-4 hover:border-[#FF9B55]/40 transition-colors">
            <div className="p-3 rounded-xl bg-[#FF9B55]/10 text-[#FF9B55] shrink-0 border border-[#FF9B55]/20">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-white/50">
                Date & Schedule
              </div>
              <div className="font-display text-2xl text-white uppercase mt-0.5">
                {EVENT_DATA.dates.dayOfWeek}, 28 NOV 2026
              </div>
              <div className="text-xs text-white/70 font-mono mt-1">
                Check-in: 9:00 AM | Main: 9:30 AM – 4:30 PM IST
              </div>
            </div>
          </div>

          {/* Card 2: Venue */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-4 hover:border-[#F87572]/40 transition-colors">
            <div className="p-3 rounded-xl bg-[#F87572]/10 text-[#F87572] shrink-0 border border-[#F87572]/20">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-white/50">
                Official Venue
              </div>
              <div className="font-display text-2xl text-white uppercase mt-0.5">
                Essentia Luxury Hotel
              </div>
              <div className="text-xs text-white/70 font-sans mt-1">
                {EVENT_DATA.venue.address}, Indore 452016
              </div>
            </div>
          </div>

          {/* Card 3: Organizer & Support */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-4 hover:border-[#C9349B]/40 transition-colors">
            <div className="p-3 rounded-xl bg-[#C9349B]/10 text-[#C9349B] shrink-0 border border-[#C9349B]/20">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-white/50">
                Community Contact
              </div>
              <div className="font-display text-2xl text-white uppercase mt-0.5">
                {EVENT_DATA.organiser.shortName}
              </div>
              <a
                href={`mailto:${EVENT_DATA.organiser.email}`}
                className="text-xs text-[#FF9B55] hover:underline font-mono mt-1 block"
              >
                {EVENT_DATA.organiser.email}
              </a>
            </div>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b border-white/10 mb-12 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('venue')}
            className={`pb-4 px-6 font-mono text-xs uppercase tracking-wider font-semibold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'venue'
                ? 'border-[#FF9B55] text-white'
                : 'border-transparent text-white/50 hover:text-white'
            }`}
          >
            <MapPin className={`w-4 h-4 ${activeTab === 'venue' ? 'text-[#FF9B55]' : 'text-white/40'}`} />
            Venue Coordinates & Navigation
          </button>

          <button
            onClick={() => setActiveTab('checklist')}
            className={`pb-4 px-6 font-mono text-xs uppercase tracking-wider font-semibold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'checklist'
                ? 'border-[#F87572] text-white'
                : 'border-transparent text-white/50 hover:text-white'
            }`}
          >
            <ShieldAlert className={`w-4 h-4 ${activeTab === 'checklist' ? 'text-[#F87572]' : 'text-white/40'}`} />
            What to Bring Check-in Checklist
          </button>

          <button
            onClick={() => setActiveTab('faq')}
            className={`pb-4 px-6 font-mono text-xs uppercase tracking-wider font-semibold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'faq'
                ? 'border-[#C9349B] text-white'
                : 'border-transparent text-white/50 hover:text-white'
            }`}
          >
            <HelpCircle className={`w-4 h-4 ${activeTab === 'faq' ? 'text-[#C9349B]' : 'text-white/40'}`} />
            Official Event FAQs
          </button>
        </div>

        {/* Tab Content 1: Venue */}
        {activeTab === 'venue' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in">
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="text-[11px] font-mono text-[#F36A78] uppercase tracking-widest block mb-2 font-bold">
                  // OFFICIAL HOST PROPERTY
                </span>
                <h3 className="font-display text-3xl text-white uppercase tracking-wide mb-3">
                  {EVENT_DATA.venue.name}
                </h3>
                <p className="text-sm text-white/70 font-sans leading-relaxed mb-4">
                  Situated prominently along the Ring Road near World Cup Square in Pipliyahana, Essentia Luxury Hotel is one of Indore’s premier upscale hospitality and convention destinations, providing grand ballrooms, dedicated workshop halls, landscaped outdoor courtyards, and a spacious central Exhibit Lounge.
                </p>

                <div className="space-y-2 text-xs font-mono text-white/80 pt-4 border-t border-white/10">
                  <div><strong>Address:</strong> {EVENT_DATA.venue.address}</div>
                  <div><strong>Landmark:</strong> {EVENT_DATA.venue.landmark}</div>
                  <div><strong>City / Pincode:</strong> {EVENT_DATA.venue.city}, {EVENT_DATA.venue.state} {EVENT_DATA.venue.pincode}</div>
                  <div><strong>Host:</strong> {EVENT_DATA.organiser.name} (since {EVENT_DATA.organiser.since})</div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Magnetic strength={0.3}>
                    <a
                      href={EVENT_DATA.venue.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="MAP"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF9B55] via-[#F87572] to-[#C9349B] shadow-lg hover:shadow-[0_0_25px_rgba(255,155,85,0.4)] transition-all"
                    >
                      <Navigation className="w-3.5 h-3.5" data-magnetic-inner />
                      <span data-magnetic-inner>Open in Google Maps</span>
                    </a>
                  </Magnetic>
                  <Magnetic strength={0.2}>
                    <a
                      href={EVENT_DATA.officialLinks.venue}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider text-white/80 bg-white/5 hover:bg-white/10 border border-white/15 transition-all"
                    >
                      <span data-magnetic-inner>Venue Guide</span>
                      <ArrowUpRight className="w-3.5 h-3.5" data-magnetic-inner />
                    </a>
                  </Magnetic>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 h-[480px] bg-[#05070E] flex flex-col justify-end p-6 sm:p-8 text-left group shadow-2xl">
                {/* Official Essentia Luxury Hotel Exterior Image */}
                <img
                  src="/assets/cinematic/essentia-luxury-hotel.jpg"
                  alt="Essentia Luxury Hotel Indore - Official Venue Exterior"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-100 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle bottom scrim for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070E]/95 via-[#05070E]/35 to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 border border-white/20 backdrop-blur-md shadow-xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF9B55] animate-pulse" />
                  <span className="text-[11px] font-mono text-white tracking-widest uppercase font-bold">
                    OFFICIAL VENUE // ESSENTIA LUXURY HOTEL
                  </span>
                </div>

                {/* Bottom Overlay Information */}
                <div className="relative z-10 max-w-lg">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FFB450] mb-2 font-bold">
                    <MapPin className="w-4 h-4 text-[#F87572]" />
                    <span>Near World Cup Square, Pipliyahana, Indore</span>
                  </div>
                  <div className="font-display text-3xl sm:text-4xl text-white uppercase tracking-wide mb-2 drop-shadow-lg">
                    Essentia Luxury Hotel
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 font-sans mb-3 line-clamp-2 drop-shadow">
                    Premium hospitality & convention venue located on Indore's Ring Road. Quick transit from Indore Junction Railway Station and Devi Ahilyabai Holkar Airport.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-mono text-white uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/70 border border-white/20">
                      Grand Ballroom
                    </span>
                    <span className="text-[10px] font-mono text-white uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/70 border border-white/20">
                      Hall 1 & Hall 2 (Hands-on Labs)
                    </span>
                    <span className="text-[10px] font-mono text-white uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/70 border border-white/20">
                      Central Exhibit Lounge
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Checklist - GTA Themed Action Cards */}
        {activeTab === 'checklist' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 animate-fade-in">
            {/* 1. Digital QR Ticket - Palm Trees */}
            <div className="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-[#111524] to-[#080B18] border border-white/15 flex flex-col justify-between hover:border-[#FF9B55]/60 transition-all duration-300 shadow-xl group">
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#FFB450] via-[#FF7A00] to-transparent" />
              <div className="absolute -bottom-3 -right-3 pointer-events-none opacity-15 group-hover:opacity-35 transition-opacity text-[#FF9B55]">
                <PalmTreesSilhouette className="w-24 h-24" />
              </div>
              <div className="relative z-10">
                <QrCode className="w-8 h-8 text-[#FF9B55] mb-3" />
                <h4 className="font-display text-xl text-white uppercase tracking-wide mb-1">
                  1. Digital QR Ticket
                </h4>
                <p className="text-xs text-white/70 font-sans leading-relaxed">
                  Have your official KonfHub QR ticket downloaded on your phone or accessible in your email for fast check-in scanning.
                </p>
              </div>
              <div className="text-[10px] font-mono text-[#FF9B55] uppercase mt-4 font-bold relative z-10">Mandatory for entry</div>
            </div>

            {/* 2. Government Photo ID - Coastal Lighthouse */}
            <div className="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-[#111524] to-[#080B18] border border-white/15 flex flex-col justify-between hover:border-[#F36A78]/60 transition-all duration-300 shadow-xl group">
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#F87572] via-[#E02484] to-transparent" />
              <div className="absolute -bottom-3 -right-3 pointer-events-none opacity-15 group-hover:opacity-35 transition-opacity text-[#F36A78]">
                <LighthouseSilhouette className="w-28 h-24" />
              </div>
              <div className="relative z-10">
                <IdCard className="w-8 h-8 text-[#F36A78] mb-3" />
                <h4 className="font-display text-xl text-white uppercase tracking-wide mb-1">
                  2. Government Photo ID
                </h4>
                <p className="text-xs text-white/70 font-sans leading-relaxed">
                  Original government-issued photo ID (Aadhaar, Driving License, Passport) matching the registration name is required.
                </p>
              </div>
              <div className="text-[10px] font-mono text-[#F36A78] uppercase mt-4 font-bold relative z-10">Mandatory for all attendees</div>
            </div>

            {/* 3. College Student ID - Sunset Disc */}
            <div className="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-[#111524] to-[#080B18] border border-white/15 flex flex-col justify-between hover:border-[#FFB450]/60 transition-all duration-300 shadow-xl group">
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#FFB450] via-[#F87572] to-transparent" />
              <div className="absolute -bottom-3 -right-3 pointer-events-none opacity-15 group-hover:opacity-35 transition-opacity text-[#FFB450]">
                <SunsetDiscSilhouette className="w-24 h-24" />
              </div>
              <div className="relative z-10">
                <Sparkles className="w-8 h-8 text-[#FFB450] mb-3" />
                <h4 className="font-display text-xl text-white uppercase tracking-wide mb-1">
                  3. College Student ID
                </h4>
                <p className="text-xs text-white/70 font-sans leading-relaxed">
                  Cadet Pass holders must bring their original physical College/University student identity card for verification.
                </p>
              </div>
              <div className="text-[10px] font-mono text-[#FFB450] uppercase mt-4 font-bold relative z-10">Cadet pass holders only</div>
            </div>

            {/* 4. Laptop & Charger - Miami Skyline */}
            <div className="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-[#111524] to-[#080B18] border border-white/15 flex flex-col justify-between hover:border-[#C9349B]/60 transition-all duration-300 shadow-xl group">
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#C9349B] via-[#7B208F] to-transparent" />
              <div className="absolute -bottom-3 -right-3 pointer-events-none opacity-15 group-hover:opacity-35 transition-opacity text-[#C9349B]">
                <MiamiSkylineSilhouette className="w-28 h-22" />
              </div>
              <div className="relative z-10">
                <Laptop className="w-8 h-8 text-[#C9349B] mb-3" />
                <h4 className="font-display text-xl text-white uppercase tracking-wide mb-1">
                  4. Laptop & Charger
                </h4>
                <p className="text-xs text-white/70 font-sans leading-relaxed">
                  Essential for Hall 1 and Hall 2 hands-on workshops. Ensure power cords are brought along for code labs.
                </p>
              </div>
              <div className="text-[10px] font-mono text-[#C9349B] uppercase mt-4 font-bold relative z-10">Required for code labs</div>
            </div>
          </div>
        )}

        {/* Tab Content 3: FAQs - GTA Dossier Card Style */}
        {activeTab === 'faq' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-fade-in">
            {EVENT_DATA.faqs.map((faq, idx) => {
              const bgSilhouettes = [
                <PalmTreesSilhouette key="palms" className="w-24 h-24 text-[#FF9B55]" />,
                <LighthouseSilhouette key="lh" className="w-28 h-24 text-[#F87572]" />,
                <SunsetDiscSilhouette key="sunset" className="w-24 h-24 text-[#FFB450]" />,
                <MiamiSkylineSilhouette key="skyline" className="w-28 h-22 text-[#C9349B]" />,
              ];

              return (
                <div
                  key={idx}
                  className="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-[#111524]/95 to-[#080B18] border border-white/15 hover:border-[#FF9B55]/50 transition-all duration-300 shadow-lg group"
                >
                  {/* Subtle Silhouette Background */}
                  <div className="absolute -bottom-3 -right-3 pointer-events-none opacity-10 group-hover:opacity-25 transition-opacity">
                    {bgSilhouettes[idx % bgSilhouettes.length]}
                  </div>

                  <div className="relative z-10 flex items-start gap-3.5">
                    <div className="p-1.5 rounded-lg bg-black/60 border border-white/10 shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4 text-[#FF9B55]" />
                    </div>
                    <div>
                      <h4 className="font-display text-xl text-white uppercase tracking-wide mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-xs sm:text-sm text-white/70 font-supporting font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
