import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Typography,Button} from '@material-ui/core'
import {inject,observer} from 'mobx-react'
import CartTable from './cartTable.js'
import moment from 'moment';

class Cart extends React.Component {
  constructor(props){


    super(props)
    this.state = {
      listOfProducts : [],

    }
  }
    componentDidMount() {

      let {startingStore:{getCart }}=this.props;


      getCart();


    }

    render() {
  

      let date = new Date();
      function getHash(input){
        var hash = 0, len = input.length;
        for (var i = 0; i < len; i++) {
          hash  = ((hash << 5) - hash) + input.charCodeAt(i);
          hash |= 0; // to 32bit integer
        }



        return hash;
      }

//  const checkOut = () =>{
//   let getuname = JSON.parse(sessionStorage.getItem('userData'))
//   let {startingStore:{addOrder,deleteCart,order}}=this.props;

//     order.setProperty("orderID",`${date.getDate()}-${getHash(getuname.account_username)}-${ Math.floor(1000 + Math.random() * 9000)}`)
//     order.setProperty("distributor_ID",getuname.distributor_ID)
//     order.setProperty("orderDate",moment().format('MMMM Do YYYY, h:mm:ss a'))
//    order.setProperty("account_ID",getuname.account_ID)
//    order.setProperty("modeOfPayment",'Cash on Delivery')
//    order.setProperty("orderStatus",'Packing')
//    order.setProperty("paymentStatus",'Paid')
//    order.setProperty("orderItes",)
//     addOrder();
//     //  deleteCart();

//  }

// const totalamount =()=>{
  
  let {startingStore:{listOfCart}}=this.props;
  // let getcart =listOfCart.filter( (mycart )=> mycart.account_ID === getuname.account_ID)
  // console.log(getcart,"mycart")
  let a = listOfCart.length;



    //  console.log(mycart.product_Price[],"getid")
    // listOfCart.filter((stock) => stock.account_ID === getuname.account_ID)
    // .reduce((sum, record) => sum + record.product_Price , 0)

  //   let totala =[{level:parseInt(mycart.product_Price)},];



  //  let  total = totala[0];
  //  console.log("total",totala)
  //  let totalcar += total;

  // const arr = [amount:{mycart.product_Price},];

  // const total = arr.reduce((prev,next) => prev + next.amount,0);

  // console.log(total);
  // var a = [{level:mycart.product_Price}]
// console.log(a.reduce( function(cnt,o){ return cnt + o.level; }, 0))


  // {return listOfCart.filter((mycartammount) => mycart.account_ID === getuname.account_ID)
    // .reduce((sum, record) => sum + record.product_replenishQty , 0) }

   
  let rows =  listOfCart.map(product => {
    let getuname = JSON.parse(sessionStorage.getItem('userData'))
    return (

      listOfCart.filter((amount) => amount.account_ID === getuname.account_ID)
      .reduce((sum, record) => parseInt(sum) + parseInt(record.product_Price) , 0)



      );

   })








function MyCart(){


return(
<div style={{marginTop:"20px"}}>

    <Grid container direction="row" sm={10} xs={11} >
    <Grid item sm={12} xs={12} style={{margin:"auto"}}>
<Paper style={{marginLeft:"32px"}}>
    <Grid container sm={12} >
       <Grid item  sm={1} xs={1} style={{backgroundColor:"#208769",paddingRight:"10px"}}></Grid>
       <Grid item sm={5} xs={5} style={{paddingTop:"10px",paddingBottom:"10px",marginleft:"15px"}}><Typography variant="p" style={{fontWeight:"bold",width:"98%"}}>&nbsp;&nbsp;My Cart</Typography> </Grid>
       <Grid item  sm={5} xs={6} style={{paddingRight:"10px",color:"#208769",textAlign:"right",paddingTop:"10px",paddingBottom:"10px",}}><Typography variant="p">{a} items on cart</Typography></Grid>
       </Grid>
       </Paper>
    </Grid>
    </Grid>

<Grid container sm={12} xs={12} style={{marginTop:"16px",textAign:"center"}}>
<Grid item sm={11} xs={11} style={{margin:"auto"}}>

<CartTable/>
</Grid>



</Grid>

{/* {createData.map((row,index) =>{ */}
{/* <Grid container sm={12} xs={12}>
  <Grid item sm={12} xs={12} style={{textAlign:"center"}}>
<Typography variant="p">Total : <span style={{color:"#208769",fontWeight:"bold"}}> &#8369; {rows.pop()}</span></Typography>
  </Grid>

  <Grid item sm={12} xs={12} style={{marginTop:"16px",marginBottom:"16px"}}>
    <Grid container sm={12} xs={12}> */}
            {/* <Grid item sm={6} xs={7} style={{textAlign:"center"}}>
            <Button variant="contained" style={{backgroundColor:"#208769",color:"white"}}>
        continue shopping
      </Button >
            </Grid>
            <Grid item sm={6} xs={5} style={{textAlign:"center"}}>
            <Button variant="contained" style={{backgroundColor:"#FFA500",color:"white"}} onClick={()=>checkOut()}>
        checkout
      </Button>
            </Grid> */}
    {/* </Grid>
  </Grid>
    </Grid> */}


    </div>

);

// })}

}



        return (
            <MyCart/>
          );
    }
}

export default inject("startingStore")(observer(Cart));
