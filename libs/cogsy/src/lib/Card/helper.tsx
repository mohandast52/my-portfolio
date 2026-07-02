import React, { useState } from 'react';
import Image from 'next/image';
import { InactiveStarIcon, ActiveStarIcon, KebabIcon } from '../Helpers/icons';
import {
  MenuContainer,
  HeaderContainer,
  FooterContainer,
  Favourite,
  MenuIcon,
} from './styles';

// A video source is a list of <source> entries; an image source is a URL string.
export interface VideoSource {
  link: string;
  type: string;
}

export type CardSource = string | VideoSource[] | null;
export type CardSourceType = 'img' | 'video' | 'svg' | null;

interface HeaderProps {
  source?: CardSource;
  sourceType?: CardSourceType;
}

/* ------------- HeaderContainer ------------- */
export const Header = ({ source = null, sourceType = null }: HeaderProps) => {
  /* if source is empty, header will not be shown  */
  if (!source) return null;

  return (
    <HeaderContainer>
      {sourceType === 'video' && (
        <video controls>
          {(Array.isArray(source) ? source : []).map(({ link, type }) => (
            <source src={link} type={type} key={link} />
          ))}
          Your browser does not support HTML video.
        </video>
      )}

      {sourceType === 'img' && typeof source === 'string' && (
        <Image src={source} alt={source} width={280} height={180} unoptimized />
      )}
    </HeaderContainer>
  );
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

interface FooterProps {
  isFavourite?: boolean | null;
  isMenuRequired?: boolean;
}

/* -------------- Footer ------------- */
export const Footer = ({ isFavourite = null, isMenuRequired = false }: FooterProps) => {
  const [isActive, setFavourite] = useState<boolean | null>(isFavourite);
  const [isMenuActive, setMenuActive] = useState(false);

  /* if (favourite & menu is not required) ? footer will not be shown  */
  if (!(isFavourite !== null || isMenuRequired)) return null;

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
