import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  padding: 40px 75px;
  border-radius: 4px;
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
  
  .ant-col.ant-form-item-label {
    padding-bottom: 2px;
  }
  .login-form {
    width: 320px;
    margin-top: 20px;
  }
  .login-form-forgot {
    float: right;
  }
  .ant-col-rtl .login-form-forgot {
    float: left;
  }
  .login-form-button {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 { 
    font-size: 30px;
    line-height: 1.2;
  }
`;
