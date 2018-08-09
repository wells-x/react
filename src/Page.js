import React from 'react';
import {HashRouter as Router, Route, Switch, Redirect,} from 'react-router-dom';
import Login from './view/Login';
import NotUse from './view/NotFound';
import Layout from './view/Layout';

export default () => (
    <Router>
        <Switch>
            <Route path="/app" component={Layout} />
            <Route path="/login" component={Login} />
            <Route path="/404" component={NotUse} />
            <Route path="/" render={() => <Redirect to="/app" push />} />
            {/*<Route component={NotUse} />*/}
            <Route render={() => <Redirect to="/404" />} />
        </Switch>
    </Router>

)