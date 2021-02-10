import React, {Component} from 'react';
import ManageAll from './ManageAll'
import AdProducts from '../admin/AdProducts'
import ShowSingleProduct from './product/ShowSingleProduct'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './user/Login';
import Register from './user/Register';


class App extends Component {
 
    render() {
        return (
          
            <BrowserRouter>
            <div> 
                 
                <Switch>
                     <Route path="/" exact component={ManageAll} />
                    <Route path="/addproduct" component={AdProducts}/>
                    <Route path="/product/:productid" component={ShowSingleProduct}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
        
                </Switch>
            </div>
            </BrowserRouter>
        );
    }
}

export default App;