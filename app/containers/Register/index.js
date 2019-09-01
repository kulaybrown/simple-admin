/**
 *
 * Register
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Button, Form, Icon, Checkbox, Alert } from 'antd';
import { WrapperRegister } from './styles';
// import 'antd/dist/antd.css';
// let validator = require('email-validator');
// eslint-disable-next-line react/prefer-stateless-function
class Register extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      isSuccess: false,
    };
  }

  handleSubmit = e => {
    // eslint-disable-next-line no-console
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        this.registerUser(
          values.name,
          values.email,
          values.password,
          values.confirm,
        );
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    // eslint-disable-next-line react/prop-types
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    // eslint-disable-next-line react/prop-types
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  registerUser = (x, y, z, a) => {
    fetch('https://api.graph.cool/simple/v1/cjzxxzyse0of301646c0cb39c', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `mutation {
          createUser (
            name: "${x}"
            email: "${y}"
            password: "${z}"
            confirmpassword: "${a}"
          ) {
            id
          }
        }`,
      }),
    })
      .then(response => response.json())
      .then(responseAsJson => {
        // eslint-disable-next-line no-console
        console.log(responseAsJson);
        this.setState({ isSuccess: true });
      });
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const { getFieldDecorator } = this.props.form;
    return (
      <WrapperRegister>
        <div className="bgone" />
        <div className="bgtwo" />
        <Form onSubmit={this.handleSubmit}>
          <Alert
            className={
              this.state.isSuccess
                ? 'alert-create-account'
                : 'alert-create-account alert-show'
            }
            type="success"
            message="Creating an account, Successful!"
            banner
            closable
          />
          <h2>Create Account</h2>
          <Form.Item label="Name">
            {getFieldDecorator('name', {})(
              <Input
                size="large"
                placeholder="Name"
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
              />,
            )}
          </Form.Item>
          <Form.Item label="Email">
            {getFieldDecorator('email', {
              rules: [
                { type: 'email', message: 'Please input valid email' },
                { required: true, message: 'Please input your Email!' },
              ],
            })(
              <Input
                size="large"
                placeholder="Email"
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
              />,
            )}
          </Form.Item>
          <Form.Item label="Password" hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(
              <Input.Password
                size="large"
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
              />,
            )}
          </Form.Item>
          <Form.Item label="Confirm Password" hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(
              <Input.Password
                size="large"
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                onBlur={this.handleConfirmBlur}
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
              rules: [
                {
                  required: true,
                  message: 'Please confirm the agreenent!',
                },
              ],
            })(
              <Checkbox>
                I have read the <a href="/">agreement</a>
              </Checkbox>,
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="form-submit"
              size="large"
            >
              Submit
            </Button>
            Or <Link to="/login">Login</Link>
          </Form.Item>
          <span className="smalltext">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            voluptate necessitatibus quam itaque cum distinctio natus fugit sit.
          </span>
        </Form>
      </WrapperRegister>
    );
  }
}

const WrappedLogin = Form.create()(Register);
export default WrappedLogin;
