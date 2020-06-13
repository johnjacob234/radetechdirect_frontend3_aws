import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Paper,TextField,Button} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {inject,observer} from 'mobx-react'
import OrderTable from './OrderTable'
import PaymentTab from './PaymentTab'
import {BrowserRouter as Router,withRouter} from 'react-router-dom'
import moment from 'moment'
class CheckOut extends React.Component {
    state = {  }

    componentDidMount(){
      let {startingStore:{getAccounts}}=this.props;

      getAccounts();
    }
    render() { 
let {startingStore:{listOfUsers,addOrder,order,listOfCart}}=this.props;

    let date = new Date();
    function getHash(input){
      var hash = 0, len = input.length;
      for (var i = 0; i < len; i++) {
        hash  = ((hash << 5) - hash) + input.charCodeAt(i);
        hash |= 0; // to 32bit integer
      }



      return hash;
    }

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
console.log(this.props.location.state.account_id,'sadsa')



function accountData( fname, lname, storename, storeadd, contactno) {
  return {  fname, lname, storename, storeadd, contactno };
}

let accountFiler = listOfUsers.filter(account => account.account_ID === this.props.location.state.account_id)

let getaccount =accountFiler.map(account =>{

  return (accountData(

    account.account_fName,account.account_lName,account.account_shopName,account.account_shopAddress,account.account_contactNo
  ))
})

let cartFiler = listOfCart.filter(account => account.account_ID === this.props.location.state.account_id)
let getitem =cartFiler.map(item => { 
  return (item.product_ID
  )
})

let getq =cartFiler.map(item => { 
  return (item.product_Quantity
  )
})

let getd =cartFiler.map(item => { 
  return (item.distributor_ID
  )
})
let rowss =  listOfCart.map(product => {

  return (

    listOfCart.filter((amount) => amount.account_ID === this.props.location.state.account_id)
    .reduce((sum, record) => parseInt(sum) + parseInt(record.product_TotalAmount) , 0)



    );

 })
let placeOrder = ()=>{
     
    order.setProperty('orderID',`${getHash(date.getFullYear())}-${ Math.floor(1000 + Math.random() * 9000)}`)
    order.setProperty('account_ID',this.props.location.state.account_id)
    order.setProperty('modeOfPayment','Cash On Delivery')
    order.setProperty('orderDate',moment().format('MMMM Do YYYY, h:mm:ss a'))
    order.setProperty('orderItems',getitem)
    order.setProperty('order_Quantity',getq)
    order.setProperty('orderStatus','Pending')
    order.setProperty('paymentStatus','Pending')
    order.setProperty("order_totalPayment",rowss.pop())
   
    order.setProperty('distributor_ID',getd[0])

    addOrder();

}


 function CheckOutGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{marginTop:'16px'}}>


<Grid container direction="row" sm={10} xs={11} alignItems='center' justify='center'>
    <Grid item sm={12} xs={12} style={{margin:"auto"}}>
<Paper style={{marginLeft:"32px"}}>
    <Grid container sm={12} >
       <Grid item  sm={1} xs={1} style={{backgroundColor:"#208769",paddingRight:"10px"}}></Grid>
       <Grid item sm={5} xs={5} style={{paddingTop:"10px",paddingBottom:"10px",marginleft:"15px"}}><Typography variant="p" style={{fontWeight:"bold",width:"98%"}}>&nbsp;&nbsp;Check Out</Typography> </Grid>
       <Grid item  sm={5} xs={6} style={{paddingRight:"10px",color:"#208769",textAlign:"right",paddingTop:"10px",paddingBottom:"10px"}}></Grid>
       </Grid>
       </Paper>
    </Grid>
    </Grid>

      <Grid container sm={6} xs={12} spacing={2} alignItems='center' justify='center'>
        <Grid item sm={6} xs={12}>
            <Grid container sm={12} xs={12} alignItems='center' justify='center'>
          <Paper className={classes.paper} style={{marginTop:"16px"}}>
              <Grid item sm={12} xs={12}>
              <Typography variant='h6' style={{fontWeight:"bold"}}>Billing Details</Typography>
              </Grid>
              {getaccount.map((myaccount)=>(
              <form autoComplete='off'>
             
              <Grid item sm={12} xs={12}>
              <TextField disabled id="outlined-basic" label="First Name" defaultValue={myaccount.fname} variant="outlined" 
              style={{marginBottom:"8px"}} size='small'
              // onChange={account_fName=>{
              //   account.setProperty("account_fName",account_fName.target.value)
              // }}
              />
              </Grid>

              <Grid item sm={12} xs={12}>
              <TextField disabled id="outlined-basic" label="Last Name" defaultValue={myaccount.lname} variant="outlined" 
              style={{marginBottom:"8px"}} size='small'
              // onChange={account_lName=>{
              //   account.setProperty("account_lName",account_lName.target.value)
              // }}
              />
              </Grid>

              <Grid item sm={12} xs={12}>
              <TextField disabled id="outlined-basic" label="Store Name" defaultValue={myaccount.storename} variant="outlined" 
              style={{marginBottom:"8px"}} size='small' 
              // onChange={account_storeName=>{
              //   account.setProperty("account_storeName",account_storeName.target.value)
              // }}
              />
              </Grid>

              <Grid item sm={12} xs={12}>
              <TextField disabled id="outlined-basic" label="Store Address" defaultValue={myaccount.storeadd} variant="outlined" 
              style={{marginBottom:"8px"}} size='small' 
              // onChange={account_storeAddress=>{
              //   account.setProperty("account_storeAddress",account_storeAddress.target.value)
              // }}
              />
              </Grid>

              <Grid item sm={12} xs={12}>
              <TextField id="outlined-basic" label="Contact No." defaultValue={myaccount.contactno}
              variant="outlined"  style={{marginBottom:"8px"}} size='small' 
              // onChange={account_contactNo=>{
              //   account.setProperty("account_contactNo",account_contactNo.target.value)
              // }}
              />
              </Grid>

              <Grid item sm={12} xs={12}>
              <Typography variant='h6' >Additional Info </Typography>
              </Grid>

              <Grid item sm={12} xs={12}>
              <TextField
          id="outlined-multiline-static"
          label="Enter Instructions"
          multiline
          rows={4}
          onChange={order_note=>{
            order.setProperty("order_addedInfo",order_note.target.value)
          }}
          variant="outlined"
        />
              </Grid>
           
              </form>
              ))}
          </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <Grid container sm={12} xs={12} alignItems='center' justify='center'>
            
            <Grid item xs={12} sm={12}>
            <Typography variant='h6' style={{fontWeight:"bold"}}>My Order</Typography>
            </Grid>

            <Grid item xs={12} sm={12}>
              <OrderTable/>
            </Grid>
            
            
            
            
             </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <Grid container sm={12} xs={12} alignItems='center' justify='center'>
          <Grid item xs={12} sm={12}>
            <Typography variant='h6' style={{fontWeight:"bold"}}>Payment Method</Typography>
            </Grid>

            <Grid item xs={12} sm={12}>
            <PaymentTab/>
            </Grid>

          </Grid>

          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} style={{textAlign:"center"}}>
          <Button variant='contained' style={{backgroundColor:'#208769',color:'white',marginBottom:"100px"}} onClick={()=>{placeOrder()}}>Place Order</Button>
        </Grid>
      
      </Grid>
    </div>
  );
}
return ( 
    <CheckOutGrid/>
 );
}
}

export default withRouter(inject('startingStore')(observer(CheckOut)));
