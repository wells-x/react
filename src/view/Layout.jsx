import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {Layout, Button, Icon} from 'antd';
import Index from "./app/Index";
import Terminal from './app/Terminal';
import Menu from "../components/Nav";
import HeaderContent from '../components/Headers'
// import {store} from "../store";

// console.log(store);
const {Header, Content, Sider} = Layout;

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
            <Layout style={{height: '100vh',}}>
                <Header>
                    <HeaderContent />
                </Header>
                <Layout>
                    <Sider theme="light" className="no-scroll" onCollapse={() => this.toggleCollapsed()}
                           collapsible
                           style={{position: 'reletive'}}
                           collapsed={this.state.collapsed}>
                        <Menu collapsed={this.state.collapsed} />
                    </Sider>
                    <Content style={{padding: '10px 10px'}}>
                        <h2 style={{background: '#fff', padding: '10px 20px'}} flex="main:left cross:center">
                            <Button type="primary" onClick={this.toggleCollapsed}>
                                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                            </Button>
                        </h2>
                        <Switch>
                            <Route path={`${match.url}/index`} component={Index} />
                            <Route path={`${match.url}/terminal`} component={Terminal} />
                            <Route path={`${match.url}/`} render={() => <Redirect to={`${match.url}/index`} />} />
                        </Switch>
                    </Content>
                </Layout>
                {/*<Footer>Footer</Footer>*/}
            </Layout>

            /* <Layout>
                 <Header>
                     <HeaderContent />
                 </Header>
                 <Content>
                     <Sider />
                     <Switch>
                         <Route path={`${match.url}/index`} component={Index} />
                         <Route path={`${match.url}/`} render={() => <Redirect to={`${match.url}/index`} />} />
                         {/!*<Route path={`${match.url}/`} render={() => <Redirect to={`/404`} />} />*!/}
                     </Switch>
                 </Content>
                 <Footer />
             </Layout>*/
        )
    }
}

export default Layouts;