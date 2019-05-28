/**
 * Create by wells
 * @date
 */
import React, {Component} from 'react';
import './login.scss';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import style from './login.module.css';
import {login} from "../../api/account";
import {connect} from 'react-redux';
import {decrement, increment} from "../../store/counter/action";
import {saveToken} from "../../store/account/action";

class NormalLoginForm extends Component {
  constructor(props,){
    super();
    console.log(props);
  }
  handleSubmit = e => {
    console.log(this.props);
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        login({account: values.username, password: values.password})
          .then(res => {
            console.log(res);
            this.props.SaveToken(res.data.token);

            console.log(this.props);
          })
          .catch(e => {
            console.log(JSON.stringify(e));
          })
      }
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div className={['login', style.positionFixed].join(' ')}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{required: true, message: 'Please input your username!'}],
            })(
              <Input
                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{required: true, message: 'Please input your Password!'}],
            })(
              <Input
                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <br/>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button> Or
            &nbsp;
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>

    );
  }
}

function mapState(state, ownProps) {
  console.log(state.account);
  return {
    account: state.account
  }
}

function mapDispatch(dispatch, ownProps) {
  return {
    SaveToken: (s) => {
      console.log(s);
      dispatch(saveToken(s));

    },
    Decrement: () => {
      dispatch(decrement(ownProps.token))
    }

  }
}

const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(NormalLoginForm);

export default connect(mapState, mapDispatch)(WrappedNormalLoginForm)
// WrappedNormalLoginForm
// ReactDOM.render(<WrappedNormalLoginForm />, mountNode);