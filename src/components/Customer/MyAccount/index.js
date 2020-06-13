import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { inject, observer } from "mobx-react";

import {Grid} from '@material-ui/core';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import SearchIcon from '@material-ui/icons/Search';






import Header from '../Header';
import Footer from '../Footer';

const styles={
   marginBottom:"4%"
}

 class MyAccount extends Component {

  handleChange = event => {
    this.setState({ selected: event.target.value, name: event.target.name});
  };

  
  render() {
    
    return (
      
      <div>
       <Header/>
   
      <Grid style={styles}>
        <Grid>
      
      </Grid>
   
    </Grid>
    <Grid>
    
    </Grid>

  <Grid maxWidth="100" >
< Footer />
</Grid>  
</div>
     




    );
  }
}

export default inject("startingStore")(observer(MyAccount));
