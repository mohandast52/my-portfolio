import styled from 'styled-components';
import { focusRing } from '../tokens';

export const Scroll = styled.div`
  flex: 1;
  overflow-y: auto;
  width: 100%;
`;

export const Bar = styled.div`
  position: sticky;
  top: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  background: color-mix(in srgb, var(--bg) 82%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
`;

export const BackLink = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--accent);
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 500;
  cursor: pointer;
  ${focusRing};

  &:hover {
    color: var(--accent-strong);
  }
`;

export const ThemeButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 9px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  ${focusRing};

  &:hover {
    color: var(--text);
    background: var(--elevated);
  }
`;

export const Column = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 44px 24px 120px;
  display: flex;
  flex-direction: column;
  gap: 44px;
`;

export const Hero = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const HeroRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const HeroMonogram = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: var(--accent);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 27px;
  flex: 0 0 auto;
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
`;

export const HeroName = styled.h1`
  margin: 0;
  font-size: 26px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--text);
`;

export const HeroIdentity = styled.span`
  font-size: 14px;
  color: var(--muted);
`;

export const HeroBio = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.65;
  color: var(--text);
  text-wrap: pretty;
  max-width: 60ch;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Heading = styled.h2`
  margin: 0;
  font-family: var(--font-mono);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: var(--faint);
  font-weight: 400;
`;

export const EducationRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 14px 16px;
`;

export const EducationDegree = styled.span`
  font-size: 14.5px;
  font-weight: 600;
  color: var(--text);
`;

export const EducationSchool = styled.span`
  font-size: 13px;
  color: var(--accent);
`;

export const EducationMeta = styled.span`
  font-family: var(--font-mono);
  font-size: 11.5px;
  color: var(--faint);
`;
