import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/Navbar';
import { AudioAtmosphere } from './components/AudioAtmosphere';
import { RegisterModal } from './components/RegisterModal';
import { CustomCursor } from './components/CustomCursor';
import { KineticMarquee } from './components/KineticMarquee';
import { Footer } from './components/Footer';

import { Arrival } from './sections/Arrival';
import { CityOpen } from './sections/CityOpen';
import { Discover } from './sections/Discover';
import { Speakers } from './sections/Speakers';
import { Experience } from './sections/Experience';
import { ExhibitLounge } from './sections/ExhibitLounge';
import { Community } from './sections/Community';
import { Tickets } from './sections/Tickets';
import { EventDetails } from './sections/EventDetails';
import { FinalReveal } from './sections/FinalReveal';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [audioActive, setAudioActive] = useState(false);
  const [cheatActivated, setCheatActivated] = useState(false);

  // Global Konami Code easter egg listener: ↑ ↑ ↓ ↓ ← → ← → B A
  useEffect(() => {
    const KONAMI_CODE = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
    ];
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea' || (e.target as HTMLElement)?.isContentEditable) {
        return;
      }

      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const expectedKey = KONAMI_CODE[konamiIndex].toLowerCase();

      if (key === expectedKey) {
        konamiIndex++;
        if (konamiIndex === KONAMI_CODE.length) {
          konamiIndex = 0;
          setCheatActivated(true);
          window.open('https://www.linkedin.com/in/parth-saxena-psa11/', '_blank', 'noopener,noreferrer');
          setTimeout(() => setCheatActivated(false), 5000);
        }
      } else {
        konamiIndex = key === KONAMI_CODE[0].toLowerCase() ? 1 : 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    // Global scroll progress tracker
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleEnterClick = () => {
    const frontiersSection = document.getElementById('frontiers');
    if (frontiersSection) {
      frontiersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#05070E] text-[#FFF5EA] selection:bg-[#E02484] selection:text-white overflow-x-hidden">
      {/* Cinematic Film Grain Overlay */}
      <div className="film-grain" aria-hidden="true" />

      {/* Expressive Custom Desktop Cursor System */}
      <CustomCursor />

      {/* GTA VI Cheat Activated Toast Banner */}
      {cheatActivated && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[999999] px-6 py-3 rounded-full bg-black/95 border-2 border-[#FFE600] shadow-[0_0_40px_rgba(255,230,0,0.7)] backdrop-blur-xl flex items-center gap-3 animate-fade-in pointer-events-none">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFE600] animate-ping" />
          <div className="font-mono text-xs uppercase tracking-widest text-white font-bold">
            <span className="text-[#FFE600] font-black">CHEAT ACTIVATED:</span> ARCHITECT PROFILE UNLOCKED // OPENING PARTH SAXENA LINKEDIN
          </div>
        </div>
      )}

      {/* Atmospheric Audio Synth Engine */}
      <AudioAtmosphere active={audioActive} />

      {/* Master Navigation Bar */}
      <Navbar
        scrollProgress={scrollProgress}
        audioActive={audioActive}
        onToggleAudio={() => setAudioActive(!audioActive)}
      />

      {/* Connected Cinematic Chapters */}
      <main>
        {/* Chapter 01: The Arrival */}
        <Arrival onEnterClick={handleEnterClick} />

        {/* Kinetic Typography Marquee Layer */}
        <KineticMarquee
          text="NEW FRONTIERS // FROM ORBIT TO INSIGHT // GDG INDORE // ESSENTIA HOTEL // 28 NOV 2026 //"
          direction="left"
        />

        {/* Chapter 02: The New Frontiers ("From Orbit to Insight" — Skyline Balcony) */}
        <CityOpen />

        {/* Chapter 03: Discover DevFest (The Mission Blueprint & Tactics) */}
        <Discover />

        {/* Kinetic Typography Marquee Layer Reverse */}
        <KineticMarquee
          text="SPACE SYSTEMS • AI AGENTS • PHYSICAL AI • CLOUD & DISTRIBUTED SYSTEMS •"
          direction="right"
        />

        {/* Chapter 04: Confirmed Speakers & Leaders (Precision & Executive Timing) */}
        <Speakers />

        {/* Chapter 05: Hands-on Workshops (Dual-Rail Split Pinned Scroller) & Agenda */}
        <Experience />

        {/* Chapter 06: Exhibit Lounge (Full Throttle Hardware Velocity & Partners) */}
        <ExhibitLounge />

        {/* Chapter 07: Community Culture & Voices (Where Central India Connects) */}
        <Community />

        {/* Chapter 08: Passes & Ticketing (Cadet ₹849 / Commander ₹849) */}
        <Tickets />

        {/* Chapter 09: Venue (Essentia Luxury Hotel) & Attendee Checklist */}
        <EventDetails />

        {/* Chapter 10: The Final Reveal */}
        <FinalReveal />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Interactive Registration Modal */}
      <RegisterModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
      />
    </div>
  );
}

export default App;
