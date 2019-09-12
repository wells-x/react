import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import styles from './layout.module.css'
import { withRouter} from 'react-router-dom';
// import {Link} from 'react-router-dom'
// import Router from '../router'

const { Header, Sider, Content } = Layout;

class Layouts extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };


    routerPush(path) {
        this.props.location.push(path || '/');
    }

    render() {
        let { children } = this.props;

        return (
            <Layout style={{ height: '100vh' }}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className={styles.logo} />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" onClick={() => console.log(this)}>
                            <Icon type="user" />
                            <span>user</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className={styles.trigger}
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
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
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default  withRouter(Layouts);