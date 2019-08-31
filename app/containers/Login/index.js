/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/**
 *
 * Login
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Button, Form, Checkbox, Icon, Alert } from 'antd';
import { WrapperLogin } from './styles';
import logo from '../../images/sample-logo.png';

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      usersx: [],
      notValidLogin: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.fetchData()
  }

  handleSubmit = e => {
    // eslint-disable-next-line no-console\
    
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const filteredUsers = this.state.usersx.filter(
          user => user.email === values.email && user.password === values.password
        );
        const xUser = {
          xemail: values.email
        }
        
        if (filteredUsers.length) {
          console.log('success!');
          console.log(filteredUsers);
          sessionStorage.setItem('xUser', JSON.stringify(xUser));
          // eslint-disable-next-line react/prop-types
          this.props.history.push('/profile')
        } else {
          console.log('failed')
          this.setState({ notValidLogin: false });
        }
      }
    });
  };

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    fetch('https://api.graph.cool/simple/v1/cjzxxzyse0of301646c0cb39c', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query {
          allUsers {
            email,
            password
          }
        }`,
      }),
    })
      .then(response => response.json())
      .then(responseAsJson => {
        // console.log(responseAsJson.data.allUsers)
        this.setState({ usersx: responseAsJson.data.allUsers })
      })
  }

  

  render() {
    // eslint-disable-next-line react/prop-types
    const { getFieldDecorator } = this.props.form;
    return (
      <WrapperLogin>
        <div className="bgone"></div>
        <div className="bgtwo"></div>
        <Form onSubmit={this.handleSubmit}>
          <div className="form-logo">
            <img className="logo" src={logo} alt=""/>
            <h1>XYZ Admin</h1>
          </div>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [
                { type: 'email', message: 'Please input valid email' },
                { required: true, message: 'Please input your Email!' },
              ],
            })(<Input size="large" placeholder="Email" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}/>)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' },
              ],
            })(<Input size="large" type="password" placeholder="Password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}/>)}
          </Form.Item>
          <Alert message="Error! Please input valid email or password" type="error" showIcon className={this.state.notValidLogin ? 'not-valid-login' : ''} />
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="/">
              Forgot password
            </a>
            <Button type="primary" htmlType="submit" className="login-form-button" size="large">
              Log in
            </Button>
            Or <Link to="/register">Register</Link>
          </Form.Item>
        </Form>
      </WrapperLogin>
    );
  }
}

const WrappedLogin = Form.create()(Login);
export default WrappedLogin;