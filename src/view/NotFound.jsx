import React from 'react';
import img from '../assets/imgs/404.png';
import './notFound.scss'
import 'animate.css'
class NotFound extends React.Component {
    state = {
        animated: ''
    };
    enter = () => {
        this.setState({animated: 'hinge'})
    };

    render() {
        const {animated} = this.state;
        return (
            <div className="center not-found">
                <img src={img} alt="404" className={`animated swing ${animated}`} onMouseEnter={this.enter} />
            </div>
        )
    }
}

export default NotFound;