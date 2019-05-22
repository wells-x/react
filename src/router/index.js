import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Login from '../view/login/Login'
import Register from '../view/login/Register'
import NotUse from '../view/not-use/NotUse'
import Counter from  '../view/counter'
import App from '../view/App'
import {store} from "../store";
import {Provider} from 'react-redux'

export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/404" component={NotUse}/>
        <Route path="/app" component={App}/>
        {/*<Route path="/test" component={()=> import('../view/counter')}/>*/}
        <Route path="/test" component={Counter}/>
        {/*<Route path="/" exact render={() => <Redirect to="/app" push />} />*/}
        <Route path="/" exact component={App}/>
        <Route path="*" render={() => <Redirect to="/404" push/>}/>
      </Switch>
    </Router>
  </Provider>
)
