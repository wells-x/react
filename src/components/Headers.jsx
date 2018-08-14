import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
// import logo from '../assets/imgs/logo.png'
import '../assets/css/header.scss'


class Headers extends Component {
    render() {
        return (
            <header style={{width: '100%', height: '100%'}} flex="main:justify">
                <nav flex="main:left">
                    <figure flex="main:center cross:center"
                            style={{height: '100%', overflow: 'hidden', margin: 0, padding: 0}}>
                        <img style={{}} src="//static.12301.cc/assets/build/images/pft-header-logo.png" alt="" />
                    </figure>
                    <ul flex="main:left">
                        <li>
                            <Link to={'/'}> 首页</Link>
                        </li>
                        <li>
                            <NavLink to={'/'}>应用中心</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Headers;