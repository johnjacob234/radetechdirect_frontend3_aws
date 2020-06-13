import React from 'react';
import {withRouter} from 'react-router-dom'
import {inject,observer} from 'mobx-react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import CRMTab from './tab.js';

class adDrawer extends React.Component{

  componentDidMount() {
    let {startingStore:{getAccounts }}=this.props;
  
  
        getAccounts();  
  
    
  }



  state = {}
render(){
  function CRM() {



  return (

        <div>

      <Grid container direction="row">
        <Typography variant="h5" >
           Customer Relationship Management
        </Typography>
        
        </Grid>
        <Divider style ={{marginBottom:"20px"}}/>

        <Grid container sm={12} style={{marginTop:"1%"}}>
          <Grid item sm={12}>
        <CRMTab/>
        </Grid>
        </Grid >
        
       
  
      </div>
  );
}
return ( 
       
  <CRM/>


 );

}
}
export default withRouter(inject("startingStore")(observer(adDrawer)));





