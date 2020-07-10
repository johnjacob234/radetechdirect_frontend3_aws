// import React from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import {inject,observer} from 'mobx-react'

// import PropTypes from 'prop-types';
// import {  useTheme } from '@material-ui/core/styles';

// import TableFooter from '@material-ui/core/TableFooter';
// import TablePagination from '@material-ui/core/TablePagination';
// import IconButton from '@material-ui/core/IconButton';
// import FirstPageIcon from '@material-ui/icons/FirstPage';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import LastPageIcon from '@material-ui/icons/LastPage';

// class SummaryTBL extends React.Component {
//   state = {  }

//   // componentWillMount(){
//   //   let{orderStore:{getOrder,getAccounts}}=this.props;
//   //   getOrder();
//   //   getAccounts()
//   // }

//   render() { 
// let {orderStore:{listOfOrder,listOfUsers}}=this.props;


// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: "#208769",
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 12,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
  
// }))(TableRow);

// const useStyles1 = makeStyles((theme) => ({
//   root: {
//     flexShrink: 0,
//     marginLeft: theme.spacing(2.5),
//   },
// }));

// function TablePaginationActions(props) {
//   const classes = useStyles1();
//   const theme = useTheme();
//   const { count, page, rowsPerPage, onChangePage } = props;

//   const handleFirstPageButtonClick = (event) => {
//     onChangePage(event, 0);
//   };

//   const handleBackButtonClick = (event) => {
//     onChangePage(event, page - 1);
//   };

//   const handleNextButtonClick = (event) => {
//     onChangePage(event, page + 1);
//   };

//   const handleLastPageButtonClick = (event) => {
//     onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//   };

//   return (
//     <div className={classes.root}>
//       <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 0}
//         aria-label="first page"
//       >
//         {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
//       </IconButton>
//       <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
//         {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="next page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//       </IconButton>
//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="last page"
//       >
//         {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
//       </IconButton>
//     </div>
//   );
// }

// TablePaginationActions.propTypes = {
//   count: PropTypes.number.isRequired,
//   onChangePage: PropTypes.func.isRequired,
//   page: PropTypes.number.isRequired,
//   rowsPerPage: PropTypes.number.isRequired,
// };



// function createData(ref, date, pstat, cust, address,due,total,status,bal) {
//   return { ref, date, pstat, cust, address,due,total,status,bal };
// }

// let rows =listOfOrder.map(order =>{
//   return(createData(


// order.orderID,order.orderDate,order.paymentStatus,<span> {listOfUsers.filter(accs => accs.account_ID === order.account_ID).map((account)=> {return `${account.account_fName} ${account.account_mName} ${account.account_lName}`  } ) }</span>,<span> {listOfUsers.filter(accs => accs.account_ID === order.packer_ID).map((account)=> {return `${account.account_fName} ${account.account_mName} ${account.account_lName}`  } ) }</span>,<span> {listOfUsers.filter(accs => accs.account_ID === order.dispatcher_ID).map((account)=> {return `${account.account_fName} ${account.account_mName} ${account.account_lName}`  } ) }</span>,
// order.modeOfPayment,order.orderStatus, <span>{order.orderCustomerBalance.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>


//   ))

// })


// const useStyles = makeStyles({
//   table: {
//     maxWidth: '100%',
//   },
// });

// let mysearch = props =>{
//   return this.props.mysearch
// }
//  function SummaryTable() {
//   const classes = useStyles();

//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

//   const filter = mysearch();
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Ref#</StyledTableCell>
//             <StyledTableCell align="left">Date</StyledTableCell>
//             <StyledTableCell align="left">Payment Status</StyledTableCell>
//             <StyledTableCell align="left">Customer</StyledTableCell>
//             <StyledTableCell align="left">Packer</StyledTableCell>
//             <StyledTableCell align="left">Dispatcher</StyledTableCell>
//             <StyledTableCell align="left">Payment Method</StyledTableCell>
//             <StyledTableCell align="left">Order Status</StyledTableCell>
//             <StyledTableCell align="left">Balance</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//         {(rowsPerPage > 0
//             ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//             : rows
//           ).map((row) => {

// if(filter.length !== 0){
//   if(row.ref.startsWith(filter) || row.pstat.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) || row.date.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) || row.status.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) || row.status.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase())){
// return (
//             <StyledTableRow key={row.ref}>
//               <StyledTableCell component="th" scope="row">
//                 {row.ref}
//               </StyledTableCell>
//               <StyledTableCell align="left">{row.date}</StyledTableCell>
//               <StyledTableCell align="left">{row.pstat}</StyledTableCell>
//               <StyledTableCell align="left">{row.cust}</StyledTableCell>
//               <StyledTableCell align="left">{row.address}</StyledTableCell>
//               <StyledTableCell align="left">{row.due}</StyledTableCell>
//               <StyledTableCell align="left">{row.total}</StyledTableCell>
//               <StyledTableCell align="left">{row.status}</StyledTableCell>
//               <StyledTableCell align="left">{row.bal}</StyledTableCell>
//             </StyledTableRow>
// );
//          }else{
//            return null
//          }}
//          return(
//           <StyledTableRow key={row.ref}>
//           <StyledTableCell component="th" scope="row">
//             {row.ref}
//           </StyledTableCell>
//           <StyledTableCell align="left">{row.date}</StyledTableCell>
//           <StyledTableCell align="left">{row.pstat}</StyledTableCell>
//           <StyledTableCell align="left">{row.cust}</StyledTableCell>
//           <StyledTableCell align="left">{row.address}</StyledTableCell>
//           <StyledTableCell align="left">{row.due}</StyledTableCell>
//           <StyledTableCell align="left">{row.total}</StyledTableCell>
//           <StyledTableCell align="left">{row.status}</StyledTableCell>
//           <StyledTableCell align="left">{row.bal}</StyledTableCell>
//         </StyledTableRow>
//          );
          
          
          
          
//            }  )}

          
// {emptyRows > 0 && (
//             <TableRow style={{ height: 53 * emptyRows }}>
//               <TableCell colSpan={6} />
//             </TableRow>
//           )}

