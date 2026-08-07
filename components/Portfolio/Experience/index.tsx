import React from 'react';
import { EXPERIENCE } from '../data';
import {
  Section, Container, Eyebrow, SectionTitle, SectionHead,
} from '../styles';
import Reveal from '../reveal';
import {
  Timeline, Entry, EntryHead, Role, Org, Period, Now, Detail, Points, Tech, Chip,
} from './styles';

const Experience = () => (
  <Section id="experience">
    <Container>
      <SectionHead>
        <Reveal><Eyebrow>experience</Eyebrow></Reveal>
        <Reveal delay={60}>
          <SectionTitle>7+ years shipping production apps.</SectionTitle>
        </Reveal>
      </SectionHead>

      <Timeline>
        {EXPERIENCE.map((job, i) => (
          <Reveal key={job.period} delay={i * 90}>
            <Entry $live={job.live}>
              <EntryHead>
                <div>
                  <Role>
                    {job.role}
                    {job.live && <Now>now</Now>}
                  </Role>
                  <Org>{job.org}</Org>
                </div>
                <Period>{job.period}</Period>
              </EntryHead>

              <Detail>{job.detail}</Detail>

              {job.highlights && (
                <Points>
                  {job.highlights.map(point => (
                    <li key={point.slice(0, 32)}>{point}</li>
                  ))}
                </Points>
              )}

              {job.tech && (
                <Tech>
                  {job.tech.map(tech => (
                    <Chip key={tech}>{tech}</Chip>
                  ))}
                </Tech>
              )}
            </Entry>
          </Reveal>
        ))}
      </Timeline>
    </Container>
  </Section>
);

export default Experience;
