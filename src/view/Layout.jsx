import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {Layout,} from 'antd';
import Index from "./app/Index";
import Terminal from './app/Terminal';
import Menu from "../components/Nav";
import HeaderContent from '../components/Headers'

const {Header, Content, Sider} = Layout;

class Layouts extends Component {
    render() {
        const {match} = this.props;
        return (
            <Layout style={{height: '100vh', textAlign: 'center'}}>
                <Header>
                    <HeaderContent />
                </Header>
                <Layout>
                    <Sider>
                        <Menu />
                    </Sider>
                    <Content>
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