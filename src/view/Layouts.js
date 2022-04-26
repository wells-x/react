import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import styles from './layout.module.css'
import store from "../store";
import LoginOut from '../components/LoginOut'
import { Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

class Layouts extends Component {
  constructor(props) {
    super(props);
    store.subscribe(() => {
      const { token } = store.getState().app;
      this.state.isLogin = !!token;
    });
    const { token } = store.getState().app;
    setTimeout(() => {
      if (!token) props.history.replace('/login');
    }, 2)
  }

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    let { children } = this.props;
    return (
      <Layout style={{ height: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className={styles.logo} onClick={() => this.props.history.push('/')} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" onClick={() => this.props.history.push('/users')}>
              {/* <Icon type="user"/> */}
              <span>user</span>
            </Menu.Item>
            <Menu.Item key="2">
              {/* <Icon type="video-camera"/> */}
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              {/* <Icon type="upload"/> */}
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className={styles.header}>
            {/* <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            /> */}
            <LoginOut />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {children}
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Layouts;