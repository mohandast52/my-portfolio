import styled from 'styled-components';
import { focusRing, tokens } from './tokens';

/**
 * Root of the whole experience. The design tokens live here rather than on
 * <html> so they stay scoped to this lib and never leak into the rest of the
 * site — every child reads them as var(--token).
 */
export const Root = styled.div`
  ${tokens};
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  width: 100%;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
  overflow: hidden;

  * {
    box-sizing: border-box;
  }

  /*
   * Deliberately no blanket accent colour on "a" here: a descendant selector
   * out-specifies styled-components' single class, which would repaint every
   * link component (social icons, contact rows, project links) accent-blue.
   * Each link sets its own colour instead.
   */
  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: 8px;
    border: 2px solid transparent;
    background-clip: padding-box;
  }
`;

export const Body = styled.div`
  display: flex;
  flex: 1;
  min-height: 0;
  position: relative;
`;

/**
 * Backdrop behind the mobile drawer. A real button, so dismissing the drawer is
 * keyboard-reachable rather than a click handler on a bare div.
 */
export const Scrim = styled.button`
  position: absolute;
  inset: 0;
  z-index: 35;
  border: none;
  padding: 0;
  background: rgba(0, 0, 0, 0.55);
  cursor: pointer;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 16px;
  height: 53px;
  flex: 0 0 auto;
  border-bottom: 1px solid var(--border);
`;

export const TopBarSpacer = styled.div`
  flex: 1;
`;

export const Hamburger = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--text);
  cursor: pointer;
  ${focusRing};

  &:hover {
    background: var(--elevated);
  }
`;

export const ClassicButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 12px;
  border-radius: 9px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--muted);
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  ${focusRing};

  &:hover {
    background: var(--elevated);
    color: var(--text);
  }
`;

/* ------------------------------------------------------------- empty state */

export const Empty = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 20px;
`;

export const EmptyInner = styled.div`
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
`;

export const HeroMonogram = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 17px;
  background: var(--accent);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 31px;
  box-shadow: 0 8px 30px color-mix(in srgb, var(--accent) 35%, transparent);
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

export const Welcome = styled.span`
  font-size: 15px;
  color: var(--muted);
`;

export const HeroName = styled.h1`
  margin: 0;
  font-size: 27px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--text);
`;

export const HeroIdentity = styled.span`
  font-size: 13.5px;
  color: var(--faint);
  max-width: 52ch;
  text-wrap: pretty;
`;

export const ComposerSlot = styled.div`
  width: 100%;
  max-width: 560px;
  margin-top: 4px;
`;

export const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  max-width: 600px;
`;

export const Chip = styled.button`
  font-family: var(--font-sans);
  font-size: 13px;
  color: var(--text);
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 7px 14px;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
  ${focusRing};

  &:hover {
    border-color: var(--accent);
    background: var(--elevated);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const TourTextButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-top: 4px;
  padding: 2px 4px;
  background: transparent;
  border: none;
  color: var(--muted);
  font-family: var(--font-sans);
  font-size: 13px;
  cursor: pointer;
  ${focusRing};

  &:hover {
    color: var(--accent-strong);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

/* ---------------------------------------------------------- pinned composer */

export const ComposerBar = styled.div`
  flex: 0 0 auto;
  padding: 10px 20px 16px;
  background: var(--bg);
`;

export const ComposerBarInner = styled.div`
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Disclaimer = styled.span`
  text-align: center;
  font-size: 11px;
  color: var(--faint);
`;
