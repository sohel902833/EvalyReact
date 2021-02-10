import React, { Component } from 'react';
import  './css/secondnav.css'
class SecondNavigation extends Component {
    render() {
        return (
            <div className="second-nav">
                <ul>
                    <li onClick={this.humbergerClick}><i className="fas fa-bars fa-2x"></i></li>
                    <li>All Shope</li>
                    <li>Gift Card</li>
                    <li>Campaigns</li>
                    <li>Friends Deal</li>
                    <li>Prime Deal</li>
                    <li>News Feed</li>
                    <li>Marchent</li>
                    <li>Help</li>

                </ul> 
            </div>
        );
    }
}

export default SecondNavigation;