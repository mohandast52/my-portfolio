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

/**
 * Card Component can handle all the possible cases mentioned in assignment
 */

const Card = ({
  source = null /* if null ? don't show thumbnail */,
  sourceType = null,
  heading,
  subheading,
  description = null,
  isFavourite = null /* if null ? don't show icon */,
  isMenuRequired = false /* if false ? don't show menu */,
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

export default Card;
