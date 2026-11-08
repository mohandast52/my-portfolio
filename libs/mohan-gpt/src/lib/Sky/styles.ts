import styled, { css, keyframes } from 'styled-components';
import type { Phase } from '../types';

/*
 * The sky behind the empty state. Every layer is always mounted and the active
 * phase is crossfaded in, so toggling the theme reads as a sunset or sunrise
 * rather than a hard cut. Only opacity, transform and colours transition.
 */

const EASE = 'cubic-bezier(0.45, 0, 0.2, 1)';
const FADE_MS = 900;
const TRAVEL_MS = 1400;

/* Centred on the cloud's resting spot: halfway through, it sits at its `left`. */
const drift = keyframes`
  from { transform: translateX(-70vw); }
  to { transform: translateX(70vw); }
`;

const twinkle = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`;

/* A streak for the first ~7% of the cycle, then a long quiet gap. */
const shoot = keyframes`
  0% { opacity: 0; transform: translateX(0); }
  1.5% { opacity: 1; }
  7% { opacity: 0; transform: translateX(280px); }
  100% { opacity: 0; transform: translateX(280px); }
`;

/* Crosses in the first ~40% of the cycle, then waits off-screen. */
const flyAcross = keyframes`
  0% { transform: translate(-25vw, 0); }
  40% { transform: translate(115vw, -5vh); }
  100% { transform: translate(115vw, -5vh); }
`;

/* Straight along the plane's own axis; the tilted parent turns it into a climb. */
const planeCross = keyframes`
  0% { transform: translateX(-25vw); }
  40% { transform: translateX(120vw); }
  100% { transform: translateX(120vw); }
`;

const flap = keyframes`
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.25); }
`;

/** Decoration that only exists in motion; it has no still frame worth keeping. */
const motionOnly = css`
  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

const shownIn = (active: boolean) => css`
  opacity: ${active ? 1 : 0};
  visibility: ${active ? 'visible' : 'hidden'};
  transition:
    opacity ${FADE_MS}ms ${EASE},
    visibility 0s linear ${active ? 0 : FADE_MS}ms;
`;

export const Scene = styled.div<{ $ready: boolean }>`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;

  /* Until the client has settled on the stored theme and the local time, snap
     instead of animating, so a light-mode visitor never sees a sunrise on load. */
  ${props => (props.$ready ? '' : css`
    *,
    *::before,
    *::after {
      transition: none !important;
    }
  `)}
`;

const GRADIENTS: Record<Phase, string> = {
  morning: 'linear-gradient(180deg, #cfe4f4 0%, #e2eef8 30%, #f1f7fc 55%, #ffffff 85%)',
  evening: 'linear-gradient(180deg, #ebc3b8 0%, #f3d6c0 30%, #f9ebdf 55%, #ffffff 85%)',
  /* Darkest overhead, easing to a lit navy horizon rather than to black. */
  night: 'linear-gradient(180deg, #0a1122 0%, #0f182d 40%, #16213a 75%, #1c2843 100%)',
};

export const Gradient = styled.div<{ $phase: Phase; $active: boolean }>`
  position: absolute;
  inset: 0;
  background: ${props => GRADIENTS[props.$phase]};
  ${props => shownIn(props.$active)};
`;

/* ------------------------------------------------------------- sun & moon */

const SUN: Record<Phase, { shift: string; core: string; glow: string; opacity: number }> = {
  morning: { shift: '0', core: '#ffe38f', glow: 'rgba(255, 214, 110, 0.55)', opacity: 1 },
  evening: { shift: '22vh', core: '#e0583c', glow: 'rgba(236, 110, 70, 0.45)', opacity: 1 },
  night: { shift: '60vh', core: '#e0583c', glow: 'rgba(236, 110, 70, 0)', opacity: 0 },
};

const orb = css`
  position: absolute;
  top: 9%;
  right: 11%;
  width: clamp(44px, 5vw, 68px);
  aspect-ratio: 1;
  border-radius: 50%;
`;

export const Sun = styled.div<{ $phase: Phase }>`
  ${orb};
  background-color: ${props => SUN[props.$phase].core};
  box-shadow: 0 0 44px 14px ${props => SUN[props.$phase].glow};
  opacity: ${props => SUN[props.$phase].opacity};
  transform: translateY(${props => SUN[props.$phase].shift});
  transition:
    transform ${TRAVEL_MS}ms ${EASE},
    background-color ${TRAVEL_MS}ms ${EASE},
    box-shadow ${TRAVEL_MS}ms ${EASE},
    opacity ${FADE_MS}ms ${EASE};
`;

/* A crescent: an empty disc whose offset shadow is the lit limb. */
export const Moon = styled.div<{ $active: boolean }>`
  ${orb};
  box-shadow: calc(clamp(44px, 5vw, 68px) * 0.22) calc(clamp(44px, 5vw, 68px) * 0.1) 0 0 #eef0f7;
  filter: drop-shadow(0 0 18px rgba(214, 224, 255, 0.45));
  opacity: ${props => (props.$active ? 1 : 0)};
  transform: translate(-22%, ${props => (props.$active ? '0' : '40vh')});
  transition:
    transform ${TRAVEL_MS}ms ${EASE},
    opacity ${FADE_MS}ms ${EASE};
`;

