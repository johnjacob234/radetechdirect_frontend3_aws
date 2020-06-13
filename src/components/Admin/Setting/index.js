import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AccessCode from './AccessCode'
import ChangeButton from './changeCode'
import {inject,observer} from 'mobx-react'
import {Typography,Divider} from '@material-ui/core/'
class setting extends React.Component {
    state = {  }


    componentWillMount(){
      let {startingStore:{getToken}}=this.props;

      getToken();
    }

    render() { 


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:"70px",
    marginLeft:"10px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
 function SettingGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

<Typography variant="h4">
Setting
</Typography>
<Divider style={{marginTop:"10px",marginBottom:"10px"}}/>
      <Grid container spacing={3} sm={12} xs={12}>

    
        <Grid item sm={12} xs={12} style={{textAlign:"right"}}>
          <Paper className={classes.paper}><ChangeButton/></Paper>
        </Grid>
        <Grid item sm={12} xs={12}>
          <Paper className={classes.paper}><AccessCode/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}


return ( 
    <SettingGrid/>
 );
}
}

export default inject("startingStore")(observer(setting));