import React, { Component } from 'react';
import './css/leftsidebar.css'

class LeftSidebar extends Component {
    render() {
        return (
                <div className="sidebar">
                    <ul>
                        <li>Top Category</li>
                        <li>Smart Tv&Android Tv</li>
                        <li>Motor Bike</li>
                        <li>Speaker</li>
                        <li>Desktop</li>
                        <li>Freezer</li>
                        <li>Refrigerator</li>
                        <li>Split Ac</li>
                        <li>Laptop</li>
                        <li>Smart Phone</li>
                        <li>Micro Wav Oven</li>
                    </ul>
                </div>
        );
    }
}

export default LeftSidebar;