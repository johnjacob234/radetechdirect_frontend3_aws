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

class StaffList extends React.Component {
  state = {  }
  render() { 
let {startingStore:{listOfUsers}}=this.props;
let disId = JSON.parse(sessionStorage.getItem('userData'));

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#208769",
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

function createData(name, role, mobileNo, email, schedule ) {
  return { name, role, mobileNo, email, schedule  };
}


let filterStaff =listOfUsers.filter(staff =>  staff.account_accessType === 'staff' && staff.distributor_ID === disId.distributor_ID) 

let rows =filterStaff.map(staff => {

return(createData(

`${staff.account_fName} ${staff.account_mName} ${staff.account_lName}`,staff.staff_Role,staff.account_contactNo,staff.account_emailAddress,staff.account_status




))





})


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

 function StaffTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">Role</StyledTableCell>
            <StyledTableCell align="left">Mobile No</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.role}</StyledTableCell>
              <StyledTableCell align="left">{row.mobileNo}</StyledTableCell>
              <StyledTableCell align="left">{row.email}</StyledTableCell>
              <StyledTableCell align="left">{row.schedule}</StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

return ( 
  <StaffTable/>
 );
}
}

export default inject("startingStore")(observer(StaffList));
