import React, { Component } from 'react';



import './css/singleproduct.css'
import Axios from 'axios'
import SorterImage from './SorterImage';

import StarRatings from 'react-star-ratings';
import ProductComments from './ProductComments';
import jwtDecode from 'jwt-decode'


class ShowSingleProduct extends Component {

    constructor() {
        super();
        this.state = {
            products: [],
            img:[],
            mimg:"",
            count:2,
            userrating:2,
            comment:"",
            allcomment:[],
           
        }
    }

    changeuserRating(newRating, name) {
        console.log(typeof(newRating))
        this.setState({
            userrating:newRating
        })
    }


    commentChangeHandeler=(event)=>{

        this.setState({
        comment:event.target.value
        })
    }
    

    componentDidMount(){

    
       

        let productid = this.props.match.params.productid
        console.log(productid)
        Axios.get(`http://localhost:2001/evaly/api/product/${productid}`)
            .then(res=>{
                this.setState({
                    products:res.data,
                    mimg:res.data.image[0],
                    count:res.data.mainrating
                })
                for (var i=0; i<res.data.image.length; i++){
                   this.setState({
                        img: this.state.img.concat(res.data.image[i])
                    })
                }
                 for (var i=0; i<res.data.comments.length; i++){
                   this.setState({
                        allcomment: this.state.allcomment.concat(res.data.comments[i])
                    })
                }
        
                
            })
            .catch(error=>{
                console.log(error)
                alert(error)
            })    
    }


changeMainImage=(image)=>{

   this.setState({
       mimg:image
   })
}

ratingSubmit=()=>{

    let token = jwtDecode(localStorage.getItem("token"))


    if(!this.state.comment){
        Axios.put(`http://localhost:2001/evaly/api/product/rating/${this.state.products._id}`,{rating:this.state.userrating})
                .then(result=>{
            
                })
    }else{
        Axios.post(`http://localhost:2001/evaly/api/product/comment`,{
            uid:token.fname+" "+token.lname,
            comment:this.state.comment,
            pid:this.state.products._id,
            rating:this.state.userrating
        }).then(result=>{
                console.log(result.data)
            Axios.put(`http://localhost:2001/evaly/api/product/rating/${this.state.products._id}`, { rating: this.state.userrating })
                .then(result => {

                })
        })     
    }


   

}







    render() {
        let{products}=this.state
  
        return (
            <div className="single-product">
                <div className="single-product-left">
                    <div  className="single-product-left-top">
                          <img onClick={this.changeMainImage.bind(this,3)} src={this.state.mimg} alt="asfd" />
                    </div> 
                    
                    <div className="single-product-left-bottom">
                        {
                            this.state.img.map(s => {
                                return <SorterImage changeMethod={this.changeMainImage.bind(this)}  img={s} />
                            })
                        }
                     
                    
                     </div>

                    <div className="rating-submit">

                        <h3>Write Your Opinion: </h3>
                           <input type="text" 
                                value={this.state.comment}
                                onChange={this.commentChangeHandeler}

                           
                           /><br/>

                        <StarRatings
                            rating={this.state.userrating}
                            starRatedColor="blue"
                            starDimension="30px"
                            changeRating={this.changeuserRating.bind(this)}
                            numberOfStars={6}
                            name='rating'
                        />
                        <h3>{this.state.userrating}</h3>

                        <button onClick={this.ratingSubmit} className="btn btn-primary">Post</button>

                        {
                            this.state.allcomment.map(comment=>{
                               return <ProductComments comments={comment}/>
                            })
                        }
                      
                
                
                
                    </div>





            </div>
                <div className="single-product-right">
                    <h2>{"Product Name: "+products.name}</h2>     
                    <h2>{"Price: "+products.price+" $"}</h2>     
                    <p>{products.dis}</p>  
                    <h4>Total Rated Users: {products.totalrating}</h4>
                    <h3>Product Rating: </h3>   
                    <StarRatings
                        rating={this.state.count}
                        starRatedColor="blue"
                        numberOfStars={6}
                        name='rating'
                    />
                    <h3>{this.state.count}</h3>
                </div>
            </div>
        );
    }
}

export default ShowSingleProduct;