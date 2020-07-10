import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import {Grid} from '@material-ui/core';
import CenteredTabs from './tab.js';
import {
  BrowserRouter as Router,withRouter,


} from "react-router-dom";







const styles={
   marginBottom:"5%",
   
}

 class Home extends Component {

  handleChange = event => {
    this.setState({ selected: event.target.value, name: event.target.name});
  };

  componentDidMount() {
    let {customerStore:{getProducts,getDistributors,product }}=this.props;
  
        getDistributors();
        
        // product.setProperty('distributor_ID',this.props.location.state.id)
        getProducts();  
       
    
  }
  
  render() {
 
    return (
      
      <div >
        {/* <Grid>
       <Header/>
       </Grid> */}
      <Grid style={styles}>
        
      <CenteredTabs />
     
   
    </Grid>
   

  <Grid maxWidth="100" >
{/* < Footer /> */}
</Grid>  
</div>
     




    );
  }
}

export default withRouter(inject("customerStore")(observer(Home)));
