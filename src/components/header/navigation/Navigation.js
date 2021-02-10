import React, { Component } from 'react';
import './css/navigation.css'
import logo from './image/logo.svg'

class Navigation extends Component {
    render() {
        return (
            <div className='navigation-one'>
                <ul>
                    <li><img src={logo}></img></li>
                    <li><input type="text" />
                        <span><button><i className="fas fa-search"></i></button></span>
                    </li>
                    <li className="navsideicon"><i className="fas fa-cart-plus fa-2x icon"></i></li>
                    <li className="navsideicon"><i className="fas fa-bell fa-2x icon"></i></li>
                    <li className="navsideicon"><i className="fas fa-comment-dots fa-2x icon"></i></li>
                    <li className="navsideicon"><i className="fas fa-user-circle fa-2x icon"></i></li>
                </ul>
            </div>
        );
    }
}

export default Navigation;