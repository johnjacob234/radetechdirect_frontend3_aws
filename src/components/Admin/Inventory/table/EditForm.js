import MomentUtils from '@date-io/moment';
import { TextField, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { inject, observer } from 'mobx-react';
import moment from 'moment';
import React, { Component } from 'react';
import Resizer from 'react-image-file-resizer';








// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      
    },
  },
    input: {
      display: 'none',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
 
}));

// const useStyles = makeStyles(theme => ({
  
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: 200,
//     },
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 220,
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(2),
//     },
//     formControl2: {
//       margin: theme.spacing(1),
//       minWidth: 220,      },
//   },
// }));

//   var dateB = moment(account_birthday).format('YYYY MMMM Do ');
// console.log(dateB);
  function getHash(input){
    var hash = 0, len = input.length;
    for (var i = 0; i < len; i++) {
      hash  = ((hash << 5) - hash) + input.charCodeAt(i);
      hash |= 0; // to 32bit integer
    }
  
            
  
    return hash;
  }
class EditForm extends Component{

  constructor(){
   super()
  this.state = {
    image: '',
    loading: false,
}
  }


  onFileChange = (e) => {
    
    this.setState({ loading: true });
      let {startingStore:{product}}=this.props;
    
      Resizer.imageFileResizer(
        e.target.files[0],
        100,
        100,
        'JPEG',
        100,
        0,
        uri => {
          this.setState({image:uri})
          product.setProperty('product_Img',uri)
        },
        'URI'
       
    )
    setTimeout(() => {
          
      this.setState({ loading: false });
          }, 2000);
  
      
  }

