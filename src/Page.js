import React from 'react';
import {HashRouter as Router, Switch,} from 'react-router-dom';
import {router, RouteWithSubRoutes} from "./router";

// console.log(router);

export default () => (
    <Router>
        <Switch>
            {router.map((route, index) => {
                console.log(route);
                return <RouteWithSubRoutes key={index} {...route} />
            })}
        </Switch>
    </Router>

)