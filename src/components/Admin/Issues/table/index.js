import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import React from 'react';



 class IssueTable extends React.Component {
  render() {
    let{issuesStore:{listOfReport,listOfUsers}}=this.props;



    function createData(repId,name, date, sender,mnane,lname, type, status, details) {
      return { repId,name, date, sender,mnane,lname, type, status, details };
    }
    let filreports = listOfReport.filter(rep=>  rep.report_Type === 'Order Report')
    
    let rows = filreports.map(report =>{
      return(createData(
       report.report_ID, report.order_ID,report.report_Date,`${listOfUsers.filter(accs => accs.account_ID === report.account_ID).map((account)=> {return `${account.account_fName}`  } ) }`,`${listOfUsers.filter(accs => accs.account_ID === report.account_ID).map((account)=> {return `${account.account_mName}`  } ) }`,`${listOfUsers.filter(accs => accs.account_ID === report.account_ID).map((account)=> {return `${account.account_lName}`  } ) }`,report.report_Type,report.report_Status,report.report_Detail
      ))
    })



function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'name', numeric: false, disablePadding: false, label: 'Order #' },
  { id: 'date', numeric: true, disablePadding: false, label: 'Date' },
  { id: 'sender', numeric: true, disablePadding: false, label: 'Sender ' },
  { id: 'type', numeric: true, disablePadding: false, label: 'Type ' },
  { id: 'details', numeric: true, disablePadding: false, label: 'Details ' },
];


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#208769',
    color: theme.palette.common.white,
  },

}))(TableCell);

function IssueTablesHead(props) {
  const { classes, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
       
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

IssueTablesHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: '100%',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));
let filter = this.props.mysearch;
function IssueTables() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
     
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <IssueTablesHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.repId);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  if(filter.length !== 0){
                    if( row.name.startsWith(filter) || row.date.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) ||
                    row.mnane.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase())||
                    row.lname.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) ||
                    row.sender.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) ||
                    row.sender.toLocaleLowerCase().split(' ').slice(-1).join(' ').startsWith(filter.toLocaleLowerCase())){
                     
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.repId)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.repId}
                      selected={isItemSelected}
                    >
               
                      <TableCell component="th" id={labelId} scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                      <TableCell align="right">{row.sender} {row.mname} {row.lname}</TableCell>
                      <TableCell align="right">{row.type}</TableCell>
                      <TableCell align="right">{row.details}</TableCell>
                    </TableRow>
                    );

                  }
                  else{
                    return null
                 
                }
    
                  }
                  return (
                    <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.repId)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.repId}
                    selected={isItemSelected}
                  >
             
                    <TableCell component="th" id={labelId} scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                    <TableCell align="right">{row.sender} {row.mname} {row.lname}</TableCell>
                    <TableCell align="right">{row.type}</TableCell>
                    <TableCell align="right">{row.details}</TableCell>
                  </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}

return (
  <IssueTables/>
 )
}
}

export default inject('issuesStore')(observer(IssueTable))
