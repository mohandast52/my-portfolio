import React, {
  useEffect, useRef, useState,
} from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { PROJECTS, type Project, type ProjectKind } from '../data';
import {
  Section, Container, Eyebrow, SectionTitle, SectionHead,
} from '../styles';
import Reveal from '../reveal';
import {
  Showcase, Slot, BigCard, MoreHead,
  Filters, FilterButton, Grid, Card, CardTop, Name, Tagline, Tags, Tag, Go,
} from './styles';

type Filter = 'All' | ProjectKind;
const FILTERS: Filter[] = ['All', 'Take-home', 'Concept'];

// featured projects lead the grid
const ORDERED = [...PROJECTS].sort(
  (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
);

// The top three flagged projects get the sticky showcase; everything else
// falls through to the filterable grid, so nothing is listed twice.
const SHOWCASE = ORDERED.filter(p => p.featured).slice(0, 3);
const SHOWCASE_SLUGS = new Set(SHOWCASE.map(p => p.slug));
const REST = ORDERED.filter(p => !SHOWCASE_SLUGS.has(p.slug));

const STICKY_BASE = 96; // px below the top the cards pin at
const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

interface ShowcaseCardProps {
  project: Project;
  index: number;
  total: number;
}

const ShowcaseCard = ({ project, index, total }: ShowcaseCardProps) => {
  const slotRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const stickyTop = STICKY_BASE + index * 22;

  useEffect(() => {
    if (targetScale === 1) return undefined; // the last card never shrinks
    const prefersReduced = window.matchMedia
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    let frame = 0;
    const update = () => {
      frame = 0;
      const slot = slotRef.current;
      if (!slot) return;
      const rect = slot.getBoundingClientRect();
      setScale(1 - (1 - targetScale) * clamp01((stickyTop - rect.top) / rect.height));
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
      <BigCard
        href={project.href}
        style={{ top: stickyTop, transform: `scale(${scale})` }}
      >
        <CardTop>
          <span className="kind">{project.kind}</span>
          <span className="star">featured</span>
        </CardTop>
        <div className="head">
          <span className="no">{String(index + 1).padStart(2, '0')}</span>
          <h3 className="big-name">{project.name}</h3>
        </div>
        <p className="big-tagline">{project.tagline}</p>
        <Tags>
          {project.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <Go>
          open project
          <FaArrowRightLong aria-hidden />
        </Go>
      </BigCard>
    </Slot>
  );
};

const Work = () => {
  const [filter, setFilter] = useState<Filter>('All');

  const visible = filter === 'All'
    ? REST
    : REST.filter(p => p.kind === filter);

  return (
    <Section id="work">
      <Container>
        <SectionHead>
          <Reveal><Eyebrow>selected work</Eyebrow></Reveal>
          <Reveal delay={60}>
            <SectionTitle>Live projects — click any to open it.</SectionTitle>
          </Reveal>
        </SectionHead>

        <Showcase>
          {SHOWCASE.map((project, i) => (
            <ShowcaseCard
              key={project.slug}
              project={project}
              index={i}
              total={SHOWCASE.length}
            />
          ))}
        </Showcase>

        <MoreHead>
          <Reveal><Eyebrow>more projects</Eyebrow></Reveal>
        </MoreHead>

        <Reveal delay={80}>
          <Filters>
            {FILTERS.map(f => (
              <FilterButton
                key={f}
                type="button"
                $active={filter === f}
                onClick={() => setFilter(f)}
              >
                {f}
              </FilterButton>
            ))}
          </Filters>
        </Reveal>

        <Grid>
          {visible.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 70}>
              <Card href={project.href} $featured={project.featured}>
                <CardTop>
                  <span className="kind">{project.kind}</span>
                  {project.featured && <span className="star">featured</span>}
                </CardTop>
                <Name>{project.name}</Name>
                <Tagline>{project.tagline}</Tagline>
                <Tags>
                  {project.tags.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </Tags>
                <Go>
                  open
                  <FaArrowRightLong aria-hidden />
                </Go>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Work;
