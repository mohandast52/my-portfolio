import React from 'react';
import { EDUCATION, ACHIEVEMENTS } from '../data';
import {
  Section, Container, Eyebrow, SectionTitle, SectionHead,
} from '../styles';
import Reveal from '../reveal';
import {
  Grid, Prose, Aside, InfoCard,
} from './styles';

// Editorial copy for the about section — résumé-accurate, full-stack framing.
const PARAGRAPHS = [
  'For 7+ years I have built production interfaces in React and TypeScript — '
  + 'design systems, dashboards, and Web3 dApp frontends — and, as a frontend '
  + 'lead, reviewed thousands of the team’s pull requests and set the standards '
  + 'the rest of the code follows.',
  'I care about the craft: accessible, performant, pixel-perfect UI, and code '
  + 'clean enough that the next person thanks you. Lately I am deliberately '
  + 'going full-stack — Node, APIs, and databases — so I can take an idea from '
  + 'schema to screen.',
  'This site doubles as a sandbox: every project below is a real page running '
  + 'in this same app.',
];

const About = () => (
  <Section id="about">
    <Container>
      <SectionHead>
        <Reveal><Eyebrow>about</Eyebrow></Reveal>
        <Reveal delay={60}>
          <SectionTitle>Frontend by trade, full-stack by direction.</SectionTitle>
        </Reveal>
      </SectionHead>

      <Grid>
        <Prose>
          {PARAGRAPHS.map((para, i) => (
            <Reveal key={para.slice(0, 24)} delay={i * 80}>
              <p>{para}</p>
            </Reveal>
          ))}
        </Prose>

        <Aside>
          <Reveal delay={120}>
            <InfoCard>
              <h4>Education</h4>
              <p className="strong">{EDUCATION.degree}</p>
              <p>{EDUCATION.school}</p>
              <p className="muted">
                {EDUCATION.period}
                {EDUCATION.detail ? ` · ${EDUCATION.detail}` : ''}
              </p>
            </InfoCard>
          </Reveal>

          <Reveal delay={180}>
            <InfoCard>
              <h4>Achievements</h4>
              <ul>
                {ACHIEVEMENTS.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </InfoCard>
          </Reveal>
        </Aside>
      </Grid>
    </Container>
  </Section>
);

export default About;
