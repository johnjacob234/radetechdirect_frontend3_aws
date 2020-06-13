import { Button, Dialog, Divider, Slide, Typography } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import AddProductForm from './Form.js';
const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



class addProducts extends Component{
  constructor(props) {
    super(props);
 
  
    this.state = {
        image: '',
        submitted  : false
    }
    this.addProd  = this.addProd.bind(this);
    this.uploadRef = React.createRef()
  
  }


  addProd = (e) => {
    this.setState({submitted: true })

    this.setState({ loading: true });
    let {startingStore:{product}}=this.props;

    // addProductImg();
    let getDisId = JSON.parse(sessionStorage.getItem('userData'))
    product.setProperty("distributor_ID", getDisId.distributor_ID)

  };

   AddButton = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (                  
      <div>
        {/* <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{margin:"8px"}}>
        <AddCircleOutlineIcon/> <span style={{marginLeft:"5px"}}>Add</span> 
        </Button> */}
            <Button variant="outlined" size='small'  onClick={handleClickOpen} style={{margin:"8px",backgroundColor:"#208769",color:"white"}}>
            <AddCircleOutlineIcon/> <span style={{marginLeft:"5px"}}>Add</span> 
        </Button>
        {/* <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar className={classes.appBar} style={{backgroundColor:"#208769"}}>
            <Toolbar>
              <IconButton style={{backgroundColor:"#1E7A60"}} edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title} style={{color:"white"}}>
                New Product
              </Typography>
              <Button style={{backgroundColor:"#1E7A60"}} autoFocus color="inherit" onClick={() => {AddProd()}}>
                Submit
              </Button>
            </Toolbar>
          </AppBar>
         <AddProductForm/>
        </Dialog> */}
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title" style={{backgroundColor:"#208769"}}><Typography variant="h5" style={{color:"white"}}>Add New Product</Typography></DialogTitle>
          <Divider/>
          <DialogContent >
      <AddProductForm submitted={this.state.submitted}  />
          </DialogContent>
          <DialogActions>
          <Button autoFocus onClick={() => {this.addProd()}} style={{backgroundColor:"#208769",color:"white"}}>
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







  
render(){




return(

 <this.AddButton></this.AddButton>


);
}
}
export default inject("startingStore")(observer(addProducts));