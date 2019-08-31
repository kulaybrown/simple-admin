/**
 *
 * Profile
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Icon, Typography, Divider, Button, Layout } from 'antd';
import { WrapperProfile } from './styles';
import logo from '../../images/sample-logo.png';
// import 'antd/lib/tabs/style/css';
// import 'antd/lib/icon/style/css';
// import 'antd/lib/typography/style/css';
// import 'antd/lib/divider/style/css';
// import 'antd/lib/button/style/css';
// import 'antd/lib/layout/style/css';

const { TabPane } = Tabs;
const { Paragraph } = Typography;
const { Header, Sider, Content } = Layout;

class Profile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch('https://api.graph.cool/simple/v1/cjzxxzyse0of301646c0cb39c', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query {
          allUsers(filter: { email: "${
            JSON.parse(sessionStorage.getItem('xUser')).xemail
          }" }) {
            id
            email
            name
            avatar
            address
            phone
            site
          }
        }`,
      }),
    })
      .then(response => response.json())
      .then(responseAsJson => {
        // console.log(responseAsJson);
        this.setState({
          id: responseAsJson.data.allUsers[0].id,
          name: responseAsJson.data.allUsers[0].name,
          email: responseAsJson.data.allUsers[0].email,
          avatar: responseAsJson.data.allUsers[0].avatar,
          address: responseAsJson.data.allUsers[0].address,
          phone: responseAsJson.data.allUsers[0].phone,
          site: responseAsJson.data.allUsers[0].site,
        });
      });
  };

  updateData = () => {
    fetch('https://api.graph.cool/simple/v1/cjzxxzyse0of301646c0cb39c', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `mutation {
          updateUser(
            id: "${this.state.id}"
            name: "${this.state.name}"
            address: "${this.state.address}"
            phone: "${this.state.phone}"
            site: "${this.state.site}"
          ) {
            id
          }
        }`,
      }),
    })
      .then(response => response.json())
      .then(() => {
        // console.log(responseAsJson);
      });
  };

  handleLogout() {
    sessionStorage.removeItem('xUser');
  }

  onChangename = name => {
    // console.log('Content change:', name);
    this.setState({ name });
  };

  onChangephone = phone => {
    // console.log('Content change:', phone);
    this.setState({ phone });
  };

  onChangeaddress = address => {
    // console.log('Content change:', address);
    this.setState({ address });
  };

  onChangesite = site => {
    // console.log('Content change:', site);
    this.setState({ site });
  };

  render() {
    // console.log(JSON.parse(sessionStorage.getItem('xUser')).xemail);
    // console.log(this.state.address);
    // console.log(this.state.phone);
    // console.log(this.state.site);
    return (
      <WrapperProfile>
        <Layout>
          <Sider>
            <img className="logo" src={logo} alt="" />
            <ul className="navigation">
              <li>
                <Button type="link">
                  <Icon type="home" theme="twoTone" /> DASHBOARD
                </Button>
              </li>
              <li>
                <Button type="link">
                  <Icon type="container" theme="twoTone" /> TEMPLATES
                </Button>
              </li>
              <li>
                <Button type="link">
                  <Icon type="bulb" theme="twoTone" /> JOB STATUS
                </Button>
              </li>
              <li>
                <Button type="link">
                  <Icon type="file-text" theme="twoTone" /> REPORTS
                </Button>
              </li>
              <li>
                <Button type="link">
                  <Icon type="profile" theme="twoTone" /> MY PROFILE
                </Button>
              </li>
              <li>
                <Button type="link">
                  <Icon type="setting" theme="twoTone" /> SETTINGS
                </Button>
              </li>
            </ul>
          </Sider>
          <Layout>
            <Header>
              <div className="profile-header">
                <h1>
                  <span>Welcome</span>, {this.state.name}
                </h1>
                <Link
                  to="/"
                  className="logout-link"
                  onClick={this.handleLogout}
                >
                  <span>Logout </span>
                  <Icon type="logout" className="logout-icon" />
                </Link>
              </div>
            </Header>
            <Content>
              <div className="myprofile">
                <Tabs type="card">
                  <TabPane tab="Your Details" key="1">
                    <div className="your-details">
                      <img src={this.state.avatar} alt="" />
                      <div className="your-details-right">
                        <h2>
                          Name:{' '}
                          <Paragraph editable={{ onChange: this.onChangename }}>
                            {this.state.name}
                          </Paragraph>
                        </h2>
                        <p>Email: {this.state.email}</p>
                        <Divider />
                        <h3>Contact Information</h3>
                        <div className="contact-info">
                          <div>
                            Phone:{' '}
                            <Paragraph
                              editable={{ onChange: this.onChangephone }}
                            >
                              {this.state.phone !== null
                                ? this.state.phone
                                : ''}
                            </Paragraph>
                          </div>
                          <div>
                            Address:{' '}
                            <Paragraph
                              editable={{ onChange: this.onChangeaddress }}
                            >
                              {this.state.address !== null
                                ? this.state.address
                                : ''}
                            </Paragraph>
                          </div>
                          <div>
                            Site:{' '}
                            <Paragraph
                              editable={{ onChange: this.onChangesite }}
                            >
                              {this.state.site !== null ? this.state.site : ''}
                            </Paragraph>
                          </div>
                        </div>
                        <Button type="primary" onClick={this.updateData}>
                          Update
                        </Button>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tab="Update Password" key="2">
                    Update Password
                  </TabPane>
                </Tabs>
              </div>
            </Content>
          </Layout>
        </Layout>
      </WrapperProfile>
    );
  }
}

export default Profile;
