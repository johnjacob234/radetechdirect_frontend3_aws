import { Dialog, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import { ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import { inject, observer } from 'mobx-react';
import React from 'react';
import theme from './../../../theme';




class AddStore extends React.Component {




    render() {
        let myId =JSON.parse(sessionStorage.getItem('userData'))
 let {customerStore:{addMembership,membership,listOfToken}}=this.props;
console.log(listOfToken,'lsadsa')
 function getHash(input){
    var hash = 0, len = input.length;
    for (var i = 0; i < len; i++) {
      hash  = ((hash << 5) - hash) + input.charCodeAt(i);
      hash |= 0; // to 32bit integer
    }
  
            
  
    return hash;
  }
  let date =new Date();

function FormDialog() {
 
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let tokens = listOfToken.map(tkn => {
    return(
      tkn
  
    )
  })
  console.log(tokens,'sadas')

  const submit = () => {
      membership.setProperty('membership_ID',`${date.getFullYear()}-${ Math.floor(1000 + Math.random() * 9000)}`)
      membership.setProperty('account_ID',myId.account_ID)
      addMembership();
    setOpen(false);
  };

  return (
    <div>
        <ThemeProvider theme={theme}>
    
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" style={{backgroundColor:"#208769"}} ><Typography style={{color:"white"}}>Add Store</Typography> </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the access token here.
          </DialogContentText>
          <form autoComplete='off'>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Access Token"
            type="email"
            fullWidth
            
            onChange={access_Token=>{membership.setProperty("access_Token", access_Token.target.value)
                     let filtkn =tokens.filter(tkn => tkn.access_Token === access_Token.target.value).map( tn=>{
                       return (tn.distributor_ID)
                     }
                     )  
                     console.log(filtkn,'fill')
                    //  membership.setProperty('distributor_ID',filtkn)     
          }}
          />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant='contained' style={{color:"white"}}>
            Cancel
          </Button>
          <Button onClick={submit} color="primary" variant='contained'>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      </ThemeProvider>
    </div>
  );
}

return (
<FormDialog/>
)
}
}

export default inject('customerStore')(observer(AddStore))