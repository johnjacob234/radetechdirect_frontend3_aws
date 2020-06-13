import React,{Component} from 'react';
import {inject,observer} from 'mobx-react'
import { Paper,  Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
import logogreen from './../../Logo/logogreen.png'


class Login extends React.Component {

    login = () => {

        let {startingStore:{loginAccount}} = this.props;
        loginAccount().then(res => {
          console.log(res, "aws")
       
          if (res === 1){
            setTimeout(() => {
            // openNotificationSucess();
            this.props.history.push("/SuperAdmin")
          }, 500);
          }
          else if (res === 2){

         setTimeout(()  =>{

              this.props.history.push("/Admin")

         },500)
          }

          else if (res === 3){

            setTimeout(()  =>{
   
                 this.props.history.push("/Customer")
   
            },500)
             }
             else if (res === 4){

              setTimeout(()  =>{
     
                   this.props.history.push("/Staff")
     
              },500)
               }

                 
          else{
            setTimeout(() => {
            //   openNotification();
              this.props.history.push("/")
            }, 500);
         
          }
        });
  }
  
    render() {
       
        const { classes } = this.props;
        let {startingStore:{account}} = this.props;
        return (
 
          

<div style={{backgroundColor:"#f1f2f6",height:"100vh",textAlign:"center"}}>

<Grid style={{paddingTop:"8%"}}>

    <Grid  direction="column"
  justify="center"
  alignItems="center"  sm={4} style={{margin:"auto"}}>
     <Paper style={{backgroundColor:"white",padding:"40px",paddingLeft:"6px",paddingRight:"6px"}}>
          <div >
          <Grid item sm={12} style={{marginTop:"10px"}}>

    
          <img src={logogreen} style={{height:"160px"}}></img>
      

          </Grid>
          <Grid container spacing={2} alignItems="flex-end" style={{marginTop:"25px"}}>
                                <Grid item  sm={12} xs={12} style={{marginTop:"20px"}}>
                                  <Face style={{color:"#208769",fontSize:"35px",marginTop:"10px",marginRight:"10px"}} />                        
                                        
                           
                                  <TextField style={{width:"60%"}} autoComplete="off"  variant="outlined" id="username" label="Username" type="email"  autoFocus required 
                                 onChange={account_username =>account.setProperty("account_username" , account_username.target.value) }
                                 />
                             </Grid>
                         </Grid>
                         <Grid container spacing={2} alignItems="flex-end">
                         <Grid item  sm={12} xs={12}>
                                 <Fingerprint style={{color:"#208769",fontSize:"35px",marginTop:"10px",marginRight:"10px"}}/>
                             
                          
                                 <TextField style={{width:"60%"}} variant="outlined" autoComplete="off" id="username" label="Password" type="password"  required 
                                 onChange={account_password =>account.setProperty("account_password" , account_password.target.value) }/>
                             </Grid>
                         </Grid>
                         <div style={{marginTop:"12px",}}>
                         <Grid container  sm={12} xs={12} alignItems="center" justify="space-between" style={{margin:"auto"}}>
                             <Grid item  sm={6} xs={6}>
                                 <FormControlLabel control={
                                    <Checkbox
                                    style={{color:"#208769",marginLeft:"16px"}}
                                    />
                                } label="Remember me" style={{color:"grey"}} />
                            </Grid>
                            <Grid item sm={6} xs={6}>
                                <Button disableFocusRipple disableRipple style={{ textTransform: "none",color:"grey" }} variant="text">Forgot password?</Button>
                            </Grid>
                        </Grid>
                        </div>
                        <Grid container justify="center" style={{ marginTop: '15px',marginBottom:"15px" }}>
                            <Button variant="outlined"  style={{ textTransform: "none",fontWeight:"bold",backgroundColor:"#208769",marginBottom:"20px",color:"white",width:"65%",marginLeft:"10px" }} 
                           onClick={()=> {this.login()}}>
                               LOG IN
                               </Button>
                        </Grid>












         
                        </div>
                        </Paper>
                        </Grid>
                       
    </Grid>
   
</div>
        );
    }
}

export default inject("startingStore")(observer(Login));