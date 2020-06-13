import { Grid } from '@material-ui/core';
import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import ItemInfo from './itemInfo';
import MyCart from './myCart';
import AccessD from './AccessDistributor';
import Register from './Register';
import CustomizedSteppers from './Stepper';

import UserForm from './RegisterS/UserForm.js'
import CheckOutGrid from './CheckOut'



 class CustRoute extends Component {

  handleChange = event => {
    this.setState({ selected: event.target.value, name: event.target.name});
  };

  
  render() {
    
    return (
      <Router>
      <div >
        <Grid>
       <Header/>
       </Grid>

</div>
     

<Switch>
      <Route exact path="/Customer" render={()=><AccessD/>}/>
      <Route path="/Customer/Register" render={()=><Register/>}/>
    <Route path="/Customer/Home" render={()=><Home/>}/>
        <Route path="/Customer/itemInfo" render={()=><ItemInfo/>}/>
       <Route path="/Customer/Stepper" render={()=><CustomizedSteppers/>}/>
       <Route path="/Customer/RegisterS" render={()=><UserForm/>}/>
   
      <Route  path="/Customer/MyCart" render={()=><MyCart/>}/>
      <Route path="/Customer/CheckOut" render={()=><CheckOutGrid/>}/>
     
      {/*<Route  path="/Admin/AdminUserManagement" render={()=><AdminUserManagement/>}/> */}
      
  </Switch>



<Grid container sm={12} xs={12} direction='row'  >
  <Grid item sm={12} xs={12}  >
       <Footer/>
       </Grid>
       </Grid>

</Router>



    );
  }
}

export default withRouter(inject("startingStore")(observer(CustRoute)));
