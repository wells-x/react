import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../view/login/Login'
import Register from '../view/login/Register'
import NotUse from '../view/not-use/NotUse'
import Counter from '../view/counter'
import { store } from "../store";
import { Provider } from 'react-redux'
import Home from '../view/home/Home'
import UserList from '../view/user/User.List'
import UserDetails from '../view/user/User.Details'
import Square from '../view/square'
import Layouts from '../view/Layouts';
import UnLogin from "../view/not-use/UnLogin";
export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/test" component={Counter} />
        <Layouts>
          <Route path="/" exact component={Home} />
          <Route path="/user/:id" exact component={UserDetails} />
          <Route path="/users" exact component={UserList} />
          <Route path="/square" component={Square} />
          <Route path="/register" component={Register} />
          <Route path="/404" component={NotUse} />
          <Route path="/toLogin" component={UnLogin} />
        </Layouts>

        <Route component={NotUse} />
      </Switch>
    </Router>
  </Provider>
)
