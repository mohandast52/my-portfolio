import React from 'react';
import { PROFILE } from '../../Portfolio/data';
import Reveal from '../../Portfolio/reveal';
import { ABOUT_TEXT } from '../content';
import { DisplayTitle, Eyebrow } from '../styles';
import { ContactButton } from '../buttons';
import AnimatedText from '../AnimatedText';
import { Wrap, Head, Foot } from './styles';

const About = () => (
  <Wrap id="about">
    <Head>
      <Reveal>
        <Eyebrow>about</Eyebrow>
      </Reveal>
      <Reveal delay={80}>
        <DisplayTitle>About me</DisplayTitle>
      </Reveal>
    </Head>

    <AnimatedText text={ABOUT_TEXT} />

    <Foot>
      <Reveal delay={120}>
        <ContactButton href={`mailto:${PROFILE.email}`}>
          Get in touch
        </ContactButton>
      </Reveal>
    </Foot>
  </Wrap>
);

export default About;
