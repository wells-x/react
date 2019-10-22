import React, {Component} from "react";
import {withRouter} from 'react-router-dom'
import store from "../store";
import {saveToken} from "../store/account/action";
import {message} from "antd";
// console.log(process.env.REACT_APP_PROXY, process.env.PROXY);
let quitStyle = {
  cursor: 'pointer',
  color: '#1890ff'
};

class LoginOut extends Component {
  loginOut = () => {
    store.dispatch(saveToken(''));
    message.loading('退出中');
    setTimeout(() => {
      this.props.history.push('/login');
      message.destroy();
      message.success('退出成功');
    }, 800)
  };

  render() {
    return (
      <span onClick={() => this.loginOut()} style={quitStyle}>
        退出
      </span>
    )
  }
}

export default withRouter(LoginOut);