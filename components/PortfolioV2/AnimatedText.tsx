import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { COLOR } from '@my-portfolio/ui-theme';

// Character-by-character scroll reveal: as the paragraph moves through the
// viewport (roughly from `top at 80%` to `bottom at 20%`), each character eases
// from dim (0.2) to full opacity in reading order — a soft left-to-right wipe.
// SSR-safe and fully revealed for reduced-motion users.

const Paragraph = styled.p`
  margin: 0;
  text-align: center;
  font-weight: 500;
  line-height: 1.6;
  max-width: 620px;
  color: ${COLOR.TEXT};
  font-size: clamp(1rem, 2vw, 1.35rem);

  span {
    transition: opacity 0.15s linear;
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
  // How many characters the reveal edge is "wide" — a larger window softens
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

    const onScroll = () => {
      const vh = window.innerHeight;
      const rect = node.getBoundingClientRect();
      // p = 0 when the top is 80% down the viewport, 1 when the bottom is 20% up.
      const p = clamp01((0.8 * vh - rect.top) / (0.6 * vh + rect.height));
      setProgress(p);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const edge = progress * (chars.length + windowSize);

  return (
    <Paragraph ref={ref} className={className} aria-label={text}>
      {chars.map((char, i) => {
        const opacity = 0.2 + 0.8 * clamp01((edge - i) / windowSize);
        return (
          <span key={i} aria-hidden style={{ opacity }}>
            {char}
          </span>
        );
      })}
    </Paragraph>
  );
};

export default AnimatedText;
