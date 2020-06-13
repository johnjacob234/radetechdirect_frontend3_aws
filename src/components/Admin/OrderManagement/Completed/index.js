import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CompletedTable from './Table/index.js'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CompletedPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
    
        <Grid item xs={6}>
         
              <Typography style={{textAlign:"left"}}>
              <span style={{}}> Reference # :</span> 
                <TextField
        
          id="outlined-size-small"
         
          variant="outlined"
          size="small"
        />
              </Typography>
          
        </Grid>
        <Grid item xs={6}>
       
              <Typography style={{textAlign:"left"}}>
              <span style={{}}> Payment Method :</span> 
                <TextField
        
          id="outlined-size-small"
         
          variant="outlined"
          size="small"
        />
              </Typography >

              <Typography style={{textAlign:"left",marginTop:"10px"}}>
              <span style={{}}> Customer :</span> 
                <TextField
        
          id="outlined-size-small"
         
          variant="outlined"
          size="small"
        />
              </Typography>
        
        </Grid>
        <Grid item xs={12}>

              <CompletedTable/>
            </Grid>
      </Grid>
    </div>
  );
}