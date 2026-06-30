import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import {
  Container,
  Header,
  Dots,
  Body,
  ProgressBar,
  Completed,
  Footer,
  ActionButton,
} from './styles';

interface EachCardProps {
  date: string;
  title: string;
  info: string;
  percentage?: number;
  timeLeft: string;
  bgColor?: string;
  progressColor?: string;
}

const EachCard = ({
  date,
  title,
  info,
  percentage = 0,
  timeLeft,
  bgColor = undefined,
  progressColor = undefined,
}: EachCardProps) => (
  <Container bgColor={bgColor} progressColor={progressColor}>
    <Header>
      <span>{date}</span>
      <Dots>
        <i />
        <i />
      </Dots>
    </Header>

    <Body>
      <div className="content">
        <div className="title">{title}</div>

        <div className="info">{info}</div>

        <ProgressBar>
          <div className="text">Progress</div>
          <div className="line">
            <Completed percentage={percentage} />
          </div>
          <div className="percentage">
            {percentage}
            %
          </div>
        </ProgressBar>
      </div>
    </Body>

    <Footer>
      <div className="small-icons">
        <div />
        <div />
        <FaPlusCircle />
      </div>

      <ActionButton type="button">{timeLeft}</ActionButton>
    </Footer>
  </Container>
);

export default EachCard;
