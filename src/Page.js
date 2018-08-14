import React from 'react';
import {HashRouter as Router, Route, Switch, Redirect,} from 'react-router-dom';
/*import Login from './view/Login';
import NotUse from './view/NotFound';
import Layout from './view/Layout';*/
import {router} from "./router";

console.log(router);
export default () => (
    <Router>
        <Switch>
            {
                router.routes.map((item, index) => {
                    console.log(index);
                    return (
                        <Route render={item.redirect ? () => <Redirect to={item.redirect} push={item.push} /> : null}
                               key={index} path={item.path || null}
                               component={item.components || null}
                        />
                    )
                })
            }
        </Switch>
    </Router>

)