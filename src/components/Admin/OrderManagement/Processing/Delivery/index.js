import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import {inject,observer} from 'mobx-react'
class Delivery extends React.Component {
  state = {  }
​
​
  // componentDidMount(){
  //   let {orderStore:{getOrder}}=this.props;
  //   getOrder();
  // }
​
  render() { 
​
​
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
​
let {orderStore:{listOfOrder,listOfUsers}}=this.props;
let getDis = JSON.parse(sessionStorage.getItem('userData'))
let filpacking =listOfOrder.filter(order => order.orderStatus === 'Dispatch' && order.distributor_ID === getDis.distributor_ID)
​
​
​
​
 function DeliveryGrid() {
  const classes = useStyles();
  const [filter,setFilter]= React.useState("")
​
  let getorder =filpacking.map(orders =>{
​
    if(filter.length !== 0){
      if( orders.orderID.startsWith(filter) 
      ){
    return (
      <Grid item xs={12} sm={12}>
      <Paper style={{padding:"12px"}}>
      <Grid container direction="row" item xs={12} sm={12}>
    <Grid item xs={6}  sm={6} alignItems="left">
    <Typography style={{textAlign:"left"}}>Reference # : <span style={{color:"#208769",fontWeight:"bold"}}>  {orders.orderID}</span></Typography>
    <Typography  style={{textAlign:"left"}}>Customer name :<span style={{fontWeight:"bold"}}> {listOfUsers.filter(accs => accs.account_ID === orders.account_ID).map((account)=> {return `${account.account_fName} ${account.account_mName} ${account.account_lName}`  } ) }</span></Typography>
     <Typography style={{textAlign:"left"}}>Address :<span style={{fontWeight:"bold"}}> {listOfUsers.filter(accs => accs.account_ID === orders.account_ID).map((account)=> {return `${account.account_address}`  } ) }</span></Typography>
    </Grid>
   
    <Grid item xs={6} sm={6} stle={{border:"1px solid red"}}>
    <Typography style={{textAlign:"left"}}>Date Ordered :<span style={{fontWeight:"bold"}}>{orders.orderDate}</span></Typography>
    <Typography  style={{textAlign:"left"}}>In Charge : <span style={{fontWeight:"bold"}}> {listOfUsers.filter(accs => accs.account_ID === orders.dispatcher_ID).map((account)=> {return `${account.account_fName} ${account.account_mName} ${account.account_lName}`  } ) }</span></Typography>
     <Typography style={{textAlign:"left"}}>Anticipated Delivery Time :</Typography>
    </Grid>
    </Grid>
    </Paper>
    </Grid>
  )
}
else{
  return null
}
}
return(
  <Grid item xs={12} sm={12}>
  <Paper style={{padding:"12px"}}>
  <Grid container direction="row" item xs={12} sm={12}>
<Grid item xs={6}  sm={6} alignItems="left">
<Typography style={{textAlign:"left"}}>Reference # : <span style={{color:"#208769",fontWeight:"bold"}}>  {orders.orderID}</span></Typography>
<Typography  style={{textAlign:"left"}}>Customer name :<span style={{fontWeight:"bold"}}> {listOfUsers.filter(accs => accs.account_ID === orders.account_ID).map((account)=> {return `${account.account_fName} ${account.account_mName} ${account.account_lName}`  } ) }</span></Typography>
 <Typography style={{textAlign:"left"}}>Address :<span style={{fontWeight:"bold"}}> {listOfUsers.filter(accs => accs.account_ID === orders.account_ID).map((account)=> {return `${account.account_address}`  } ) }</span></Typography>
</Grid>
​
<Grid item xs={6} sm={6} stle={{border:"1px solid red"}}>
<Typography style={{textAlign:"left"}}>Date Ordered :<span style={{fontWeight:"bold"}}>{orders.orderDate}</span></Typography>
<Typography  style={{textAlign:"left"}}>In Charge : <span style={{fontWeight:"bold"}}> {listOfUsers.filter(accs => accs.account_ID === orders.dispatcher_ID).map((account)=> {return `${account.account_fName} ${account.account_mName} ${account.account_lName}`  } ) }</span></Typography>
 <Typography style={{textAlign:"left"}}>Anticipated Delivery Time :</Typography>
</Grid>
</Grid>
</Paper>
</Grid>
    )
  
  })
​
  return (
    <div className={classes.root}>
    <Grid container spacing={3} xs={12} sm={12}>
    
    <Grid item xs={9} sm={9}>
      <Typography variant="h5"  style={{color:"#208769",float:"left",marginLeft:"5px"}}>Orders On Delivery</Typography>
    </Grid>
​
 <Grid item xs={3} sm={3}>
        <Paper component="form" style={{margin:"auto",height:"38px"}}>
  
    <InputBase 
    type="search"
    
     fullWidth={false} 
     style={{marginTop:"1.5px",
     width:"80%",
     marginLeft:"10px"}}
      placeholder="Search "
      inputProps={{ 'aria-label': 'search google maps' }}
      onChange={(e)=>setFilter(e.target.value)}
    />
    <IconButton type="submit"  aria-label="search" style={{backgroundColor:"orange",borderRadius:"4px",height:"38px",float:"right"}}>
      <  SearchIcon style={{color:"white",marginTop:'-15%',float:"right"}}/>
    </IconButton>
  
  </Paper >
    </Grid>
    {getorder}
   
​
  </Grid>
    </div>
  );
}
​
​
return ( 
  <DeliveryGrid/>
 );
}
}
​
export default inject('orderStore')(observer(Delivery));