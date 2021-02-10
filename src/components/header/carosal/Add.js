import React, { Component } from 'react';

import './css/add.css'
import img1 from './image/1.jpg'
import img2 from './image/2.png'

class Add extends Component {
    render() {
        return (
            <div className="add-section">
                    <div className="add-section-left">
                        <img src={img1} alt="" />
                    </div>
                     <div className="add-section-right">
                        <img src={img2} alt="" />
                    </div>
            </div>
        );
    }
}

export default Add;