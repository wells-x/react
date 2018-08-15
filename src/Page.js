import React from 'react';
import {HashRouter as Router, Route, Switch,} from 'react-router-dom';
/*import Login from './view/Login';
import NotUse from './view/NotFound';
import Layout from './view/Layout';*/
import routerConfig from "./router";

// console.log(router);
const RouteWithSubRoutes = route => (
    <Route
        path={route.path}
        render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.children} />
        )}
    />
);
export default () => (
    <Router>
        <Switch>
            {routerConfig.map((route, index) => <RouteWithSubRoutes key={index} {...route} />)}
        </Switch>
    </Router>

)