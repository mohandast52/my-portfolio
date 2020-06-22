import styled, { keyframes } from 'styled-components';
import { COLOR } from 'util/theme';

export const Container = styled.div`
  padding: 10rem 5rem;
  color: ${COLOR.LIGHT_GREY};
  background-color: ${COLOR.ORANGE};
`;

export const Parent = styled.h1``;

export const Col = styled.div`
  flex-basis: 33.333333%;
`;

export const Row = styled.div`
  display: flex;
  ${Col} {
    color: green;
  }
`;

export const Input = styled.input.attrs(props => ({
  type: 'password',
  size: props.size || '1em',
  mohanColor: 'violet',
  placeholder: 'tera mera',
}))`
  color: ${props => props.mohanColor};
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${props => props.size};
  padding: ${props => props.size};
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
// Here we create a component that will rotate everything we pass in over two seconds
export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
