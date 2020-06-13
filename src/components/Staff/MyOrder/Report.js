import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {Grid,TextareaAutosize,Typography,Checkbox} from '@material-ui/core';
import {inject,observer} from 'mobx-react'
import moment from 'moment'
class Reports extends React.Component {
  state = {  }

  
  render() { 
    let {startingStore:{addReport,report}}=this.props
 function Report() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function getHash(input){
    var hash = 0, len = input.length;
    for (var i = 0; i < len; i++) {
      hash  = ((hash << 5) - hash) + input.charCodeAt(i);
      hash |= 0; // to 32bit integer
    }
  
            
  
    return hash;
  }
let date = new Date();
const submit =() =>{
  

  report.setProperty("report_ID",`${getHash(date.getFullYear())}-${ Math.floor(1000 + Math.random() * 9000)}`)
  report.setProperty("order_ID","7--1253614998-7516")
  report.setProperty("distributor_ID","2020--1371079641-2752")
  report.setProperty("report_Detail","Reason 2")
  report.setProperty("report_Note","Tamad ko magUbra wala pa sweldo!")
  report.setProperty("report_Date",moment().format('MMMM Do YYYY, h:mm:ss a'))
  report.setProperty("report_Status",'Pending')
  addReport();
}
  return (
    <div>
      <Button variant="outlined" style={{backgroundColor:"#F7A31C",color:"white"}} onClick={handleClickOpen}>
        Report
      </Button>
      <Dialog
      
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{""}</DialogTitle>
        <DialogContent>
          <DialogContentText>
        <Grid container sm={12} xs={12} >
        <Grid item xs={12} sm={12} style={{textAlign:"left"}}> <Typography variant="h6">Reason: </Typography> </Grid>
        <Grid item sm={6} xs={6}>
              <Checkbox/> Low Stock
                </Grid>
                <Grid item sm={6} xs={6}>
              <Checkbox/> Reason 2
                </Grid>
                
        </Grid>
              <Grid container sm={12} xs={12}>
            
                <Typography variant="h6">Add Note : </Typography>
                  <Grid item sm={12} xs={12} >
          <TextareaAutosize aria-label="minimum height" rowsMin={7} style={{width:"100%"}}  />
          </Grid>
          </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} style={{backgroundColor:"#F7A31C",color:"white"}}>
            Cancel
          </Button>
          <Button onClick={submit} style={{backgroundColor:"#208769",color:"white"}} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

return ( 
  <Report/>
 );
}
}

export default inject("startingStore")(observer(Reports));