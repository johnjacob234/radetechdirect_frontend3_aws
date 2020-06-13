import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';

import SearchIcon from '@material-ui/icons/Search';
import {inject,observer} from 'mobx-react'

class Completed extends React.Component {
  state = {  }
  render() { 


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


let {startingStore:{listOfOrder}}=this.props;
let getDis = JSON.parse(sessionStorage.getItem('userData'))
let filpacking =listOfOrder.filter(order => order.orderStatus === 'Completed' && order.distributor_ID === getDis.distributor_ID)


let getorder =filpacking.map(orders =>{

  return(
    <Grid item xs={12} sm={12}>
    <Paper style={{padding:"12px"}}>
    <Grid container direction="row" item xs={12} sm={12}>
  <Grid item xs={6}  sm={6} alignItems="left">
  <Typography style={{color:"#208769",textAlign:"left"}}>Reference # : {orders.orderID}</Typography>
  <Typography  style={{textAlign:"left"}}>Customer name :{orders.account_ID}</Typography>
   <Typography style={{textAlign:"left"}}>Address :</Typography>
  </Grid>
 
  <Grid item xs={6} sm={6} stle={{border:"1px solid red"}}>
  <Typography style={{textAlign:"left"}}>Date Ordered :{orders.orderDate}</Typography>
  <Typography  style={{textAlign:"left"}}>In Charge : {orders.packer_ID}</Typography>
   <Typography style={{textAlign:"left"}}>Anticipated Delivery Date/Time :</Typography>
  </Grid>
  </Grid>
  </Paper>
  </Grid>

  )

})
 function CompletedGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     <Grid container spacing={3} xs={12} sm={12}>
      
      <Grid item xs={6} sm={6}>
        <Typography variant="h5"  style={{color:"#208769",float:"left",marginLeft:"5px"}}>Completed</Typography>
      </Grid>
      <Grid item xs={6} sm={6}>
      <Paper component="form" style={{margin:"auto",height:"38px"}}>
  
  <InputBase 
  type="search"
  
   fullWidth={false} 
   style={{marginTop:"1.5px",
   width:"80%",
   marginLeft:"10px"}}
    placeholder="Search "
    inputProps={{ 'aria-label': 'search google maps' }}
  />
  <IconButton type="submit"  aria-label="search" style={{backgroundColor:"orange",borderRadius:"4px",height:"38px",float:"right"}}>
    <  SearchIcon style={{color:"white",marginTop:'-15%',float:"right"}}/>
  </IconButton>

</Paper >
      </Grid>
   
      {getorder}
    
      {/* <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Grid container direction="row">
      <Grid item  sm={6} alignItems="left">
       <Typography style={{color:"#208769",textAlign:"left"}}>Reference # :</Typography>
       <Typography  style={{textAlign:"left"}}>Customer name :</Typography>
       <Typography style={{textAlign:"left"}}>Address :</Typography>
      </Grid>
     
      <Grid item sm={6} stle={{border:"1px solid red"}}>
      <Typography style={{textAlign:"left"}}>Date Ordered :</Typography>
       <Typography  style={{textAlign:"left"}}>In Charge :</Typography>
       <Typography style={{textAlign:"left"}}>Anticipated Delivery Date/Time :</Typography>
      </Grid>
      </Grid>
      </Paper>
      </Grid>
      <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Grid container direction="row">
      <Grid item  sm={6} alignItems="left">
       <Typography style={{color:"#208769",textAlign:"left"}}>Reference # :</Typography>
       <Typography  style={{textAlign:"left"}}>Customer name :</Typography>
       <Typography style={{textAlign:"left"}}>Address :</Typography>
      </Grid>
     
      <Grid item sm={6} stle={{border:"1px solid red"}}>
      <Typography style={{textAlign:"left"}}>Date Ordered :</Typography>
       <Typography  style={{textAlign:"left"}}>In Charge :</Typography>
       <Typography style={{textAlign:"left"}}>Anticipated Delivery Date/Time :</Typography>
      </Grid>
      </Grid>
      </Paper>
      </Grid>
      <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Grid container direction="row">
      <Grid item  sm={6} alignItems="left">
       <Typography style={{color:"#208769",textAlign:"left"}}>Reference # :</Typography>
       <Typography  style={{textAlign:"left"}}>Customer name :</Typography>
       <Typography style={{textAlign:"left"}}>Address :</Typography>
      </Grid>
     
      <Grid item sm={6} stle={{border:"1px solid red"}}>
      <Typography style={{textAlign:"left"}}>Date Ordered :</Typography>
       <Typography  style={{textAlign:"left"}}>In Charge :</Typography>
       <Typography style={{textAlign:"left"}}>Anticipated Delivery Date/Time :</Typography>
      </Grid>
      </Grid>
      </Paper>
      </Grid> */}
    </Grid>
    </div>
  );
}

return ( 

  <CompletedGrid/>
 );
}
}

export default inject('startingStore')(observer(Completed));