import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import SelectFilter from './Filter'
import StaffTable from './Table';
import {inject,observer} from 'mobx-react'

class StaffIndex extends React.Component {
  

  componentDidMount(){
    let {startingStore:{getAccounts}}=this.props;

    getAccounts();
  }
  render() { 


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

 function StaffGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Grid container direction="row" justify="flex-start" alignItems="flex-start">
              <Grid item xs={6}>
            <SelectFilter style={{position:"absolute",right:"left"}}/>
            </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><StaffTable/></Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}

return ( 
  <StaffGrid/>
 );
}
}

export default inject("startingStore")(observer(StaffIndex));
