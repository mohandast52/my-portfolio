import styled from 'styled-components';

const COLOR = {
  RED: '#c22f3a',
  BG_COLOR: '#f8f8f8',
  BLACK: '#1f1f1f',
  VIDEO_BG: '#2e2e2e',
  GREY_TEXT_1: '#989595',
  WHITE: '#fff',
};

export const Container = styled.div`
  * {
    box-sizing: border-box;
  }

  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${COLOR.BG_COLOR};
  background-image: url("/images/yoga.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  font-family: sans-serif !important;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

/* ---------------- common ---------------- */

export const Label = styled.label`
  display: block;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 4px;

  .info {
    font-size: 85%;
    margin-left: 4px;
    color: ${COLOR.GREY_TEXT_1} !important;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  border-radius: 2px;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 6px 8px;
  border: 1px solid #8080801c;
  outline: none;
`;

export const RedButton = styled(Button)`
  background-color: ${COLOR.RED};
  color: ${COLOR.WHITE};
  font-weight: bold;
`;

/* ---------------- card ---------------- */
export const CardContainer = styled.label`
  min-height: 400px;
  width: 360px;
  margin-right: 4rem;
  border-radius: 4px;
  padding: 2rem 2rem 0.5rem 2rem;
  background-color: ${COLOR.BG_COLOR};
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;

  svg {
    padding: 6px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: ${COLOR.WHITE};
    background: ${COLOR.RED};
  }

  h2 {
    margin: 0;
    padding-left: 0.5rem;
    font-size: 30px;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.5rem;
  
  span {
    color: ${COLOR.GREY_TEXT_1};
    &:nth-child(1) {
      font-size: 10px;
    }
    &:nth-child(2) {
      margin-left: 0.25rem;
      font-size: 14px;
      font-weight: bold;
    }
  }
`;

export const WelcomeMessage = styled.div`
  font-size: 12px;
  font-weight: 100;
  text-align: center;
`;

export const Form = styled.div`
  margin: 2rem 0;
`;

export const ScheduleContainer = styled.div`
  margin: 2rem 0;
  font-size: 12px;

  .question {
    color: ${COLOR.GREY_TEXT_1};
    margin-bottom: 4px;
  }

  a {
    color: ${COLOR.RED};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
