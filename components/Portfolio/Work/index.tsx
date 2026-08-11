import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { PROJECTS, type Project } from '../data';
import {
  Section, Container, Eyebrow, SectionTitle, SectionHead,
} from '../styles';
import Reveal from '../reveal';
import {
  Group, GroupHead, GroupNote, Grid, Card, CardTop, Name, Tagline, Tags, Tag, Go,
} from './styles';

// featured first within each group
const featuredFirst = (a: Project, b: Project) => Number(Boolean(b.featured)) - Number(Boolean(a.featured));

// Self-built experiments vs. recruiter take-homes — kept as separate groups so
// the assignments are never listed among the projects Mohan built for himself.
const BUILT = PROJECTS.filter(p => p.kind === 'Concept').sort(featuredFirst);
const ASSIGNMENTS = PROJECTS.filter(p => p.kind === 'Take-home').sort(featuredFirst);

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
          <SectionTitle>Everything here is live — click any to open it.</SectionTitle>
        </Reveal>
      </SectionHead>

      <Group>
        <GroupHead>
          <Reveal><Eyebrow>projects</Eyebrow></Reveal>
          <Reveal delay={60}>
            <GroupNote>
              Apps I built to learn a tool or try an idea — each one runs right
              here in the site.
            </GroupNote>
          </Reveal>
        </GroupHead>
        <Grid>
          {BUILT.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </Grid>
      </Group>

      <Group>
        <GroupHead>
          <Reveal><Eyebrow>assignments · take-homes</Eyebrow></Reveal>
          <Reveal delay={60}>
            <GroupNote>
              Timed take-home exercises from hiring processes — kept separate
              from my own projects. The code still holds up, so here they are.
            </GroupNote>
          </Reveal>
        </GroupHead>
        <Grid>
          {ASSIGNMENTS.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </Grid>
      </Group>
    </Container>
  </Section>
);

export default Work;
