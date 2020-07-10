// import React from 'react';

// import {Grid,TextField,Button,Typography} from '@material-ui/core';
// import {inject,observer} from 'mobx-react'
// import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
// import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
// import moment from 'moment'
// import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';
// import AddDist from './addDistributor'
// class AccessDistributor extends React.Component {
 

//   componentDidMount(){
//     let {customerStore:{ getToken,getDistributors,getMembership}}=this.props;
//     getToken();
//     getDistributors();
//     getMembership();
//   }

//   constructor(props) {
//     super(props);
 
  
//     this.state = {
      
       
//         snackbaropen:false,
      
       
//         snackbarerror:"Incorrect access code",
//     }
//     this.access  = this.access.bind(this);
    
  
//   }

//   snackbarClose =(event)=>{
//     this.setState({snackbaropen:false});
//   }

//   access = ()=>{
//     let {customerStore:{accessDistributor,listOfDistributors,token,distributor,cLogs,addcLogs,listOfMembership}}=this.props;
//     console.log(listOfMembership,'gagasdg')
//     let getId = JSON.parse(sessionStorage.getItem('userData'))
//    token.setProperty("access_Token",token.access_Token.toString())

//    let date = new Date();
//   function getHash (input)  {
//     let hash = 0, len = input.length;
//     for (let i = 0; i < len; i++) {
//       hash  = ((hash << 5) - hash) + input.charCodeAt(i);
//       hash |= 0; // to 32bit integer
//     }
  
            
  
//     return hash;
//   }
// accessDistributor().then(res =>{


//     if (res != null){
      
        

//         cLogs.setProperty("log_ID",`${date.getFullYear()}-${getHash(date.getDay())}-${ Math.floor(1000 + Math.random() * 9000)}`)
//         cLogs.setProperty("account_ID",getId.account_ID)
//         cLogs.setProperty("distributor_ID",res.distributor_ID)
//         cLogs.setProperty("log_activity","Access Store")
//         cLogs.setProperty("log_Date",moment().format('MMMM Do YYYY, h:mm:ss a'))
//         setTimeout(() => {
//         addcLogs();
//         distributor.setProperty("distributor_ID",res.distributor_ID)
//         this.props.history.push({"pathname":"/Customer/Home", state:{ id:res.distributor_ID}} )
//       }, 500);
//     }
//     else{
//       setTimeout(() => {
//         this.setState({ snackbaropen: true });
//       //   openNotification();
//         this.props.history.push("/Customer")
//       }, 500);
 
//     }
//    })
   

 
//   }

//   render() { 
//     let {customerStore:{token}}=this.props;
//     function Alert(props) {
//       return <MuiAlert elevation={6} variant="filled" {...props} />;
//     } 



  
//   return (
//     <div>
//       <Snackbar anchorOrigin={{vertical:'top',horizontal:'center'}}    open={this.state.snackbaropen} autoHideDuration={2000} onClose={this.snackbarClose}  >   
//        <Alert  severity="error">
//        {this.state.snackbarerror }
//         </Alert></Snackbar>

//     <Typography variant="h5" style={{textAlign:"center",marginTop:"20px",marginBottom:"16px"}}> Access Distributor</Typography>
    
      
//       <Grid container sm={12} xs={12} style={{textAlign:"center"}}> 
//       <Grid item  sm={12} xs={12} style={{margin:"auto",textAlign:"center"}} > 
//       <form   autoComplete="off" >
//       <TextField 
//       id="outlined-basic" 
//       label="Enter Access Code" 
//       variant="outlined" 
//       onChange={access_Token=>token.setProperty("access_Token",access_Token.target.value)}
      
//       />
//       </form>
//       </Grid>
    
//       </Grid>
      
//       <Grid container sm={12} xs={12} style={{textAlign:"center",marginTop:"20px"}}>
//         <Grid item sm={12} xs={12} style={{textAlign:"center"}}>
//       <Button 
//       variant="contained" 
      
//       style={{backgroundColor:"#208769",color:"white"}}
//       startIcon={<StorefrontOutlinedIcon />}
//       onClick={()=> {this.access()}}>
      
//  Shop Now!
//       </Button>
//       </Grid>
//       </Grid>
     
//         <div style={{margin:0, top: 'auto',right: 20,bottom: 70,left: 'auto',position: 'fixed'}}>
//    <AddDist />
//    </div>
   
//     </div>
//   );
// }

// }
// export default withRouter(inject("customerStore")(observer(AccessDistributor)));



import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper,Divider} from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import AddDist from './addDistributor'
import {inject,observer} from 'mobx-react'
import moment from 'moment'
import  { withRouter} from 'react-router-dom'
import {AppBar,Toolbar,Typography} from '@material-ui/core';
import logo from './../../Logo/logowhite.png'

