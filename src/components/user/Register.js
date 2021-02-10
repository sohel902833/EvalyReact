import React, { Component } from 'react';
import './css/register.css'
import { withRouter } from 'react-router-dom';
import Axios from 'axios'

class Register extends Component {

    constructor() {
        super();


        this.state = {
            fname: "",
            lname: "",
            email: "",
            password: "",
            phone: "",



            fnameerror: "",
            lnameerror: "",
            emailerror: "",
            passworderror: "",
            phoneerror: ""
        }
    }




    inputChangeHandeler = (event) => {

        this.setState({
            [event.target.name]: event.target.value,
            fnameerror:"",
            lnameerror:"",
            emailerror:"",
            passworderror:"",
            passlengtherror:"",
            phoneerror:""
        })
    }

    submitHandeler=(event)=>{
        event.preventDefault()
   
        if(!this.state.fname){
            this.setState({
                fnameerror:"Please Enter Your First Name"
            })
        }
        
       else if(!this.state.lname){
            this.setState({
                lnameerror:"Please Enter Your Last Name"
            })
        } 
        
       else if(!this.state.email){
            this.setState({
                emailerror:"Please Enter Your Email"
            })
        } 
      else if(!this.state.phone){
            this.setState({
                phoneerror:"Please Enter Your Phone"
            })
        } 
        
        else if (!this.state.password){
        
                this.setState({
                    passworderror: "Please Enter Your Password"
                })
            
          
        }
        else{
            Axios.post(`http://localhost:2001/evaly/api/user/register`,{
                fname:this.state.fname,
                lname:this.state.lname,
                email:this.state.email,
                password:this.state.password,
                phone:this.state.phone
            }).then(user=>{
                // let path = `/login`;
                // history.push(path);
              //  window.location.href = "http://localhost:3000/login"
                this.props.history.push("/login");
            })
        }

   

    }




    render() {
        return (
            <div className="register">

                <form>
                <label htmlFor="fname">Enter First Name</label><br />
                <input
                    className={` ${this.state.fnameerror ? "error" : ""}`}
                    type="text"
                    onChange={this.inputChangeHandeler}
                    name="fname"
                    id="fname"
                    value={this.state.fname}
                    placeholder="Enter Your First Name"
                /><br />
                {
                    this.state.fnameerror ? <p>{this.state.fnameerror}</p>   : ""
                }
              


                <label htmlFor="lname">Enter Last Name</label><br />
                <input
                     className={` ${this.state.lnameerror ? "error" : ""}`}
                    type="text"
                    onChange={this.inputChangeHandeler}
                    name="lname"
                    id="lname"
                    value={this.state.lname}
                    placeholder="Enter Your Last Name"
                /><br />
                {
                    this.state.lnameerror ? <p>{this.state.lnameerror}</p> : ""
                }<br />



                <label htmlFor="email">Enter Your Email</label><br />
                <input
                  className={` ${this.state.emailerror ? "error" : ""}`}
                    type="email"
                    onChange={this.inputChangeHandeler}
                    name="email"
                    id="email"
                    value={this.state.email}
                    placeholder="Enter Your Email"
                /><br />
                {
                    this.state.emailerror ? <p>{this.state.emailerror}</p> : ""
                }
                <br />

                <label htmlFor="phone">Enter Your Phone</label><br />
                <input
                  className={` ${this.state.phoneerror ? "error" : ""}`}
                    type="text"
                    onChange={this.inputChangeHandeler}
                    name="phone"
                    id="phone"
                    value={this.state.phone}
                    placeholder="Enter Your Phone"
                /><br />
                {
                    this.state.phoneerror ? <p>{this.state.phoneerror}</p> : ""
                }<br />

                <label htmlFor="password">Enter Your Password</label><br />
                <input
                    className={` ${this.state.password ? "error" : ""}`}
                    type="password"
                    onChange={this.inputChangeHandeler}
                    name="password"
                    id="password"
                    value={this.state.password}
                    placeholder="Enter Your Password"
                /><br />
                {
                    this.state.passworderror ? <p>{this.state.passworderror}</p> : ""
                }<br/>


                <button onClick={this.submitHandeler.bind(this)} className="btn btn-primary">Register</button>
                </form>

            </div>
        );
    }
}

export default withRouter(Register);