/* ------------------------------------------------------------------ stars */

export const Stars = styled.div<{ $active: boolean }>`
  position: absolute;
  inset: 0;
  ${props => shownIn(props.$active)};
`;

/** One px-sized dot whose box-shadow list paints a whole layer of stars. */
export const StarLayer = styled.div<{ $shadows: string; $size: number; $duration: number; $delay: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  border-radius: 50%;
  box-shadow: ${props => props.$shadows};
  animation: ${twinkle} ${props => props.$duration}s ease-in-out ${props => props.$delay}s infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const ShootingStar = styled.div<{ $top: string; $left: string; $delay: number }>`
  position: absolute;
  top: ${props => props.$top};
  left: ${props => props.$left};
  transform: rotate(22deg);
  ${motionOnly};

  &::after {
    content: '';
    display: block;
    width: 120px;
    height: 1.5px;
    border-radius: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9));
    opacity: 0;
    animation: ${shoot} 12s linear ${props => props.$delay}s infinite;
  }
`;

/* ----------------------------------------------------------------- clouds */

/* Opaque fills with the alpha on the whole cloud, so overlapping puffs don't
   stack into darker patches. */
const CLOUD: Record<Phase, { fill: string; opacity: number }> = {
  morning: { fill: '#ffffff', opacity: 0.85 },
  evening: { fill: '#ffeade', opacity: 0.7 },
  night: { fill: '#3e4f70', opacity: 0.22 },
};

/*
 * A soft pill with two puffs on top, blurred into a cloud. It rests at its
 * `left` and drifts from there, so with reduced motion it simply stays put.
 */
export const Cloud = styled.div<{
  $phase: Phase;
  $top: string;
  $left: string;
  $width: number;
  $duration: number;
  $delay: number;
  /** Depth: 1 for the nearest cloud, lower for fainter, farther ones. */
  $fade: number;
}>`
  position: absolute;
  top: ${props => props.$top};
  left: ${props => props.$left};
  width: ${props => props.$width}px;
  height: ${props => Math.round(props.$width * 0.32)}px;
  filter: blur(${props => Math.round(props.$width / 16)}px);
  opacity: ${props => CLOUD[props.$phase].opacity * props.$fade};
  animation: ${drift} ${props => props.$duration}s linear ${props => props.$delay}s infinite;
  will-change: transform;

  &,
  &::before,
  &::after {
    background-color: ${props => CLOUD[props.$phase].fill};
    border-radius: 999px;
    transition:
      background-color ${TRAVEL_MS}ms ${EASE},
      opacity ${TRAVEL_MS}ms ${EASE};
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
  }

  &::before {
    left: 16%;
    top: -55%;
    width: 36%;
    aspect-ratio: 1;
  }

  &::after {
    left: 42%;
    top: -85%;
    width: 44%;
    aspect-ratio: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* -------------------------------------------------- plane (morning only) */

export const Plane = styled.div<{ $active: boolean }>`
  position: absolute;
  top: 30%;
  left: 0;
  ${props => shownIn(props.$active)};
  ${motionOnly};

  /* Nose and contrail share one tilt, so the plane points where it flies and
     climbs about a fifth of the sky while crossing it. */
  > div {
    transform: rotate(-8deg);
    transform-origin: left center;
  }

  > div > div {
    display: flex;
    align-items: center;
    transform: translateX(-25vw);
    animation: ${planeCross} 46s linear -4s infinite;
  }
`;

export const Contrail = styled.span`
  display: block;
  width: 180px;
  height: 1.5px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.95));
`;

export const PlaneIcon = styled.svg`
  display: block;
  width: 18px;
  height: 18px;
  margin-left: -2px;
  color: #7c8a99;
`;

/* ------------------------------------------------- birds (evening only) */

export const Flock = styled.div<{ $active: boolean; $top: string; $duration: number; $delay: number }>`
  position: absolute;
  top: ${props => props.$top};
  left: 0;
  ${props => shownIn(props.$active)};
  ${motionOnly};

  > div {
    position: relative;
    width: 110px;
    height: 44px;
    transform: translate(-25vw, 0);
    animation: ${flyAcross} ${props => props.$duration}s linear ${props => props.$delay}s infinite;
  }
`;

export const Bird = styled.svg<{ $x: number; $y: number; $scale: number; $beat: number }>`
  position: absolute;
  left: ${props => props.$x}px;
  top: ${props => props.$y}px;
  width: ${props => Math.round(22 * props.$scale)}px;
  height: ${props => Math.round(11 * props.$scale)}px;
  overflow: visible;
  color: #5b3833;
  opacity: 0.75;

  path {
    transform-box: fill-box;
    transform-origin: center;
    animation: ${flap} ${props => props.$beat}s ease-in-out infinite;
  }
`;
