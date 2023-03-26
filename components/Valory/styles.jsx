import styled from 'styled-components';

const BORDER_COLOR = '#B2B2EE';
const TEXT_COLOR = '#3E3FD4';
const BG_COLOR = '#EFEEEE';
const RED = '#EF476F';

const BOX_SHADOW = '4px 4px 6px #ccc, -4px -4px 6px #fff';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${TEXT_COLOR};
  background-color: ${BG_COLOR};
`;

export const Header = styled.h2`
  font-size: 14px;
  color: inherit;
  margin: 0;
`;

export const Price = styled.div`
  font-size: 60px;
  font-weight: 800;
  color: ${props => (props.hasError ? RED : TEXT_COLOR)};
  span {
    font-size: 0.75em;
  }
`;

export const InputRow = styled.div`
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
`;

export const Label = styled.label`
  font-size: 16px;
  margin-right: 12px;
  &[for="to"] {
    margin-left: 12px;
  }
`;

export const Input = styled.input`
  border: 2px solid ${BORDER_COLOR};
  border-radius: 6px;
  font-size: 16px;
  padding: 6px 8px;

  &:focus {
    outline: none;
    box-shadow: ${BOX_SHADOW};
  }
`;

export const UpdateButton = styled.button`
  width: 140px;
  background-color: transparent;
  border-radius: 6px;
  color: ${TEXT_COLOR};
  cursor: pointer;
  padding: 0.7em 0;
  border: 2px solid ${BORDER_COLOR};
  background-image: linear-gradient(45deg, ${TEXT_COLOR} 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;
  transition: background-image 300ms ease-in-out,
    background-position 300ms ease-in-out, background-size 300ms ease-in-out,
    color 300ms ease-in-out;

  &:hover {
    background-position: 0;
    color: #fff;
    outline: 0;
  }
  &.active,
  &:active {
    box-shadow: ${BOX_SHADOW};
  }
  &:disabled {
    cursor: not-allowed;
    background-position: 100% !important;
    color: ${TEXT_COLOR} !important;
  }
`;
