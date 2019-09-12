/**
 * Create by wells
 * @date
 */
import React, {Component} from 'react';
import './login.scss';
import {Form, Icon, Input, Button, Checkbox, message} from 'antd';
import style from './index.module.css';
import {login} from "../../api/account";
import {connect} from 'react-redux';
import {saveToken} from "../../store/account/action";
import {store} from "../../store";
import {Link} from 'react-router-dom'

class NormalLoginForm extends Component {
  constructor(props,) {
    super(props);
    console.log(this);
    this.state = {username: 'wells', password: '123456'}
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
            this.props.history.push('/');
            console.log(store.getState());
          })
          .catch(e => {
            message.error(e.msg);
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
            {
              getFieldDecorator('username', {
                rules: [{required: true, message: 'Please input your username!'}],
                initialValue: this.state.username
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
              initialValue: this.state.password
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
            <Link to="/register">register now!</Link>
          </Form.Item>
        </Form>

      </div>


    );
  }
}

function mapState(state,) {
  return {
    app: state.app
  }
}

function mapDispatch(dispatch, ownProps) {
  return {
    SaveToken: (s) => {
      console.log(s, ownProps);
      dispatch(saveToken(s));

    },
    Decrement: () => {
      // dispatch(decrement(ownProps.token))
    }

  }
}

const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(NormalLoginForm);

export default connect(mapState, mapDispatch)(WrappedNormalLoginForm)
// WrappedNormalLoginForm
// ReactDOM.render(<WrappedNormalLoginForm />, mountNode);