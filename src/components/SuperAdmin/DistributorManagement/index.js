import { Divider, Grid, Typography } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import DestributorTabs from './tab.js';

class adDrawer extends Component{

render(){
  function DistributorManagement() {
  



  return (
<div  style={{display:"flex" }}>
  <Grid container lg={12} sm={12} xs={12}>
    

      <Grid container direction="row" lg={12} sm={12} xs={12}>
        <Typography variant="h5" >
           Distributor Management
        </Typography>
        
        </Grid>
        <Divider style ={{marginBottom:"5px"}}/>

        <Grid container style={{marginTop:"1%"}} lg={12} sm={12} xs={12}>
        <DestributorTabs/>
        </Grid >
        
       
     
      </Grid>
      </div>
  );
}
return ( 
       
  <DistributorManagement/>


 );

}
}
export default withRouter(inject("startingStore")(observer(adDrawer)));





