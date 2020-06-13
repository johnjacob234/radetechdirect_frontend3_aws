import { Dialog, DialogTitle, Divider, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { inject, observer } from 'mobx-react';
import React from 'react';
import RegistrationForm from './Form.js';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

class addCustomers extends React.Component {
  state = {  }
 

addCustomer = (e) => {
  let {startingStore:{addAccount,account}}=this.props;
  let getDisId = JSON.parse(sessionStorage.getItem('userData'))
  account.setProperty("distributor_ID", getDisId.distributor_ID)
  account.setProperty("account_accessType", "customer")
 
    addAccount();
    // addProductImg();
this.setState({submitted: true })

  this.setState({ loading: true });

  setTimeout(() => {
    this.setState({ loading: false, visible: false });
  }, 3000);
};


 RegisterDialog = () => {
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
      <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{marginTop:"8px",backgroundColor:"#208769",color:"white"}}>
      < AddCircleOutlineOutlinedIcon /> <span style={{marginLeft:"5px"}}> Add Member</span>
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth="md"
      >
       <DialogTitle id="responsive-dialog-title" style={{backgroundColor:"#208769"}}><Typography variant="h5" style={{color:"white"}}>Register Customer</Typography></DialogTitle>
        <Divider/>
        <DialogContent>
         <RegistrationForm/>
        </DialogContent>
        <DialogActions>
          <Divider/>
          <Button autoFocus onClick={() => {this.addCustomer()}} style={{backgroundColor:"#208769",color:"white"}}>
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
render() { 
return (  
  <this.RegisterDialog/>
);
}
}

export default inject("startingStore")(observer(addCustomers));
