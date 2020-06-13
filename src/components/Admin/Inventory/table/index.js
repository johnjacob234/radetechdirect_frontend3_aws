import { Button, DialogTitle, Divider, Grid,InputBase } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search'
import Slide from '@material-ui/core/Slide';
import { lighten, makeStyles, useTheme } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ArchiveIcon from '@material-ui/icons/Archive';
import EditIcon from '@material-ui/icons/Edit';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import FilterListIcon from '@material-ui/icons/FilterList';
import clsx from 'clsx';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import EditForm from './EditForm.js';


import ReplenishForm from './../Replenish/form.js';


// import img from 



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class InventoryTable extends Component{
  constructor(props){

    
    super(props)
    this.state = {
      listOfProducts : [],
      listOfProductImg : []
    }
  }

//image
  arrayBufferToBase64 (buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };
  
              
  componentWillMount() {
      
    let {startingStore:{getProducts,getProductImg,getStock }}=this.props;
    // let images = []
    // getProductImg().then(res => {
    //   res.map((image, index) => 
    //   images.push(['data:image/jpeg;base64,' +this.arrayBufferToBase64(res[index].img.data.data), res[index].img.id[0]])
    // )
    // this.setState({listOfProductImg : images})
    // })


    
    getProducts();
    getStock();
//     .then(res => {
//       this.setState({listOfProducts : res})
//     })
// setTimeout(() => {
//   console.log(this.state.listOfProductImg)
// }, 3200);
   

  }





  render(){
  
    let {startingStore:{product,editProduct,getStock ,listofProducts,stock,productStocks,addStock }}=this.props;


function createData(image, item, category, brand,uom,price, stocks,action) {

  return { image, item, category, brand,uom,price, stocks,action };
}








function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headCells = [
  { id: 'image', numeric: false,Padding: false, label: 'Image'},
  { id: 'item', numeric: false, disablePadding: false, label: 'Item'},
  { id: 'category', numeric: false, disablePadding: false, label: 'Category'},
  { id: 'brand', numeric: false, disablePadding: false, label: 'Brand'},
 
  { id: 'uom', numeric: false, disablePadding: false, label: 'UoM' },
  { id: 'price', numeric: false, disablePadding: false, label: 'Price'},
  { id: 'stocks', numeric: false, disablePadding: false, label: 'Stocks' },
  
  { id: 'action', numeric: true, disablePadding: true, label: 'Action'},
];

function ExpiringTableHead(props) {
  const { classes,  order, orderBy,  onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow style={{backgroundColor:"#208769"}}>
 
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            style={{color:"white",fontWeight:"bold",textAlign:"left"}}
            // align={headCell.numeric ? 'right' : 'left'}
            // padding={headCell.disablePadding ? 'none' : 'default'}
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
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

ExpiringTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
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



const useStyles = makeStyles(theme => ({
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

 function ExpiringTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [filter,setFilter]= React.useState("")
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const [openReplenish, setOpenReplenish] = React.useState(false);

  

  let getId = JSON.parse(sessionStorage.getItem('userData'))
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.item);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

 


  const handleClickOpen = (products) => {
console.log(products)
    setOpen(true);
  
    product.setProperty("product_ID", products.product_ID)
    product.setProperty("product_Name", products.product_Name)
    product.setProperty("product_Category", products.product_Category)
    product.setProperty("product_Description", products.product_Description)
    product.setProperty("product_Price", products.product_Price)
    product.setProperty("product_UoM", products.product_UoM)
    product.setProperty("product_Img", products.product_Img)
    product.setProperty("product_Barcode", products.product_Barcode)
    product.setProperty("product_Brand", products.product_Brand)
    product.setProperty("product_DateReceived", products.product_DateReceived)
    product.setProperty("product_ExpirationDate", products.product_ExpirationDate)
    product.setProperty("product_Remarks", products.product_Remarks)
     
  };  

  const handleReplenish = (products) => {
   
    
    console.log(products)
        setOpenReplenish(true);
      
        product.setProperty("product_ID", products.product_ID)

        product.setProperty("product_Name", products.product_Name)
        product.setProperty("product_Category", products.product_Category)
        product.setProperty("product_UoM", products.product_UoM)
        // product.setProperty("product_Stocks", products.product_Stocks)
        product.setProperty("product_Brand", products.product_Brand)
        product.setProperty("product_Barcode",products.product_Barcode)

        
         
      };  

  const handleOk = () => {
   
    editProduct();

};

const handleOkReplenish = () => {
  console.log(getId.distributor_ID,'sadsa')
  stock.setProperty("product_ID", product.product_ID)
  stock.setProperty("distributor_ID",getId.distributor_ID)
  stock.setProperty("product_Name",product.product_Name)
  stock.setProperty("product_Category",product.product_Category)
  stock.setProperty("product_UoM",product.product_UoM)
  stock.setProperty("product_Barcode",product.product_Barcode)
  stock.setProperty("product_Brand",product.product_Brand)
  addStock();
  setTimeout(() => {
    getStock()
  }, 1000);

};

  const handleClose = () => {
    setOpen(false);
    setOpenReplenish(false);
  };   
  


  let rows =  listofProducts.map(product => {
    return(createData(
   

 <img style={{width:"35px" , height:"35px"}} src={product.product_Img}></img>
   ,product.product_Name,product.product_Category,product.product_Brand,
product.product_UoM,product.product_Price,

 productStocks.filter((stock) => stock.product_ID === product.product_ID)
.reduce((sum, record) => sum + record.product_replenishQty , 0)  < 100 ? <span style={{color:"white",backgroundColor:"yellow",padding:"4px",borderRadius:"5px"}}> 
{ productStocks.filter((stock) => stock.product_ID === product.product_ID)
.reduce((sum, record) => sum + record.product_replenishQty , 0) } </span> :  
<span style={{color:"white",backgroundColor:"green",padding:"4px",borderRadius:"5px"}}>{  productStocks.filter((stock) => stock.product_ID === product.product_ID)
.reduce((sum, record) => sum + record.product_replenishQty , 0) } </span>

,<div><IconButton  onClick={()=>{handleClickOpen(product)}}  size="medium" style={{backgroundColor:"#31AF91"}} > <EditIcon /> </IconButton> <IconButton onClick={()=>{handleReplenish(product)}} size="medium" style={{backgroundColor:"#F8B701"}}> <ArchiveIcon /> </IconButton></div>  ))
   
   })

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = event => {
    setDense(event.target.checked);
  };

  const isSelected = item => selected.indexOf(item) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      {/* <Grid sm={4} > 
      <Paper component="form" >
    
    <InputBase 
    type="search"
      value={filter}
     fullWidth={false} 
     style={{fontSize:"20px",paddingLeft:"5px"}}
      placeholder="Search "
      onChange={(e)=>setFilter(e.target.value)}
    />
    <IconButton type="submit"  aria-label="search" style={{backgroundColor:"orange",borderRadius:"4px",height:"38px",float:"right"}}>
      <  SearchIcon style={{color:"white",marginTop:'-15%',float:"right"}}/>
    </IconButton>
  
  </Paper >

      </Grid> */}
      <Paper className={classes.paper}>
     
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <ExpiringTableHead
            
              style={{backgroundColor:"red"}}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  // const isItemSelected = isSelected(row.item);
                  if(filter.length !== 0){
                    if(row.item.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase())){

                  return (
                    <TableRow
                      hover
                  
                      role="checkbox"
                      // aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.item}
                      // selected={isItemSelected}
                    >
            
                      <TableCell component="th" align="left"  scope="row">
                        {row.image}
                      </TableCell>
                      <TableCell align="left">{row.item}</TableCell>
                      <TableCell align="left">{row.category}</TableCell>
                      <TableCell align="left">{row.brand}</TableCell>
                     
                      <TableCell align="left">{row.uom}</TableCell>
                      <TableCell align="left">{row.price}</TableCell>
                      <TableCell align="left">{row.stocks}</TableCell>
                    
                      <TableCell align="left">{row.action}</TableCell>
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
                
                    role="checkbox"
                    // aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.item}
                    // selected={isItemSelected}
                  >
          
                    <TableCell component="th" align="left"  scope="row">
                      {row.image}
                    </TableCell>
                    <TableCell align="left">{row.item}</TableCell>
                    <TableCell align="left">{row.category}</TableCell>
                    <TableCell align="left">{row.brand}</TableCell>
                   
                    <TableCell align="left">{row.uom}</TableCell>
                    <TableCell align="left">{row.price}</TableCell>
                    <TableCell align="left">{row.stocks}</TableCell>
                  
                    <TableCell align="left">{row.action}</TableCell>
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




<Dialog
          fullScreen={fullScreen}
          open={open}
          TransitionComponent={Transition}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title" style={{backgroundColor:"#208769"}}><Typography variant="h5" style={{color:"white"}}>Edit Product Information</Typography></DialogTitle>
          <Divider/>
          <DialogContent >
          <EditForm 
          />
          </DialogContent>
          <DialogActions>
          <Button autoFocus onClick={()=> {handleOk()}} style={{backgroundColor:"#208769",color:"white"}}>
            <span style={{paddingLeft:"8px",paddingRight:"8px"}}>  Submit</span>
            </Button>
      
            <Button onClick={handleClose}  autoFocus style={{backgroundColor:"#F7A31C",color:"white"}}>
            <span style={{paddingLeft:"8px",paddingRight:"8px"}}>  Close</span>
            </Button>
          </DialogActions>
        </Dialog>

         {/* replenish dialog */}
        <Dialog
          fullScreen={fullScreen}
          open={openReplenish}
          TransitionComponent={Transition}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title" style={{backgroundColor:"#208769"}}><Typography variant="h5" style={{color:"white"}}>Replenish Stock</Typography></DialogTitle>
          <Divider/>
          <DialogContent >
          <ReplenishForm 
          />
          </DialogContent>
          <DialogActions>
          <Button autoFocus onClick={()=> {handleOkReplenish()}} style={{backgroundColor:"#208769",color:"white"}}>
            <span style={{paddingLeft:"8px",paddingRight:"8px"}}>  Submit</span>
            </Button>
      
            <Button onClick={handleClose}  autoFocus style={{backgroundColor:"#F7A31C",color:"white"}}>
            <span style={{paddingLeft:"8px",paddingRight:"8px"}}>  Close</span>
            </Button>
          </DialogActions>
        </Dialog>


    </div>
  );
}
return(
 <ExpiringTable></ExpiringTable> 
)
  }}


  export default inject("startingStore")(observer(InventoryTable));



