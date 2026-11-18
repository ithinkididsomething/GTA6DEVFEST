import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Volume2, VolumeX, ArrowUpRight } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import { Magnetic } from './Magnetic';

interface NavbarProps {
  scrollProgress: number;
  audioActive: boolean;
  onToggleAudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  scrollProgress,
  audioActive,
  onToggleAudio,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Arrival', href: '#arrival' },
    { label: 'New Frontiers', href: '#frontiers' },
    { label: 'Blueprint', href: '#discover' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'Exhibits', href: '#exhibits' },
    { label: 'Community', href: '#community' },
    { label: 'Tickets', href: '#tickets' },
    { label: 'Venue & FAQ', href: '#details' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#05070E]/95 backdrop-blur-md border-b border-white/10 py-2.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#05070E]/90 via-[#05070E]/40 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Official GDG Marks */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a
              href="#arrival"
              onClick={(e) => handleNavClick(e, '#arrival')}
              className="group flex items-center gap-2"
            >
              <span className="font-display tracking-wider text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#FFF5EA] via-[#FF8A50] to-[#F43F5E] bg-clip-text text-transparent group-hover:brightness-125 transition-all">
                DEVFEST
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-mono tracking-widest bg-gradient-to-r from-[#FF8A50] to-[#E11D48] text-white font-bold rounded shadow-sm">
                2026
              </span>
            </a>

            {/* Official GDG on Campus IET DAVV & GDG Indore Logos (Dual on 2xl, compact on lg/xl) */}
            <div className="hidden 2xl:flex items-center gap-3 pl-4 border-l border-white/15">
              <img
                src="/assets/logos/gdg-indore.svg"
                alt="GDG Indore"
                className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
              <span className="text-white/20 text-xs">|</span>
              <img
                src="/assets/logos/gdgoc-iet-davv.svg"
                alt="GDG on Campus IET DAVV"
                className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="hidden lg:flex 2xl:hidden items-center pl-3 border-l border-white/15">
              <img
                src="/assets/logos/gdg-indore.svg"
                alt="GDG Indore"
                className="h-6 w-auto object-contain opacity-90"
              />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-0.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 backdrop-blur-md shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-2.5 py-1 text-[11px] font-mono tracking-wider text-white/75 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Ambient Audio Mood Toggle */}
            <Magnetic strength={0.3}>
              <button
                onClick={onToggleAudio}
                title={audioActive ? "Mute Atmospheric Sound" : "Play Ambient Atmosphere"}
                data-cursor="AUDIO"
                className="p-2 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-200 relative group flex items-center justify-center"
                aria-label="Toggle ambient atmosphere audio"
              >
                {audioActive ? (
                  <Volume2 className="w-4 h-4 text-[#38BDF8] animate-pulse" />
                ) : (
                  <VolumeX className="w-4 h-4" />
                )}
              </button>
            </Magnetic>

            {/* Direct Official Passes Link */}
            <Magnetic strength={0.3}>
              <a
                href="#tickets"
                onClick={(e) => handleNavClick(e, '#tickets')}
                data-cursor="TICKETS"
                className="relative group overflow-hidden px-4 py-1.5 sm:px-5 sm:py-2 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#FFB450] via-[#FF9B55] to-[#C9349B] shadow-lg hover:shadow-[0_0_25px_rgba(255,155,85,0.6)] transition-all duration-300 block"
              >
                <span className="relative z-10 flex items-center gap-1.5" data-magnetic-inner>
                  <Sparkles className="w-3.5 h-3.5 text-[#FFB450]" />
                  <span>
                    <span className="hidden sm:inline">Passes from </span>₹849
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-[#C9349B] via-[#7B208F] to-[#3B146B] transition-transform duration-500" />
              </a>
            </Magnetic>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-white/80 hover:text-white bg-white/5 border border-white/10 rounded-full"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Real-time Cinematic Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#FFB450] via-[#FF9B55] via-[#F87572] via-[#C9349B] to-[#7B208F] transition-all duration-150 ease-out"
            style={{ width: `${Math.min(100, Math.max(0, scrollProgress * 100))}%` }}
          />
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#05070E]/95 backdrop-blur-2xl flex flex-col justify-center px-8 xl:hidden animate-fade-in">
          <div className="space-y-5">
            {/* Logos on Mobile Drawer */}
            <div className="flex flex-col gap-2 pb-4 border-b border-white/10">
              <img
                src="/assets/logos/gdg-indore.svg"
                alt="GDG Indore"
                className="h-8 w-auto object-contain self-start"
              />
              <img
                src="/assets/logos/gdgoc-iet-davv.svg"
                alt="GDG on Campus IET DAVV"
                className="h-8 w-auto object-contain self-start"
              />
            </div>

            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-2xl font-display uppercase tracking-wider text-white/85 hover:text-white hover:translate-x-2 transition-all"
              >
                <span className="text-[#FF8A50] mr-3 font-mono text-xs">0{idx + 1}.</span>
                {link.label}
              </a>
            ))}

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <a
                href={EVENT_DATA.registration.url}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF8A50] via-[#F43F5E] to-[#E11D48] text-center shadow-lg"
              >
                Get Tickets on KonfHub (₹849)
              </a>
              <div className="text-center text-[11px] font-mono text-white/50">
                Saturday, 28 Nov 2026 • Essentia Luxury Hotel, Indore
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
