import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Login from '../view/Login';
import NotUse from '../view/NotFound';
import Layout from '../view/Layout'
import Indexs from "../view/app/Index";
import Application from "../view/app/Application";

const
    router = [
        {
            path: '/',
            component: Layout,
            routes: [
                {
                    path: '/index',
                    component: Indexs,
                },
                {
                    path: '/list',
                    exact: true,
                    component: Application,
                },
                {
                    path: '/',
                    redirect: '/index'
                },
            ]

        },
        {
            path: '/login',
            exact: true,
            component: Login,
        },
        {
            component: NotUse,
            exact: true,
        }
    ];
// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => {
    console.log(route);
    return <Route
        path={route.path}
        render={props => (
            // pass the sub-routes down to keep nesting
            route.component ?
                <route.component {...props} routes={route.routes} exact={route.exact} /> :
                route.redirect ?
                    <Redirect to={route.redirect} /> : ''
        )}
    />
};
export default router;
export {router, RouteWithSubRoutes}