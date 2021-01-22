import React from 'react';
import PropTypes from 'prop-types';
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

const EachCard = ({
  date,
  title,
  info,
  percentage,
  timeLeft,
  bgColor,
  progressColor,
}) => (
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
        {/* <i className="fas fa-plus-circle" /> */}
      </div>

      <ActionButton type="button">{timeLeft}</ActionButton>
    </Footer>
  </Container>
);

EachCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  percentage: PropTypes.number,
  timeLeft: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  progressColor: PropTypes.string.isRequired,
};

EachCard.defaultProps = {
  percentage: 0,
};

export default EachCard;
