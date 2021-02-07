import styled from 'styled-components';
// import { COLORS, BOX_SHADOW } from './Helpers/theme';
const SIZES = {
  card: '280px',
  icon: '1rem',
};

export const CardContainer = styled.div`
  width: ${SIZES.card};
  margin: 0 auto;
  border-radius: 5px;
  border: 1px solid #d2d7df;
`;

/* ------------- Header ------------- */

/* ------------- Body ------------- */
export const Body = styled.div`
  padding: 2rem 1rem;
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
export const Footer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem 1rem 1rem;
`;

export const Favourite = styled.div`
  width: ${SIZES.icon};
  height: ${SIZES.icon};
  cursor: pointer;
  margin-right: auto;

  svg {
    width: 100%;
    height: 100%;
  }
`;

/* ------------- Footer (Menu) ------------- */
export const MenuIcon = styled.div`
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
`;
