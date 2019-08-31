import styled from 'styled-components';

export const WrapperProfile = styled.section`
  font-family: 'Lato', sans-serif;
  h3 {
    color: #9e9e9e;
    font-weight: 400;
  }
  p {
    font-family: 'Lato', sans-serif;
  }
  .contact-info {
    margin-top: 20px;
    margin-bottom: 20px;
    > div {
      display: flex;
      margin-bottom: 0px;
    }
  }
  .your-details {
    display: flex;
    align-items: flex-start;
    @media (max-width: 480px) {
      flex-direction: column;
    }
    .your-details-right {
      width: 100%;
      padding: 0px 30px;
      @media (max-width: 480px) {
        padding: 0px 0px;
      }
      h2 {
        display: flex;
      }
      .ant-typography {
        margin-left: 10px;
      }
    }
    img {
      @media (max-width: 991px) {
        width: 150px;
      }
      @media (max-width: 480px) {
        margin-bottom: 20px;
      }
    }
  }
  .profile-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-size: 25px;
      font-weight: 900;
      margin: 0px;
      span {
        font-weight: 400;
      }
      @media (max-width: 767px) {
        font-size: 18px;
      }
      @media (max-width: 480px) {
        line-height: 1.4;
        padding: 10px 0px;
      }
    }
    .logout-link {
      display: flex;
      align-items: center;
      @media (max-width: 480px) {
        span {
          display: none;
        }
      }
      span {
        font-size: 20px;
        padding-right: 10px;
      }
      .logout-icon {
        font-size: 25px;
      }
    }
  }
  .ant-layout-content {
    padding: 50px;
    @media (max-width: 767px) {
      padding: 30px;
    }
    .myprofile {
      margin-bottom: 30px;
    }
  }
  .ant-layout-header {
    background: #fff;
    @media (max-width: 767px) {
      padding: 0 30px;
    }
    @media (max-width: 480px) {
      height: auto;
    }
  }
  .ant-layout-has-sider {
    height: 100vh;
  }
  .ant-layout-sider {
    @media (max-width: 767px) {
      flex: 0 0 50px !important;
      max-width: 50px !important;
      min-width: 50px !important;
      width: 50px !important;
    }
  }
  .ant-layout-sider-children {
    background: #212121;
    padding: 20px;
    text-align: center;
    @media (max-width: 767px) {
      padding: 0px;
    }
    .logo {
      width: 70px;
      margin-top: 30px;
      margin-bottom: 50px;
    }
  }
  .navigation {
    padding-left: 0px;
    li {
      font-family: 'Lato', sans-serif;
      list-style: none;
      font-size: 16px;
      font-weight: 400;
      color: #1890ff;
      button {
        display: flex;
        align-items: center;
        padding: 0px;
        @media (max-width: 767px) {
          span {
            display: none;
          }
          width: 100%;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
`;