//         </TableBody>

//         <TableFooter >
//           <TableRow >
//             <TablePagination
             
//               rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//               colSpan={9}
//               count={rows.length}
//               rowsPerPage={rowsPerPage}
//               page={page}
//               SelectProps={{
//                 inputProps: { 'aria-label': 'rows per page' },
//                 native: true,
//               }}
//               onChangePage={handleChangePage}
//               onChangeRowsPerPage={handleChangeRowsPerPage}
//               ActionsComponent={TablePaginationActions}
//             />
//           </TableRow>
//         </TableFooter>

//       </Table>
//     </TableContainer>
//   );
// }

// return ( 
//   <SummaryTable/>
//  );
// }
// }

// export default inject('orderStore')(observer(SummaryTBL));


import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles,withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import {inject,observer} from 'mobx-react'


class SummaryTBL extends React.Component {
componentDidMount(){
  let {orderStore:{getOrder,getAccounts}}=this.props;
  getOrder();
  getAccounts();
}

  render() { 
let {orderStore:{listOfOrder,listOfUsers}}=this.props;

function createData(ref, date, cust, packer, dist, orderstat, paymethod, paystat, bal) {
  return { ref, date, cust, packer, dist, orderstat, paymethod, paystat, bal };
}

let rows =listOfOrder.map(order =>{
  return(createData(


order.orderID,order.orderDate,<span> {listOfUsers.filter(accs => accs.account_ID === order.account_ID).map((account)=> {return `${account.account_fName} ${account.account_mName} ${account.account_lName}`  } ) }</span>,<span> {listOfUsers.filter(accs => accs.account_ID === order.packer_ID).map((account)=> {return `${account.account_fName} ${account.account_mName} ${account.account_lName}`  } ) }</span>,<span> {listOfUsers.filter(accs => accs.account_ID === order.dispatcher_ID).map((account)=> {return `${account.account_fName} ${account.account_mName} ${account.account_lName}`  } ) }</span>,order.orderStatus,
order.modeOfPayment,order.paymentStatus, <span>{order.orderCustomerBalance.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>


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
  { id: 'ref', numeric: false, disablePadding: false, label: 'Ref#' },
  { id: 'date', numeric: true, disablePadding: false, label: 'Date' },
  { id: 'cust', numeric: true, disablePadding: false, label: 'Customer' },
  { id: 'packer', numeric: true, disablePadding: false, label: 'Packer' },
  { id: 'dist', numeric: true, disablePadding: false, label: 'Dispatcher' },
  { id: 'orderstat', numeric: true, disablePadding: false, label: 'Order Status' },
  { id: 'paymethod', numeric: true, disablePadding: false, label: 'Payment Method' },
  { id: 'paystat', numeric: true, disablePadding: false, label: 'Payment Status' },
  { id: 'bal', numeric: true, disablePadding: false, label: 'Balance' },
];


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#208769',
    color: theme.palette.common.white,
  },

}))(TableCell);


function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
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

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
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

let mysearch = props =>{
  return this.props.mysearch
}

function SummaryTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('date');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const filter = mysearch();
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
            <EnhancedTableHead
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
                  const isItemSelected = isSelected(row.ref);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  if(filter.length !== 0){
                    if( row.ref.startsWith(filter) || 
                    row.date.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()) ||
                    row.orderstat.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase())){
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.ref)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.ref}
                      selected={isItemSelected}
                    >
                     
                      <TableCell component="th" id={labelId} scope="row" >
                        {row.ref}
                      </TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                      <TableCell align="right">{row.cust}</TableCell>
                      <TableCell align="right">{row.packer}</TableCell>
                      <TableCell align="right">{row.dist}</TableCell>
                      <TableCell align="right">{row.orderstat}</TableCell>
                      <TableCell align="right">{row.paymethod}</TableCell>
                      <TableCell align="right">{row.paystat}</TableCell>
                      <TableCell align="right">{row.bal}</TableCell>
                    </TableRow>
                  )
                     }
                     else{
                       return null
                     }
                   }
                   return(
                    <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.ref)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.ref}
                    selected={isItemSelected}
                  >
                   
                    <TableCell component="th" id={labelId} scope="row" >
                      {row.ref}
                    </TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                    <TableCell align="right">{row.cust}</TableCell>
                    <TableCell align="right">{row.packer}</TableCell>
                    <TableCell align="right">{row.dist}</TableCell>
                    <TableCell align="right">{row.orderstat}</TableCell>
                    <TableCell align="right">{row.paymethod}</TableCell>
                    <TableCell align="right">{row.paystat}</TableCell>
                    <TableCell align="right">{row.bal}</TableCell>
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
  <SummaryTable/>
 );
}
}

export default inject('orderStore')(observer(SummaryTBL));