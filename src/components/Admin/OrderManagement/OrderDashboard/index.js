import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Grid,Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'white',
    backgroundColor:"#FFA500",
  },
}));

export default function DashGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
   
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              <Typography>
                  Orders
              </Typography>
              <Typography variant="h5" style={{fontWeight:"bold",color:"white"}}>
                  120
              </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Typography>
                  Pending
              </Typography>
              <Typography variant="h5" style={{fontWeight:"bold",color:"white"}}>
                  100
              </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Typography>
                  Completed
              </Typography>
              <Typography variant="h5" style={{fontWeight:"bold",color:"white"}}>
                  16
              </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Typography>
                  Unfulfilled
              </Typography>
              <Typography variant="h5" style={{fontWeight:"bold",color:"white"}}>
                  4
              </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
