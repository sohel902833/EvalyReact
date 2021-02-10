import React, { Component } from 'react';
import './css/carosal.css'
import bg from './image/bg.jpg'



class Carosel extends Component {
    render() {
        return (
            <div className="carosal">
                <img src={bg} alt="" />
            </div>
        );
    }
}

export default Carosel;