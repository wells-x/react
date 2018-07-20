import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Index from "./app/Index";

class Layout extends Component {
    render() {
        const {match} = this.props;
        return (
            <div>
                <div>
                    header
                </div>
                <Switch>
                    <Route path={`${match.url}/index`} component={Index} />
                    <Route path={`${match.url}/`} render={() => <Redirect to={`${match.url}/index`} />} />
                </Switch>
            </div>
        )
    }
}

export default Layout