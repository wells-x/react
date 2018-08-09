import React, {Component} from 'react';
import logo from '../assets/imgs/logo.png'

class Headers extends Component {
    render() {
        return (
            <header style={{width: '100%', height: '100%'}} flex="main:left">
                <figure style={{display: 'block', height: '100%', overflow: 'hidden'}}>
                    <img style={{}} src={logo} alt="" />
                </figure>
            </header>
        )
    }
}

export default Headers;