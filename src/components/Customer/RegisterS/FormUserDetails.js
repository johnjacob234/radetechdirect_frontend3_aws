import React, { Component } from 'react'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import {Grid,Paper,TextField} from '@material-ui/core';
import FirstStep from './FirstStep'
 class FormUserDetails extends Component {
     continue = e =>{
         e.preventDefault();
         this.props.nextStep();
     }
     
    render() {
        const {values,handleChange} =this.props;
     
        return (
            <div >
                <React.Fragment>
                <Grid container direction="row" sm={10} xs={11} justify='center' alignItems='center'>
    <Grid item sm={12} xs={12} style={{textAlign:"center"}}>
<Paper style={{marginTop:"16px"}}>
    <Grid container sm={12} >
       <Grid item  sm={1} xs={1} style={{backgroundColor:"#208769",paddingRight:"10px"}}></Grid>
       <Grid item sm={10} xs={10} style={{paddingTop:"10px",paddingBottom:"10px",marginleft:"15px"}}><Typography variant="p" style={{fontWeight:"bold",width:"98%"}}>&nbsp;&nbsp;Create an Account</Typography> </Grid>
      
       </Grid>
       </Paper>
    </Grid>
    </Grid>

            <FirstStep/>

              <Grid container direction='row' 
              alignItems='center' 
              justify='center'
              sm={12} xm={12} 
              style={{marginTop:"16px",textAlign:"center"}}> 
              
              
               <Grid item sm={5} xs={11}>
               <Paper style={{paddingTop:"16px",paddingBottom:"8px"}}>
               <Typography variant='h5' 
               style={{margin:"16px"}}
               >Personal Information</Typography>
             
                <TextField 
                id="outlined-basic" 
                label="First Name" 
                variant="outlined" 
                style={{marginBottom:"8px"}}
                onChange={handleChange('fName')}
                defaultValue={values.fName}
                />
                <br/>
                <TextField 
                id="outlined-basic" 
                label="Middle Name" 
                variant="outlined" 
                style={{marginBottom:"8px"}}
                onChange={handleChange('mName')}
                defaultValue={values.mName}
                />
                <br/>
                <TextField 
                id="outlined-basic" 
                label="Last Name" 
                variant="outlined" 
                style={{marginBottom:"8px"}}
                onChange={handleChange('lName')}
                defaultValue={values.lName}
                />
                <br/>
                <TextField 
                id="outlined-basic" 
                label="Suffix" 
                style={{marginBottom:"8px"}}
                variant="outlined" 
                onChange={handleChange('suffix')}
                defaultValue={values.suffix}
                />
         
                <br/>
                 <TextField 
                id="outlined-basic" 
                label="email Address" 
                variant="outlined" 
                style={{marginBottom:"8px"}}
                onChange={handleChange('emailAddress')}
                defaultValue={values.emailAddress}
                />
                <br/>
                <TextField 
                id="outlined-basic" 
                label="Contact No" 
                variant="outlined" 
                style={{marginBottom:"8px"}}
                onChange={handleChange('contactNo')}
                defaultValue={values.contactNo}
                />
                </Paper>
                </Grid>
                <Grid item sm={12} xs={12} justify='center' textAlign='center'>
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
        margin:"15px",
        color:"white",
        backgroundColor:"#208769"
    }
} 
export default FormUserDetails
