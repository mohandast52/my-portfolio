import React from 'react';
import { SKILL_GROUPS } from '../data';
import {
  Section, Container, Eyebrow, SectionTitle, SectionHead,
} from '../styles';
import Reveal from '../reveal';
import {
  Grid, Group, GroupHead, Growing, Items, Item,
} from './styles';

const Stack = () => (
  <Section id="stack">
    <Container>
      <SectionHead>
        <Reveal><Eyebrow>stack</Eyebrow></Reveal>
        <Reveal delay={60}>
          <SectionTitle>The tools I build with.</SectionTitle>
        </Reveal>
      </SectionHead>

      <Grid>
        {SKILL_GROUPS.map((group, i) => (
          <Reveal key={group.label} delay={i * 70}>
            <Group>
              <GroupHead>
                <span className="label">{group.label}</span>
                {group.growing && <Growing>growing</Growing>}
              </GroupHead>
              <Items>
                {group.items.map(item => (
                  <Item key={item}>{item}</Item>
                ))}
              </Items>
            </Group>
          </Reveal>
        ))}
      </Grid>
    </Container>
  </Section>
);

export default Stack;