class MyDistributor extends React.Component {

  
  componentDidMount(){
    let {customerStore:{ getMembership,getToken}}=this.props;
    
    getToken();
    getMembership();
  }

  render() {
    let {customerStore:{accessDistributor,token,distributor,cLogs,addcLogs,listOfMembership,listOfToken}}=this.props;
    let getId = JSON.parse(sessionStorage.getItem('userData'))

console.log(listOfToken,'tokens')

       let date = new Date();
  function getHash (input)  {
    let hash = 0, len = input.length;
    for (let i = 0; i < len; i++) {
      hash  = ((hash << 5) - hash) + input.charCodeAt(i);
      hash |= 0; // to 32bit integer
    }
  
            
  
    return hash;
  }

  let accessD =(distD)=>{
    token.setProperty("access_Token",distD.access_Token.toString())
console.log(distD.access_Token.toString())


    accessDistributor().then(res =>{


    if (res != null){
      
        

        cLogs.setProperty("log_ID",`${date.getFullYear()}-${getHash(date.getDay())}-${ Math.floor(1000 + Math.random() * 9000)}`)
        cLogs.setProperty("account_ID",getId.account_ID)
        cLogs.setProperty("distributor_ID",res.distributor_ID)
        cLogs.setProperty("log_activity","Access Store")
        cLogs.setProperty("log_Date",moment().format('MMM/DD/YYYY,h:mm:ssa'))
        setTimeout(() => {
        addcLogs();
        distributor.setProperty("distributor_ID",res.distributor_ID)
        this.props.history.push("/Customer/Home" )
      }, 500);
    }
    else{
      setTimeout(() => {
        // this.setState({ snackbaropen: true });
      //   openNotification();
        this.props.history.push("/Customer")
      }, 500);
 
    }
   })

  }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    marginTop:'16px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function DistGrid() {
  const classes = useStyles();


let filDist = listOfMembership.filter(ace => ace.account_ID === getId.account_ID)


  let getDist = filDist.map(dist =>{
    return (
<React.Fragment key={dist.membership_ID}>
<ListItem button onClick={()=>accessD(dist)}>
          <ListItemText primary={dist.access_Token} />
          <ListItemSecondaryAction>
                    <IconButton onClick={()=>accessD(dist)}  edge="end" aria-label="icon">
                      <ArrowForwardIosIcon />
                     
                    </IconButton>
                  </ListItemSecondaryAction>
        </ListItem>
        <Divider />
</React.Fragment>
      
    )
  })

  
  return (


    <div className={classes.root}>

<AppBar position="fixed" style={{backgroundColor:"#208769"}}>
        <Toolbar style={{textAlign:"center"}}>
            <img src={logo} style={{height:"120px",margin:"auto"}}></img>
        </Toolbar>
      </AppBar>
      <Toolbar />
                <Grid container direction="row" sm={10} xs={11} justify='center' alignItems='center' style={{marginTop:"95px"}}>
    <Grid item sm={12} xs={12} style={{textAlign:"center"}} justify='center' alignItems='center'>
<Paper style={{marginLeft:'20px'}}>
    <Grid container sm={12} >
       <Grid item  sm={1} xs={1} style={{backgroundColor:"#208769",paddingRight:"10px"}}></Grid>
       <Grid item sm={10} xs={10} style={{paddingTop:"10px",paddingBottom:"10px",marginleft:"15px"}}><Typography variant="p" style={{fontWeight:"bold",width:"98%"}}>&nbsp;&nbsp;Access Distributor</Typography> </Grid>
      
       </Grid>
       </Paper>
    </Grid>
    </Grid>



      <Grid container direction="row" justify="center" alignItems="center">
                     <Grid item xs={9} sm={4}>
          <Paper className={classes.paper}>
          <List component="nav" aria-label="main mailbox folders" style={{backgroundColor:"#208769",color:"white"}}>
        <ListItem button>
       
          <ListItemText  primary="My Distributor" />
        </ListItem>
   
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
       {getDist}
      </List>
          </Paper>
        </Grid>
        </Grid>
               <div style={{margin:0, top: 'auto',right: 20,bottom: 70,left: 'auto',position: 'fixed'}}>
   <AddDist />
    </div>
   <Grid  item lg={12} sm={12} xs={12} style={{bottom: 0,position: 'absolute',border:'1px solid white',width:'100%'}}>
<Paper className={classes.paper}><Typography variant='subtitle2'> &copy; TradeTech 2020</Typography></Paper>
   </Grid>
    </div>
  );
}


return (
  <DistGrid/>
)
}
}

export default withRouter(inject('customerStore')(observer(MyDistributor)))

