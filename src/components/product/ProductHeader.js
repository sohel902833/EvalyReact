import React from 'react';
import './css/itemheader.css'
class ProductHeader extends React.Component {

    state={
        search:""
    }

    changeHandeler=(event)=>{
         this.setState(
            {
                search:event.target.value
            }
        )  
    }
    componentDidMount=()=>{
    
    }

    searchHandeler=(event)=>{
     
        if (this.state.search == "") {
            this.props.method("true")
        }
        this.props.method(this.state.search)


    }





    render(){
        return (

                <div className="shopbycategory-top">
                    <div className="heading">
                        <h2>{this.props.name}</h2>
                        <div className="search">
                            <input
                                onChange={this.changeHandeler}
                                 type="text"
                                 placeholder="Search......" 
                                 value={this.state.search}
                                 />
                            <div className="searchbutton">
                                <button onClick={this.searchHandeler}><i style={{ color: "#ffffff" }} className="fas fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
    
        );
    }
    
}

export default ProductHeader;