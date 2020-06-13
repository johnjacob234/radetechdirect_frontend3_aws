import React,{Component} from 'react';
import {inject,observer} from 'mobx-react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RegForm from './Form.js';
const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
    backgroundColor:"#208769"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    fontWeight:"bold",
    color:"white"

  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});





class addCustomers extends Component {
  state={}
  render (){
    const handleOk = () => {
      let {startingStore:{addAccount}}=this.props;
         addAccount();
      this.setState({ loading: true });
  
      setTimeout(() => {
        this.setState({ loading: false, visible: false });
      }, 3000);
    };

  


function RegisterCustomer() {


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
      <Button variant="outlined" color="primary" onClick={handleClickOpen} >
       < AddCircleOutlineIcon /> <span style={{marginLeft:"5px"}}> Add Account</span>
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton style={{backgroundColor:"#1E7A60"}} edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Register Customer
            </Typography>
            <Button style={{backgroundColor:"#1E7A60"}} autoFocus color="inherit"  onClick={()=> {handleOk()}}>
              Submit
            </Button>
          </Toolbar>
        </AppBar>





        <List >
          <RegForm></RegForm>
        </List>
      </Dialog>
    </div>
  );
}
return ( 
       
  <RegisterCustomer/>


 );
}}
export default inject("startingStore")(observer(addCustomers));