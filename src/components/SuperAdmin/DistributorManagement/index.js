import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import {inject,observer} from 'mobx-react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Grid,Typography,Divider} from '@material-ui/core';
// import RegisterCustomer from './addAccount.js'
import DestributorTabs from './tab.js';
// import UploadBulk from './UploadBulk'




const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper:{
   backgroundColor:"#208769"
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
 
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width:"100%"
  },
}));

class adDrawer extends Component{




componentDidMount() {
  let {startingStore:{getAccounts,getProducts }}=this.props;

  getProducts();
      getAccounts();
  

  
}



render(){
  function DistributorManagement() {
  const classes = useStyles();



  return (
<div  style={{display:"flex" }}>
  <Grid>
      <main className={classes.content} >
        <div className={classes.toolbar} />

      <Grid container direction="row">
        <Typography variant="h5" >
           Distributor Management
        </Typography>
        
        </Grid>
        <Divider style ={{marginBottom:"5px"}}/>
        <Grid
  container
  direction="row"
  justify="flex-end"
  alignItems="flex-start"
  spacing ="2"
>
  <Grid item style={{marginRight:"5px"}}>
        {/* <RegisterCustomer/> */}
        </Grid>
        <Grid item>
        {/* <UploadBulk/> */}
        </Grid>
        </Grid>
        <Grid container style={{marginTop:"1%"}}>
        <DestributorTabs/>
        </Grid >
        
       
      </main>
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





