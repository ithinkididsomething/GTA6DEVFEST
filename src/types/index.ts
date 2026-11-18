export interface SectionProps {
  id: string;
  onNavigate?: (sectionId: string) => void;
}

export type ThemePalette = 'sunset' | 'dusk' | 'neon' | 'night';
