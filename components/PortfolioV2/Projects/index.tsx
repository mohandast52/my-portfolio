import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { PROJECTS, type Project } from '../../Portfolio/data';
import Reveal from '../../Portfolio/reveal';
import { DisplayTitle, Eyebrow } from '../styles';
import { LiveProjectButton } from '../buttons';
import {
  Wrap, Head, Stack, Slot, Card, Top, Grid, Foot,
} from './styles';

// The top three flagged projects lead as sticky-stacking cards.
const FEATURED = PROJECTS.filter(p => p.featured).slice(0, 3);
const STICKY_BASE = 96; // px below the top the cards pin at
const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

const shotGradient = (seed: number) =>
  `linear-gradient(150deg, hsl(${250 + seed * 14} 44% 19%), hsl(${270 + seed * 12} 56% 10%))`;

interface CardProps {
  project: Project;
  index: number;
  total: number;
}

// Sticky card that eases down in scale as it scrolls under the next one.
const ProjectCard = ({ project, index, total }: CardProps) => {
  const slotRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const stickyTop = STICKY_BASE + index * 28;
  const no = String(index + 1).padStart(2, '0');

  useEffect(() => {
    if (targetScale === 1) return undefined; // last card never shrinks
    const prefersReduced = window.matchMedia
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    let frame = 0;
    const update = () => {
      frame = 0;
      const slot = slotRef.current;
      if (!slot) return;
      const rect = slot.getBoundingClientRect();
      const p = clamp01((stickyTop - rect.top) / rect.height);
      setScale(1 - (1 - targetScale) * p);
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
  }, [stickyTop, targetScale]);

  return (
    <Slot ref={slotRef}>
      <Card style={{ top: stickyTop, transform: `scale(${scale})` }}>
        <Top>
          <span className="no">{no}</span>
          <div className="meta">
            <span className="kind">{project.kind}</span>
            <span className="name">{project.name}</span>
            <p className="tagline">{project.tagline}</p>
          </div>
          <LiveProjectButton href={project.href}>Live project</LiveProjectButton>
        </Top>
        <Grid>
          <div className="col-left">
            <div className="shot short" style={{ background: shotGradient(index * 3) }} />
            <div className="shot tall" style={{ background: shotGradient(index * 3 + 1) }} />
          </div>
          <div className="shot full" style={{ background: shotGradient(index * 3 + 2) }} />
        </Grid>
      </Card>
    </Slot>
  );
};

const Projects = () => (
  <Wrap id="projects">
    <Head>
      <Reveal>
        <Eyebrow>selected work</Eyebrow>
      </Reveal>
      <Reveal delay={80}>
        <DisplayTitle>Projects</DisplayTitle>
      </Reveal>
    </Head>

    <Stack>
      {FEATURED.map((project, i) => (
        <ProjectCard
          key={project.slug}
          project={project}
          index={i}
          total={FEATURED.length}
        />
      ))}
    </Stack>

    <Foot>
      <Link href="/#work">View all 12 projects →</Link>
    </Foot>
  </Wrap>
);

export default Projects;
