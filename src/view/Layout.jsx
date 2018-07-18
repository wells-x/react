import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Index from "./app/Index";

class Layout extends Component {
    render() {
        const {match} = this.props;
        console.log(match);
        return (
            <div>
                <div>
                    header
                </div>
                <Switch>
                    <Route path={`${match.url}/index`} component={Index} />
                </Switch>
            </div>
        )
    }
}

export default Layout