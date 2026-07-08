import React, { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { PROJECTS, type ProjectKind } from '../data';
import {
  Section, Container, Eyebrow, SectionTitle, SectionHead,
} from '../styles';
import Reveal from '../reveal';
import {
  Filters, FilterButton, Grid, Card, CardTop, Name, Tagline, Tags, Tag, Go,
} from './styles';

type Filter = 'All' | ProjectKind;
const FILTERS: Filter[] = ['All', 'Take-home', 'Concept'];

// featured projects lead the grid
const ORDERED = [...PROJECTS].sort(
  (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
);

const Work = () => {
  const [filter, setFilter] = useState<Filter>('All');

  const visible = filter === 'All'
    ? ORDERED
    : ORDERED.filter(p => p.kind === filter);

  return (
    <Section id="work">
      <Container>
        <SectionHead>
          <Reveal><Eyebrow>selected work</Eyebrow></Reveal>
          <Reveal delay={60}>
            <SectionTitle>Live projects — click any to open it.</SectionTitle>
          </Reveal>
        </SectionHead>

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
