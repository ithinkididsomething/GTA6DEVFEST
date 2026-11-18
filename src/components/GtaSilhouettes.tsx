import React from 'react';

interface SilhouetteProps {
  className?: string;
  glowColor?: string;
}

/**
 * Miami Tropical Palm Trees Silhouette
 * Classic Vice City aesthetic with swaying palms and sunset horizon rings
 */
export const PalmTreesSilhouette: React.FC<SilhouetteProps> = ({
  className = "w-32 h-32 text-[#FF9B55]",
}) => (
  <svg
    viewBox="0 0 180 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="palm-sun-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFE600" stopOpacity="0.5" />
        <stop offset="50%" stopColor="#F87572" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#7B208F" stopOpacity="0.1" />
      </linearGradient>
    </defs>

    {/* Distant Sun Ring & Horizon Line */}
    <circle cx="115" cy="100" r="42" stroke="url(#palm-sun-grad)" strokeWidth="2" strokeDasharray="3 3" />
    <line x1="0" y1="145" x2="180" y2="145" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
    <path d="M10 150 Q45 146 90 150 T170 150" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" />

    {/* Primary Palm Trunk */}
    <path
      d="M48 160 Q54 112 96 66"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
    />

    {/* Primary Palm Fronds */}
    <path d="M96 66 Q118 52 144 62 Q128 75 96 66Z" fill="currentColor" />
    <path d="M96 66 Q114 38 128 34 Q114 54 96 66Z" fill="currentColor" />
    <path d="M96 66 Q94 28 82 24 Q86 46 96 66Z" fill="currentColor" />
    <path d="M96 66 Q68 40 52 50 Q74 62 96 66Z" fill="currentColor" />
    <path d="M96 66 Q66 64 56 78 Q80 78 96 66Z" fill="currentColor" />
    <path d="M96 66 Q90 80 94 98 Q100 82 96 66Z" fill="currentColor" />

    {/* Secondary Smaller Palm */}
    <path
      d="M124 160 Q130 126 146 96"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path d="M146 96 Q162 82 176 90 Q164 100 146 96Z" fill="currentColor" />
    <path d="M146 96 Q156 74 168 70 Q158 86 146 96Z" fill="currentColor" />
    <path d="M146 96 Q140 68 132 66 Q136 82 146 96Z" fill="currentColor" />
    <path d="M146 96 Q124 78 114 86 Q128 92 146 96Z" fill="currentColor" />
  </svg>
);

/**
 * Coastal Lighthouse Silhouette (Cape Florida / Vice City Shoreline)
 * Classic beacon tower with sweeping radiant beam and ocean waves
 */
export const LighthouseSilhouette: React.FC<SilhouetteProps> = ({
  className = "w-36 h-32 text-[#F87572]",
}) => (
  <svg
    viewBox="0 0 200 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="lh-beam-right" x1="72" y1="48" x2="200" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFE600" stopOpacity="0.5" />
        <stop offset="60%" stopColor="#FF9B55" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#FF9B55" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="lh-beam-left" x1="68" y1="48" x2="0" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFE600" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#F87572" stopOpacity="0" />
      </linearGradient>
    </defs>

    {/* Sweeping Light Beams */}
    <path d="M72 46 L200 12 L200 85 L74 54 Z" fill="url(#lh-beam-right)" />
    <path d="M68 46 L0 24 L0 78 L66 54 Z" fill="url(#lh-beam-left)" />

    {/* Ocean waves */}
    <path d="M0 148 Q40 142 80 148 T160 148 T200 148 L200 160 L0 160 Z" fill="currentColor" fillOpacity="0.35" />
    <path d="M0 154 Q50 150 100 154 T200 154 L200 160 L0 160 Z" fill="currentColor" fillOpacity="0.6" />

    {/* Rocky Shoreline */}
    <path d="M42 160 L54 138 L72 135 L96 142 L112 160 Z" fill="currentColor" />

    {/* Lighthouse Tower Structure */}
    <path d="M62 140 L66 58 L74 58 L78 140 Z" fill="currentColor" />

    {/* Contrasting Architectural Tower Bands */}
    <path d="M64 116 L76 116 L75.5 104 L64.5 104 Z" fill="white" fillOpacity="0.25" />
    <path d="M65.2 88 L74.8 88 L74.3 76 L65.7 76 Z" fill="white" fillOpacity="0.25" />

    {/* Observation Gallery & Balcony */}
    <rect x="63" y="55" width="14" height="3" rx="1" fill="currentColor" />

    {/* Lantern Room (Illuminated) */}
    <rect x="65" y="45" width="10" height="10" rx="1" fill="#FFE600" fillOpacity="0.9" />

    {/* Lantern Cupola & Pinnacle */}
    <path d="M65 45 C65 39 75 39 75 45 Z" fill="currentColor" />
    <line x1="70" y1="39" x2="70" y2="33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

    {/* Mini Shore Palm Beside Lighthouse */}
    <path d="M102 160 Q106 142 116 130" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M116 130 Q124 124 132 130 Q124 136 116 130Z" fill="currentColor" />
    <path d="M116 130 Q120 120 124 114 Q116 122 116 130Z" fill="currentColor" />
    <path d="M116 130 Q108 122 102 126 Q110 132 116 130Z" fill="currentColor" />
  </svg>
);

