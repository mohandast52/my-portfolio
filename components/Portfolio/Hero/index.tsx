import React from 'react';
import Image from 'next/image';
import { FaArrowDown, FaArrowRightLong } from 'react-icons/fa6';
import { PROFILE, STATS, SOCIALS } from '../data';
import { SOCIAL_ICON } from '../icons';
import { Eyebrow } from '../styles';
import {
  Wrap,
  Grid,
  Intro,
  Headline,
  Blurb,
  Stats,
  Actions,
  Primary,
  Ghost,
  SocialRow,
  Aside,
  Avatar,
  Card,
} from './styles';

const Hero = () => (
  <Wrap id="top">
    <Grid>
      <Intro>
        <Eyebrow>frontend engineer · mumbai, india</Eyebrow>

        <Headline>
          <span className="line">
            <span>{PROFILE.thesisLead}</span>
          </span>
          <span className="line">
            <span>
              <em>{PROFILE.thesisAccent}</em>
              {' '}
              {PROFILE.thesisTrail}
            </span>
          </span>
        </Headline>

        <Blurb>{PROFILE.blurb}</Blurb>

        <Stats>
          {STATS.map(stat => (
            <div key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </Stats>

        <Actions>
          <Primary href="#work">
            View the work
            <FaArrowDown aria-hidden />
          </Primary>
          <Ghost href="#about">
            About me
            <FaArrowRightLong aria-hidden />
          </Ghost>
        </Actions>

        <SocialRow>
          {SOCIALS.map(social => {
            const Icon = SOCIAL_ICON[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                title={social.label}
              >
                <Icon aria-hidden />
              </a>
            );
          })}
        </SocialRow>
      </Intro>

      <Aside>
        <Avatar>
          <Image src={PROFILE.avatar} alt={PROFILE.fullName} width={118} height={118} />
        </Avatar>

        <Card>
          <div className="chrome">
            <i />
            <i />
            <i />
            <b>mohandas.ts</b>
          </div>
          <pre className="body">
            <span className="k">const </span>
            <span className="t">mohan</span>
            <span className="p">{' = {'}</span>
            {'\n'}
            <span className="k">{'  role:    '}</span>
            <span className="s">{"'Frontend Engineer'"}</span>
            <span className="p">,</span>
            {'\n'}
            <span className="k">{'  based:   '}</span>
            <span className="s">{"'Mumbai, India'"}</span>
            <span className="p">,</span>
            {'\n'}
            <span className="k">{'  stack:   '}</span>
            <span className="s">{"'React · TS · Web3'"}</span>
            <span className="p">,</span>
            {'\n'}
            <span className="k">{'  craft:   '}</span>
            <span className="s">{"'pixel-perfect UI'"}</span>
            <span className="p">,</span>
            {'\n'}
            <span className="k">{'  status:  '}</span>
            <span className="s">{"'going full-stack'"}</span>
            <span className="live" aria-hidden />
            {'\n'}
            <span className="p">{'}'}</span>
          </pre>
        </Card>
      </Aside>
    </Grid>
  </Wrap>
);

export default Hero;
