// The portfolio site's shared design tokens — the app-shell palette used by the
// Portfolio landing page, Layout, and GlobalStyles. Each mini-app under libs/*
// keeps its OWN brand palette; this is deliberately just the site-shell tokens.
export const COLOR = {
  // Legacy app-shell palette — used by Layout, Footer and GlobalStyles.
  BLUE: '#337AB7',
  ORANGE: '#F97168',
  LIGHT_GREY: '#F2F2F2',
  YELLOW: '#FFC600',
  LIGHT_YELLOW: '#FFF3D8',
  WHITE: '#FFFFFF',
  BLACK: '#000000',

  // Portfolio landing page — dark + violet. INK is the page ground; SURFACE
  // the raised cards; VIOLET the single restrained accent.
  INK: '#0A0A0F',
  INK_2: '#0E0E15',
  SURFACE: '#14141C',
  SURFACE_2: '#1B1B26',
  BORDER: '#262630',
  TEXT: '#ECECF1',
  TEXT_MUTED: '#8B8B99',
  TEXT_FAINT: '#5C5C6B',
  VIOLET: '#8B5CF6',
  VIOLET_LIGHT: '#A78BFA',
  VIOLET_DARK: '#6D28D9',
};
