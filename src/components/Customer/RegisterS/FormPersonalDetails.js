import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Grid,Typography,Paper} from '@material-ui/core';
import React, { Component } from 'react';
import SecondStep from './SecondStep'
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
        console.log(this.continue,'continue')
        return (
            <div >
                <React.Fragment>
                    <SecondStep/>
                <Grid container direction='row' 
              alignItems='center' 
              justify='center'
              sm={12} xm={12} 
              style={{marginTop:"16px",textAlign:"center"}}> 
              
               <Grid item sm={5} xs={11}>
               <Paper style={{paddingTop:"16px",paddingBottom:"8px"}}>
               <Typography variant='h5' 
               style={{margin:"16px"}}
               >Store Details</Typography>
              
                <TextField 
                id="outlined-basic" 
                label="Shop Name" 
                variant="outlined" 
                style={{marginBottom:"8px"}}
                onChange={handleChange('shopName')}
                defaultValue={values.shopName}
                />
                <br/>
                <TextField 
                id="outlined-basic" 
                label="Shop Address" 
                variant="outlined" 
                style={{marginBottom:"8px"}}
                onChange={handleChange('shopAddress')}
                defaultValue={values.shopAddress}
                />
            </Paper>
            </Grid>
           <Grid item sm={12} xs={12} direction='row' >
               {/* <Grid container sm={12} xs={12} direction='row'  justify='center' textAlign='center'></Grid>
               <Grid item sm={12} xs={12}>  */}
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
export default FormPersonalDetails
