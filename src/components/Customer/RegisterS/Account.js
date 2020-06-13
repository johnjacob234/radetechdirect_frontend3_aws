import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Grid,Typography,Paper} from '@material-ui/core';
import React, { Component } from 'react';
import ThirdStep from './ThirdStep'
 class Account extends Component {
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
        console.log(this.continue,'continue')
        return (
            <div >
                <React.Fragment>
                    <ThirdStep/>
                <Grid container direction='row' 
              alignItems='center' 
              justify='center'
              sm={12} xm={12} 
              style={{marginTop:"16px",textAlign:"center"}}> 
              
               <Grid item sm={5} xs={11}>

               <Paper style={{paddingTop:"16px",paddingBottom:"8px"}}>
               <Typography variant='h5' 
               style={{margin:"16px"}}
               >Account Information</Typography>
               
                <TextField 
                id="outlined-basic" 
                label="Username" 
                style={{marginBottom:"8px"}}
                variant="outlined" 
                onChange={handleChange('username')}
                defaultValue={values.username}
                />
                <br/>
                <TextField 
                id="outlined-basic" 
                label="Password" 
                style={{marginBottom:"8px"}}
                variant="outlined" 
                onChange={handleChange('password')}
                defaultValue={values.password}
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
export default Account