  EditForm = () => {
    const classes = useStyles();
    let {startingStore:{product}}=this.props
    const [labelWidth, setLabelWidth] = React.useState(0);   
    const [selectedDate, setSelectedDate] = React.useState(new Date('2019-08-18T21:11:54'));
    const [exselectedDate, exsetSelectedDate] = React.useState(new Date('2019-08-18T21:11:54'));



    const inputLabel = React.useRef(null);
    React.useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
      console.log(product,"prod")


      function handleReceived(date) {
        setSelectedDate(date);
        let dReceive =  moment(date).format('MMMM Do YYYY')
        console.log(dReceive);
        product.setProperty("product_DateReceived", dReceive)
        }
        function handleExpiration(exDate) {
          exsetSelectedDate(exDate);
          let dExpiration =  moment(exDate).format('MMMM Do YYYY')
          
          console.log(dExpiration);
          product.setProperty("product_ExpirationDate", dExpiration)
          }
    //   function onChangeaccount_mName(value) {
    //     account.setProperty('account_mName' , value)
    //     }
        
    //      function onChangeaccount_lName(value) {
    //     account.setProperty('account_lName' , value)
    //     }
  

  
  
      
    return (
      <div >

      
<form className={classes.root} noValidate autoComplete="off">
        
        <Grid container  direction="row" sm={12} >
        <Grid item xs={4} style={{margin:"5px"}}>

     {/* <div className="container">
      
      <input
       accept="image/*"
   
       id="contained-button-file"
       multiple
       type="file"
       style={{display:"none"}}
       onChange={e=> this.onFileChange(e)}
     />
     <label htmlFor="contained-button-file">
       <Button variant="contained"  component="span" color="primary" style={{height:"100%",width:"100%",color:"white"}}>
   {this.state.loading ?  <CircularProgress color="secondary" style={{margin:"5px"}}/>: <PhotoCamera style={{margin:"5px"}}/>} Upload Image
       </Button>
     </label>

  
     </div> */}

     </Grid>
     <Grid item xs={6} style={{textAlign:"center"}}>

<img src={this.state.image} ></img>


     </Grid>
     </Grid>
<Typography variant="h6" style={{color:"#208769"}}> Basic Info</Typography>

      <Grid container direction="row" sm={12} >
          <Grid item  xs={6} style={{margin:"5px"}}>
     <TextField 
     id="outlined-basic" 
     label="Item Name" 
     variant="outlined" 
     defaultValue={product.product_Name}
     style={{width:"98%"}}
     onChange={
       product_Name=>{
         product.setProperty("product_Name", product_Name.target.value)
      //  product.setProperty('product_ID',`${getHash(product_Name.target.value)}-${ Math.floor(1000 + Math.random() * 9000)}` )
       
     
     }}
     
     /></Grid>
     <Grid item  xs={5} style={{margin:"5px"}}>
       {/* <TextField 
     id="outlined-basic" 
     label="Category" 
     variant="outlined" 
     onChange={product_Category=>{product.setProperty("product_Category", product_Category.target.value)}}
     /> */}
     
     
     <FormControl variant="outlined" className={classes.formControl} style={{width:"100%"}}>
       <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
         Category
       </InputLabel>
       <Select
         labelId="demo-simple-select-outlined-label"
         id="demo-simple-select-outlined"
         labelWidth={labelWidth}
         defaultValue={product.product_Category}
         onChange={product_Category=>{product.setProperty("product_Category", product_Category.target.value)}}
         
       >
         <MenuItem value="">
           <em></em>
         </MenuItem>
         <MenuItem value="beverages">Beverages</MenuItem>
         <MenuItem value="cannedGoods">Canned Goods</MenuItem>
         <MenuItem value="snacks">Snacks</MenuItem>
       </Select>
     </FormControl>
     </Grid>

     <Grid item xs={6} style={{margin:"5px"}}>
       
       {/* <TextField 
     id="outlined-basic"
     style={{width:"100%"}} 
     label="Standard UoM" 
     variant="outlined" 
     onChange={product_UoM=>{product.setProperty("product_UoM", product_UoM.target.value)}}
     /> */}
     
     <TextField 
     id="outlined-basic" 
     style={{width:"98%"}}
     label="Price" 
     variant="outlined" 
     defaultValue={product.product_Price}
     onChange={product_Price=>{product.setProperty("product_Price", product_Price.target.value)}}
     />
     </Grid>
     <Grid xs={5} item style={{margin:"5px"}}>
       
           <FormControl variant="outlined" className={classes.formControl} style={{width:"100%"}}>
       <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
         Standard UoM
       </InputLabel>
       <Select
         labelId="demo-simple-select-outlined-label"
         id="demo-simple-select-outlined"
         maxWidth="100"
         defaultValue={product.product_UoM}
         onChange={product_UoM=>{product.setProperty("product_UoM", product_UoM.target.value)}}
         labelWidth={labelWidth}
       >
         <MenuItem value="">
           <em></em>
         </MenuItem>
         <MenuItem value="Pcs">Pcs</MenuItem>
         <MenuItem value="Pack">Pack</MenuItem>
         <MenuItem value="Box">Box</MenuItem>
         <MenuItem value="Case">Case</MenuItem>
       </Select>
     </FormControl>
     </Grid>
    <Grid item  xs={12} style={{margin:"5px",}}>
      <TextField 
     id="outlined-basic" 
     style={{width:"100%"}}
     label="Description" 
     variant="outlined"
     defaultValue={product.product_Description}
     onChange={product_Description=>{product.setProperty("product_Description", product_Description.target.value)}}
     /></Grid>
     </Grid>



      <Typography variant="h6" style={{color:"#208769"}}> Storage Info</Typography>
      <Grid

 container

 direction="row"
 justify="flex-start"
 alignItems="flex-start"
 
>
          <Grid xs={6} item style={{margin:"5px"}}>
     <TextField 
     id="outlined-basic" 
     style={{width:"98%"}}
     label="Barcode" 
     variant="outlined"
     defaultValue={product.product_Barcode}
     onChange={product_Barcode=>{product.setProperty("product_Barcode", product_Barcode.target.value)}}
     />
     </Grid>
     <Grid xs={5} item style={{margin:"5px"}}>
     {/* <TextField 
     id="outlined-basic" 
     style={{width:"100%"}}
     label="Brand" 
     variant="outlined" 
     onChange={product_Brand=>{product.setProperty("product_Brand", product_Brand.target.value)}}
     /> */}
       <FormControl variant="outlined" className={classes.formControl} style={{width:"100%"}}>
       <InputLabel ref={inputLabel}  id="demo-simple-select-outlined-label">
         Brand
       </InputLabel>
       <Select
         labelId="demo-simple-select-outlined-label"
         id="demo-simple-select-outlined"
         maxWidth="100"
         defaultValue={product.product_Brand}
         onChange={product_Brand=>{product.setProperty("product_Brand", product_Brand.target.value)}}
         labelWidth={labelWidth}
       >
         <MenuItem value="">
           <em></em>
         </MenuItem>
         <MenuItem value="Oishi">Oishi</MenuItem>
         <MenuItem value="P&G">P&G</MenuItem>
         <MenuItem value="Uniliver">Uniliver</MenuItem>
       </Select>
     </FormControl>
     </Grid>
     <Grid xs={5} item style={{margin:"5px"}}>
     {/* <TextField 
     id="outlined-basic" 
     style={{width:"100%"}}
     label="Date Received" 
     variant="outlined" 
     onChange={product_DateReceived=>{product.setProperty("product_DateReceived", product_DateReceived.target.value)}}
     /> */}
         <MuiPickersUtilsProvider utils={MomentUtils} >
    

    <KeyboardDatePicker
      margin="normal"
      id="dReceive"
      label="Date Received"
    value ={selectedDate}
      
      onChange={handleReceived}
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
    />

  
</MuiPickersUtilsProvider>
     </Grid>
     <Grid xs={5} item style={{margin:"5px"}}>
     {/* <TextField 
     id="outlined-basic" 
     style={{width:"100%"}}
     label="Expiration Date" 
     variant="outlined"
     onChange={product_ExpirationDate=>{product.setProperty("product_ExpirationDate", product_ExpirationDate.target.value)}}
     /> */}
    
      <MuiPickersUtilsProvider utils={MomentUtils} >
    

    <KeyboardDatePicker
      margin="normal"
      id="dExpiration"
      label="Expiration Date"
  value={exselectedDate}
     
      onChange={handleExpiration}
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
    />

  
</MuiPickersUtilsProvider>
     </Grid>
     </Grid>
     


     <Typography variant="h6" style={{color:"#208769"}}> Remarks :</Typography>
     <Grid  container direction="row">
          <Grid item style={{margin:"5px"}} xs={12}>
     <TextareaAutosize  
     rowsMin={6} 
     style={{width:"100%",fontSize:"20px"}}
     defaultValue={product.product_Remarks}
     onChange={product_Remarks=>{product.setProperty("product_Remarks", product_Remarks.target.value)}}
     ></TextareaAutosize>
   
     </Grid>
   </Grid>
 
   </form>
      </div>
    );
  }
  


  render(){



return ( 
       
  <this.EditForm/>


 );

}}


export default inject("startingStore")(observer(EditForm));