// Lucide glyphs, inlined. The design system is Lucide-only at a 1.5px stroke
// (1.6–1.7 in a few chrome spots), so each icon takes its size and stroke from
// the caller rather than shipping a second icon set.

import type { ReactElement, SVGProps } from 'react';
import type { SkillIcon } from './types';

export interface IconProps {
  size?: number;
  strokeWidth?: number;
}

const base = (size: number, strokeWidth: number): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
});

export const IconArrowUp = ({ size = 17, strokeWidth = 2 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M12 19V5" />
    <path d="m5 12 7-7 7 7" />
  </svg>
);

export const IconArrowRight = ({ size = 14, strokeWidth = 1.8 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export const IconArrowLeft = ({ size = 15, strokeWidth = 1.8 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

export const IconArrowUpRight = ({ size = 13, strokeWidth = 1.6 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

export const IconMenu = ({ size = 20, strokeWidth = 1.7 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

export const IconPanelLeft = ({ size = 17, strokeWidth = 1.6 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 3v18" />
  </svg>
);

export const IconSun = ({ size = 18, strokeWidth = 1.6 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

export const IconMoon = ({ size = 18, strokeWidth = 1.6 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

export const IconDownload = ({ size = 18, strokeWidth = 1.6 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export const IconFileText = ({ size = 18, strokeWidth = 1.6 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v5h5" />
    <path d="M9 13h6M9 17h4" />
  </svg>
);

export const IconCompass = ({ size = 18, strokeWidth = 1.6 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

export const IconUser = ({ size = 18, strokeWidth = 1.6 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export const IconBriefcase = ({ size = 18, strokeWidth = 1.6 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

export const IconFolder = ({ size = 18, strokeWidth = 1.6 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
  </svg>
);

export const IconWrench = ({ size = 18, strokeWidth = 1.5 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />
  </svg>
);

export const IconCode = ({ size = 18, strokeWidth = 1.5 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export const IconGrid = ({ size = 18, strokeWidth = 1.5 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
  </svg>
);

export const IconSparkles = ({ size = 18, strokeWidth = 1.5 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6l1.4 1.4m10 10 1.4 1.4m0-12.8-1.4 1.4m-10 10-1.4 1.4" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);

export const IconShield = ({ size = 18, strokeWidth = 1.5 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const IconServer = ({ size = 18, strokeWidth = 1.5 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <rect x="2" y="2" width="20" height="8" rx="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

export const IconTrophy = ({ size = 16, strokeWidth = 1.5 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

export const IconMail = ({ size = 18, strokeWidth = 1.5 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const IconLinkedin = ({ size = 18, strokeWidth = 1.5 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const IconGithub = ({ size = 18, strokeWidth = 1.5 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const IconMapPin = ({ size = 14, strokeWidth = 1.5 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const IconImage = ({ size = 30, strokeWidth = 1.4 }: IconProps) => (
  <svg {...base(size, strokeWidth)}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </svg>
);

const SKILL_ICONS: Record<SkillIcon, (props: IconProps) => ReactElement> = {
  code: IconCode,
  grid: IconGrid,
  sparkles: IconSparkles,
  shield: IconShield,
  wrench: IconWrench,
  server: IconServer,
};

export const SkillGlyph = ({ icon }: { icon: SkillIcon }) => {
  const Glyph = SKILL_ICONS[icon] ?? IconCode;
  return <Glyph size={18} />;
};
