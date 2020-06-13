import React from 'react';
import { withStyles, makeStyles,ThemeProvider } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import {Button,TableRow} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import {inject,observer} from 'mobx-react'
import theme from './../../../theme'
class CompletedTable extends React.Component {
    state = {  }

    componentDidMount(){
        let{startingStore:{getOrder}}=this.props;
        getOrder();

    }
    render() { 


let details = myOrder =>{


}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#208769",
    color: theme.palette.common.white,
    padding:"0px"
  },
  body: {
    fontSize: 12,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(ref, date, action) {
  return { ref, date, action };
}
let {startingStore:{listOfOrder}}=this.props;
let myId =JSON.parse(sessionStorage.getItem('userData'))
let filterComplete =listOfOrder.filter(order => {
   if(order.orderStatus === 'Completed' && order.dispatcher_ID === myId.account_ID || order.orderStatus ==='Dispatch' && order.packer_ID === myId.account_ID) {
       return order
   }

} )

let rows = filterComplete.map(order => {
return(createData(
    order.orderID,order.orderDate,<div><ThemeProvider theme={theme}> <Button size='small' variant="outlined" color="primary" 
    onclick={()=>{details(order)}}>
    Details
  </Button></ThemeProvider></div>
))
})

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0),
//   createData('Ice cream sandwich', 237, 9.0 ),
//   createData('Eclair', 262, 16.0 ),
//   createData('Cupcake', 305, 3.7),
//   createData('Gingerbread', 356, 16.0 ),
// ];

const useStyles = makeStyles({
  table: {
    width: '100%',
  },
});
 function Completed() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Ref #</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
       
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.ref}>
              <StyledTableCell component="th" scope="row" align="left">
                {row.ref}
              </StyledTableCell>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
              <StyledTableCell align="center">{row.action}</StyledTableCell>
    
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


return ( 
    <Completed/>
 );
}
}

export default inject('startingStore')(observer(CompletedTable));
