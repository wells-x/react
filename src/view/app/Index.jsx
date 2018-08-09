import React, {Component} from 'react';
import {Icon} from 'antd';

// import {store} from "../../store";

class Index extends Component {
    constructor(props) {
        // console.log(store.getState());
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    };

    handleClick = () => {
        console.log('this is:', this);
    };

    tick() {
        new Date();
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                首页 time:
                <span onClick={(e) => this.handleClick(e)}> {this.state.date.toLocaleTimeString()}</span>
                <Icon type="plus-square" />
            </div>
        )
    }
}

export default Index;