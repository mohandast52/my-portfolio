import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { PROFILE, SOCIALS } from '../data';
import { SOCIAL_ICON } from '../icons';
import {
  Section, Container, Eyebrow,
} from '../styles';
import Reveal from '../reveal';
import {
  Big, Sub, EmailButton, Socials, SocialLink, Foot,
} from './styles';

const Contact = () => (
  <Section id="contact">
    <Container>
      <Reveal><Eyebrow>contact</Eyebrow></Reveal>

      <Reveal delay={60}>
        <Big>
          Let’s build
          {' '}
          <em>something.</em>
        </Big>
      </Reveal>

      <Reveal delay={120}>
        <Sub>
          A role, a project, or just to talk shop — the fastest way to reach me
          is email. I read everything.
        </Sub>
      </Reveal>

      <Reveal delay={160}>
        <EmailButton href={`mailto:${PROFILE.email}`}>
          {PROFILE.email}
          <FaArrowRightLong aria-hidden />
        </EmailButton>
      </Reveal>

      <Reveal delay={200}>
        <Socials>
          {SOCIALS.map(social => {
            const Icon = SOCIAL_ICON[social.icon];
            return (
              <SocialLink
                key={social.label}
                href={social.href}
                target={social.icon === 'email' ? undefined : '_blank'}
                rel="noreferrer"
                aria-label={social.label}
              >
                <Icon aria-hidden />
                <span>{social.label}</span>
              </SocialLink>
            );
          })}
        </Socials>
      </Reveal>

      <Foot>
        <span>{PROFILE.location}</span>
        <span>
          ©
          {' '}
          {PROFILE.fullName}
        </span>
      </Foot>
    </Container>
  </Section>
);

export default Contact;
