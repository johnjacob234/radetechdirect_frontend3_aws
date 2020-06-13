import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import {inject,observer} from 'mobx-react';
class orderTable extends React.Component {
    state = {  }

    render() { 

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

function createData(name, quantity, status) {
  return { name, quantity, status };
}

let {startingStore:{listOfOrder}}=this.props;

let filorder = listOfOrder.filter((order)=> order.packer_ID === '2020-2314539-3712')
console.log(filorder,'ordertable')
let rowss =filorder.map(orders =>{

return(

orders.orderItems


)


})

const rows = [
  createData('Coke', 18, <Checkbox/>),
 
  createData('Jeep', 2, <Checkbox/>),
 
  createData('Milo', 56, <Checkbox/>),
];

const useStyles = makeStyles({
  table: {
    minWidth: '100%',
  },
});

 function OrderTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product</StyledTableCell>
            <StyledTableCell align="center">Quantity</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.quantity}</StyledTableCell>
              <StyledTableCell align="center">{row.status}</StyledTableCell>
           
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

return ( 
    <OrderTable/>
 );
}
}

export default inject("startingStore")(observer(orderTable));