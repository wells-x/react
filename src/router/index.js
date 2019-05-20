import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Login from '../view/login/Login'
import Register from '../view/login/Register'
import NotUse from '../view/not-use/NotUse'
import App from '../view/App'

export default () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/test" component={Register}/>
      <Route path="/404" component={NotUse}/>
      <Route path="/app" component={App}/>
      {/*<Route path="/" exact render={() => <Redirect to="/app" push />} />*/}
      <Route path="/" exact component={App}/>
      <Route path="*" render={() => <Redirect to="/404" push/>}/>
    </Switch>
  </Router>
)
