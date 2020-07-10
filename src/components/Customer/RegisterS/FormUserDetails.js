import React, { Component } from 'react'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import {Grid,Paper,TextField,AppBar,Toolbar} from '@material-ui/core';
import logo from './../../Logo/logowhite.png'
import FirstStep from './FirstStep'
import { FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';
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
                <AppBar position="fixed" style={{backgroundColor:"#208769"}}>
               {/* <Button style={{width:'100px',fontSize:''}}> <span style={{color:'white',textAlign:'right',marginRight:'8px',marginTop:'5px',textDecoration:'underlined'}}>Login account?</span></Button> */}
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

            <FirstStep/>
 <form autoComplete='off'>
              <Grid container direction='row' 
              alignItems='center' 
              justify='center'
              sm={12} xm={12} 
              style={{marginTop:"16px",textAlign:"center"}}> 
              
              
               <Grid item sm={7} xs={11}>
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
                {/* <TextField 
                id="outlined-basic" 
                label="Suffix" 
                style={{marginBottom:"8px"}}
                variant="outlined" 
                onChange={handleChange('suffix')}
                defaultValue={values.suffix}
                /> */}
         <FormControl variant="outlined" style={{width:"59%",marginBottom:"8px"}}>
          <InputLabel  >
            Suffix
          </InputLabel>
          <Select
             defaultValue={values.suffix}
          
            onChange={handleChange('suffix')}
          
        
      
  
          >
          
            <MenuItem value="Jr.">Jr.</MenuItem>
            <MenuItem value="Sr.">Sr.</MenuItem>
            <MenuItem value="II">II</MenuItem>
            <MenuItem value="III">III</MenuItem>
            <MenuItem value="IV">IV</MenuItem>
          </Select>
        </FormControl>

        <br/>
                <TextField 
                id="outlined-basic" 
                label="Contact No" 
                variant="outlined" 
                inputProps={{maxLength:11}}
                style={{marginBottom:"8px"}}
                onChange={handleChange('contactNo')}
                defaultValue={values.contactNo}
                />

<br/>
                <TextField 
                id="outlined-basic" 
                label="Home Address" 
                variant="outlined" 
           
                style={{marginBottom:"8px"}}
                onChange={handleChange('address')}
                defaultValue={values.address}
                />
                <br/>
                 <TextField 
                id="outlined-basic" 
                label="email Address" 
                variant="outlined" 
                type='Email'
                style={{marginBottom:"8px"}}
                onChange={handleChange('emailAddress')}
                defaultValue={values.emailAddress}
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
                </form>
        
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
