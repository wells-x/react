/**
 * Create by wells
 * @date
 */
import React, {Component} from 'react';
import './login.scss';
import {connect} from 'react-redux';
import {saveToken} from "../../store/account/action";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  // Select,
  // Row,
  // Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
import style from './index.module.css'

class RegistrationForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({confirmDirty: this.state.confirmDirty || !!value});
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], {force: true});
    }
    callback();
  };


  render() {
    const {getFieldDecorator} = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 6},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 12},
      },
      style: {
        width: '80%',
        margin: '0 auto'
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <section>
        <h2 className={style.center}>注册用户</h2>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="账号">
            {getFieldDecorator('account', {
              rules: [{required: true, message: 'Please input website!'}],
            })(
              <AutoComplete
                placeholder="请输入账号"
              >
                <Input/>
              </AutoComplete>,
            )}
          </Form.Item>
          <Form.Item label="密码" hasFeedback>
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
            })(<Input.Password/>)}
          </Form.Item>
          <Form.Item label="确认密码" hasFeedback>
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
            })(<Input.Password onBlur={this.handleConfirmBlur}/>)}
          </Form.Item>
          <Form.Item label="E-mail">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: false,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input/>)}
          </Form.Item>
          <Form.Item
            label={
              <span>
              昵称 &nbsp;
                <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o"/>
              </Tooltip>
            </span>
            }
          >
            {getFieldDecorator('nickname', {
              rules: [{required: true, message: 'Please input your nickname!', whitespace: true}],
            })(<Input/>)}
          </Form.Item>

          <Form.Item label="年龄">
            {getFieldDecorator('age', {
              rules: [{required: true, message: 'Please input your age!'}],
            })(<Input style={{width: '120px'}}/>)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>
                I have read the <a href="/">agreement</a>
              </Checkbox>,
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </section>
    );
  }
}

const WrappedRegistrationForm = Form.create({name: 'register'})(RegistrationForm);

// ReactDOM.render(<WrappedRegistrationForm />, mountNode);

function mapState(state,) {
  return {
    account: state.app
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

// const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(NormalLoginForm);

export default connect(mapState, mapDispatch)(WrappedRegistrationForm)
// WrappedNormalLoginForm
// ReactDOM.render(<WrappedNormalLoginForm />, mountNode);