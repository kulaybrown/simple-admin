import styled from 'styled-components';
import pattern1 from '../../images/pattern2.png';

export const WrapperLogin = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Lato', sans-serif;
  @media (max-width: 767px) {
    align-items: flex-start;
  }
  form {
    -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.3);
    background: #fff;
    padding: 50px;
    max-width: 450px;
    width: 100%;
    z-index: 1;
    margin: 10px;
    @media (max-width: 767px) {
      padding: 50px 20px;
    }
    .login-form-button {
      width: 100%;
    }
    .login-form-forgot {
      float: right;
    }
  }
  .logo {
    width: 70px;
  }
  .form-logo {
    text-align: center;
    margin-bottom: 50px;
    img {
      margin-bottom: 20px;
    }
  }
  h1 {
    font-size: 18px;
    font-weight: 400;
  }
  .bgone {
    &:before {
      content: '';
      width: 100%;
      background: #1890ff;
      height: 57%;
      left: 0px;
      position: absolute;
      top: 0;
      z-index: 0;
    }
    &:after {
      content: '';
      position: absolute;
      background: url(${pattern1});
      display: block;
      width: 100%;
      height: 60%;
      top: 204px;
      background-repeat-x: repeat;
      background-repeat-y: no-repeat;
      left: 0;
      opacity: 0.6;
    }
  }
  .bgtwo {
    &:before {
      content: '';
      width: 100%;
      background: #fff;
      height: 30%;
      left: 0px;
      position: absolute;
      top: 44%;
      transform: skewY(-8deg);
      z-index: 0;
    }
  }
  .not-valid-login {
    display: none;
  }
`;
