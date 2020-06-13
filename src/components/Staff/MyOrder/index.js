import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Typography,Divider} from '@material-ui/core'
import {Button,Dialog} from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {inject,observer} from 'mobx-react';

import OrderTable from './OrderTable'
import Finish from './Finish'
import Report from './Report'
class Orders extends React.Component {
  // state = { order:[]  }

  componentDidMount(){
    let {startingStore:{staffAssigned,getOrder,getAccounts}}=this.props
    getOrder();
    staffAssigned();
    getAccounts();
  }

  constructor(props){

    
    super(props)
    this.state = {
      listOfOrder : [],
      // listOfProductImg : []
    }
  }

  render() { 
 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function createData(name, address) {
  return { name, address};
}


let getuserId = JSON.parse(sessionStorage.getItem('userData'))


let {startingStore:{listOfOrder,order,listOfUsers}}=this.props;

let filterOrder = listOfOrder.filter(order =>{
  let getuserId = JSON.parse(sessionStorage.getItem('userData'))
 console.log(getuserId.account_ID,"orderId")
  if(order.packer_ID === getuserId.account_ID || order.dispatcher_ID === getuserId.account_ID){
    return order
  }

})
// let getacc =filterOrder.map(account => {return account.account_ID})

let filterAccount = listOfUsers.filter(account => account.account_ID === getuserId.account_ID)

let account =filterAccount.map(accounts => {
  
  return(createData(
    
    
    `${accounts.account_fName} ${accounts.account_mName} ${accounts.account_lName}`,accounts.account_address
   
   
   
   )) 
  
  
  } )

let getMyOrder =filterOrder.map(orders => {

  return(
  
  <Grid item xs={12} sm={6}>
            <Paper style={{padding:"10px"}}>
             <Grid container xs={12} sm={12}>
               <Grid item xs={12} sm={12}>
              <Typography variant="p" style={{fontWeight:"bold"}}> REF #: </Typography>{orders.orderID}
              </Grid>
              {account.map((row) => (
                <div>
              <Grid item xs={12} sm={12}>
              <Typography variant="p" style={{fontWeight:"bold"}}>Name : </Typography>{row.name}
              </Grid>
              <Grid item xs={12} sm={12}>
              <Typography variant="p" style={{fontWeight:"bold"}}>Address : </Typography>{row.address}
              </Grid>
              </div>
                ))}
              <Grid item xs={12} sm={12}>
              <Typography variant="p" style={{fontWeight:"bold"}}>Order Date/Time : </Typography>{orders.orderDate}
              </Grid>
             
              </Grid>
              <Divider style={{marginTop:"8px",marginBottom:"8px"}}/>
  
              <Grid container xs={12} sm={12}>
                <OrderTable myorders={orders.packer_ID} />
              </Grid>
              <Grid container xs={12} sm={12} style={{textAlign:"center"}}>
                <Grid item xs={6} sm={6} style={{marginTop:"10px"}}><Report/> </Grid>
                <Grid item xs={6} sm={6} style={{marginTop:"10px"}}><Finish/>
                  
            
                  
                   </Grid>
              </Grid>
            </Paper>
          </Grid>
    
  )
  
  })

  // {
  //   [...dateJobMap.keys()].map(jobsForDate =>
  //     jobsForDate.map(job => (
  //       <TruckJobComp job = { job } />
  //     ))
  //   )
  // }

 function MyOrders() {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Typography variant="h6"> MyOrders</Typography> 
        <Divider style={{marginTop:"10px",marginBottom:"10px"}} />
        </Grid>
        {getMyOrder}
      
      </Grid>
    </div>
  );
}

return ( 
  <MyOrders/>
 );
}
}

export default inject("startingStore")(observer(Orders));