import styled from 'styled-components';
import bg1 from '../../images/bg1.png';
import bg2 from '../../images/bg2.png';

export const HomeWrapper = styled.section`
  background: url(${bg1});
  background-repeat: no-repeat;
  background-position: top right;
  background-size: contain;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    align-items: flex-start;
    background: initial;
  }
  h1,
  h2 {
    margin: 0px;
    margin-bottom: 20px;
  }
  h2 {
    font-family: 'Lato', sans-serif;
    font-size: 25px;
    font-weight: 900;
    color: #1890ff;
  }
  h1 {
    font-family: 'Lato', sans-serif;
    font-size: 46px;
    font-weight: 400;
    line-height: 1;
  }
  p {
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    color: gray;
    margin-bottom: 50px;
  }
  .loginregs {
    max-width: 560px;
    padding: 20px;
    margin-left: 70px;
    position: relative;
    z-index: 1;
    @media (max-width: 767px) {
      margin-left: 0px;
    }
  }
  button {
    margin-right: 20px;
    max-width: 300px;
    width: 100px;
  }
  .register {
    border: 0px;
    background: transparent;
    color: #1890ff;
  }
  &:after {
    content: url(${bg2});
    position: absolute;
    left: -20px;
    top: 170px;
    z-index: 0;
    opacity: 0.3;
    @media (max-width: 767px) {
      content: '';
    }
  }
`;
