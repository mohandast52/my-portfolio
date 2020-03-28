import styled from 'styled-components';
import { COLOR } from 'util/theme';

export const Container = styled.div`
  padding: 10rem 5rem;
  color: ${COLOR.LIGHT_GREY};  
  background-color: ${COLOR.ORANGE};  
`;

export const Parent = styled.h1`
`;

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div`
  flex-basis: 33.333333%;
`;
