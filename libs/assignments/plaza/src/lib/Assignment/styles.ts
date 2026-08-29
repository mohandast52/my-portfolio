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
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${COLOR.BG_COLOR};
  background-image: url("/images/yoga-1.jpg");
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

export const TransparentButton = styled(Button)`
  background-color: transparent !important;
  color: ${COLOR.BLACK};
  border: 1px solid ${COLOR.BLACK};
  font-weight: bold;
  margin-bottom: 1rem;
`;

/* ---------------- video ---------------- */
export const VideoContainer = styled.div`
  width: calc(100% - 540px);
  max-width: 1000px;
  height: 480px;
  margin-right: 4rem;
  background-color: ${COLOR.VIDEO_BG};

  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: ${COLOR.WHITE};

  .video-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    .message {
      font-size: 12px;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }
    .icons {
      svg {
        width: 50px;
        height: 50px;
        padding: 12px;
        border: 2px solid white;
        border-radius: 50%;
        margin: 0.25rem;
      }
    }
  }
`;

/* ---------------- card ---------------- */
export const CardContainer = styled.label`
  min-height: 400px;
  width: 340px;
  margin-right: 4rem;
  border-radius: 4px;
  padding: 1.5rem 2rem 0.5rem 2rem;
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
  .email-input-row {
    position: relative;
    .autocomplete-container {
      position: absolute;
      top: 50px;
      width: 100%;
      height: 120px;
      overflow: auto;
      z-index: 2;
      background-color: white;
      border: 1px solid ${COLOR.GREY_TEXT_1};
      padding: 0.5rem;
      font-size: 14px;
      > div {
        margin-bottom: 0.25rem;
      }
    }
  }
`;

export const ScheduleContainer = styled.div`
  margin: 1rem 0 2rem 0;
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

export const StepOneContainer = styled.div`
  .message {
    padding: 0 1rem 1rem 1rem;
    text-align: center;
    font-weight: 100;
    font-size: 13px;
    border-bottom: 1px solid #757575;
  }

  .info-table {
    padding: 1rem 0;

    .row {
      display: flex;
      font-size: 13px;
      padding-bottom: 0.75rem;

      &.email {
        margin-bottom: 2rem;
      }

      .row-title {
        font-weight: 100;
        padding-right: 0.25rem;
      }

      .row-value {
        font-weight: bold;
      }
    }
  }
`;
