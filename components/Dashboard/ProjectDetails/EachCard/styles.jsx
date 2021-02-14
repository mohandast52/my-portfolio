import styled from 'styled-components';
import { COLOR, FONT_WEIGHT } from '../../Helpers';

const iconSize = '20px';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;

  .date {
    color: #7c756e;
  }
`;

export const Dots = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-bottom: 4px;

  i {
    height: 4px;
    width: 4px;
    border-radius: 50%;
    background-color: ${COLOR.BLACK};
  }
`;

export const Body = styled.div`
  padding: 1.5rem 0 0.5rem 0;

  .title {
    font-weight: 900;
    text-align: center;
    font-size: 18px;
  }
  .info {
    text-align: center;
    padding: 0.3rem 0;
  }
`;

export const ProgressBar = styled.div`
  display: flex;
  flex-flow: column nowrap;

  .text {
    font-weight: ${FONT_WEIGHT.bold};
  }

  .line {
    position: relative;
    width: 100%;
    height: 6px;
    margin: 0.75rem 0rem;
    border-radius: 4px;
    background-color: ${COLOR.WHITE};
  }

  .percentage {
    text-align: right;
    font-weight: ${FONT_WEIGHT.bold};
  }
`;

export const Completed = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: inherit;
  border-radius: inherit;
  width: ${props => `${props.percentage}%` || 0};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 -1rem;
  padding: 0.75rem 1rem 0 1rem;
  border-top: 1px solid ${COLOR.WHITE};

  .small-icons {
    display: flex;
    align-items: center;

    div {
      width: ${iconSize};
      height: ${iconSize};
      border-radius: 50%;
      background-size: cover;

      &:nth-child(1) {
        background-image: url("/images/boy_1.jpg");
      }

      &:nth-child(2) {
        position: relative;
        left: -4px;
        background-image: url("/images/girl_2.jpg");
      }
    }

    svg {
      width: ${iconSize};
      height: ${iconSize};
      cursor: pointer;
    }
  }
`;

export const ActionButton = styled.div`
  padding: 0.4rem 1.25rem;
  outline: none;
  border: none;
  border-radius: 1rem;
  font-weight: ${FONT_WEIGHT.bold};
  background-color: ${COLOR.WHITE};
`;

export const Container = styled.div`
  border-radius: 32px;
  margin: 0 1.5rem 2rem 1.5rem;
  width: 16rem;
  padding: 1rem;
  font-size: 14px;
  cursor: pointer;
  background-color: ${props => props.bgColor};
  box-shadow: 5px 5px 20px 0px #bebebe26, -6px -7px 60px #ffffff96;
  transition: 0.1s ease-in;
  transition-property: box-shadow border-color;
  border: 1px solid transparent;

  &:hover {
    border-color: ${props => props.progressColor};
    box-shadow: 20px 20px 37px #e8e8e8, -20px -20px 37px #ffffff;
  }

  ${Completed} {
    background-color: ${props => props.progressColor};
  }
  ${ActionButton}, ${Footer} svg {
    color: ${props => props.progressColor};
  }
`;
