import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { PROJECTS, type Project } from '../data';
import {
  Section, Container, Eyebrow, SectionTitle, SectionNote, SectionHead,
} from '../styles';
import Reveal from '../reveal';
import {
  Grid, Card, CardTop, Name, Tagline, Tags, Tag, Go,
} from './styles';

// featured first
const featuredFirst = (a: Project, b: Project) => Number(Boolean(b.featured)) - Number(Boolean(a.featured));

// Only self-built projects appear on the homepage. Recruiter take-homes are
// deliberately kept off it; their pages still live at their own routes.
const BUILT = PROJECTS.filter(p => p.kind === 'Concept').sort(featuredFirst);

const ProjectCard = ({ project }: { project: Project }) => (
  <Card href={project.href} $featured={project.featured}>
    <CardTop>
      <span className="route">{project.href}</span>
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
);

const Work = () => (
  <Section id="work">
    <Container>
      <SectionHead>
        <Reveal><Eyebrow>selected work</Eyebrow></Reveal>
        <Reveal delay={60}>
          <SectionTitle>Things I&apos;ve built, live and clickable.</SectionTitle>
        </Reveal>
        <Reveal delay={90}>
          <SectionNote>
            Apps I built to learn a tool or try an idea. Each one runs right
            here in the site.
          </SectionNote>
        </Reveal>
      </SectionHead>

      <Grid>
        {BUILT.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 70}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </Grid>
    </Container>
  </Section>
);

export default Work;
