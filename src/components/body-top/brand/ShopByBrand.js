import React, { Component } from 'react';


import './css/shopbybrand.css'
import img1 from './image/brand/1.png'
import img2 from './image/brand/2.png'
import img3 from './image/brand/3.png'
import img4 from './image/brand/4.png'
import img5 from './image/brand/5.png'
import img6 from './image/brand/6.png'
import img7 from './image/brand/7.png'
import img8 from './image/brand/8.png'
import img9 from './image/brand/9.png'
import img10 from './image/brand/10.png'
import img11 from './image/brand/11.jpg'
import img12 from './image/brand/12.png'
import img13 from './image/brand/13.png'
import img14 from './image/brand/14.png'
import img15 from './image/brand/15.png'
import img16 from './image/brand/16.png'
import img17 from './image/brand/17.png'
import img18 from './image/brand/18.png'



class ShopByBrand extends Component {
    render() {
        return (

            <div className="shopbybrand">

                <div className="shopbybrand-top">

                    <div className="heading">
                        <h2>{this.props.headingName}</h2>


                        <div className="search">

                            <input type="text" placeholder="Search......" />
                            <div className="searchbutton">
                                <button><i style={{ color: "#ffffff" }} className="fas fa-search"></i></button>
                            </div>
                        </div>


                    </div>


                </div>


                <div className="shopbybrand-bottom">
                    <div className="item1">
                        <img src={img1} alt="" />
                    </div>

                    <div className="item2">
                        <img src={img2} alt="" />
                    </div>
                    <div className="item3">
                        <img src={img3} alt="" />
                    </div>
                    <div className="item4">
                        <img src={img4} alt="" />
                    </div>
                    <div className="item5">
                        <img src={img5} alt="" />
                    </div>
                    <div className="item6">
                        <img src={img6} alt="" />
                    </div>
                    <div className="item7">
                        <img src={img7} alt="" />
                    </div>
                    <div className="item8">
                        <img src={img8} alt="" />
                    </div>
                    <div className="item9">
                        <img src={img9} alt="" />
                    </div>
                    <div className="item10">
                        <img src={img10} alt="" />
                    </div>
                    <div className="item11">
                        <img src={img11} alt="" />
                    </div>
                    <div className="item12">
                        <img src={img12} alt="" />
                    </div>
                    <div className="item13">
                        <img src={img13} alt="" />
                    </div>
                    <div className="item14">
                        <img src={img14} alt="" />
                    </div>
                    <div className="item15">
                        <img src={img15} alt="" />
                    </div>
                    <div className="item16">
                        <img src={img16} alt="" />
                    </div>
                    <div className="item17">
                        <img src={img17} alt="" />
                    </div>
                    <div className="item18">
                        <img src={img18} alt="" />
                    </div>
                </div>



            </div>
        );
    }
}

export default ShopByBrand;