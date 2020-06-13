import React from 'react';

import {Grid,TextField,Button,Typography} from '@material-ui/core';
import {inject,observer} from 'mobx-react'
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import moment from 'moment'
class AccessDistributor extends React.Component {
  state = {  }

  componentDidMount(){
    let {startingStore:{ getToken,getDistributors,}}=this.props;
    getToken();
    getDistributors();
  }

 


  access = ()=>{
    let {startingStore:{accessDistributor,listOfDistributors,token,distributor,cLogs,addcLogs}}=this.props;
    let getId = JSON.parse(sessionStorage.getItem('userData'))
   token.setProperty("access_Token",token.access_Token.toString())

   let date = new Date();
  function getHash (input)  {
    let hash = 0, len = input.length;
    for (let i = 0; i < len; i++) {
      hash  = ((hash << 5) - hash) + input.charCodeAt(i);
      hash |= 0; // to 32bit integer
    }
  
            
  
    return hash;
  }
accessDistributor().then(res =>{
    console.log(res, "getres")

    if (res === res){
      setTimeout(() => {
        
        // openNotificationSucess();

        cLogs.setProperty("log_ID",`${date.getFullYear()}-${getHash(date.getDay())}-${ Math.floor(1000 + Math.random() * 9000)}`)
        cLogs.setProperty("account_ID",getId.account_ID)
        cLogs.setProperty("distributor_ID",res)
        cLogs.setProperty("log_activity","Access Store")
        cLogs.setProperty("log_Date",moment().format('MMMM Do YYYY, h:mm:ss a'))
        addcLogs();
        distributor.setProperty("distributor_ID",res)
        this.props.history.push({"pathname":"/Customer/Home", state:{ id:res}} )
      }, 500);
    }
    else{
      setTimeout(() => {
      //   openNotification();
        this.props.history.push("/")
      }, 500);
 
    }
   })
   

 
  }

  render() { 
    let {startingStore:{token}}=this.props;




  
  return (
    <div>
    <Typography variant="h5" style={{textAlign:"center",marginTop:"20px",marginBottom:"16px"}}> Access Distributor</Typography>
    
      
      <Grid container sm={12} xs={12} style={{textAlign:"center"}}> 
      <Grid item  sm={12} xs={12} style={{margin:"auto",textAlign:"center"}} > 
      <form   autoComplete="off" >
      <TextField 
      id="outlined-basic" 
      label="Enter Access Code" 
      variant="outlined" 
      onChange={access_Token=>token.setProperty("access_Token",access_Token.target.value)}
      
      />
      </form>
      </Grid>
    
      </Grid>
      
      <Grid container sm={12} xs={12} style={{textAlign:"center",marginTop:"20px"}}>
        <Grid item sm={12} xs={12} style={{textAlign:"center"}}>
      <Button 
      variant="contained" 
      
      style={{backgroundColor:"#208769",color:"white"}}
      startIcon={<StorefrontOutlinedIcon />}
      onClick={()=> {this.access()}}>
      
 Shop Now!
      </Button>
      </Grid>
      </Grid>
   
    </div>
  );
}

}
export default withRouter(inject("startingStore")(observer(AccessDistributor)));