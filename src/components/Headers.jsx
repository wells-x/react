import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../assets/css/header.scss'

class Headers extends Component {
    render() {
        return (
            <header style={{width: '100%', height: '100%'}} flex="main:justify cross:center">
                <nav flex="main:left cross:center" style={{height: '100%'}}>
                    <figure flex="main:center cross:center"
                            style={{height: '100%', overflow: 'hidden', margin: 0, padding: 0}}>
                        <img style={{}} src="//static.12301.cc/assets/build/images/pft-header-logo.png" alt="" />
                    </figure>
                    <ul flex="main:left cross:center">
                        <li>
                            <NavLink to="/index" exact> 首页</NavLink>
                        </li>
                        <li>
                            <NavLink to="/list" exact>应用中心</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Headers;