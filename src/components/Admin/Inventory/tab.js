import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {inject,observer} from 'mobx-react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './../theme'

import EnhancedTable from './table'
import ExpiringTable from './table/expiring'
import { Grid,Paper,InputBase,IconButton } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search'
import RestockTable from './Restock/table';
import Dropdown from './table/dropsample.js'
import FilterGrid from './Filter'





 function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor:"#FAFAFA"
  },
}));

export default function InventoryTab() {
  const classes = useStyles();
  // const [filter,setFilter]= React.useState("")
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  // let search=(e,filter)=>{
  //   setFilter(e.target.value)
  //   console.log(setFilter,"filter")
  // }
  
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          style={{color:"white",backgroundColor:"#208769"}}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="All Products" {...a11yProps(0)} />
          <Tab label="Expiring" {...a11yProps(1)} />
          <Tab label="Restock" {...a11yProps(2)} />
        </Tabs>
      </AppBar> 
      </ThemeProvider>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
      <Paper className={classes.paper} style={{marginBottom:"10px"}}>
        <Grid
  container
  sm={12}
  direction="row"
  justify="flex-end"
  alignItems="flex-end"
  
>
       
          <Grid item  >
          <FormControl variant="outlined" className={classes.formControl} style={{marginRight:"5px",backgroundColor:"white"}}>
        <InputLabel  htmlFor="outlined-age-native-simple" >
          Category
        </InputLabel>
        <Select
          native
        
         
        
        >
          <option value="" />
          <option value="Category1">Category 1</option>
          <option value="Category2">Category 2</option>
          <option value="Category3">Category 3</option>
        </Select>
      </FormControl>
      </Grid>
<Grid item>
            <FormControl variant="outlined" className={classes.formControl} style={{marginRight:"5px",backgroundColor:"white"}}>
        <InputLabel  htmlFor="outlined-age-native-simple" >
          Brand
        </InputLabel>
        <Select
          native
        
         
        
        >
          <option value="" />
          <option value="Brand1">Brand 1</option>
          <option value="Brand2">Brand 2</option>
          <option value="Brand3">Brand 3</option>
        </Select>
      </FormControl>
</Grid>
<Grid sm={4} > 
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

      </Grid>
      </Grid>
      </Paper >
      <Grid item sm={12}>
          <EnhancedTable/>
          </Grid>
          
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Dropdown/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Grid container direction="row" sm={12}>
            <Grid item xs={12}>
              <FilterGrid/>
            </Grid>
            <Grid item xs={12}>
        <RestockTable/>
        </Grid>
        </Grid>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

