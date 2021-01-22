import styled from 'styled-components';
import { COLOR } from '../Helpers';

/* -------------- Header 1 ----------------- */
export const HeaderOneContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    margin: 0;
  }
  .date {
    font-weight: bold;
  }
`;

/* -------------- Header 2 ----------------- */
export const HeaderTwoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0rem;

  .details-count {
    display: flex;

    .detail {
      position: relative;
      display: flex;
      flex-direction: column;
      padding-right: 1.5rem;
      margin-right: 1.5rem;

      span {
        &:nth-child(1) {
          font-size: 20px;
          font-weight: bold;
        }
        &:nth-child(2) {
          font-size: 14px;
        }
      }

      :not(:last-child):after {
        content: "";
        position: absolute;
        top: 75%;
        right: 0;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        /* transform: translate(0%, -50%); */
        border: 1px solid ${COLOR.BLACK};
      }
    }
  }
`;

export const Container = styled.div`
  width: 50vw;
  margin-top: 2rem;
  margin-left: 2rem;
  padding: 2rem 2rem 0rem 2rem;
  border-radius: 40px;
  background-color: #fcfcfc;
`;

export const Body = styled.div`
  /* border: 2px solid ${COLOR.BLACK}; */
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  width: calc(100% + 4rem);
  height: 70vh;
  margin-left: -2rem;
  overflow: auto;
`;
