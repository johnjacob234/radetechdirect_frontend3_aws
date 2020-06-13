import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import ManagersTable from './ManagerTable'

import { Typography } from '@material-ui/core';
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

export default function AdminGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
    


        <Grid item sm={12}>
     <Typography variant="h5">Managers</Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><ManagersTable/></Paper>
        </Grid>
        


      </Grid>
    </div>
  );
}
