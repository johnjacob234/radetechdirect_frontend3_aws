import { AppBar, Avatar, CssBaseline, Divider, Drawer, Grid, IconButton, Toolbar, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import clsx from 'clsx';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import OptionButton from './toolbar';
import Accounting from './Accounting';
import AdminUserManagement from './AdminUserManagement';
import CRM from './CRM';
import AdminDashboard from './Dashboard';
import Inventory from './Inventory';
import DrawerList from './List.js';
import OrderManagement from './OrderManagement';
import pr from './pr.png';
import ProfileManagement from './ProfileManagement';
import SettingGrid from './Setting'
import ReportGrid from './Reports'
import ProfileGrid from './CRM/Customer/CustomerProfile'


class adDrawer extends Component{

  state = {}
render(){

const drawerWidth = 255;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper:{
   backgroundColor:"#208769"
  },
  small: {
    width: theme.spacing(4),
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
    backgroundColor:"#208769",
    color:"white",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
      backgroundColor:"#208769",
      color:"white",
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
      backgroundColor:"#208769",
      color:"white",
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    width:"100%"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    
    
  },
}));





  function AdminDrawer() {
    const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (

    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{backgroundColor:"#208769"}}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
           
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
    
          <Typography variant="h6" noWrap style={{fontWeight:"bold",color:"white"}}>
            <span style={{color:"orange"}}>TRADE</span>TECH
          </Typography>
     
          <div style={{position:"absolute",right:0}}
                 >
          <Grid >
           
             <IconButton style={{backgroundColor:"#1E7A60",marginRight:"12px"}}>
  <NotificationsOutlinedIcon style={{color:"white",fontSize:"18px"}}/>
</IconButton>
<IconButton style={{backgroundColor:"#1E7A60"}}>
  <QuestionAnswerOutlinedIcon style={{color:"white",fontSize:"18px"}}/>
</IconButton>
<IconButton style={{marginRight:"0px",backgroundColor:"#208769"}}>
<Avatar src={pr} > </Avatar>
</IconButton>

<OptionButton/>

</Grid></div>

        </Toolbar>
      
   
       
      </AppBar>
      <Drawer
        
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose} style={{backgroundColor:"#1E7A60"}}>
            {theme.direction === 'rtl' ? <ChevronRightIcon style={{color:"white"}}/> : <ChevronLeftIcon style={{color:"white"}}/>}
          </IconButton>
        </div>
        <Divider />


      <DrawerList/>

      </Drawer>

      <Router>
  <div>
  <main className={classes.content}>
        <div className={classes.toolbar} />
      

  <Switch>
      <Route exact path="/Admin" render={()=><AdminDashboard/>}/>
      <Route path="/Admin/CRM" render={()=><CRM/>}/>
      <Route path="/Admin/OrderManagement" render={()=><OrderManagement/>}/>
      <Route path="/Admin/InventoryManagement" render={()=><Inventory/>}/>
      <Route path="/Admin/CustomerProfile" render={()=><ProfileGrid/>}/>
     
   
      <Route  path="/Admin/ProfileManagement" render={()=><ProfileManagement/>}/>
      <Route  path="/Admin/Accounting" render={()=><Accounting/>}/>
      <Route  path="/Admin/AdminUserManagement" render={()=><AdminUserManagement/>}/>
      <Route  path="/Admin/Setting" render={()=><SettingGrid/>}/>
      <Route  path="/Admin/Reports" render={()=><ReportGrid/>}/>
      
  </Switch>
        
        
       
      </main>
    
</div>
</Router>
      </div>

  );
}

return ( 
  
<AdminDrawer></AdminDrawer>
 

 );

}
}
export default withRouter(inject("startingStore")(observer(adDrawer)));
