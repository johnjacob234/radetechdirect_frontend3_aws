import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CLogTable from './table'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}> */}

          {/* <Grid sm={4} > 
      <Paper component="form" >
    
    <InputBase 
    type="search"
      // value={filter}
     fullWidth={false} 
     style={{fontSize:"20px",paddingLeft:"5px"}}
      placeholder="Search "
      // onChange={(e)=>search(filter)}
    />
    <IconButton type="submit"  aria-label="search" style={{backgroundColor:"orange",borderRadius:"4px",height:"38px",float:"right"}}>
      <  SearchIcon style={{color:"white",marginTop:'-15%',float:"right"}}/>
    </IconButton>
  
  </Paper >

      </Grid> */}

          {/* </Paper> */}
        {/* </Grid> */}
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
              <CLogTable/>
          </Paper>
        </Grid>
  

      </Grid>
    </div>
  );
}
