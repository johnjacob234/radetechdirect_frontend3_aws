import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import AutorenewIcon from '@material-ui/icons/Autorenew';
import {inject,observer} from 'mobx-react'
class Change extends React.Component {
    state = {  }
    render() { 
 

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const changecode =()=>{
  let getId = JSON.parse(sessionStorage.getItem('userData'))
  let {startingStore:{addToken,token}}=this.props;
  token.setProperty("distributor_ID",getId.distributor_ID)
  token.setProperty("distributor_warehouseName",getId.distributor_warehouseName)
  // deleteToken();
  addToken();
}





 function ChangeButton() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<AutorenewIcon />}
        onClick={()=>changecode()}
      >
        New Access Code
      </Button>

    </div>
  );
}


return ( 
    <ChangeButton/>
 );
}
}

export default inject("startingStore")(observer(Change));
