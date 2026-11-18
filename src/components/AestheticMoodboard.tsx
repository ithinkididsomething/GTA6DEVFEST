import React, { useState } from 'react';
import { Eye, Palette, X, ChevronLeft, ChevronRight, Film } from 'lucide-react';

interface MoodboardItem {
  id: string;
  title: string;
  tagline: string;
  image: string;
  description: string;
  colors: string[];
  campaignImpact: string;
}

export const GTA6_PALETTE = [
  { name: 'DEEP VIOLET', hex: '#3B146B', role: 'Depth, nighttime vibes and contrast.' },
  { name: 'PURPLE', hex: '#7B208F', role: 'Adds mood, mystery and atmosphere.' },
  { name: 'MAGENTA', hex: '#C9349B', role: 'Electric energy, nightlife and bold expression.' },
  { name: 'CORAL PINK', hex: '#F36A78', role: 'Warmth, vibrance and tropical energy.' },
  { name: 'CORAL', hex: '#F87572', role: 'Bridges pink and orange, creating smooth transitions.' },
  { name: 'ORANGE', hex: '#FF9B55', role: 'Sunsets, heat and golden light.' },
  { name: 'WARM YELLOW', hex: '#FFB450', role: 'Daylight, optimism and coastal brightness.' },
];

const MOODBOARD_ITEMS: MoodboardItem[] = [
  {
    id: 'official-palette',
    title: 'The Master GTA VI Palette',
    tagline: 'Official 7-Tone Vice City Color Architecture',
    image: '/assets/gta6/gta6-official-palette.png',
    description: 'A representative color palette inspired by official GTA VI artwork, capturing the Vice City atmosphere: from Deep Violet night tones to Warm Yellow coastal daylight.',
    colors: ['#3B146B', '#7B208F', '#C9349B', '#F36A78', '#F87572', '#FF9B55', '#FFB450'],
    campaignImpact: 'Directly governs the entire conference styling, typography gradients, atmospheric glow, and chapter transitions.',
  },
  {
    id: 'neon-boulevard',
    title: 'Boulevard Blue Hour',
    tagline: 'Neon Storefronts & Palm Shadows',
    image: '/assets/gta6/01-neon-boulevard-vibes.jpg',
    description: 'Electric magenta neon illumination spilling onto asphalt, paired with deep purple dusk skies and iconic royal palm silhouettes.',
    colors: ['#C9349B', '#7B208F', '#3B146B', '#05070E'],
    campaignImpact: 'Inspires the Chapter 02 boulevard transition and the neon glow of the conference stage navigation.',
  },
  {
    id: 'balcony-sunset',
    title: 'Skyline Balcony Twilight',
    tagline: 'High-Altitude Horizon & Coral Glow',
    image: '/assets/gta6/02-skyline-balcony-sunset.jpg',
    description: 'Dramatic architectural terrace framing an expansive metropolitan skyline during peak sunset coral-to-violet gradient.',
    colors: ['#FF9B55', '#F87572', '#C9349B', '#7B208F'],
    campaignImpact: 'Directly informs the Chapter 01 Arrival hero composition and the "From Orbit to Insight" planetary perspective.',
  },
  {
    id: 'coastal-waterways',
    title: 'Sun-Drenched Waterways',
    tagline: 'Warm Reflections & Tropical Infrastructure',
    image: '/assets/gta6/03-coastal-waterways.jpg',
    description: 'Bright tropical waters reflecting highway overpasses and distant mangrove islands under brilliant sunny skies.',
    colors: ['#FFB450', '#FF9B55', '#F87572', '#FFF5EA'],
    campaignImpact: 'Guides the high-contrast daytime workshop aesthetics and clear engineering documentation readability.',
  },
  {
    id: 'art-district',
    title: 'Art District Pastels',
    tagline: 'Editorial Styling & Mural Architecture',
    description: 'Pastel purple and peach mural walls, sharp tailored tailoring, and soft golden daylight filtering through subtropical trees.',
    image: '/assets/gta6/04-art-district-editorial.jpg',
    colors: ['#FFF5EA', '#F36A78', '#7B208F', '#3B146B'],
    campaignImpact: 'Directly shapes the editorial typography system (Bebas Neue + Space Grotesk) and high-contrast speaker profile cards.',
  },
  {
    id: 'blueprint-tactics',
    title: 'Mission Blueprint Workshop',
    tagline: 'Intense Collaboration & Engineering Focus',
    image: '/assets/gta6/05-blueprint-tactics.jpg',
    description: 'Strategic planning over architectural layouts in an open hangar workshop with tropical palms catching the sun outside.',
    colors: ['#FF9B55', '#FFB450', '#3B146B', '#05070E'],
    campaignImpact: 'Sets the visual tone for Chapter 04 code labs, Qualcomm hardware benches, and hackathon project war-rooms.',
  },
];

