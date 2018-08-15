import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {Layout, Button, Icon} from 'antd';
import Index from "./app/Index";
import Terminal from './app/Terminal';
import Menu from "../components/Nav";
import HeaderContent from '../components/Headers'

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
        const {match} = this.props;
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
                            <Route path={`${match.url}/index`} component={Index} />
                            <Route path={`${match.url}/terminal`} component={Terminal} />
                            <Route path={`${match.url}/`} render={() => <Redirect to={`${match.url}/index`} />} />
                        </Switch>
                        <Footer>Footer</Footer>
                    </Content>
                </Layout>
                {/**/}
            </Layout>
        )
    }
}

export default Layouts;