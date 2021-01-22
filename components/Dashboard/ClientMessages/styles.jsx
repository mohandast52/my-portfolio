import styled from 'styled-components';
import { COLOR } from '../Helpers';

export const MessagesContainer = styled.div`
  width: 34vw;

  h2 {
    margin: 0;
    padding: 2rem 1rem 1rem 1rem;
    border-bottom: 1px solid ${COLOR.LIGHT_GREY};
  }
`;

export const Messages = styled.div``;

export const EachMessage = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid ${COLOR.LIGHT_GREY};
  transition: all 0.25s ease-in-out;
  transition: transform 0.1s ease-in;

  &:hover {
    width: 110%;
    cursor: pointer;
    border-radius: 1rem;
    transform: translate(16px, -8px);
    background-color: ${COLOR.WHITE};
    border-bottom: 1px solid ${COLOR.WHITE};
    box-shadow: 22px 22px 28px #cecece54;
  }
`;

export const Avatar = styled.div`
  flex: 0 0 auto;
  padding: 1rem;
  width: 50px;
  height: 50px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  padding-right: 1rem;

  .header {
    h4 {
      margin: 0;
      font-size: 20px;
    }
  }

  .info {
    padding-top: 0.5rem;
    font-size: 14px;
  }

  .date {
    text-align: right;
    font-size: 12px;
  }
`;
