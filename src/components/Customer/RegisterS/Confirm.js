import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import {ListItem,Grid,Paper} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import moment from 'moment';
 class Confirm extends Component {
     
  
     continue = e =>{
      let{startingStore:{account,addAccount}}=this.props
      function getHash(input){
        var hash = 0, len = input.length;
        for (var i = 0; i < len; i++) {
          hash  = ((hash << 5) - hash) + input.charCodeAt(i);
          hash |= 0; // to 32bit integer
        }
      
                
      
        return hash;
      }
      let date = new Date();
         e.preventDefault();
         //PROCESS FORM
         account.setProperty('account_ID',`${date.getFullYear()}-${getHash(this.props.values.fName)}-${ Math.floor(1000 + Math.random() * 9000)}` )
         account.setProperty("account_fName",this.props.values.fName)
         account.setProperty("account_lName",this.props.values.lName)
         account.setProperty("account_mName",this.props.values.mName)
         account.setProperty("account_suffix",this.props.values.suffix)
         account.setProperty("account_address",this.props.values.shopAddress)
         account.setProperty("account_emailAddress",this.props.values.emailAddress)
         account.setProperty("account_contactNo",this.props.values.contactNo)
         account.setProperty("account_username",this.props.values.username)
         account.setProperty("account_password",this.props.values.password)
         account.setProperty("account_dateRegistered",moment().format('MMMM Do YYYY, h:mm:ss a') )
         account.setProperty("account_storeName",this.props.values.shopName)
         account.setProperty("account_status",'active')
         account.setProperty("account_accessType",'customer')
         addAccount();
         
        //  this.props.nextStep();
     }
     back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const {values:{fName,mName,lName, suffix, emailAddress,contactNo,shopName,shopAddress,username,password}} =this.props;
        console.log(this.continue,'continue')
        return (
            <div >
                <React.Fragment>
                <Grid container direction='row' 
              alignItems='center' 
              justify='center'
              sm={12} xm={12} 
              style={{marginTop:"16px",textAlign:"center"}}> 
              
               <Grid item sm={5} xs={11}>
               <Typography variant='h5' 
               style={{margin:"16px"}}
               >Confirmation</Typography>
               <Paper style={{paddingTop:"16px",paddingBottom:"8px"}}>
               <List>
        <ListItem><Typography><span style={{fontWeight:"bold"}}> Name : </span>{fName} {mName} {lName} {suffix}</Typography></ListItem>
        
        <ListItem><Typography><span style={{fontWeight:"bold"}}>Email Address : </span>{emailAddress}</Typography></ListItem>
        <ListItem><Typography><span style={{fontWeight:"bold"}}>Contact No : </span>{contactNo}</Typography></ListItem>
        <ListItem><Typography><span style={{fontWeight:"bold"}}>Shop Name: </span>{shopName}</Typography></ListItem>
        <ListItem><Typography><span style={{fontWeight:"bold"}}>Shop Address: </span>{shopAddress}</Typography></ListItem>
        <ListItem><Typography><span style={{fontWeight:"bold"}}>Username:</span> {username}</Typography></ListItem>
        <ListItem><Typography><span style={{fontWeight:"bold"}}>Password:</span> {password}</Typography></ListItem>
               </List>
               </Paper>
               </Grid>
            
               <Grid item sm={12} xs={12} direction='row' >
                <Button
                variant='contained'
                style={{marginTop:"15px",marginRight:"15px",color:"white",backgroundColor:"#FFA500"}}
                onClick={this.back}
                >Back
                </Button>

             

                <Button
                variant='contained'
              
                style={style.button}
                onClick={this.continue}
                >Register
                </Button>
          </Grid>
            </Grid>
                </React.Fragment>
            </div>
        )
    }
}

const style ={
    button:{
        marginTop:"15px",
        color:"white",
        backgroundColor:"#208769"
    }
} 
export default inject('startingStore')(observer(Confirm))