export const AestheticMoodboard: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [fullscreenModal, setFullscreenModal] = useState<boolean>(false);

  const activeItem = MOODBOARD_ITEMS[selectedIndex];

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % MOODBOARD_ITEMS.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + MOODBOARD_ITEMS.length) % MOODBOARD_ITEMS.length);
  };

  return (
    <div className="my-16 rounded-3xl border border-white/15 bg-gradient-to-br from-[#0D1127] via-[#111524] to-[#05070E] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E02484]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF5E36] mb-2">
            <Film className="w-3.5 h-3.5 text-[#FFB800]" />
            <span>Creative Direction // Visual Atmosphere</span>
          </div>
          <h3 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-tight font-black">
            The Vice City Visual DNA
          </h3>
          <p className="text-xs sm:text-sm text-white/70 font-sans mt-1 max-w-xl">
            Explore the authentic Grand Theft Auto VI promotional artworks and color studies that define the cinematic lighting, typography, and environmental pacing of DevFest Indore 2026.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-white transition-colors"
            aria-label="Previous artwork"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-mono text-xs text-white/60 px-2">
            0{selectedIndex + 1} / 0{MOODBOARD_ITEMS.length}
          </span>
          <button
            onClick={handleNext}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-white transition-colors"
            aria-label="Next artwork"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Full-Frame Art Canvas */}
        <div className="lg:col-span-8 relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
          <div
            className="w-full aspect-[16/9] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 cursor-pointer"
            style={{ backgroundImage: `url('${activeItem.image}')` }}
            onClick={() => setFullscreenModal(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070E] via-transparent to-transparent pointer-events-none" />

          {/* Hover zoom pill */}
          <button
            onClick={() => setFullscreenModal(true)}
            className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/70 border border-white/20 text-white font-mono text-[11px] flex items-center gap-1.5 backdrop-blur-md opacity-80 hover:opacity-100 transition-opacity"
          >
            <Eye className="w-3.5 h-3.5 text-[#FFB450]" />
            <span>Full Resolution</span>
          </button>

          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#FF9B55] uppercase mb-0.5 block font-bold">
                {activeItem.tagline}
              </span>
              <div className="font-display text-2xl text-white uppercase drop-shadow-md">
                {activeItem.title}
              </div>
            </div>

            {/* Swatch dots */}
            <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-black/60 border border-white/20 backdrop-blur-md">
              {activeItem.colors.map((c, i) => (
                <div
                  key={i}
                  className="w-3.5 h-3.5 rounded-full border border-white/30"
                  style={{ backgroundColor: c }}
                  title={c}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Narrative & Color Breakdown */}
        <div className="lg:col-span-4 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#F87572] tracking-wider mb-2 font-bold">
              <Palette className="w-3.5 h-3.5 text-[#FF9B55]" />
              <span>Aesthetic Analysis</span>
            </div>
            <h4 className="font-display text-2xl text-white uppercase tracking-wide">
              {activeItem.title}
            </h4>
            <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed mt-2">
              {activeItem.description}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono uppercase text-[#FFB450] tracking-wider block mb-1 font-bold">
              Campaign Implementation:
            </span>
            <p className="text-xs text-white/70 font-sans leading-relaxed">
              {activeItem.campaignImpact}
            </p>
          </div>

          {/* Quick Select Carousel Thumbnails */}
          <div>
            <span className="text-[10px] font-mono uppercase text-white/50 tracking-wider block mb-2">
              Select Composition ({MOODBOARD_ITEMS.length}):
            </span>
            <div className="grid grid-cols-6 gap-2">
              {MOODBOARD_ITEMS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedIndex(idx)}
                  className={`aspect-video rounded-lg overflow-hidden border transition-all ${
                    selectedIndex === idx
                      ? 'border-[#FF9B55] ring-2 ring-[#FF9B55]/50 scale-105'
                      : 'border-white/15 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Official 7-Color GTA VI Architecture Bar */}
      <div className="mt-10 pt-8 border-t border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF9B55] font-bold">
            <Palette className="w-4 h-4 text-[#FFB450]" />
            <span>Official GTA VI 7-Color Architecture // The Vice Palette</span>
          </div>
          <span className="text-[11px] font-mono text-white/40 hidden sm:inline">
            02 / 05 Visual Exploration
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
          {GTA6_PALETTE.map((swatch) => (
            <div
              key={swatch.name}
              className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div
                  className="w-full h-10 rounded-lg mb-2 shadow-inner border border-white/15 group-hover:scale-105 transition-transform"
                  style={{ backgroundColor: swatch.hex }}
                />
                <div className="font-display text-sm text-white tracking-wider uppercase">
                  {swatch.name}
                </div>
                <div className="font-mono text-[10px] text-white/50 tracking-wider">
                  {swatch.hex}
                </div>
              </div>
              <p className="text-[10px] text-white/60 font-sans leading-tight mt-2 line-clamp-2">
                {swatch.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Inspection Modal */}
      {fullscreenModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl animate-fade-in"
          onClick={() => setFullscreenModal(false)}
        >
          <div
            className="relative max-w-5xl w-full rounded-2xl overflow-hidden border border-white/20 bg-[#05070E] p-4 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider">
                  Visual Direction Study // {activeItem.title}
                </span>
                <div className="text-sm font-sans text-white/60">
                  {activeItem.tagline}
                </div>
              </div>
              <button
                onClick={() => setFullscreenModal(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="w-full aspect-[16/9] object-contain rounded-xl bg-black"
            />

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-white/60">
              <div>Source: Official Rockstar Games Promotional Art Reference</div>
              <div className="flex items-center gap-2">
                <span>Palette:</span>
                {activeItem.colors.map((c, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-white/10 text-white text-[11px]">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
