import React, {Component} from 'react';
import {store} from "../../store";

class Index extends Component {
    constructor(props) {
        console.log(store.getState());
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => {
                // console.log(new Date());
                return this.tick()
            },
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    };

    handleClick = () => {
        console.log('this is:', this);
    };

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                首页 time:
                <span onClick={(e) => this.handleClick(e)}> {this.state.date.toLocaleTimeString()}</span>
            </div>
        )
    }
}

export default Index;