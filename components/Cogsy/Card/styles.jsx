import styled from 'styled-components';
import { COLORS, COMMON } from '../Helpers/theme';

const SIZES = {
  card: '280px',
};

export const CardContainer = styled.div`
  width: ${SIZES.card};
  margin: 0 auto;
  border-radius: 5px;
  border: ${COMMON.border};
`;

/* ------------- Head ------------- */
export const HeaderContainer = styled.div`
  height: 180px;

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

/* ------------- Body ------------- */
export const Body = styled.div`
  padding: 1.5rem 1rem;
`;

export const Heading = styled.h3`
  margin: 0;
  font-weight: normal;
`;

export const SubHeading = styled.div`
  margin-top: 1rem;
`;

export const Description = styled.div`
  margin-top: 1rem;
`;

/* ------------- Footer ------------- */
export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem 1rem 1rem;
`;

export const Favourite = styled.div`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  margin-right: auto;

  svg {
    width: 100%;
    height: 100%;
  }
`;

/* ------------- Footer (Menu) ------------- */
export const MenuIcon = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  padding: 8px;
  cursor: pointer;
  border-radius: 2px;
  border: 1px solid #d2d7df;
  margin-left: auto;

  svg {
    width: 100%;
    height: 100%;
  }

  &.active {
    background-color: ${COLORS.BLUE_1};
    border: 1px solid ${COLORS.BLUE_2};

    svg {
      fill: ${COLORS.WHITE};
    }
  }
`;

export const MenuContainer = styled.ul`
  position: absolute;
  bottom: -88px;
  right: 0;
  width: 120px;
  margin: 0;
  padding: 0;
  background-color: ${COLORS.WHITE};
  border-radius: 2px;
  border: ${COMMON.border};

  li {
    font-size: 12px;
    list-style: none;
    padding: 6px 12px;

    &:hover,
    &:active {
      margin: 0 -1px;
      cursor: pointer;
      color: ${COLORS.WHITE};
      background-color: ${COLORS.BLUE_1};
    }
  }
`;
