import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Grid,Typography,Paper,AppBar,Toolbar} from '@material-ui/core';
import React, { Component } from 'react';
import SecondStep from './SecondStep'
import logo from './../../Logo/logowhite.png'
import Address from './Address'
 class FormPersonalDetails extends Component {
     continue = e =>{
         e.preventDefault();
         this.props.nextStep();
     }
     back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
       
    render() {
        const {values,handleChange} =this.props;
      
        return (
            <div >
                <React.Fragment>
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
       <Grid item sm={10} xs={10} style={{paddingTop:"10px",paddingBottom:"10px",marginleft:"15px"}}><Typography variant="p" style={{fontWeight:"bold",width:"98%"}}>&nbsp;&nbsp;Create an Account</Typography> </Grid>
      
       </Grid>
       </Paper>
    </Grid>
    </Grid>
                    <SecondStep/>
                    <form autoComplete="off">
                <Grid container direction='row' 
              alignItems='center' 
              justify='center'
              sm={12} xm={12} 
              style={{marginTop:"16px",textAlign:"center"}}> 
              
               <Grid item sm={7} xs={11}>
               <Paper style={{paddingTop:"16px",paddingBottom:"8px"}}>
               <Typography variant='h5' 
               style={{margin:"16px"}}
               >Store Details</Typography>
              
                <TextField 
                id="outlined-basic" 
                label="Store Name" 
                variant="outlined" 
                style={{marginBottom:"8px"}}
                onChange={handleChange('shopName')}
                defaultValue={values.shopName}
                />
                <br/>
                <TextField 
                id="outlined-basic" 
                label="Store Address" 
                variant="outlined" 
                style={{marginBottom:"8px"}}
                onChange={handleChange('shopAddress')}
                defaultValue={values.shopAddress}
                />
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
                >Continue
                </Button>
                </Grid>
                </Grid>
                </form>
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
export default FormPersonalDetails
