/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InactiveStarIcon, ActiveStarIcon, KebabIcon } from '../Helpers/icons';
import {
  MenuContainer,
  HeaderContainer,
  FooterContainer,
  Favourite,
  MenuIcon,
} from './styles';

/* ------------- HeaderContainer ------------- */
export const Header = ({ source, sourceType }) => {
  /* if source is empty, header will not be shown  */
  if (!source) return null;

  return (
    <HeaderContainer>
      {sourceType === 'video' && (
        <video controls>
          {(source || []).map(({ link, type }) => (
            <source src={link} type={type} key={link} />
          ))}
          Your browser does not support HTML video.
        </video>
      )}

      {sourceType === 'img' && <img src={source} alt={source} />}
    </HeaderContainer>
  );
};

Header.propTypes = {
  source: PropTypes.oneOfType([PropTypes.string, PropTypes.shape([])]),
  sourceType: PropTypes.oneOf(['img', 'video', 'svg']),
};

Header.defaultProps = {
  source: null,
  sourceType: null,
};

/* ------------- Menu ------------- */
const LIST = ['Save', 'Edit', 'Preview'];

export const Menu = () => (
  <MenuContainer>
    {LIST.map(eachValue => (
      <li key={eachValue} value={eachValue}>
        {eachValue}
      </li>
    ))}
  </MenuContainer>
);

/* -------------- Footer ------------- */
export const Footer = ({ isFavourite, isMenuRequired }) => {
  /* if (favourite & menu is not required) ? footer will not be shown  */
  if (!(isFavourite !== null || isMenuRequired)) return null;

  const [isActive, setFavourite] = useState(isFavourite);
  const [isMenuActive, setMenuActive] = useState(false);

  return (
    <FooterContainer>
      {isFavourite !== null && (
        <Favourite onClick={() => setFavourite(!isActive)}>
          {isActive ? <InactiveStarIcon /> : <ActiveStarIcon />}
        </Favourite>
      )}

      {isMenuRequired && (
        <MenuIcon
          role="button"
          className={isMenuActive ? 'active' : ''}
          onClick={() => setMenuActive(!isMenuActive)}
        >
          <KebabIcon />
          {isMenuActive && <Menu />}
        </MenuIcon>
      )}
    </FooterContainer>
  );
};

Footer.propTypes = {
  isFavourite: PropTypes.bool,
  isMenuRequired: PropTypes.bool,
};

Footer.defaultProps = {
  isFavourite: null,
  isMenuRequired: false,
};
