import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#208769",
    color: theme.palette.common.white,
    fontWeight:"bold",
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

function createData(name, address,mobileNo, email,status ) {
  return { name, address,mobileNo, email,status  };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0,'active'),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3,'active'),
  createData('Eclair', 262, 16.0, 24, 6.0,'active'),
  createData('Cupcake', 305, 3.7, 67, 4.3,'active'),
  createData('Gingerbread', 356, 16.0, 49, 3.9,'active'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
   
  },
});

export default function ManagersTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Address</StyledTableCell>
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
              <StyledTableCell align="left">{row.address}</StyledTableCell>
              <StyledTableCell align="left">{row.mobileNo}</StyledTableCell>
              <StyledTableCell align="left">{row.email}</StyledTableCell>
              <StyledTableCell align="left">{row.status}</StyledTableCell>
            
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
