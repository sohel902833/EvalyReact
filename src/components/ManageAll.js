import React, { Component } from 'react';

import Axios from 'axios'


//importing css
import './manageall.css'
import Navigation from './header/navigation/Navigation'
import SecondNavigation from './header/navigation/SecondNavigation'
import LeftSidebar from './header/carosal/LeftSidebar'
import Carosal from './header/carosal/Carosel'
import Add from './header/carosal/Add'
import BrandName from './body-top/brand/BrandName';
import ShopByBrand from './body-top/brand/ShopByBrand';
import ProductHeader from './product/ProductHeader';
import ProductsItem from './product/ProductsItem';
import {Redirect} from "react-router-dom"

class ManageAll extends Component {



    constructor() {
        super();
        this.state = {
            glasses: [],
            computers:[]
        }
    }


    componentDidMount() {
        let glass = "Glasses"
        let computer = "Computers"


        //get all glasses


        Axios.get(`http://localhost:2001/evaly/api/product/cat/${glass}`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    glasses: res.data
                })
            })

        //get all computers


        Axios.get(`http://localhost:2001/evaly/api/product/cat/${computer}`)
            .then(res => {

                this.setState({
                    computers: res.data
                })
            })




    }


    SearchGlass=(name)=>{


        if (name =="true"){
            Axios.get(`http://localhost:2001/evaly/api/product/cat/Glasses`)
                .then(res => {
                    console.log(res.data)
                    this.setState({
                        glasses: res.data
                    })
                })
        }


        let newProductList = this.state.glasses.filter(glass => {
            return glass.name == name
        })

        this.setState({
            glasses: newProductList
        })


    }









    render() {
        let token = localStorage.getItem("token")
        if(!token){
            return <Redirect to="/login"/>
        }else{
        return (
            <div className="main-container">
                    <div className="navigation-1">
                         <Navigation/>
                    </div> 
                    <div className="navigation-2">
                        <SecondNavigation/>
                    </div>


                    <div className="body-top">

                        <div className="body-top-sidebar">
                                <LeftSidebar/>
                        </div>
                        <div className="body-top-carosalbar">
                                <div className="body-top-carosalbar-top">
                                    <Carosal/>
                                </div> 
                                
                                 <div className="body-top-carosalbar-bottom">
                                    <Add/>
                                </div>
                        </div>

                    </div>
                    <div className="body-two">

                       <BrandName/>



                    </div>

                    <div className="shop-by-brand">
                    <ShopByBrand headingName="Shop By Brand"/>
                    </div> 
                    <div className="shop-by-brand">
                      <ProductHeader method={this.SearchGlass.bind(this)} name="Glasses"/>  
                    {

                        this.state.glasses.map(glass => {
                            return <ProductsItem product={glass} />
                        })
                    }
                    </div>

                    <div className="product-computer">

                    <ProductHeader name="Computers" />
                    {

                        this.state.computers.map(computer => {
                            return <ProductsItem product={computer} />
                        })
                    }

                    </div>






                    

            </div>
        );
       }
    }
}

export default ManageAll;