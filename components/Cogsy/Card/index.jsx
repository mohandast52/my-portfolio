import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InactiveStarIcon, ActiveStarIcon, KebabIcon } from '../Helpers/icons';
import {
  CardContainer,
  Body,
  Heading,
  SubHeading,
  Description,
  Footer,
  Favourite,
  MenuIcon,
} from './styles';

const Card = ({
  source,
  sourceType,
  heading,
  subheading,
  description,
  isFavourite,
  isMenuRequired,
}) => {
  const [isActive, setFavourite] = useState(isFavourite);

  return (
    <CardContainer>
      <div className="content">
        <div className="heading">
          {source && (
            <div>
              {source}
              {sourceType}
            </div>
          )}

          <Body>
            <Heading className="f-l">{heading}</Heading>
            <SubHeading className="f-s">{subheading}</SubHeading>
            {description && (
              <Description className="f-s">{description}</Description>
            )}
          </Body>

          {(isFavourite !== null || isMenuRequired) && (
            <Footer>
              {isFavourite !== null && (
                <Favourite onClick={() => setFavourite(!isActive)}>
                  {isActive ? <InactiveStarIcon /> : <ActiveStarIcon />}
                </Favourite>
              )}
              {isMenuRequired && (
                <MenuIcon>
                  <KebabIcon />
                </MenuIcon>
              )}
            </Footer>
          )}
        </div>
      </div>
    </CardContainer>
  );
};

Card.propTypes = {
  source: PropTypes.string,
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
