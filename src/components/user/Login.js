import React, { Component } from 'react';
import './css/login.css'
import Axios from 'axios'
import { Cookies } from "react-cookie";
import { withRouter } from 'react-router-dom';
import jwtDecode from 'jwt-decode'

class Login extends Component {

    constructor(){
        super();


        this.state={
         
            email:"",
            password:"",
            emailerror:"",
            passworderror:"",
     
        }
    }




    inputChangeHandeler=(event)=>{

        this.setState({
           [ event.target.name]:event.target.value,
           emailerror:"",
           passworderror:""
        })
    }

   submitHandeler=(event)=>{
      event.preventDefault()

          
   if (!this.state.email) {
       this.setState({
         emailerror: "Please Enter Your Email"
       })
     } 
   else if (!this.state.password) {

     this.setState({
       passworderror: "Please Enter Your Password"
     })
  }else{
     Axios.post(`http://localhost:2001/evaly/api/user/login`,{
        email:this.state.email,
        password:this.state.password
      }).then(res=>{
        let token=res.data.token
       localStorage.setItem("token",res.data.token)
        let decode = jwtDecode(token)
        console.log(decode)
       this.props.history.push("/");
     

      }).catch(error=>console.log(error))



  }
 


  }




    render() {
        return (
            <div className="login">   
            <h1>Login Evaly</h1>
              <form>
                <label htmlFor="email">Enter Your Email</label><br/>
                <input
                className={` ${this.state.emailerror ? "error" : ""}`}

                    type="email"
                    onChange={this.inputChangeHandeler}
                    name="email"
                    id="email"
                    value={this.state.email}
                    placeholder="Enter Your Email"
                     />    <br />
                    {
                      this.state.emailerror?<p>{this.state.emailerror}</p>:""  
              }      <br /> 
              <label htmlFor="password">Enter Your Password</label><br/>
                <input
                className={` ${this.state.passworderror ? "error" : ""}`}

                    type="password"
                    onChange={this.inputChangeHandeler}
                    name="password"
                    id="password"
                    value={this.state.password}
                    placeholder="Enter Your Password"
                     />    <br />
                    {
                      this.state.passworderror?<p>{this.state.passworderror}</p>:""  
                    }
                    <br/>

                    <button onClick={this.submitHandeler.bind(this)} className="btn btn-primary">Login</button>



               </form>   

            </div>
        );
    }
}

export default withRouter(Login);