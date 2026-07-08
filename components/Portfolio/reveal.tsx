import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// Scroll-reveal: fade + rise a block into view the first time it intersects.
// SSR-safe (starts hidden, no window access on the server) and disabled for
// users who prefer reduced motion or browsers without IntersectionObserver.
const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const prefersReduced = window.matchMedia
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      // defer to the next frame so it isn't a synchronous setState-in-effect
      const raf = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, shown };
};

const Box = styled.div<{ $shown: boolean; $delay: number }>`
  opacity: ${props => (props.$shown ? 1 : 0)};
  transform: translateY(${props => (props.$shown ? '0' : '22px')});
  transition:
    opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${props => props.$delay}ms,
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${props => props.$delay}ms;
  will-change: opacity, transform;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const Reveal = ({ children, delay = 0, className = undefined }: RevealProps) => {
  const { ref, shown } = useReveal();
  return (
    <Box ref={ref} $shown={shown} $delay={delay} className={className}>
      {children}
    </Box>
  );
};

export default Reveal;
