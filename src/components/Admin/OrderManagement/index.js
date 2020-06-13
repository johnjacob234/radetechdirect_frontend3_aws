import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import OrderTab from './tab.js';
import DashGrid from './OrderDashboard'




class adDrawer extends Component{


//   constructor(props) {
//     super(props);
    
// }

  state = {}
render(){
  function OrderManagement() {

  // const theme = useTheme();
  // const [open, setOpen] = React.useState(false);


  return (
<div style={{display:"flex"}}>
      <main >
        <div  />

      <Grid container direction="row">
        <Typography variant="h5" >
           Order Management
        </Typography>
        
        </Grid>
        
        <Divider style ={{marginBottom:"5px"}}/>
        <Grid container direction="row">
       <DashGrid/>
        
        </Grid>

        
        <Grid container style={{marginTop:"1%"}}>
        <OrderTab/>
        </Grid >
        
       
      </main>
      </div>
  );
}
return ( 
       
  <OrderManagement/>


 );

}
}
export default withRouter(inject("startingStore")(observer(adDrawer)));





