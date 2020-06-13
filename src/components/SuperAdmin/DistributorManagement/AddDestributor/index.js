import { Button, Dialog, Divider, Slide, Typography } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import RegForm from './Form.js';
import Alert from '@material-ui/lab/Alert';

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





class AddDistributors extends Component {
  state={}
  render (){

    function error(){
   return  <Alert variant="filled" >
   This is an error alert — check it out!
 </Alert>
  }
  function success(){
    return  <Alert variant="filled" >
    This is a success alert — check it out!
  </Alert>
  }
    
    const handleOk = () => {
     
      let {startingStore:{addDistributor}}=this.props;
           
         addDistributor();
         
                success();
            this.setState({ loading: true });
  
            setTimeout(() => {
              this.setState({ loading: false, visible: false });
            }, 3000);


     
    };

  


function RegisterDistributor() {


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
      <Button variant="outlined"  onClick={handleClickOpen} style={{marginTop:"8px",backgroundColor:"#208769",color:"white"}}>
       < AddCircleOutlineIcon /> <span style={{marginLeft:"5px"}}> Add Distributor</span>
      </Button>
      {/* <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton style={{backgroundColor:"#1E7A60"}} edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Register Distributor
            </Typography>
            <Button style={{backgroundColor:"#1E7A60"}} autoFocus color="inherit"  onClick={()=> {handleOk()}}>
              Submit
            </Button>
          </Toolbar>
        </AppBar>





        <List style={{backgroundColor:" #f1f2f6",height:"100vh"}}>
         
          <RegForm></RegForm>
         
        </List>
      </Dialog> */}
      <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title" style={{backgroundColor:"#208769"}}><Typography variant="h5" style={{color:"white"}}>Register Distributor</Typography></DialogTitle>
          <Divider/>
          <DialogContent >
          <RegForm></RegForm>
          </DialogContent>
          <Divider style={{borderTop:"1px solid #7f7f7f"}} />
          <DialogActions>
          <Button autoFocus onClick={()=> {handleOk()}} style={{backgroundColor:"#208769",color:"white"}}>
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
return ( 
       
  <RegisterDistributor/>


 );
}}
export default inject("startingStore")(observer(AddDistributors));