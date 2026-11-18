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
