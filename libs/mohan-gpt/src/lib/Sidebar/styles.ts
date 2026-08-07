import styled from 'styled-components';
import { focusRing } from '../tokens';

export const Aside = styled.aside<{ $mobile: boolean; $open: boolean; $collapsed: boolean }>`
  display: flex;
  flex-direction: column;
  background: var(--panel);
  border-right: 1px solid var(--border);

  ${({ $mobile, $open, $collapsed }) => ($mobile
    ? `
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 264px;
      z-index: 40;
      transform: translateX(${$open ? '0' : '-110%'});
      transition: transform 0.22s ease;
      box-shadow: ${$open ? '8px 0 40px var(--shadow)' : 'none'};
    `
    : `
      position: relative;
      flex: 0 0 auto;
      width: ${$collapsed ? '68px' : '264px'};
      transition: width 0.2s ease;
      overflow: hidden;
    `)};
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 14px 12px 6px;
`;

export const LogoRow = styled.div<{ $labels: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: ${({ $labels }) => ($labels ? 'space-between' : 'center')};
`;

export const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
`;

export const Monogram = styled.button<{ $interactive: boolean }>`
  flex: 0 0 auto;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 9px;
  background: var(--accent);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 17px;
  cursor: ${({ $interactive }) => ($interactive ? 'pointer' : 'default')};
  ${focusRing};
`;

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
`;

export const LogoTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
  line-height: 1.1;
`;

export const LogoSub = styled.span`
  font-size: 11px;
  color: var(--faint);
  line-height: 1.1;
`;

export const IconButton = styled.button`
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--faint);
  cursor: pointer;
  ${focusRing};

  &:hover {
    background: var(--elevated);
    color: var(--text);
  }
`;

export const TourButton = styled.button<{ $labels: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: ${({ $labels }) => ($labels ? 'flex-start' : 'center')};
  width: 100%;
  padding: 9px 11px;
  border-radius: 10px;
  border: 1px solid var(--accent);
  background: color-mix(in srgb, var(--accent) 12%, transparent);
  color: var(--accent-strong);
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 500;
  cursor: pointer;
  ${focusRing};

  &:hover {
    background: color-mix(in srgb, var(--accent) 20%, transparent);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const Nav = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const NavLabel = styled.span`
  font-family: var(--font-mono);
  font-size: 10.5px;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: var(--faint);
  padding: 6px 10px 4px;
`;

/**
 * Shared by the topic buttons and the footer rows. `as="a"` turns it into a
 * link without a second styled component.
 */
export const NavItem = styled.button<{ $labels: boolean }>`
  display: flex;
  align-items: center;
  gap: 11px;
  justify-content: ${({ $labels }) => ($labels ? 'flex-start' : 'center')};
  width: 100%;
  padding: 8px 10px;
  border-radius: 9px;
  border: none;
  background: transparent;
  color: var(--muted);
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 450;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.12s, color 0.12s;
  ${focusRing};

  &:hover {
    background: var(--elevated);
    color: var(--text);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px 12px;
  border-top: 1px solid var(--border);
`;

export const SocialRow = styled.div<{ $labels: boolean }>`
  display: flex;
  gap: 6px;
  justify-content: ${({ $labels }) => ($labels ? 'flex-start' : 'center')};
  padding-top: 4px;
`;

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  color: var(--faint);
  ${focusRing};

  &:hover {
    background: var(--elevated);
    color: var(--text);
  }
`;
