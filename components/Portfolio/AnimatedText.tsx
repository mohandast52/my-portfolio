import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// Character-by-character scroll reveal: as the paragraph moves through the
// viewport (roughly from `top at 80%` to `bottom at 20%`), each character eases
// from dim to full opacity in reading order, a soft left-to-right wipe.
// SSR-safe and fully revealed for reduced-motion users.
//
// Deliberately carries no typography of its own: it renders a plain <p> so the
// surrounding context (e.g. About's `Prose p`) owns size, colour and rhythm.

// The dim floor is an accessibility constraint, not a taste call. At the 0.2
// the source design used, TEXT (#ECECF1) over INK (#0A0A0F) blends to roughly
// 2.2:1, well under the 4.5:1 AA floor, so an un-scrolled paragraph would be
// unreadable. 0.55 measures ~5.5:1 (0.5 is break-even at ~4.7:1); keep it >= 0.55.
const DIM = 0.55;

const Para = styled.p`
  span {
    transition: opacity 0.15s linear;
  }

  @media (prefers-reduced-motion: reduce) {
    span {
      transition: none;
    }
  }
`;

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

const AnimatedText = ({ text, className = undefined }: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);
  const chars = Array.from(text);
  // How many characters the reveal edge is "wide"; a larger window softens
  // the leading edge so it isn't a hard cutoff.
  const windowSize = Math.max(8, Math.round(chars.length * 0.12));

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const prefersReduced = window.matchMedia
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      // defer so it isn't a synchronous setState-in-effect (matches reveal.tsx)
      const raf = requestAnimationFrame(() => setProgress(1));
      return () => cancelAnimationFrame(raf);
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const rect = node.getBoundingClientRect();
      // p = 0 when the top is 80% down the viewport, 1 when the bottom is 20% up.
      setProgress(clamp01((0.8 * vh - rect.top) / (0.6 * vh + rect.height)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const edge = progress * (chars.length + windowSize);

  return (
    <Para ref={ref} className={className} aria-label={text}>
      {chars.map((char, i) => {
        const opacity = DIM + (1 - DIM) * clamp01((edge - i) / windowSize);
        return (
          <span key={i} aria-hidden style={{ opacity }}>
            {char}
          </span>
        );
      })}
    </Para>
  );
};

export default AnimatedText;
