import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import {inject,observer} from 'mobx-react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Typography,Divider,Paper,IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import MaterialUIPickers from './DatePicker'

import TransactionTbl from './Table/TransactionTbl'
import DCollection from './DCollection'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper:{
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
 
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width:"100%"
  },
}));

class adDrawer extends Component{


//   constructor(props) {
//     super(props);
    
// }





render(){
  function Accounting() {
  const classes = useStyles();
  // const theme = useTheme();
  // const [open, setOpen] = React.useState(false);


  return (
<div  style={{display:"flex" }}>
  <Grid>
      <main  >
        <div  />

      <Grid container direction="row">
        <Typography variant="h4" >
          Accounting
        </Typography>
        
        </Grid>
        <Divider style ={{marginBottom:"15px"}}/>
        <Grid
  container
  direction="row"
  justify="flex-start"
  alignItems="flex-start"
  sm={12}
>

   <Grid item sm={12} style={{width:"1800px"}}>
   <Paper className={classes.paper}>
   <Grid container direction="row" sm={12}>
  <Grid item xs={8} style={{textAlign:"left",margin:"8px"}}> <Typography variant="h6"> Transaction as of &nbsp; <MaterialUIPickers/>&nbsp; to &nbsp;  <MaterialUIPickers/></Typography> </Grid>
  <Grid item xs={3} >     
  <Paper component="form" style={{marginTop:"10px",height:"38px"}}>
    
    <InputBase 
    type="search"
    
     fullWidth={false} 
     style={{marginTop:"1.5px",
     width:"80%",
     marginLeft:"10px"}}
      placeholder="Search "
      inputProps={{ 'aria-label': 'search google maps' }}
    />
    <IconButton type="submit"  aria-label="search" style={{backgroundColor:"orange",borderRadius:"4px",height:"38px",float:"right"}}>
      <  SearchIcon style={{color:"white",marginTop:'-15%',float:"right"}}/>
    </IconButton>
  
  </Paper ></Grid>
  
   </Grid>

   </Paper>

   </Grid>
        </Grid>
        <Grid container style={{marginTop:"1%"}}>
        <TransactionTbl/>
        </Grid >
        
       



 <Grid sm={12} style={{marginTop:"20px"}} >

 <Paper className={classes.paper}>
   <Grid container sm={12}>
   <Grid item xs={8}>
    <Typography variant="h6" style={{textAlign:"left"}}>Delivery Collection of &nbsp; <MaterialUIPickers/> &nbsp; to &nbsp;<MaterialUIPickers/></Typography>
   </Grid>
   <Grid item xs={3} >     
  <Paper component="form" style={{marginTop:"10px",height:"38px"}}>
    
    <InputBase 
    type="search"
    
     fullWidth={false} 
     style={{marginTop:"1.5px",
     width:"80%",
     marginLeft:"10px"}}
      placeholder="Search "
      inputProps={{ 'aria-label': 'search google maps' }}
    />
    <IconButton type="submit"  aria-label="search" style={{backgroundColor:"orange",borderRadius:"4px",height:"38px",float:"right"}}>
      <  SearchIcon style={{color:"white",marginTop:'-15%',float:"right"}}/>
    </IconButton>
  
  </Paper ></Grid>
   </Grid>


 </Paper>

<Grid  sm={12} style={{marginTop:"20px"}}>
<DCollection/>
</Grid>
 </Grid>


      </main>
      </Grid>
      </div>
  );
}
return ( 
       
  <Accounting/>


 );

}
}
export default withRouter(inject("startingStore")(observer(adDrawer)));





