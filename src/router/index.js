import React, {Component} from 'react'
import {Route, BrowserRouter as Router, Redirect, Switch} from 'react-router-dom'
import Home from '../page/Home'
import About from '../page/About'

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/' exact render={() => <Redirect to="/home"/>}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes
