import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
// import clsx from 'clsx';
import {inject,observer} from 'mobx-react';
import { lighten,makeStyles, useTheme,withStyles } from '@material-ui/core/styles';
import {Grid,Typography,Divider,Card,CardContent,LinearProgress} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';

const BorderLinearProgress = withStyles({
    root: {
      height: 10,
      backgroundColor: lighten('#666666', 0.5),
    },
    bar: {
      borderRadius: 20,
      backgroundColor: '#666666',
    },
  })(LinearProgress);



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper:{
   backgroundColor:"#208769"
  },
  cont:{
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor:"#208769"
   },
   cont2:{
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor:"#F7A31C"
   },
   cont3:{
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  
   },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },

  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },

  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
  card:{

   color:"white",
    backgroundColor:"#208769",
    height:"200px",
  },
  card2:{

    color:"white",
    backgroundColor:"#F7A31C",
    height:"200px",
   }
}));

class AdDashboard extends Component{


//   constructor(props) {
//     super(props);
    
// }

  componentDidMount() {
    let {startingStore:{getAccounts,getProducts}}=this.props;
    // setTimeout(() => {
      getProducts();
      getAccounts();
     
    // }, 1000);
     
    
    
  }



  state = {}
render(){
  function AdminDashboard() {
  const classes = useStyles();
  // const theme = useTheme();
  // const [open, setOpen] = React.useState(false);


  return (
<div style={{display:"flex"}}>
      <main >
        <div  />

      <Grid container direction="row">
        <Typography variant="h5" >
           Dashboard
        </Typography>
        
        </Grid>
        <Divider style ={{marginBottom:"5px"}}/>
        <div className={classes.root}>
      <Grid container spacing={3}>
   
        <Grid item xs={3}>

        <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}  gutterBottom style={{float:"right"}}>
          Sales
        </Typography>
        <Typography variant="h5"  style={{textAlign:"left"}} >
       <AttachMoneyIcon style={{fontSize:"3.5em",color:"white"}}/>
      <span style={{textAlign:"right",color:"white"}}> &#8369;50,000,000.00</span>
        </Typography>
       
        <Typography variant="body2" component="p">
      
       
          <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="primary"
        value={50}
      />
        </Typography>
     
      
        <Typography >Better than last week (50%)</Typography>
        </CardContent>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card2}>
      <CardContent>
        <Typography className={classes.title}  gutterBottom style={{float:"right"}}>
          Orders
        </Typography>
        <Typography variant="h5"  style={{textAlign:"left"}} >
       <LocalShippingOutlinedIcon style={{fontSize:"3.5em",color:"white",marginBottom:"3px"}}/></Typography>
      <span style={{textAlign:"left",color:"white",fontSize:"1.5em"}}>1000</span>
        
       
        <Typography variant="body2" component="p">
      
       
          <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="primary"
        value={50}
      />
        </Typography>
     
      
        <Typography >Better than last week (50%)</Typography>
        </CardContent>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}  gutterBottom style={{float:"right"}}>
          Active Customers
        </Typography>
        <Typography variant="h5"  style={{textAlign:"left"}} >
       <PeopleAltOutlinedIcon style={{fontSize:"3.5em",color:"white"}}/>
      <span style={{textAlign:"right",color:"white"}}> 500</span>
        </Typography>
       
        <Typography variant="body2" component="p">
      
       
          <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="primary"
        value={50}
      />
        </Typography>
     
      
        <Typography >Better than last week (50%)</Typography>
        </CardContent>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card2}>
      <CardContent>
        <Typography className={classes.title}  gutterBottom style={{float:"right"}}>
          Product Sold
        </Typography>
        <Typography variant="h5"  style={{textAlign:"left"}} >
       <CheckBoxOutlinedIcon style={{fontSize:"3.5em",color:"white"}}/>
      <span style={{textAlign:"right",color:"white"}}>  50,000</span>
        </Typography>
       
        <Typography variant="body2" component="p">
      
       
          <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="primary"
        value={50}
      />
        </Typography>
     
      
        <Typography >Better than last week (50%)</Typography>
        </CardContent>
    </Card>
        </Grid>

        <Grid item xs={9}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={6}> 
              <Typography variant="h5" style={{color :"grey"}}> Sales Statistics</Typography>
              </Grid>
              <Grid xs={6}> 
           
              </Grid>
              </Grid>
              <Divider/>
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={3}>
        <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={6}> 
              <Typography variant="h5" style={{color :"grey"}}> Top 5 Customers</Typography>
              </Grid>
          
              </Grid>
             
            </CardContent>
            <Divider/>
            <CardContent>
         
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={9}>
        <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={6}> 
              <Typography variant="h5" style={{color :"grey"}}> Sales By Product</Typography>
              </Grid>
              <Grid xs={6}> 
           
              </Grid>
              </Grid>
              <Divider/>
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={3}>
        <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={6}> 
              <Typography variant="h5" style={{color :"grey"}}>Customers in Last 24 hrs</Typography>
              </Grid>
          
              </Grid>
             
            </CardContent>
            <Divider/>
            <CardContent>
         
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={9}>
        <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={6}> 
              <Typography variant="h5" style={{color :"grey"}}> Sales By Brand</Typography>
              </Grid>
              <Grid xs={6}> 
           
              </Grid>
              </Grid>
              <Divider/>
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={3}>
        <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={6}> 
              <Typography variant="h5" style={{color :"grey"}}> Top 5 Best Selling</Typography>
              </Grid>
          
              </Grid>
             
            </CardContent>
            <Divider/>
            <CardContent>
         
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={9}>
        <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={6}> 
              <Typography variant="h5" style={{color :"grey"}}> Customer Balance</Typography>
              </Grid>
              <Grid xs={6}> 
           
              </Grid>
              </Grid>
              <Divider/>
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={3}>
        <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={6}> 
              <Typography variant="h5" style={{color :"grey"}}> Bottom 5 Least Selling</Typography>
              </Grid>
          
              </Grid>
             
            </CardContent>
            <Divider/>
            <CardContent>
         
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={9}>
        <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={6}> 
              <Typography variant="h5" style={{color :"grey"}}>Products for Restock</Typography>
              </Grid>
              <Grid xs={6}> 
           
              </Grid>
              </Grid>
              <Divider/>
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={3}>
        <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={6}> 
              <Typography variant="h5" style={{color :"grey"}}> Top 5 Locations</Typography>
              </Grid>
          
              </Grid>
             
            </CardContent>
            <Divider/>
            <CardContent>
         
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={9}>
        <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={6}> 
              <Typography variant="h5" style={{color :"grey"}}>Products for Packing</Typography>
              </Grid>
              <Grid xs={6}> 
           
              </Grid>
              </Grid>
              <Divider/>
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={3}>
        <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={6}> 
              <Typography variant="h5" style={{color :"grey"}}> Deliver Activities</Typography>
              </Grid>
          
              </Grid>
             
            </CardContent>
            <Divider/>
            <CardContent>
         
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={9}>
        <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={6}> 
              <Typography variant="h5" style={{color :"grey"}}>Products for Transfer</Typography>
              </Grid>
              <Grid xs={6}> 
           
              </Grid>
              </Grid>
              <Divider/>
            </CardContent>

          </Card>
        </Grid>
      </Grid>
    </div>
        
       
      </main>
      </div>
  );
}
return ( 
       
  <AdminDashboard/>


 );

}
}
export default withRouter(inject("startingStore")(observer(AdDashboard)));





