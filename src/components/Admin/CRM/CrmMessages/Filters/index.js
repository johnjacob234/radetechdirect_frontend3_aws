import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor:"#FAFAFA"
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function Filter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
  <Paper className={classes.paper} >
      <Grid container  direction="row"
  justify="flex-end"
  alignItems="flex-start" sm={12} >
      
        <Grid item sm={1} >
         
          <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">
          All
        </InputLabel>
        <Select
          native
    
        >
          <option value="" />
          <option value="All">All</option>
          <option value="Resolved">Resolved</option>
          <option value="Unresolved">Unresolved</option>
        </Select>
      </FormControl>
</Grid>
<Grid item sm={1.5} >
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">
          Type of Concern
        </InputLabel>
        <Select
          native
          style={{width:"180px"}}
        >
          <option value="" />
          <option value="Concern 1">Concern 1</option>
          <option value="Concern 2">Concern 2</option>
          <option value="Concern 3">Concern 3</option>
        </Select>
      </FormControl>
      </Grid>
<Grid item sm={2} >
      <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    </Grid>
    <Grid item sm={4} >
    <Paper component="form" style={{margin:"auto",height:"38px"}}>
    
    <InputBase 
    type="search"
    
     fullWidth={false} 
     style={{marginTop:"1.5px",
     width:"80%",
     marginLeft:"10px"}}
      placeholder="Search "
      inputProps={{ 'aria-label': 'search google maps' }}
    />
    <IconButton type="submit"  aria-label="search" style={{backgroundColor:"orange",borderRadius:"4px",height:"38px",float:"right"}}>
      <  SearchIcon style={{color:"white",marginTop:'-15%',float:"right"}}/>
    </IconButton>
  
  </Paper >

        </Grid>
       
      </Grid>
      </Paper>
    </div>
  );
}
