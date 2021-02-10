import React from 'react'
import StarRatings from 'react-star-ratings';

import './css/productcomment.css'


const ProductComments=(props)=>{
    return(
    
        <div className="product-comment">
                <h3>;aslkdf{props.comments.uid}</h3>
                <p>{props.comments.comment}</p>
            <StarRatings
                rating={props.comments.rating}
                starRatedColor="blue"
                numberOfStars={6}
                starDimension="20px"
                name='rating'
                
            />
            <p>{props.comments.rating}</p>
        </div>
    )
}

export default ProductComments