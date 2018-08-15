import React, {Component} from 'react';
import {Switch,} from 'react-router-dom'
import {Layout, Button, Icon} from 'antd';
import Menu from "../components/Nav";
import HeaderContent from '../components/Headers'
import {RouteWithSubRoutes} from "../router";

const {Header, Content, Sider, Footer} = Layout;

class Layouts extends Component {
    state = {
        collapsed: false,
    };
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const {routes} = this.props;
        return (
            <Layout theme="light" style={{height: '100vh',}}>
                <Header style={{padding: 0, height: '54px'}}>
                    <HeaderContent />
                </Header>
                <Layout>
                    <Sider className="no-scroll" collapsible
                           onCollapse={() => this.toggleCollapsed()}
                           style={{position: 'reletive'}} theme="light"
                           collapsed={this.state.collapsed}>
                        <Menu collapsed={this.state.collapsed} />
                    </Sider>
                    <Content style={{padding: '10px 10px'}}>
                        <Header style={{background: '#fff', padding: '10px 20px', height: '50px'}}
                                flex="main:left cross:center">
                            <Button type="primary" onClick={this.toggleCollapsed} htmlType="button">
                                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                            </Button>
                        </Header>
                        <Switch>
                            {routes.map((route, index) => <RouteWithSubRoutes key={index} {...route} />)}
                        </Switch>
                        <Footer>Footer</Footer>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default Layouts;