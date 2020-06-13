import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import {inject,observer} from 'mobx-react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import AUManagementTab from './tab.js';
import ProfilesTab from './profileTab.js';



const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper:{
   backgroundColor:"#208769"
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
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
  },
}));

class adDrawer extends Component{


//   constructor(props) {
//     super(props);
    
// }

  state = {}
render(){
  function AdminUserManagement() {
  const classes = useStyles();
  // const theme = useTheme();
  // const [open, setOpen] = React.useState(false);


  return (
<div style={{display:"flex"}}>
      <main >
        <div  />

      <Grid container direction="row">
        <Typography variant="h5" >
           Employee Management
        </Typography>
        
        </Grid>
        <Divider style ={{marginBottom:"5px"}}/>

        <Grid container style={{marginTop:"1%"}}>
        <AUManagementTab/>
        </Grid >

        <Grid container style={{marginTop:"1%"}}>
          <Grid item sm={12}>
<Typography variant="h5">Staff Profiles</Typography>
<Divider/>
          </Grid>
        <ProfilesTab/>
        </Grid >
        
       
      </main>
      </div>
  );
}
return ( 
       
  <AdminUserManagement/>


 );

}
}
export default withRouter(inject("startingStore")(observer(adDrawer)));





