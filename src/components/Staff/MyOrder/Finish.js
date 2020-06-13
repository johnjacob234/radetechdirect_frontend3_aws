import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {inject,observer} from 'mobx-react'

class Done extends React.Component {
 
  
  constructor(props){

    
    super(props)
    this.state = {
      listOfOrder : [],
      // listOfProductImg : []
    }
  }
  render() { 

    const assign =() =>{
      let {startingStore:{assignOrder,order}}=this.props;
      order.setProperty("order_ID",'14--1253614998-4310')
     
      order.setProperty("orderStatus",'dispatch')
      assignOrder();
    }
    
function Finish() {
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
      <Button variant="outlined" style={{backgroundColor:"#208769",color:"white"}} onClick={handleClickOpen}>
        Done
      </Button>
      <Dialog
      
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Packing Finished!"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Transfer to Dispatch?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} style={{backgroundColor:"#F7A31C",color:"white"}}>
            Cancel
          </Button>
          <Button onClick={()=>{assign()}} style={{backgroundColor:"#208769",color:"white"}} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


return ( 
  <Finish/>
 );
}
}

export default inject("startingStore")(observer(Done));
