import React from 'react';
import Image from 'next/image';
import { PROFILE } from '../../Portfolio/data';
import Reveal from '../../Portfolio/reveal';
import { HERO } from '../content';
import { HeroHeading } from '../styles';
import { ContactButton } from '../buttons';
import Magnet from '../magnet';
import {
  Wrap, Glow, Stack, Portrait, Heading, Bottom, Subline,
} from './styles';

const Hero = () => (
  <Wrap id="top">
    <Glow />

    <Stack>
      <Reveal delay={600}>
        <Portrait>
          <Magnet padding={150} strength={3}>
            <Image
              src={PROFILE.avatar}
              alt={PROFILE.fullName}
              width={420}
              height={420}
              priority
            />
          </Magnet>
        </Portrait>
      </Reveal>

      <Reveal delay={150}>
        <Heading>
          <HeroHeading>{HERO.heading}</HeroHeading>
        </Heading>
      </Reveal>
    </Stack>

    <Bottom>
      <Reveal delay={350}>
        <Subline>{HERO.subline}</Subline>
      </Reveal>
      <Reveal delay={500}>
        <ContactButton href={`mailto:${PROFILE.email}`}>
          Get in touch
        </ContactButton>
      </Reveal>
    </Bottom>
  </Wrap>
);

export default Hero;