/**
 * Miami Beach Downtown Skyline & Speedboat Wake
 */
export const MiamiSkylineSilhouette: React.FC<SilhouetteProps> = ({
  className = "w-40 h-28 text-[#C9349B]",
}) => (
  <svg
    viewBox="0 0 200 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
  >
    {/* Horizon line */}
    <line x1="0" y1="108" x2="200" y2="108" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />

    {/* Art Deco & Skyscraper Silhouettes */}
    <rect x="12" y="65" width="16" height="45" fill="currentColor" fillOpacity="0.4" />
    <polygon points="12,65 20,52 28,65" fill="currentColor" fillOpacity="0.4" />

    <rect x="32" y="48" width="20" height="62" fill="currentColor" fillOpacity="0.65" />
    <rect x="56" y="32" width="24" height="78" fill="currentColor" fillOpacity="0.9" />
    {/* Tower Spire */}
    <line x1="68" y1="32" x2="68" y2="14" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="68" cy="14" r="1.5" fill="#FFE600" />

    <rect x="84" y="58" width="18" height="52" fill="currentColor" fillOpacity="0.55" />
    <rect x="106" y="42" width="22" height="68" fill="currentColor" fillOpacity="0.8" />
    <rect x="132" y="60" width="16" height="50" fill="currentColor" fillOpacity="0.5" />

    {/* Water surface waves */}
    <path d="M0 112 Q50 108 100 112 T200 112" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />

    {/* Palm Tree in front of skyline */}
    <path d="M162 120 Q166 94 176 76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M176 76 Q190 64 200 72 Q188 80 176 76Z" fill="currentColor" />
    <path d="M176 76 Q186 58 194 54 Q186 68 176 76Z" fill="currentColor" />
    <path d="M176 76 Q170 54 162 52 Q168 68 176 76Z" fill="currentColor" />
    <path d="M176 76 Q156 64 148 72 Q164 76 176 76Z" fill="currentColor" />
  </svg>
);

/**
 * Vice City Sunset Disc with Palm Silhouette
 */
export const SunsetDiscSilhouette: React.FC<SilhouetteProps> = ({
  className = "w-32 h-32 text-[#FFB450]",
}) => (
  <svg
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="sunset-disc-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFE600" stopOpacity="0.6" />
        <stop offset="40%" stopColor="#FF7A00" stopOpacity="0.45" />
        <stop offset="75%" stopColor="#E02484" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#7B208F" stopOpacity="0.1" />
      </linearGradient>
    </defs>

    {/* Sun with Retro Sliced Grate */}
    <circle cx="80" cy="80" r="50" fill="url(#sunset-disc-grad)" />
    <line x1="30" y1="75" x2="130" y2="75" stroke="#05070E" strokeWidth="3" />
    <line x1="33" y1="85" x2="127" y2="85" stroke="#05070E" strokeWidth="4" />
    <line x1="38" y1="97" x2="122" y2="97" stroke="#05070E" strokeWidth="5" />
    <line x1="47" y1="110" x2="113" y2="110" stroke="#05070E" strokeWidth="6" />

    {/* Twin Palms in Foreground */}
    <path d="M45 150 Q48 115 72 90" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M72 90 Q86 80 100 86 Q90 95 72 90Z" fill="currentColor" />
    <path d="M72 90 Q82 72 92 68 Q84 82 72 90Z" fill="currentColor" />
    <path d="M72 90 Q68 66 58 64 Q64 80 72 90Z" fill="currentColor" />
    <path d="M72 90 Q52 74 42 82 Q58 86 72 90Z" fill="currentColor" />
  </svg>
);

/**
 * Tropical Palm Fronds Corner Accent
 */
export const PalmFrondsCorner: React.FC<SilhouetteProps> = ({
  className = "w-28 h-28 text-[#FF9B55]",
}) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
  >
    {/* Hanging tropical fronds from top corner */}
    <path d="M0 0 Q40 20 85 45 Q50 48 0 25Z" fill="currentColor" />
    <path d="M0 0 Q30 35 70 75 Q42 65 0 35Z" fill="currentColor" />
    <path d="M0 0 Q20 50 45 105 Q28 80 0 45Z" fill="currentColor" />
    <path d="M0 0 Q60 15 110 30 Q75 38 0 15Z" fill="currentColor" />
  </svg>
);
