import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../view/login/Login'
import Register from '../view/login/Register'
import NotUse from '../view/not-use/NotUse'
import Counter from '../view/counter'
import { store } from "../store";
import { Provider } from 'react-redux'
import Home from '../view/home/Home'
import User from '../view/user/UserList'
import Square from '../view/square'

export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/user" component={User} />
        <Route path="/square" component={Square} />
        <Route path="/register" component={Register} />
        <Route path="/404" component={NotUse} />
        <Route path="/test" component={Counter} />
        <Route path="/" exact component={Home} />
        <Route path="*" render={() => <Redirect to="/404" replace />} />
      </Switch>
    </Router>
  </Provider>
)
