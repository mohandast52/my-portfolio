import React from 'react';
import Reveal from '../../Portfolio/reveal';
import { CAPABILITIES } from '../content';
import { DisplayTitle, Eyebrow } from '../styles';
import {
  Wrap, Head, List, Row,
} from './styles';

const Capabilities = () => (
  <Wrap id="capabilities">
    <Head>
      <Reveal>
        <Eyebrow>capabilities</Eyebrow>
      </Reveal>
      <Reveal delay={80}>
        <DisplayTitle>Capabilities</DisplayTitle>
      </Reveal>
    </Head>

    <List>
      {CAPABILITIES.map((cap, i) => (
        <Reveal key={cap.no} delay={i * 100}>
          <Row>
            <span className="no">{cap.no}</span>
            <div className="text">
              <span className="name">{cap.name}</span>
              <span className="detail">{cap.detail}</span>
            </div>
          </Row>
        </Reveal>
      ))}
    </List>
  </Wrap>
);

export default Capabilities;
