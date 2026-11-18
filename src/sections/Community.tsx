import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeartHandshake, Quote, Award, Terminal, Code2 } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import { TiltCard } from '../components/TiltCard';

gsap.registerPlugin(ScrollTrigger);

export const Community: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 80%',
          },
        }
      );

      if (cardsRef.current) {
        gsap.fromTo(
          Array.from(cardsRef.current.children),
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="community"
      ref={containerRef}
      className="relative min-h-screen py-28 sm:py-36 lg:py-40 bg-[#05070E] overflow-hidden border-t border-white/5 scroll-mt-24"
      aria-label="Chapter 07: Community & Developer Culture"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 sm:mb-24 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#E02484] uppercase mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-[#FF5E36]" />
            <span>Chapter 07 // The Developer Culture</span>
          </div>

          <h2
            ref={headlineRef}
            className="font-display uppercase text-5xl sm:text-7xl md:text-8xl font-black text-white leading-[0.9] tracking-tight"
          >
            THE PEOPLE MAKE <br />
            <span className="bg-gradient-to-r from-[#FF4B72] via-[#E02484] to-[#7928CA] bg-clip-text text-transparent">
              THE CULTURE.
            </span>
          </h2>

          <p className="mt-6 text-sm sm:text-base md:text-lg font-supporting text-white/80 font-light leading-relaxed">
            Technology is never just syntax or silicon. It’s the late-night debugging in hostel rooms, the animated architecture debates on campus lawns, and the courage of student developers building their first open-source repo.
          </p>
        </div>

        {/* Feature Hero Image Composition: Full Frame */}
        <TiltCard maxTilt={4} className="rounded-3xl overflow-hidden border border-white/15 mb-14 shadow-2xl group">
          <div
            className="w-full aspect-[21/9] min-h-[300px] sm:min-h-[420px] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-102"
            data-cursor="EXPLORE"
            style={{
              backgroundImage: `url('/assets/cinematic/06-community-terrace.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070E] via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-xl">
              <span className="text-[11px] font-mono tracking-widest text-[#00F0FF] uppercase mb-1 block">
                // Community Atmosphere
              </span>
              <div className="font-display text-2xl sm:text-4xl text-white uppercase tracking-wide">
                Where Central India Connects
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-sans mt-1">
                Student innovators, open-source maintainers, and engineering leaders gathering with {EVENT_DATA.organiser.name}.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-xs font-mono text-white/90">
              <Award className="w-4 h-4 text-[#FFB800]" />
              <span>Inclusive // Open // Merit-First</span>
            </div>
          </div>
        </TiltCard>

        {/* Community Perspectives Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 relative flex flex-col justify-between">
            <Quote className="w-8 h-8 text-[#FF5E36]/30 mb-4" />
            <p className="text-sm sm:text-base text-white/80 font-supporting font-light leading-relaxed mb-6 italic">
              "Being part of the central India developer ecosystem means you’re never building in a vacuum. DevFest Indore represents that rare ignition point where student projects evolve into production architectures."
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <div className="w-9 h-9 rounded-full bg-[#FF5E36]/20 border border-[#FF5E36]/40 flex items-center justify-center text-[#FF5E36] font-mono font-bold text-xs">
                GDG
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-white uppercase">Regional Developer Circle</div>
                <div className="text-[11px] text-white/50 font-mono">{EVENT_DATA.organiser.shortName}, Indore</div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 relative flex flex-col justify-between">
            <Terminal className="w-8 h-8 text-[#E02484]/30 mb-4" />
            <p className="text-sm sm:text-base text-white/80 font-supporting font-light leading-relaxed mb-6 italic">
              "We designed DevFest Indore 2026 to be the antidote to passive slideshow conferences. If you attend, you bring your laptop, your curiosities, and your hunger to ship tangible systems."
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <div className="w-9 h-9 rounded-full bg-[#E02484]/20 border border-[#E02484]/40 flex items-center justify-center text-[#E02484] font-mono font-bold text-xs">
                DEV
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-white uppercase">Community Organizing Core</div>
                <div className="text-[11px] text-white/50 font-mono">DevFest Indore 2026 Initiative</div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 relative flex flex-col justify-between">
            <Code2 className="w-8 h-8 text-[#00F0FF]/30 mb-4" />
            <p className="text-sm sm:text-base text-white/80 font-supporting font-light leading-relaxed mb-6 italic">
              "From tier-2 cities come tier-1 engineering talent. DevFest Indore is where national leaders take note of what students and indie hackers in Madhya Pradesh are crafting."
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <div className="w-9 h-9 rounded-full bg-[#00F0FF]/20 border border-[#00F0FF]/40 flex items-center justify-center text-[#00F0FF] font-mono font-bold text-xs">
                MP
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-white uppercase">Regional Tech Ecosystem</div>
                <div className="text-[11px] text-white/50 font-mono">Central India Developer Network</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
