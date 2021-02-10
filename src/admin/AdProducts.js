import React, { Component } from 'react';
import Axios from 'axios'
import './css/addproducts.css'
class AdProducts extends Component {

    constructor() {
        super();

        this.submitHandeler = this.submitHandeler.bind(this)

        this.state = {
            productname: "",
            discription: "",
            price: "",
            category: "",
            image: '',
            img: '',



            nameerror: "",
            diserror: "",
            priceerror: "",
            categoryerror: "",
            imageerror: ""

        }
    }

    changeHandeler = (event) => {
        console.log(event.target.value)

        this.setState({
            [event.target.name]: event.target.value,

            nameerror: "",
            diserror: "",
            priceerror: "",
            categoryerror: "",
            imageerror: ""

        })


    }


    imageHandeler = (event) => {
        if(event.target.files.length>6){
            this.setState({
                imageerror:"Maximum 6 Files You  Can Choose"
            })
        }else{
           
            for(var i=0; i<=event.target.files.length; i++){
               
            this.setState({
                        image:event.target.files,
                        img: URL.createObjectURL(event.target.files[0]),
                        imageerror: ""
                    }) 

                console.log(event.target.files[i])
            }

     
        }





    }

    submitHandeler = (event) => {
        event.preventDefault()

        if (!this.state.productname) {
            this.setState({
                nameerror: "Please Enter Product Name"
            })
        }
        else if (!this.state.discription) {
            this.setState({
                diserror: "Please Enter Discription Name"
            })
        }
        else if (!this.state.price) {
            this.setState({
                priceerror: "Please Enter Product Price"
            })
        }
        else if (!this.state.category) {
            this.setState({
                categoryerror: "Please Select Category"
            })
        }
        else if (!this.state.image) {
            this.setState({
                imageerror: "Please Choose Some Image"
            })
        } else {





            let form_data = new FormData()

            for (const key of Object.keys(this.state.image)) {
                form_data.append('imgCollection', this.state.image[key])
            }


          //  form_data.append('image', this.state.image, this.state.image.name)
            form_data.append('name', this.state.productname)
            form_data.append('price', this.state.price)
            form_data.append('category', this.state.category)
            form_data.append('dis', this.state.discription)


            var today = new Date();
            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

            form_data.append('date', date)
            form_data.append('time', time)

            let url = 'http://localhost:2001/evaly/api/product'

            Axios.post(url, form_data, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }).then(res => {
                alert(res.data.message)
                this.forceUpdate()
                console.log(res.data)
                this.setState({
                    productname: "",
                    discription: "",
                    price: "",
                    category: "",
                    image: null,
                    img: ""
                })
            }).catch(err => {
                console.log(err)
            })








        }








    }







    render() {
        return (
            <div className="addProduct">
                <form onSubmit={this.submitHandeler}>
                    <h2>Add New Product</h2>
                    <label htmlFor="productname">Product Name:</label><br />
                    <input
                        type="text"
                        id="productname"
                        name="productname"
                        onChange={this.changeHandeler}
                        value={this.state.productname}
                    />

                    {this.state.nameerror ? <p className="error">{this.state.nameerror}</p> : ""}


                    <br />
                    <label htmlFor="discription">Product Discription:</label><br />

                    <input
                        type="text"
                        id="discription"
                        name="discription"
                        onChange={this.changeHandeler}
                        value={this.state.discription}
                    />
                    {this.state.diserror ? <p className="error">{this.state.diserror}</p> : ""}
                    <br />
                    <label htmlFor="price">Product Price:</label><br />

                    <input
                        type="text"
                        id="price"
                        name="price"
                        onChange={this.changeHandeler}
                        value={this.state.price}
                    />
                    {this.state.priceerror ? <p className="error">{this.state.priceerror}</p> : ""}

                    <br />
                    <label htmlFor="category">Product Category:</label><br />
                    <select
                        id="category"
                        name="category"
                        onChange={this.changeHandeler}
                    >
                        <option value="Bags & Luggage">Bags & Luggage</option>
                        <option value="Beauty & Bodycare">Beauty & Bodycare</option>
                        <option value="Books & Stationery">Books & Stationery</option>
                        <option value="Construction Materials">Construction Materials</option>
                        <option value="Decoration Materials">Decoration Materials</option>
                        <option value="Electric & Parts">Electric & Parts</option>
                        <option value="Event & Media">Event & Media</option>
                        <option value="Fashion For Men">Fashion For Men</option>
                        <option value="Fashion For Women">Fashion For Women</option>
                        <option value="Food & Beverage">Food & Beverage</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Glasses">Glasses</option>
                        <option value="Grocery">Grocery</option>
                        <option value="Handmade">Handmade</option>
                        <option value="Harvesting & Agriculture">Harvesting & Agriculture</option>
                        <option value="Health Care And Pharmaceutical">Health Care And Pharmaceutical</option>
                        <option value="Home & Living">Home & Living</option>
                        <option value="Home Appliance">Home Appliance</option>
                        <option value="Home Garden">Home Garden</option>
                        <option value="Jewellery">Jewellery</option>
                        <option value="Kitchen & Dining">Kitchen & Dining</option>
                        <option value="Leather Goods">Leather Goods</option>
                        <option value="LP Gas">LP Gas</option>
                        <option value="Machineries">Machineries</option>
                        <option value="Mother, Kids & Toys">Mother, Kids & Toys</option>
                        <option value="Paints">Paints</option>
                        <option value="Computers">Computers</option>

                    </select>


                    {this.state.categoryerror ? <p className="error">{this.state.categoryerror}</p> : ""}

                    <br />
                    <label htmlFor="image">Product Image:</label><br />

                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={this.imageHandeler}
                        multiple
                    />
                    {this.state.imageerror ? <p className="error">{this.state.imageerror}</p> : ""}
                    {
                        this.state.img ? <img src={this.state.img} /> : ""
                    }


                    <button onSubmit={this.submitHandeler} className="btn btn-primary d-block my-3">Register</button>





                </form>
            </div>
        );
    }
}

export default AdProducts;