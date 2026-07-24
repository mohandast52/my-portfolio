import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// Mouse-following magnetic hover effect. When the cursor comes within `padding`
// px of the element, the element eases toward it (offset = distance / strength);
// on leaving it eases back to rest. SSR-safe (no window access on the server)
// and disabled for reduced-motion / touch (hover: none) users.

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
}

const Mover = styled.div<{ $active: boolean }>`
  display: inline-block;
  will-change: transform;
  transition: ${props => (props.$active
    ? 'transform 0.3s ease-out'
    : 'transform 0.6s ease-in-out')};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    transform: none !important;
  }
`;

const Magnet = ({
  children, padding = 150, strength = 3, className = undefined,
}: MagnetProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const prefersReduced = window.matchMedia
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canHover = window.matchMedia
      && window.matchMedia('(hover: hover)').matches;
    if (prefersReduced || !canHover) return undefined;

    const onMove = (event: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;
      const within = Math.abs(dx) < rect.width / 2 + padding
        && Math.abs(dy) < rect.height / 2 + padding;

      if (within) {
        setActive(true);
        setOffset({ x: dx / strength, y: dy / strength });
      } else {
        setActive(false);
        setOffset({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [padding, strength]);

  return (
    <Mover
      ref={ref}
      className={className}
      $active={active}
      style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
    >
      {children}
    </Mover>
  );
};

export default Magnet;
