import React from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Login from './view/Login'
import NotUse from './view/NotFound'
import App from './App'

export default () => (
    <Router>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/404" component={NotUse} />
            <Route path="/app" component={App} />
            <Route path="/" render={() => <Redirect to="/app" push />} />
        </Switch>
    </Router>
)