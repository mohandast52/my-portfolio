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

  .sorting-type {
    display: flex;
    align-items: center;
    font-size: 20px;

    .list {
      margin-right: 0.5rem;
    }
  }
`;

export const ProfileDetailsContainer = styled.div`
  width: 50vw;
  height: calc(100vh - 168px);
  padding: 2rem 2rem 0rem 2rem;
  overflow: auto;
  border-radius: 40px;
  background-color: ${COLOR.WHITE};
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  width: calc(100% + 4rem);
  margin-left: -2rem;
  overflow: hidden;
`;
