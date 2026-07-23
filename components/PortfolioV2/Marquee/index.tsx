import React, { useEffect, useRef } from 'react';
import { PROJECTS, type Project } from '../../Portfolio/data';
import {
  Wrap, Rows, Track, Tile,
} from './styles';

// A per-project gradient so the placeholder tiles read as a cohesive set rather
// than broken images. Deterministic (index-based) — no Math.random.
const gradientFor = (i: number) =>
  `linear-gradient(135deg, hsl(${248 + i * 9} 46% 17%), hsl(${266 + i * 11} 58% 11%))`;

const renderTiles = (items: Project[], offset: number) =>
  items.map((project, i) => (
    <Tile
      key={`${project.slug}-${offset + i}`}
      href={project.href}
      style={{ background: gradientFor(offset + i) }}
      tabIndex={-1}
    >
      <div className="chrome">
        <i />
        <i />
        <i />
        <b>{project.href}</b>
      </div>
      <div className="body">
        <span className="name">{project.name}</span>
        <span className="kind">{project.kind}</span>
      </div>
    </Tile>
  ));

// Two rows of mini-app preview tiles that drift in opposite directions as the
// page scrolls. Transforms are written straight to the DOM (no re-render) for a
// smooth scroll; disabled under prefers-reduced-motion.
const Marquee = () => {
  const wrapRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const half = Math.ceil(PROJECTS.length / 2);
  const top = PROJECTS.slice(0, half);
  const bottom = PROJECTS.slice(half);

  useEffect(() => {
    const prefersReduced = window.matchMedia
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    let frame = 0;
    const update = () => {
      frame = 0;
      const wrap = wrapRef.current;
      if (!wrap) return;
      const sectionTop = wrap.offsetTop;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      if (row1Ref.current) {
        row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
      }
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

  return (
    <Wrap ref={wrapRef} aria-hidden>
      <Rows>
        <Track ref={row1Ref}>
          {renderTiles(top, 0)}
          {renderTiles(top, top.length)}
          {renderTiles(top, top.length * 2)}
        </Track>
        <Track ref={row2Ref}>
          {renderTiles(bottom, 0)}
          {renderTiles(bottom, bottom.length)}
          {renderTiles(bottom, bottom.length * 2)}
        </Track>
      </Rows>
    </Wrap>
  );
};

export default Marquee;
