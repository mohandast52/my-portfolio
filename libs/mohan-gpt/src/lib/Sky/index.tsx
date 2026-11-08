// The animated sky behind the empty state, after soorajchandran.com: a morning
// sky with drifting clouds and a passing plane, a sunset with birds, and a
// starry night with a moon. Dark theme is always night; light theme picks
// morning or evening from the visitor's local clock.

import { useEffect, useState, useSyncExternalStore } from 'react';
import type { Phase, Theme } from '../types';
import * as S from './styles';

/** Light mode turns to evening from 17:00 until 05:00. */
const EVENING_FROM = 17;
const MORNING_FROM = 5;
const CLOCK_TICK_MS = 60_000;

type Daypart = Exclude<Phase, 'night'>;

const getDaypart = (): Daypart => {
  const hour = new Date().getHours();
  return hour >= MORNING_FROM && hour < EVENING_FROM ? 'morning' : 'evening';
};

/** The server cannot know the visitor's clock, so it renders morning. */
const getServerDaypart = (): Daypart => 'morning';

/** Re-reads the clock once a minute, so an open tab slides into sunset. */
const subscribeToClock = (onChange: () => void) => {
  const id = setInterval(onChange, CLOCK_TICK_MS);
  return () => clearInterval(id);
};

/*
 * Stars come from a seeded PRNG rather than Math.random, so the server and the
 * client paint the same sky and hydration never mismatches.
 */
const mulberry32 = (seed: number) => {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const starShadows = (seed: number, count: number) => {
  const rand = mulberry32(seed);
  return Array.from({ length: count }, () => {
    const x = (rand() * 100).toFixed(2);
    // Keep the stars in the upper sky; the gradient fades out below.
    const y = (rand() * 62).toFixed(2);
    const alpha = (0.45 + rand() * 0.5).toFixed(2);
    return `${x}vw ${y}vh 0 0 rgba(236, 240, 255, ${alpha})`;
  }).join(', ');
};

/** Three layers twinkling out of step reads as individual stars flickering. */
const STAR_LAYERS = [
  { shadows: starShadows(7, 34), size: 1, duration: 3.2, delay: 0 },
  { shadows: starShadows(19, 26), size: 1.5, duration: 4.6, delay: -1.3 },
  { shadows: starShadows(42, 12), size: 2, duration: 6.1, delay: -2.8 },
];

/*
 * Parallax by depth: big near clouds drift fast and solid, small far ones slow
 * and faint, about 3.5x apart, so they read as layers rather than one sheet.
 * Each delay is minus half the duration, so on load every cloud sits at its
 * `left` (the drift is centred there) instead of starting off-screen.
 */
const CLOUDS = [
  { top: '4%', left: '6%', width: 280, duration: 70, delay: -35, fade: 1 },
  { top: '42%', left: '2%', width: 210, duration: 120, delay: -60, fade: 0.85 },
  { top: '12%', left: '62%', width: 150, duration: 190, delay: -95, fade: 0.7 },
  { top: '36%', left: '80%', width: 120, duration: 240, delay: -120, fade: 0.6 },
];

const FLOCKS = [
  { top: '18%', duration: 38, delay: -6 },
  { top: '42%', duration: 52, delay: -30 },
];

/* Staggered wingbeats so the flock doesn't flap in lockstep. */
const BIRDS = [
  { x: 0, y: 16, scale: 1.1, beat: 0.9 },
  { x: 30, y: 2, scale: 1, beat: 1.05 },
  { x: 52, y: 22, scale: 0.85, beat: 0.8 },
  { x: 78, y: 8, scale: 0.7, beat: 1.15 },
];

const SHOOTING_STARS = [
  { top: '8%', left: '30%', delay: 2 },
  { top: '20%', left: '62%', delay: 8.5 },
];

const PHASES: Phase[] = ['morning', 'evening', 'night'];

interface SkyProps {
  theme: Theme;
}

const Sky = ({ theme }: SkyProps) => {
  const daypart = useSyncExternalStore(subscribeToClock, getDaypart, getServerDaypart);
  const phase: Phase = theme === 'dark' ? 'night' : daypart;

  // Transitions stay off for the first two frames: hydration swaps in the
  // stored theme and the real clock, and that correction should not animate.
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let second = 0;
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(() => setReady(true));
    });
    return () => {
      cancelAnimationFrame(first);
      cancelAnimationFrame(second);
    };
  }, []);

  return (
    <S.Scene aria-hidden $ready={ready} data-testid="sky" data-phase={phase}>
      {PHASES.map(p => (
        <S.Gradient key={p} $phase={p} $active={p === phase} />
      ))}

      <S.Stars $active={phase === 'night'}>
        {STAR_LAYERS.map(layer => (
          <S.StarLayer
            key={layer.duration}
            $shadows={layer.shadows}
            $size={layer.size}
            $duration={layer.duration}
            $delay={layer.delay}
          />
        ))}
        {SHOOTING_STARS.map(star => (
          <S.ShootingStar key={star.left} $top={star.top} $left={star.left} $delay={star.delay} />
        ))}
      </S.Stars>

      <S.Sun $phase={phase} />
      <S.Moon $active={phase === 'night'} />

      {CLOUDS.map(cloud => (
        <S.Cloud
          key={cloud.left}
          $phase={phase}
          $top={cloud.top}
          $left={cloud.left}
          $width={cloud.width}
          $duration={cloud.duration}
          $delay={cloud.delay}
          $fade={cloud.fade}
        />
      ))}

      <S.Plane $active={phase === 'morning'}>
        <div>
          <div>
            <S.Contrail />
            <S.PlaneIcon viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5Z" transform="rotate(90 12 12)" />
            </S.PlaneIcon>
          </div>
        </div>
      </S.Plane>

      {FLOCKS.map(flock => (
        <S.Flock
          key={flock.top}
          $active={phase === 'evening'}
          $top={flock.top}
          $duration={flock.duration}
          $delay={flock.delay}
        >
          <div>
            {BIRDS.map(bird => (
              <S.Bird
                key={bird.x}
                viewBox="0 0 14 7"
                $x={bird.x}
                $y={bird.y}
                $scale={bird.scale}
                $beat={bird.beat}
              >
                <path
                  d="M1 5.5 Q4 1 7 5 Q10 1 13 5.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </S.Bird>
            ))}
          </div>
        </S.Flock>
      ))}
    </S.Scene>
  );
};

export default Sky;
