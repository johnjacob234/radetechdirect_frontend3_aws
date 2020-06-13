import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button,Dialog,AppBar,Toolbar,IconButton,Typography,Slide} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import RestockTable from './table.js'



const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ReStock() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{margin:"8px"}}>
      < AddCircleOutlineOutlinedIcon /> <span style={{marginLeft:"5px"}}> Restock</span>
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar} style={{backgroundColor:"#208769"}}>
          <Toolbar>
            <IconButton style={{backgroundColor:"#1E7A60"}} edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title} style={{color:"white"}}>
              Restock
            </Typography>
            <Button style={{backgroundColor:"#1E7A60"}} autoFocus color="inherit" onClick={handleClose}>
              Done
            </Button>
          </Toolbar>
        </AppBar>
        
     <RestockTable/>
  
      </Dialog>
    </div>
  );
}
