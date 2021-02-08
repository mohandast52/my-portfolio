import React from 'react';
import PropTypes from 'prop-types';
import { Header, Footer } from './helper';
import {
  CardContainer,
  Body,
  SubHeading,
  Description,
  Heading,
} from './styles';

const Card = ({
  source,
  sourceType,
  heading,
  subheading,
  description,
  isFavourite,
  isMenuRequired,
}) => (
  <CardContainer>
    <Header source={source} sourceType={sourceType} />

    <Body>
      <Heading className="f-l">{heading}</Heading>
      <SubHeading className="f-s">{subheading}</SubHeading>
      {description && <Description className="f-s">{description}</Description>}
    </Body>

    <Footer isFavourite={isFavourite} isMenuRequired={isMenuRequired} />
  </CardContainer>
);

Card.propTypes = {
  source: PropTypes.oneOfType([PropTypes.string, PropTypes.shape([])]),
  sourceType: PropTypes.oneOf(['img', 'video', 'svg']),
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  description: PropTypes.string,
  isFavourite: PropTypes.bool,
  isMenuRequired: PropTypes.bool,
};

Card.defaultProps = {
  source: null /* if null ? don't show thumbnail */,
  sourceType: null,
  description: null,
  isFavourite: null /* if null ? don't show icon */,
  isMenuRequired: false,
};

export default Card;
