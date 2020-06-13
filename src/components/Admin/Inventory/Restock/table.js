import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {inject,observer} from 'mobx-react'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);


class Restock extends React.Component {
  state = {  }


  componentWillMount() {
      
    let {startingStore:{getStock, }}=this.props;



    
    getStock();

   

  }

  render() { 
    let {startingStore:{stock,productStocks }}=this.props;

function createData(item, uom, brand, replenishQty, date,expiration) {
  return { item, uom, brand, replenishQty, date,expiration };
}

let rows =  productStocks.map(stock => {
  return(createData(

stock.product_Name,stock.product_UoM,stock.product_Brand,stock.product_replenishQty,stock.product_replenishDate,stock.product_expirationDate ))
 
 })

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});




 function RestockTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Item</StyledTableCell>
            <StyledTableCell align="right">Uom</StyledTableCell>
            <StyledTableCell align="right">Brand</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Expiration</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.item}>
              <StyledTableCell component="th" scope="row">
                {row.item}
              </StyledTableCell>
              <StyledTableCell align="right">{row.uom}</StyledTableCell>
              <StyledTableCell align="right">{row.brand}</StyledTableCell>
              <StyledTableCell align="right">{row.replenishQty}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.expiration}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
return ( 
  <RestockTable/>
 );
}
}

export default inject("startingStore")(observer(Restock));
