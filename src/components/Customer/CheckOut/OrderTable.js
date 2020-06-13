import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Grid,Paper,Typography} from '@material-ui/core';
import {inject,observer} from 'mobx-react'

class Ordertable extends React.Component {
  state = {  }
  constructor(props){

    
    super(props)
    this.state = {
      listOfProducts : [],
      listOfProductImg : [],
      listOfCart:[],
    }
  }

image
arrayBufferToBase64 (buffer) {
  var binary = '';
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => binary += String.fromCharCode(b));
  return window.btoa(binary);
};
  componentDidMount(){
    let{startingStore:{getCart}}=this.props;
    getCart();
  }
  render() { 
let {startingStore:{listOfCart}}=this.props

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#208769',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(image, product, quantity, price, total) {
  return { image, product, quantity, price, total };
}
let getuname = JSON.parse(sessionStorage.getItem('userData'))
let rowss =  listOfCart.map(product => {

  return (

    listOfCart.filter((amount) => amount.account_ID === getuname.account_ID)
    .reduce((sum, record) => parseInt(sum) + parseInt(record.product_TotalAmount) , 0)



    );

 })

 let filterCart =listOfCart.filter(cart => cart.account_ID === getuname.account_ID)

let myOrder =filterCart.map(order => {

return(createData(

<img style={{width:"35px" , height:"35px"}} src={order.product_Img} />,order.product_Name,order.product_Quantity,order.product_Price,order.product_TotalAmount


))


})


const useStyles = makeStyles({
  table: {
    minWidth: '100%',
  },
});

 function OrderTable() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell align="center">Image</StyledTableCell>
            <StyledTableCell align="center">Product</StyledTableCell>
            <StyledTableCell align="center">Quantity</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Total</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myOrder.map((row) => (
            <StyledTableRow key={row.product}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.image}
              </StyledTableCell>
              <StyledTableCell align="center">{row.product}</StyledTableCell>
              <StyledTableCell align="center">{row.quantity}</StyledTableCell>
              <StyledTableCell align="center">{row.price}</StyledTableCell>
              <StyledTableCell align="center">{row.total}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

   <Grid container direction="row" alignItems='center' justify='center' xs={12} sm={12}>
       <Grid item xs={12} sm={12}>
           <Typography variant='p' style={{fontWeight:"bold",marginTop:"16px"}}> Total: &#8369; {rowss.pop()}</Typography>
           
       </Grid>

   </Grid>

    </React.Fragment>
  );
}

return ( 
  <OrderTable/>
 );
}
}

export default inject('startingStore')(observer(Ordertable));