import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Button,Paper} from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor:'#208769',
    color: theme.palette.common.white,
    fontWeight:"bold",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(<span style={{color:"green"}}>2020-14412-21321</span>, 'Juan Dela Cruz','Access Store', 'May 5,2020 11:00am', <div>
  <Button
    variant="contained"
    style={{backgroundColor:"#208769",color:"white"}}
   size='small'
    startIcon={<InfoOutlinedIcon />}
  >
    more info
  </Button></div>),
  createData(<span style={{color:"green"}}>2020-32434-5232</span>, 'San Pedro','Access Store', 'May 5,2020 12:00pm', <div>
  <Button
    variant="contained"
    style={{backgroundColor:"#208769",color:"white"}}
   size='small'
    startIcon={<InfoOutlinedIcon />}
  >
    more info
  </Button></div>),
  createData(<span style={{color:"green"}}>2020-23444-64322</span>, 'Jose Damazo', 'Access Store', 'May 5,2020 1:00pm', <div>
  <Button
    variant="contained"
    style={{backgroundColor:"#208769",color:"white"}}
   size='small'
    startIcon={<InfoOutlinedIcon />}
  >
    more info
  </Button></div>),
  createData(<span style={{color:"#FFA500"}}>2020-14412-21321</span>, 'IU UI', 'Access Store', 'May 5,2020 41:00pm', <div>
  <Button
    variant="contained"
    style={{backgroundColor:"#208769",color:"white"}}
   size='small'
    startIcon={<InfoOutlinedIcon />}
  >
    more info
  </Button></div>),
  createData(<span style={{color:"green"}}>2020-32553-53253</span>, "Mang Juan", 'Access Store', 'May 5,2020 5:00pm', <div>
  <Button
    variant="contained"
    style={{backgroundColor:"#208769",color:"white"}}
   size='small'
    startIcon={<InfoOutlinedIcon />}
  >
    more info
  </Button></div>),
];

const useStyles = makeStyles({
  table: {
    minWidth: '100%',
  },
});

export default function CLogTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID #</StyledTableCell>
            <StyledTableCell align="left">Full Name</StyledTableCell>
            <StyledTableCell align="left">Activity</StyledTableCell>
            <StyledTableCell align="left">Date</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
              <StyledTableCell align="left">{row.fat}</StyledTableCell>
              <StyledTableCell align="left">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
