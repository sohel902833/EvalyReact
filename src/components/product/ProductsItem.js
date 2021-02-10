import React, { Component } from 'react';
import './css/productitem.css'
import {Link} from 'react-router-dom'

import ShowSingleProduct from './ShowSingleProduct'

class ProductsItem extends Component {
    


    addToCartHandeler=(id)=>{
        alert("Md")
        console.log(this.props)
    }

    render() {
        let productid=this.props.product._id
        let link=`/product/${productid}`
        return (
           
            
          
           <div className="shopbycategory">


                <div className="shopbycategory-bottom">
                    <div className="item1">
                        <Link to={link}>
                        <img onClick={this.try} src={this.props.product.image[0]} alt="" />
                        </Link> 
                        <p className="name">{this.props.product.name.substr(0, 15) + ".."}</p>
                        <p className="price">{this.props.product.price}</p>
                        <button onClick={this.addToCartHandeler} className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>

           
        );
    }
}

export default ProductsItem;